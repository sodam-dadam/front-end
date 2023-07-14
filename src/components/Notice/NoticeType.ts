export interface INoticeType {
  totalDataCount: number;
  totalPageCount: number;
  noticePost: INoticeDetailDataType[];
}

export interface INoticeDetailDataType {
  noticeId: number;
  number: number;
  title: string;
  writer: string;
  noticeDate: string;
  view: number;
}
