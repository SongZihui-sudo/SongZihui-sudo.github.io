//
//  SongZihui-sudo
//  1751122876@qq.com
//  file: registration_form.ts
//  date: 2023-6-25
//

/**
 *  注册表基本分支
 *  HKEY_CLASSES_ROOT 存储Windows可识别的文件类型的详细列表，以及相关联的程序。
 *  HKEY_CURRENT_USER 存储当前用户设置的信息。
 *  HKEY_LOCAL_MACHINE 包括安装在计算机上的硬件和软件的信息。
 *  HKEY_USERS 包含使用计算机的用户的信息。
 *  HKEY_CURRENT_CONFIG	这个分支包含计算机当前的硬件配置信息。
 */
enum registration_record_branch
{
    HKEY_CLASSES_ROOT = "HKEY_CLASSES_ROOT",
    HKEY_CURRENT_USER = "HKEY_CURRENT_USER",
    HKEY_LOCAL_MACHINE = "HKEY_LOCAL_MACHINE",
    HKEY_USERS = "HKEY_USERS",
    HKEY_CURRENT_CONFIG = "HKEY_CURRENT_CONFIG"
};

/**
 *  注册表记录类型
 *  REG_SZ  字符串
 *  REG_BINARY  二进制数
 *  REG_DWORD   双字
 *  REG_MULTI_SZ    多字符串
 *  REG_EXPAND_SZ   可扩展字符串
 */
enum registration_record_type
{
    REG_SZ = "REG_SZ",
    REG_BINARY = "REG_BINARY",
    REG_DWORD = "REG_DWORD",
    REG_MULTI_SZ = "REG_MULTI_SZ",
    REG_EXPAND_SZ = "REG_EXPAND_SZ"
};

/**
 *  注册表记录 
 *  包含：记录类型，记录键值，记录所属分支，记录指针
 */
class registration_record
{
    private mType: registration_record_type;
    private mValue: any;
    private mKey: any;
    private mNext: Map<string, registration_record> = new Map<string, registration_record>();
    private mBranch: string;

    /* 构造 */
    constructor(type: registration_record_type = registration_record_type.REG_SZ, value: any = "", key: any = "", branch: string = "")
    {
        this.mType = type;      /* 记录类型 */
        this.mValue = value;    /* 记录值 */
        this.mKey = key;        /* 记录键 */
        this.mBranch = branch;  /* 记录所属分支 */
    }

    /**
     * get_key
     * @returns 该记录的键
     */
    get_key(): any { return this.mKey; }

    /**
     * get_value
     * @returns 该记录的值
     */
    get_value(): any { return this.mValue; }

    /**
     * get_type
     * @returns 该记录的类型 
     */
    get_type(): registration_record_type { return this.mType; }

    /**
     * get_next
     * @returns 该记录的next指针 
     */
    get_next(): Map<string, registration_record> { return this.mNext; }

    /**
     * get_branch
     * @returns 该记录所属分支
     */
    get_branch(): string { return this.mBranch; }

    /**
     * set_key
     * @param key 记录的键
     */
    set_key(key: any) { this.mKey = key; }

    /**
     * set_value
     * @param value 记录的值
     */
    set_value(value: any) { this.mValue = value; }

    /**
     * set_type
     * @param type 记录类型
     */
    set_type(type: registration_record_type) { this.mType = type; }

    /**
     * set_next
     * @param next 记录的next指针
     */
    set_next(next: Map<string, registration_record>) { this.mNext = next; }

    /**
     * set_branch
     * @param branch 记录所属分支
     */
    set_branch(branch: string) { this.mBranch = branch; }
};

/**
 *  注册表
 */
class registration_form
{
    private mDict: Map<string, registration_record> = new Map<string, registration_record>;

    /* 构造 */
    constructor()
    {
        let tmp: string[] = ["HKEY_LOCAL_MACHINE/SYSTEM", "HKEY_CURRENT_USER/NTUSER.DAT", "HKEY_LOCAL_MACHINE/SAM", "HKEY_LOCAL_MACHINE/SECURITY", "HKEY_LOCAL_MACHINE/SOFTWARE", "HKEY_USERS/.DEFAULT", "HKEY_USERS/HKEY_USERS"];
        for (let index = 0; index < tmp.length; index++) 
        {
            const element = tmp[index];
            this.insert(element, new registration_record(registration_record_type.REG_SZ, "", element, element));
        }
    }

    /**
     * insert
     * @param branch 分支路径
     * @param new_record 新记录
     * 指定分支路径，如果指定则向该分支添加记录，否则添加一个分支
     */
    insert(branch: string, new_record: registration_record)
    {
        branch += '/';
        const path = branch.split('/');
        if (path[0] == "") 
        {
            return;
        }
        let pre: string = 'root';
        let tmp: Map<string, registration_record> = this.mDict;
        let last: registration_record = new registration_record();
        for (let index = 0; index < path.length; index++)
        {
            let element: string = path[index];
            if (tmp.has(element))
            {
                last = tmp.get(element)!;
                tmp = last.get_next();
            }
            else
            {
                tmp.set(element, new registration_record(registration_record_type.REG_SZ, "", element, pre));
                last = tmp.get(element)!;
                tmp = last.get_next();
            }
            pre = element;
        }
        new_record.set_branch(pre);
        last.get_next().set(new_record.get_key(), new_record);
    }

    /**
     * remove
     * @param branch
     * 删除一个元素, 如果指定了分支则向该分支删除一个元素，否则删除最后一个分支 
     */
    remove(branch: string)
    {
        branch += '/';
        const path = branch.split('/');
        if (path[0] == "") 
        {
            return;
        }
        let pre: string = 'root';
        let tmp: Map<string, registration_record> = this.mDict;
        let last: registration_record = new registration_record();
        for (let index = 0; index < path.length - 1; index++)
        {
            let element: string = path[index];
            if (tmp.has(element))
            {
                last = tmp.get(element)!;
                tmp = last.get_next();
            }
            else
            {
                console.log("Error! Not found: %s", element);
                return -1;
            }
            pre = element;
        }
        last.get_next().delete(path[path.length - 1]);
    }

    /**
     * get
     * @param branch 分支路径
     * @returns 获取指定的记录
     */
    get(branch: string)
    {
        branch += '/';
        const path = branch.split('/');
        if (path[0] == "") 
        {
            return;
        }
        let pre: string = 'root';
        let tmp: Map<string, registration_record> = this.mDict;
        let last: registration_record = new registration_record();
        for (let index = 0; index < path.length; index++)
        {
            let element: string = path[index];
            if (tmp.has(element))
            {
                last = tmp.get(element)!;
                tmp = last.get_next();
            }
            else
            {
                console.log("Error! Not found: %s", element);
                return -1;
            }
            pre = element;
        }
        return last;
    }

    /**
     * replace
     * @param branch 分支路径
     * @param new_record 新分支
     * 修改指定记录
     */
    replace(branch: string, new_record: registration_record)
    {
        branch += '/';
        const path = branch.split('/');
        if (path[0] == "") 
        {
            return;
        }
        let pre: string = 'root';
        let tmp: Map<string, registration_record> = this.mDict;
        let last: registration_record = new registration_record();
        for (let index = 0; index < path.length; index++)
        {
            let element: string = path[index];
            if (tmp.has(element))
            {
                last = tmp.get(element)!;
                tmp = last.get_next();
            }
            else
            {
                console.log("Error! Not found: %s", element);
                return -1;
            }
            pre = element;
        }
        new_record.set_branch(pre);
        last = new_record;
    }
};

let global_registration_form: registration_form = new registration_form();

export { global_registration_form };

export { registration_form, registration_record, registration_record_type, registration_record_branch };