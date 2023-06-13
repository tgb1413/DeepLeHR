import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Layout, JobSummary, Flex } from '../../components';
import { getDetailJob, getJobList } from '../../services';
import { useJobDetail } from '../../hooks';
import { JobDetailResponse } from '../../types';
import { isJobDetailResponse } from '../../utils';

interface DetailProps {
  jobDetailResponse: JobDetailResponse;
}

const Detail = ({ jobDetailResponse }: DetailProps) => {
  const router = useRouter();
  const { data } = useJobDetail(jobDetailResponse);

  if (router.isFallback) {
    return <div>...Loading</div>;
  }

  return (
    <Layout
      content={
        isJobDetailResponse(data) ? (
          <>
            <JobSummary
              imgSrc={
                data.data.company.logo_url
                  ? data.data.company.logo_url
                  : '/no-photo.png'
              }
              companyName={data.data.company.name}
              startTime={data.data.start_time}
              endTime={data.data.end_time}
              title={data.data.title}
              bookmark={data.data.bookmark}
              view={data.data.view}
              buttonProp={{
                children: '지원하기',
                onClick: () => router.push(data.data.apply_url),
              }}
            />
            <Flex.Row>
              <Flex.Item>{data.data.task.main_task}</Flex.Item>
              <Flex.Item>{data.data.task.sub_task_arr.join(', ')}</Flex.Item>
            </Flex.Row>
            <Flex.Row>
              <Flex.Item>근무지</Flex.Item>
              <Flex.Item>
                {data.data.place.type === '일반'
                  ? [
                      ...data.data.place.address_arr,
                      ...data.data.place.factory_arr.map(
                        (factory) => factory.name,
                      ),
                    ]
                  : data.data.place.etc}
              </Flex.Item>
            </Flex.Row>
          </>
        ) : (
          <div>Something went wrong !</div>
        )
      }
    />
  );
};

export default Detail;

export const getStaticProps: GetStaticProps<
  DetailProps,
  { jdId: string }
> = async ({ params }) => {
  const res = await getDetailJob(Number(params?.jdId));
  const jobDetail = res;

  return {
    props: { jobDetailResponse: jobDetail },
    revalidate: 1000 * 60 * 10,
  };
};

export const getStaticPaths = async () => {
  const res = await getJobList();
  const jobList = res.data;

  return {
    paths: jobList.map((job) => ({ params: { jdId: job.id.toString() } })),
    // paths: [{ params: { jdId: '15913' } }],
    fallback: 'blocking',
  };
};
