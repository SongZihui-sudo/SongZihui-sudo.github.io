//
//  SongZihui-sudo
//  1751122876@qq.com
//  file: mouse.ts
//  date: 2023-6-25
//

import { device, device_buffer, device_type, device_priority } from "./device";
import RightMenu from '@right-menu/core';
import { registration_form, registration_record, registration_record_branch, registration_record_type, global_registration_form } from "./registration_form";

class mouse extends device
{
    private mBuffer: device_buffer;

    /* 构造函数 */
    constructor(name: string, type: device_type, priority: device_priority)
    {
        super(name, type, priority);
        this.mBuffer = new device_buffer();
    }

    /**
    *  set
    *  配置当前设备的回调函数进行事件处理
    */
    set(): void
    {
        super.mHandles.set("mousedown", this.right_menu);
        document.addEventListener("mousedown", this.right_menu);
    }

    /**
     * cls
     * 删除该设备的回调函数
     */
    cls(name: string): void
    {
        if (name == "") 
        {
            for (let index = 0; index < super.mHandles.size; index++)
            {
                document.removeEventListener(super.mHandles.keys[index], super.mHandles.values[index]);
            }
            return;
        }
        if (!super.mHandles.has(name)) 
        {
            console.log("the key does not exist!");
            return;
        }
        document.removeEventListener(name, super.mHandles[name]);
    }

    /**
     * 设备鼠标右键菜单
     * @param table 菜单项
     */
    right_menu(event)
    {
        if (event.button == 2) 
        {
            console.log("right click");
            let options: any = [{}];
            new RightMenu({
                el: '.demo1',
                theme: 'win10'
            }, options);
        }
    }
};

export { mouse };