export interface ISodaSubBoxType {
  name: string;
  children: React.ReactNode;
  img: string;
}

export interface IWayToComeResponseType {
  title: string;
  wayToComeName: string;
  wayToComeImg: string;
  wayToComeFirstLocation: string;
  wayToComesecondLocation: string;
  callName: string;
  callImg: string;
  callContent: string;
  infomationUseName: string;
  infomationImg: string;
  reservationImg: string;
  reservationName: string;
  internetImg: string;
  internetName: string;
  parkinginfoName: string;
  parkinginfoContent: string;
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

export interface INavListItemMenuType {
  url: string;
  listName: string;
  listItem: Array<string>;
}
