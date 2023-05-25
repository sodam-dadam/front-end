export interface ICenterInfoListDataType {
  listName: string;
  listItem: Array<string>;
  listImg: string;
  listImgAlt: string;
}

export interface ISodaInfoType {
  title: string;
  headText: string;
  img: string;
  alt: string;
  content: Array<string>;
  detailImg: Array<string>;
}

export interface IReservationInfoType {
  title: string;
  reservation: Array<IReservation>;
  counselingTime: Array<ICounselingTimeType>;
}
export interface ICounselingTimeType {
  name: string;
  time: string;
}

export interface IReservation {
  img: string;
  step: number;
  stepName: string;
  stepInfo: string;
}

export interface IDirectionInfoType {
  title: string;
}

export interface INavListItemMenuType {
  listName: string;
  listItem: Array<string>;
}
