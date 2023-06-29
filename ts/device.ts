//
//  SongZihui-sudo
//  1751122876@qq.com
//  file: device.ts
//  date: 2023-6-25
//

import { registration_record_type } from "./registration_form";

/**
 *  设备优先级
 *  USER 用户级
 *  INTERLAYER 中间层
 *  CORE 内核层
 */
enum device_priority
{
    USER = 1,
    INTERLAYER = 2,
    CORE = 3
};

/**
 *  设备类型
 *  SYSTEM 系统设备
 *  USER    用户设备
 *  STORAGE 存储设备
 *  INPUT   输入设备
 *  OUTPUT  输出设备
 */
enum device_type
{
    SYSTEM = "SYSTEM",
    USER = "USER",
    STORAGE = "STORAGE",
    INPUT = "INPUT",
    OUTPUT = "OUTPUT"
};

/**
 *  设备缓冲区
 */
class device_buffer
{
    private mBuffer: Array<any> = [];

    constructor() { }

    /**
     * write
     * @param data 添加的数据
     * 写入数据
     */
    write(data: any): void
    {
        this.mBuffer.push(data);
    }

    /**
     * read
     * @returns 最新的数据
     * 读取队列头的数据
     */
    read(): device
    {
        let data: any = this.mBuffer[0];
        this.mBuffer.pop();
        return data;
    }

    /**
     * clear
     * 清空缓冲区
     */
    clear(): void
    {
        this.mBuffer.splice(0, this.mBuffer.length);
    }
};

/**
 *  设备对象
 */
class device
{
    private mPriority: device_priority; /* 优先级 */
    private mName: string;  /* 设备名 */
    private mType: device_type; /* 设备类型 */

    /**
     * toString
     * @returns 字符串
     */
    toString(): string
    {
        return this.mName + "/" + device_type[this.mType] + "/" + device_priority[this.mPriority];
    }

    /**
     * get_name
     * @returns 设备名
     */
    get_name(): string { return this.mName; }

    /**
     * get_type
     * @returns type 设备类型
     */
    get_type(): device_type { return this.mType; }

    /**
     * get_priority
     * @returns 设备优先级
     */
    get_priority(): device_priority { return this.mPriority; }

    /**
     * set_name
     * @param name 设备名
     */
    set_name(name: string): void { this.mName = name; }

    /**
     * set_type
     * @param type 设备类型
     */
    set_type(type: device_type): void { this.mType = type; }

    /**
     * set_priority
     * @param priority 设备优先级
     */
    set_priority(priority: device_priority): void { this.mPriority = priority; }

    /* 构造函数 */
    constructor(name: string, type: device_type, priority: device_priority) 
    {
        this.mName = name;
        this.mType = type;
        this.mPriority = priority;
    }

    /**
     *  set
     *  配置当前设备的回调函数进行事件处理
     */
    set(): void { };

    /**
     * cls
     * 删除该设备的回调函数
     */
    cls(name: string): void { };

}

export { device, device_buffer, device_type, device_priority };