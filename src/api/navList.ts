import { INavListDataType } from '../components/NavList/NavListType';
import instance from './core';

export const getNavList = async () => {
  try {
    const response = await instance.get<Array<INavListDataType>>('/navList');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
