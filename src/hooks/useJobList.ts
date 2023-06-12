import { useQuery } from 'react-query';
import { getJobList } from '../services';
import { JobListParams } from '../types';

export const useJobList = (params?: JobListParams) =>
  useQuery('jobList', () => getJobList(params), {
    refetchOnMount: true,
  });

export default useJobList;
