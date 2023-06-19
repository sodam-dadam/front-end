import { ICounselingType } from '../components/Counseling/CounselingType';
import instance from './core';

export const getWorkShop = async () => {
  try {
    const response = await instance.get<ICounselingType>('/education/workShop');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
