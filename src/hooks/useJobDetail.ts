import { useQuery } from 'react-query';
import { getDetailJob } from '../services';

export const useJobDetail = (jdId: number) =>
  useQuery('jobList', () => getDetailJob(jdId), {
    refetchOnMount: true,
  });

export default useJobDetail;
