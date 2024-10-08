"use strict";

class Renderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.c = this.prepareCanvas();
    }

    prepareCanvas() {
        const dpr = window.devicePixelRatio || 1;
        this.canvas.width = this.canvas.offsetWidth * dpr;
        this.canvas.height = this.canvas.offsetHeight * dpr;
        let context = this.canvas.getContext("2d");
        context.scale(dpr, dpr);
        return context;
    }

    paint(design) {
        this.c.fillStyle = 'red';
        this.c.fillRect(0, 0, this.canvas.offsetWidth, this.canvas.offsetHeight);
    }
}

class CenterCanvasRenderer extends Renderer {
    drawSurface(surf, offset) {
        const points = surf.generateVisualOutlinePointList();
        if (points.length == 0) { return; }
        this.c.beginPath();
        this.c.moveTo(points[0][0]+0+offset, points[0][1]+0);
        for (let point of points) {
            this.c.lineTo(point[0]+0+offset, point[1]+0);
        }
        this.c.stroke();
        return [points[0], points[points.length-1]];
    }

    paintRay(src_pt, dest_pt, color) {
        this.c.lineWidth='0.15';
        this.c.strokeStyle = color;
        this.c.beginPath();
        this.c.moveTo(src_pt[0], src_pt[1]);
        this.c.lineTo(dest_pt[0], dest_pt[1]);
        this.c.stroke();
    }

    paintRayTrace(design, system_width, beam_radius, color, input_angle) {
        let rays = design.enumerateInputRaysForBeam(input_angle, beam_radius, app.design.env_rays_per_beam, system_width);
        for (let ray of rays) {
            const obj_pt = ray[0];
            const ray_dir = ray[1];
            design.traceRayThroughSystem(obj_pt, ray_dir, {
                append_surface: Surface.createBackstop(system_width * 2),
                call_after_each_trace: (trace) => {
                    this.paintRay([trace.src_pt[2], trace.src_pt[1]], [trace.dest_pt[2], trace.dest_pt[1]], color);
                },
            });
        }
    }

    paintGeometricPointSpreadFunction(design, angle, grid_pos, additive) {
        this.c.save();
        let psf = design.traceGeometricPointSpreadFunction(angle, additive);
        const voffset = 80;
        const h = this.canvas.offsetHeight - voffset;
        const scale = Math.min(this.canvas.offsetWidth / 2, h / 2) / psf[0];
        this.c.translate((this.canvas.offsetWidth / 4 - psf[0] * scale / 2 + grid_pos[0] * this.canvas.offsetWidth / 2), (h / 4 - psf[0] * scale / 2 + grid_pos[1] * h / 2 + voffset));
        this.c.scale(scale, scale);
        for (let y = 0; y < psf[0]; y += 1) {
            for (let x = 0; x < psf[0]; x += 1) {
                const intensity = psf[1][y * psf[0] + x];
                if (intensity < 0 || intensity > 1) {
                    throw "PSF intensity out of range";
                }
                this.c.fillStyle = "rgb(0,0,0," + Math.min(1, intensity * 1) + ")";
                //this.c.beginPath();
                //this.c.arc(x*1 , y*1, 1, 0, Math.PI*2);
                //this.c.fill();
                this.c.fillRect(x, y, 1, 1);
            }
        }
        this.c.restore();
    }
    
    paint(design) {
        let bg_color = getComputedStyle(document.body).getPropertyValue("--cross-section-viewport-bg-color");
        let is_dark_mode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        this.c.fillStyle = bg_color;
        this.c.fillRect(0, 0, this.canvas.offsetWidth+10, this.canvas.offsetHeight+10);
    
        this.c.save();

        // TODO controls to configure auto-width:
        // paraxial focal length, paraxial trace, med trace, marginal trace,
        // surfaces only, optical axis crossing only, image only, minimize psf
        //let system_width = (1/design.calculateMeyerArendtSystemMatrix()[1]);
        let system_width = design.traceMarginalRayToImageDistance(10);
        let width_scale = this.canvas.offsetWidth / system_width;
        let max_surface_height = 0;
        for (let surface of design.surfaces) {
            if (surface.aperture_radius > max_surface_height) {
                max_surface_height = surface.aperture_radius;
            }
        }
        let height_scale = this.canvas.offsetHeight / (max_surface_height*2);
        let img_scale = Math.min(width_scale, height_scale);
        img_scale *= 0.85;
        this.c.scale(img_scale, img_scale);
        this.c.translate(system_width * 0.10, this.canvas.offsetHeight/2/img_scale);

        // draw surfaces
        this.c.strokeStyle = 'black';
        this.c.lineWidth='0.3';
        let t = 0;
        let last_edges = null;
        let last_surface = null;
        let i = 1;
        for (let surface of design.surfaces) {
            if (i == app.ui.selected_surface_number) {
                this.c.setLineDash([1, 0.5]);
            }
            let edges = this.drawSurface(surface, t);
            this.c.setLineDash([]);

            if (edges && last_edges && last_surface) {
                if (last_surface.material.name != 'Air' && last_surface.material.name != 'Vacuum') {
                    // draw edges
                    this.c.beginPath();
                    this.c.moveTo(last_edges[0][0]+t-last_surface.thickness, last_edges[0][1]);
                    this.c.lineTo(edges[0][0]+t, edges[0][1]);
                    this.c.moveTo(last_edges[1][0]+t-last_surface.thickness, last_edges[1][1]);
                    this.c.lineTo(edges[1][0]+t, edges[1][1]);
                    this.c.stroke();

                    // fill lens area
                    this.c.fillStyle = "rgba(255,255,255,0.1)";
                    this.c.beginPath();
                    let last_pts = last_surface.generateVisualOutlinePointList();
                    let this_pts = surface.generateVisualOutlinePointList();
                    this_pts.reverse();
                    this.c.moveTo(last_pts[0][0]+t-last_surface.thickness, last_pts[0][1]);
                    for (let pt of last_pts) {
                        this.c.lineTo(pt[0]+t-last_surface.thickness, pt[1]);
                    }
                    for (let pt of this_pts) {
                        this.c.lineTo(pt[0]+t, pt[1]);
                    }
                    this.c.closePath();
                    this.c.fill();
                }
            }
            t += surface.thickness;
            last_edges = edges;
            last_surface = surface;
            i += 1;
        }

        // draw rays
        if (design.env_fov_angle == 0) {
            this.paintRayTrace(design, system_width, app.design.env_beam_radius, 'orange', 0);
        } else {
            let angle_rad = 2 * Math.PI / 360 * design.env_fov_angle;
            this.paintRayTrace(design, system_width, app.design.env_beam_radius, (is_dark_mode ? '' : 'dark') + 'magenta', 0);
            this.paintRayTrace(design, system_width, app.design.env_beam_radius, 'gold', angle_rad * 0.5);
            this.paintRayTrace(design, system_width, app.design.env_beam_radius, 'orangered', angle_rad);
            if (design.env_sym_beams) {
                this.paintRayTrace(design, system_width, app.design.env_beam_radius, 'green', -angle_rad * 0.5);
                this.paintRayTrace(design, system_width, app.design.env_beam_radius, 'salmon', -angle_rad);
            }
        }

        // draw points at optical axis crossings
        if (app.design.env_marginal_vs_paraxial_focus_dots) {
            const image_distance_paraxial = app.design.traceMarginalRayToImageDistance(10);
            const image_distance_mid = app.design.traceMarginalRayToImageDistance(2);
            const image_distance_marginal = app.design.traceMarginalRayToImageDistance(1);
            this.c.fillStyle = 'black';
            this.c.beginPath();
            this.c.arc(image_distance_paraxial, 0, 0.3, 0, 2*Math.PI);
            this.c.fill();
            this.c.beginPath();
            this.c.arc(image_distance_marginal, 0, 0.3, 0, 2*Math.PI);
            this.c.fill();
            this.c.beginPath();
            this.c.arc(image_distance_mid, 0, 0.3, 0, 2*Math.PI);
            this.c.fill();
        }
        
        // draw image plane
        let user_image_distance = 0;
        for (let surface of design.surfaces) {
            user_image_distance += surface.thickness;
        }
        this.c.strokeStyle = "black";
        this.c.lineWidth = "0.1";
        this.c.beginPath();
        this.c.moveTo(user_image_distance, -design.env_image_radius);
        this.c.lineTo(user_image_distance, design.env_image_radius);
        this.c.stroke();

        // 计算焦距
        let matrix = design.calculateMeyerArendtSystemMatrix();
        let focal_length = 1 / matrix[1];
        let fnumber = focal_length/(design.surfaces[0].aperture_radius*2);
        focal_length = Math.round(focal_length * 100) / 100;

        // draw optical_center
        if (app.design.env_optical_center_dots) {
            this.c.strokeStyle = "yellow";
            this.c.lineWidth = "0.5";
            this.c.beginPath();
            this.c.moveTo(user_image_distance - focal_length, -design.env_image_radius);
            this.c.lineTo(user_image_distance - focal_length, design.env_image_radius);
            this.c.stroke();
        }

        // draw flange
        this.c.strokeStyle = "red";
        this.c.lineWidth = "0.5";
        this.c.beginPath();
        this.c.moveTo(user_image_distance - app.design.env_flange_dist, -design.env_image_radius * 0.8);
        this.c.lineTo(user_image_distance - app.design.env_flange_dist, design.env_image_radius * 0.8);
        this.c.stroke();

        this.c.restore();

        // write system focal length
        fnumber = Math.round(fnumber * 100) / 100;
        let na_limited = design.calculateNumericalAperture(true);
        let na_free = design.calculateNumericalAperture(false);
        this.c.font = '24px sans-serif';
        this.c.fillStyle = 'black';
        let caption = "f = " + focal_length + " mm";
        if (focal_length > 0) {
            caption += ", \u0192/" + Math.round(1/(2*na_limited) * 100) / 100;
            caption += " (f/D = " + fnumber + ")";
            caption += ", NA = " + Math.round(na_free * 100) / 100;
        }
        this.c.fillText(caption, 10, 25);

        // TODO different color for paraxial/mid/marginal rays?
        if (app.ui.center_pane_view_mode == 'geo_psf') {
            this.c.fillStyle = bg_color;
            this.c.fillRect(0, 0, this.canvas.offsetWidth+10, this.canvas.offsetHeight+10);
            this.c.save();
            this.paintGeometricPointSpreadFunction(design, 0, [0, 1]);
            this.paintGeometricPointSpreadFunction(design, 0, [1, 1], true);
            this.paintGeometricPointSpreadFunction(design, design.env_fov_angle / 2, [1, 0]);
            this.paintGeometricPointSpreadFunction(design, design.env_fov_angle, [0, 0]);
            this.c.restore();
            this.c.font = '24px sans-serif';
            this.c.fillStyle = 'black';
            this.c.fillText("几何点扩散函数", 10, 25);
            this.c.font = '14px sans-serif';
            this.c.fillText("平行光束，0.2 单位图像平面视口 - 全场角光斑、半场角光斑、中心光斑、中心 PSF)", 10, 25 + 24);
        }

        // TODO clean up layout and scaling
        if (app.ui.center_pane_view_mode == 'opl') {
            this.c.fillStyle = bg_color;
            this.c.fillRect(0, 0, this.canvas.offsetWidth+10, this.canvas.offsetHeight+10);
            this.c.save();
            this.c.translate(0, this.canvas.offsetHeight/2);
            this.c.scale(1,-1);
            app.design.plotOpticalPathLengthBeforeImagePlane(undefined, false);
            this.c.scale(1,-1);
            this.c.translate(0, -50);
            app.design.plotOpticalPathLengthBeforeImagePlane(undefined, true);
            this.c.restore();
            this.c.font = '24px sans-serif';
            this.c.fillStyle = 'black';
            this.c.fillText("光路长度", 10, 25);
            this.c.font = '14px sans-serif';
            this.c.fillText("顶部：相对于中心的光路长度", 10, 25 + 24);
            this.c.fillText("底部：单色中心波长的光学相位", 10, 25 + 24 + 14);
        }

        if (app.ui.center_pane_view_mode == 'chromatic_aberration') {
            let result = app.design.calculateChromaticAberration();

            this.c.fillStyle = bg_color;
            this.c.fillRect(0, 0, this.canvas.offsetWidth+10, this.canvas.offsetHeight+10);
            this.c.font = '24px sans-serif';
            this.c.fillStyle = 'black';

            if (result) {
                this.c.fillText("中心波长光轴交叉的轴向 CA 偏移： ", 10, 25);
                let h = 25 + 24;
                let names = [app.design.short_wavelength, app.design.center_wavelength, app.design.long_wavelength];
                this.c.font = '24px monospace';
                for (let i = 0; i < 3; i += 1) {
                    this.c.fillText((result[0][i] >= 0 ? " " : "") + result[0][i].toFixed(2) + " at " + names[i].toFixed(2) + " \u03BCm", 10, h);
                    h += 24;
                }
                h += 10;
                this.c.font = '24px sans-serif';
                this.c.fillText("图像平面短波长的横向 CA 偏移：", 10, h);
                h += 24;
                this.c.font = '24px monospace';
                for (let i = 0; i < 3; i += 1) {
                    this.c.fillText((result[1][i] >= 0 ? " " : "") + result[1][i].toFixed(2) + " at " + names[i].toFixed(2) + " \u03BCm", 10, h);
                    h += 24;
                }
            } else {
                this.c.fillText("光束半径超出范围", 10, 25);
            }
        }

        if (app.ui.center_pane_view_mode == "ray_aberration") {
            this.c.fillStyle = bg_color;
            this.c.fillRect(0, 0, this.canvas.offsetWidth+10, this.canvas.offsetHeight+10);
            const vw = this.canvas.offsetWidth - 20;
            const vh = this.canvas.offsetHeight - 20;
            this.paintRayAberrationGraph(design, 0, 10, 0, vw / 2, vh / 2);
            this.paintRayAberrationGraph(design, design.env_fov_angle / 2, 10 + vw / 2, 0, vw / 2, vh / 2);
            this.paintRayAberrationGraph(design, design.env_fov_angle, 10, 0 + vh / 2, vw / 2, vh / 2);
        }
    }

    paintRayAberrationGraph(design, angle, x, y, w, h) {
        let result = design.calculateRayAberrations(angle * (2 * Math.PI / 360));

        this.c.lineWidth = 1;
        this.c.strokeStyle = 'black';
        this.c.strokeRect(x, y, w, h);
        x += 2;
        y += 2;
        w -= 4;
        h -= 4;

        this.c.fillStyle = 'black';
        let max_aperture = 0;
        let max_image = 0;
        let min_image = Infinity;
        for (let aperture_and_image of result) {
            min_image = Math.min(min_image, aperture_and_image[1]);
        }
        for (let aperture_and_image of result) {
            aperture_and_image[1] -= min_image;
        }
        for (let aperture_and_image of result) {
            max_aperture = Math.max(max_aperture, Math.abs(aperture_and_image[0]));
            max_image = Math.max(max_image, aperture_and_image[1]);
        }
        for (let aperture_and_image of result) {
            this.c.beginPath();
            const sc_x = w / (max_aperture*2);
            const pt_x = x + aperture_and_image[0] * sc_x + w / 2;
            const sc_y = h / max_image;
            const pt_y = y + aperture_and_image[1] * sc_y + h / 2 - (max_image * sc_y)/2;
            this.c.arc(pt_x, pt_y, 2, 0, Math.PI*2);
            this.c.fill();
        }

        this.c.font = '26px monospace';
        this.c.fillStyle = 'black';
        let measure_aperture = this.c.measureText(angle + "\u00B0");
        this.c.lineWidth = 5;
        this.c.fillText(angle + "\u00B0", x + w/2 - measure_aperture.width/2, y + h - measure_aperture.actualBoundingBoxAscent/2);
    }
}
