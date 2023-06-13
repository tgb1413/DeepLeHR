import { JobDetail, JobDetailResponse } from '../types';

export const isJobDetail = (param: any): param is JobDetail => {
  return (
    !!param && typeof param === 'object' && 'task' in param && 'place' in param
  );
};

export const isJobDetailResponse = (param: any): param is JobDetailResponse => {
  return (
    !!param &&
    typeof param === 'object' &&
    'data' in param &&
    isJobDetail(param['data'])
  );
};
