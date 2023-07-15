import { ISodaInfoType } from '../components/CenterInfo/CenterInfoType';
import instance from './core';

export const getSodaInfo = async () => {
  try {
    const response = await instance.get<ISodaInfoType>('/centerinfo/sodaInfo');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
