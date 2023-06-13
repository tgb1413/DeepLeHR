import axios, { isAxiosError, AxiosError, Axios } from 'axios';
import { JobsResponse, JobDetailResponse, JobListParams } from '../types';

axios.defaults.baseURL = 'https://dev.user.gocho-back.com/v1';

export const getJobList = async (params?: JobListParams) => {
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

  try {
    const res = await axios.get<JobsResponse>('/jds' + query);
    return res.data;
  } catch (e) {
    if (isAxiosError(e)) {
      throw e;
    }

    if (e instanceof Error) {
      throw new AxiosError(e.message);
    }

    throw new AxiosError('Unknown Error');
  }
};

export const getDetailJob = async (jdId: number) => {
  try {
    const res = await axios.get<JobDetailResponse>(`/jds/${jdId}`);
    return res.data;
  } catch (e) {
    if (isAxiosError(e)) {
      throw e;
    }

    if (e instanceof Error) {
      throw new AxiosError(e.message);
    }

    throw new AxiosError('Unknown Error');
  }
};
//https://dev.user.gocho-back.com/v1/jds
//https://dev.user.gocho-back.com/v1/jds/{jdId}
