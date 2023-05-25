export interface IHeaderType {
  headerList: Array<IListType>;
}

export interface IListType {
  name: string;
  list: Array<string>;
  link: string;
}
