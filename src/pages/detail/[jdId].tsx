import { useRouter } from 'next/router';
import { Layout, JobSummary, Flex } from '../../components';
import { useJobDetail } from '../../hooks';
import { isJobDetail } from '../../utils';

const Detail = () => {
  const router = useRouter();
  const { jdId } = router.query;
  const { data } = useJobDetail(Number(jdId));

  const jobDetail = data?.data.data;

  return (
    <Layout
      content={
        isJobDetail(jobDetail) ? (
          <>
            <JobSummary
              imgSrc={
                jobDetail.company.logo_url
                  ? jobDetail.company.logo_url
                  : '/no-photo.png'
              }
              companyName={jobDetail.company.name}
              startTime={new Date(jobDetail.start_time).toLocaleString()}
              endTime={new Date(jobDetail.end_time).toLocaleString()}
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
        ) : (
          <>api failed</>
        )
      }
    />
  );
};

export default Detail;

export async function getStaticProps() {
  console.log('TEST');
  return {
    path: [`/detail`],
    props: {
      hello: 'world',
    },
    revalidate: 1000 * 60 * 10,
  };
}
