import { useQuery } from '@tanstack/react-query';
import { getNotice } from '../../../api/notice';
import toast from 'react-hot-toast';

export function useGetNoticeQuery({ pageNumber }: { pageNumber: number }) {
  return useQuery(['notice', 'whole', pageNumber], () => getNotice(pageNumber), {
    retry: false,
    staleTime: 1000 * 20,
    onError: () => {
      toast.error('공지 조회에 실패했습니다.');
    },
  });
}
