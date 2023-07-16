export interface IMainCardType {
  img: string;
  title: string;
  content: string;
  name: string;
}

export interface IMainBoxType {
  data: IMainCardType[];
  name: string;
}

export interface INavlistType {
  url: string;
  listName: string;
  listItem: Array<string>;
  listImg: string;
  listImgAlt: string;
}

export interface IMainResponseType {
  consulting: IMainCardType[];
  education: IMainCardType[];
  navlist: INavlistType[];
}
