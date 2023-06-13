import { useQuery } from 'react-query';
import { getDetailJob } from '../services';
import { JobDetailResponse } from '../types';

export const useJobDetail = (initialData: JobDetailResponse) =>
  useQuery('jobDetail', () => getDetailJob(initialData.data.id), {
    refetchOnMount: true,
    initialData: initialData,
  });

export default useJobDetail;
