export interface IRecords {
  records: IRecord[];
}

// 定义记录的接口
export interface IRecord {
  id: number;
  number: string; // 排队号码
  status: number; // 状态信息（如 "排队中", "已完成", quxiao 等---0 1 2）
  createdTime: string; // 取号时间，格式：YYYY-MM-DD HH:mm:ss
  finishedTime: string | null; // 取号时间，格式：YYYY-MM-DD HH:mm:ss
  userName: string;
  userId: number; //所属用户
}
