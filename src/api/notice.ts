import { INoticeType } from '../components/Notice/NoticeType';
import instance from './core';

export const getNotice = async (pagenumber: number) => {
  try {
    const response = await instance.get<INoticeType>('/noticeposts/search', {
      params: {
        page: pagenumber,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
