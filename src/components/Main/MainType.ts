export interface IMainCardType {
  img: string;
  title: string;
  content: string;
}

export interface IMainBoxType {
  data: IMainCardType[];
  name: string;
}

export interface IMainResponseType {
  consulting: IMainCardType[];
  education: IMainCardType[];
}
