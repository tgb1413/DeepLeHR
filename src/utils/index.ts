import { JobDetail } from '../types';

export const isJobDetail = (param: any): param is JobDetail => {
  return !!param && typeof param && 'task' in param && 'place' in param;
};
