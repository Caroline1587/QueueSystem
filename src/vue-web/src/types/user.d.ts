export interface ILoginInfo {
  username: string;
  password: string;
}

export interface IUserInfo {
  id: string;
  name: string;
}

export interface IAuth {
  userInfo: IUserInfo;
  token: stirng;
}

// 定义学生的接口类型
export interface IStudent {
  id: string;
  password: string;
  number: string;
  time: string;
  status: number;
}
// export type ISatus='waiting' | 'called' | 'cancelled'
// export enum ISatus{Waiting=0,Called=1,Cancelled=2}
