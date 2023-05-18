import { IMainResponseType } from './../components/Main/MainType';
import instance from './core';

export const getMainData = async () => {
  try {
    const response = await instance.get<IMainResponseType>('/');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
