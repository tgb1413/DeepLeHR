import axios from 'axios';
import { JobsResponse, JobDetailResponse, JobListParams } from '../types';

axios.defaults.baseURL = 'https://dev.user.gocho-back.com/v1';

export const getJobList = (params?: JobListParams) => {
  const querySeperator = '?';
  const paramSeperator = '&';
  let query = querySeperator;

  if (params) {
    const queryEntries = Object.entries(params);

    queryEntries.forEach((queryEntry) => {
      const [key, value] = queryEntry;

      query += `${key}=${value}` + paramSeperator;
    });
  }

  if (query[query.length - 1] === paramSeperator) {
    query = query.slice(0, -1);
  }

  if (query === querySeperator) {
    query = '';
  }

  return axios.get<JobsResponse>('/jds' + query);
};

export const getDetailJob = (jdId: number) =>
  axios.get<JobDetailResponse>(`/jds/${jdId}`);

//https://dev.user.gocho-back.com/v1/jds
//https://dev.user.gocho-back.com/v1/jds/{jdId}
