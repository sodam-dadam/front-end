export interface ICounselorInfoType {
  infoText: string;
  lastText: string;
  career: Array<ICareerType>;
}

export interface ICareerType {
  img: string;
  name: string;
  role: string;
  careerList: Array<string>;
}
