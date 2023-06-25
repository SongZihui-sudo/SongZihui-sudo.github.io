//
//  SongZihui-sudo
//  1751122876@qq.com
//  file: device.ts
//  date: 2023-6-25
//

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
    mBuffer: Array<any>;

    constructor() {}

    /**
     * write
     * @param data 添加的数据
     * 写入数据
     */
    write(data: any)
    {
        this.mBuffer.push(data);
    }

    /**
     * read
     * @returns 最新的数据
     * 读取队列头的数据
     */
    read()
    {
        let data: any = this.mBuffer[0];
        this.mBuffer.pop();
        return data;
    }

    /**
     * clear
     * 清空缓冲区
     */
    clear()
    {
        this.mBuffer.splice(0, this.mBuffer.length);
    }
};

/**
 *  设备对象
 */
class device
{
    mPriority: device_priority; /* 优先级 */
    mName: string;  /* 设备名 */
    mType: device_type; /* 设备类型 */

    /* 构造函数 */
    constructor(name: string, type: device_type, priority: device_priority) 
    {
        this.mName = name;
        this.mType = type;
        this.mPriority = priority;
    }

}

export { device, device_buffer, device_type, device_priority };