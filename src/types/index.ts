export interface Response {
  data: unknown;
  status: number;
  status_name: string;
}

interface CompanyBase {
  id: number; // 공고에 해당하는 회사의 ID
  name: string; // 회사 이름
  logo_url: string | null;
}

interface JobBase {
  id: number; // 공고 ID
  title: string; // 공고 제목
  cut: boolean; //
  start_time: string; // 채용 시작일
  end_time: string; // 채용 마감일
  apply_url: string;
  bookmark: number; // 북마크 수
  is_bookmark: boolean;
  view: number; // 조회 수
  click: number;
  rotation_arr: string[];
}

export interface Job extends JobBase {
  company: CompanyBase;
  created_time: string; // 공고 생성일
  updated_time: string | null;
  college: boolean;
  required_exp_arr: string[];
  place_arr: string[];
  contract_type: string[];
  task: string;
  is_expired: boolean;
  high: boolean;
}

export interface JobDetail extends JobBase {
  company: CompanyBase & {
    youtube_url: string;
    comment_count: number;
  };
  process_arr: string[];
  apply_route_arr: string[];
  etc_arr: string[];
  possible_edu: {
    summary: string;
    college: boolean;
    high: boolean;
    middle: boolean;
    four: boolean;
  };
  required_exp: {
    type: '신입' | '경력' | '무관' | '신입/경력';
    min_year: number | null;
    max_year: number | null;
  };
  required_etc_arr: string[];
  contract_type: {
    type: '정규직' | '계약직' | '계약>정규' | '연수생' | '인턴';
    conversion_rate: number | null;
  };
  task: {
    main_task: string; // 1차 직무
    sub_task_arr: string[]; // 2차 직무 (리스트)
  };
  task_detail_arr: string[];
  place: {
    type: '일반' | '해외' | '기타';
    address_arr: string[];
    factory_arr: {
      id: number;
      name: string;
      address: string;
      male_number: number;
      female_number: number;
      product: string;
      bus: {
        exists: boolean;
        desc: string | null;
      };
      dormitory: {
        exists: boolean;
        desc: string | null;
      };
    }[];
    etc: string | null;
  };
  hire_number: string;
  pay_arr: string[];
  preferred_certi_arr: string[];
  preferred_etc_arr: string[];
}

export interface JobsResponse extends Response {
  data: Job[];
  page_result: {
    total_elements: number; // 전체 요소 개수
    total_pages: number; // (total_elements) / (size)
    page: number; // 현재 위치한 페이지
    size: number; // 각 페이지에 들어가는 요소의 개수
    is_first: boolean; // 첫 페이지인지 아닌지
    is_last: boolean; // 마지막 페이지인지 아닌지
  };
}

export interface JobDetailResponse extends Response {
  data: JobDetail;
}

export type Order = 'recent' | 'end' | 'popular' | 'view' | 'rand';

export type Filter =
  | 'valid'
  | 'expired'
  | 'todayUpload'
  | 'almostDeadline'
  | 'deadline';

export type JobListParams = {
  order?: Order;
  filter?: Filter;
  page?: number;
  size?: number;
};
