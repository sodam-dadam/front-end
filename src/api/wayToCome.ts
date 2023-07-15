import { IWayToComeResponseType } from '../components/CenterInfo/CenterInfoType';
import instance from './core';

export const getWayToCome = async () => {
  try {
    const response = await instance.get<IWayToComeResponseType>('/centerinfo/waytocome');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
