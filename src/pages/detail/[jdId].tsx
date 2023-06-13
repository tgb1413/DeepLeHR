import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Layout, JobSummary, Flex } from '../../components';
import { getDetailJob, getJobList } from '../../services';
import { useJobDetail } from '../../hooks';
import { JobDetail } from '../../types';

interface DetailProps {
  jobDetail: JobDetail;
}

const Detail = ({ jobDetail }: DetailProps) => {
  const router = useRouter();
  const { jdId } = router.query;
  const { data } = useJobDetail(Number(jdId));

  if (router.isFallback) {
    return <div>...Loading</div>;
  }

  return (
    <Layout
      content={
        <>
          <JobSummary
            imgSrc={
              jobDetail.company.logo_url
                ? jobDetail.company.logo_url
                : '/no-photo.png'
            }
            companyName={jobDetail.company.name}
            startTime={jobDetail.start_time}
            endTime={jobDetail.end_time}
            title={jobDetail.title}
            bookmark={jobDetail.bookmark}
            view={jobDetail.view}
            buttonProp={{
              children: '지원하기',
              onClick: () => router.push(jobDetail.apply_url),
            }}
          />
          <Flex.Row>
            <Flex.Item>{jobDetail.task.main_task}</Flex.Item>
            <Flex.Item>{jobDetail.task.sub_task_arr.join(', ')}</Flex.Item>
          </Flex.Row>
          <Flex.Row>
            <Flex.Item>근무지</Flex.Item>
            <Flex.Item>
              {jobDetail.place.type === '일반'
                ? [
                    ...jobDetail.place.address_arr,
                    ...jobDetail.place.factory_arr.map(
                      (factory) => factory.name,
                    ),
                  ]
                : jobDetail.place.etc}
            </Flex.Item>
          </Flex.Row>
        </>
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
  const jobDetail = res.data.data;

  return {
    props: { jobDetail: jobDetail },
    revalidate: 1000 * 60 * 10,
  };
};

export const getStaticPaths = async () => {
  const res = await getJobList();
  const jobList = res.data.data;

  return {
    paths: jobList.map((job) => ({ params: { jdId: job.id.toString() } })),
    // paths: [{ params: { jdId: '15913' } }],
    fallback: 'blocking',
  };
};
