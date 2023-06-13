import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { Button, Flex, JobSummary, Layout, Pagination } from '../components';
import { useJobList } from '../hooks';
import { JobListParams, Order } from '../types';

const Home: NextPage = () => {
  const router = useRouter();
  const [params, setParams] = useState<JobListParams>({
    order: 'recent',
    page: 1,
    size: 6,
  });

  const { data, refetch } = useJobList(params);
  const jobList = data?.data;
  const pageResult = data?.page_result;

  useEffect(() => {
    refetch();
    // eslint-disable-next-line
  }, [params]);

  const changeOrder = (newOrder: Order) => {
    setParams((prev) => ({ ...prev, order: newOrder, page: 1 }));
  };

  const goToDetail = (jdId: number) => router.push(`/detail/${jdId}`);

  const commonButtonStyle = css`
    padding: 10px 20px 10px 20px;
    font-size: 20px;
    margin: 0 10px 0 10px;
  `;
  return (
    <Layout
      header={
        <Flex.Row
          css={css`
            width: 100%;
            justify-content: center;
          `}
        >
          <Button css={commonButtonStyle} onClick={() => changeOrder('recent')}>
            최신순
          </Button>
          <Button css={commonButtonStyle} onClick={() => changeOrder('end')}>
            마감일순
          </Button>
          <Button
            css={commonButtonStyle}
            onClick={() => changeOrder('popular')}
          >
            북마크순
          </Button>
          <Button css={commonButtonStyle} onClick={() => changeOrder('view')}>
            조회수순
          </Button>
        </Flex.Row>
      }
      content={jobList?.map((job) => (
        <JobSummary
          key={job.id}
          imgSrc={job.company.logo_url ? job.company.logo_url : '/no-photo.png'}
          companyName={job.company.name}
          startTime={new Date(job.start_time).toLocaleString()}
          endTime={new Date(job.end_time).toLocaleString()}
          title={job.title}
          bookmark={job.bookmark}
          view={job.view}
          buttonProp={{
            children: '공고보기',
            onClick: () => goToDetail(job.id),
          }}
        />
      ))}
      footer={
        <Pagination
          currentPage={params.page}
          total={pageResult?.total_pages}
          onChange={(nextPage: number) =>
            setParams((prev) => ({ ...prev, page: nextPage }))
          }
        />
      }
    />
  );
};

export default Home;
