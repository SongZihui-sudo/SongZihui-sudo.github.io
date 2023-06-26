//
//  SongZihui-sudo
//  1751122876@qq.com
//  file: device_manager.ts
//  date: 2023-6-25
//

import { device } from "./device";

class device_manager 
{
    mDevices: Map<string, device>;
    constructor(devices: Array<device>) 
    {
        for (let index = 0; index < devices.length; index++)
        {
            const element = devices[index];
            this.mDevices.set(element.get_name(), element);
            element.set();
        }
    }

    /**
     * register
     * @param new_device 新设备
     * 注册一个新设备
     */
    register(new_device: device)
    {
        if (!this.mDevices.has(new_device.get_name()))
        {
            console.log("Device already exists!");
            return -1;
        }
        this.mDevices.set(new_device.get_name(), new_device);
        new_device.set();
    }

    /**
     * remove
     * @param name 设备名
     * 删除一个设备
     */
    remove(name: string)
    {
        if (!this.mDevices.has(name)) 
        {
            console.log("Device does not exist!");
            return -1;
        }
        this.mDevices[name].cls("");
        this.mDevices.delete(name);
    }

    /**
     * get
     * @param name 设备名
     * 获取一个设备
     */
    get(name: string)
    {
        if (!this.mDevices.has(name)) 
        {
            console.log("Device does not exist!");
            return -1;
        }
        return this.mDevices[name];
    }

    /**
     * replace
     * @param name 设备名
     * @param new_device 新设备对象
     * 替换指定名称的设备
     */
    replace(name: string, new_device: device)
    {
        if (!this.mDevices.has(name)) 
        {
            console.log("Device does not exist!");
            return -1;
        }
        this.mDevices[name].set();
        this.mDevices[name] = device;
    }
}

export { device_manager };