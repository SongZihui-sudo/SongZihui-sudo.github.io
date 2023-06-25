//
//  SongZihui-sudo
//  1751122876@qq.com
//  file: mouse.ts
//  date: 2023-6-25
//

import { device, device_buffer, device_type, device_priority } from "./device";
import RightMenu from '@right-menu/core';

class mouse extends device
{
    mBuffer: device_buffer;

    /* 构造函数 */
    constructor(name: string, type: device_type, priority: device_priority)
    {
        super(name, type, priority);
        this.mBuffer = new device_buffer();
    }

    /**
     * 设备鼠标右键菜单
     * @param table 菜单项
     */
    right_menu(table: Array<string>)
    {
        const options: any = [{ type: 'li', text: '测试111' }];

        new RightMenu({
            el: '.demo1',
            theme: 'win10'
        }, options);
    }

    /**
     *  鼠标点击事件
     */
    click(right_callback: Function, left_callback: Function, roller_callback: Function)
    {
        document.addEventListener("mousedown", (e) =>
        {
            if (e.button == 1) 
            {
                console.log("Roller click");
                roller_callback();
            }
            else if (e.button == 2)
            {
                console.log("right click");
                right_callback();
            }
            else
            {
                console.log("left click");
                left_callback();
            }
            e.preventDefault();
        });
    }
};

export { mouse };