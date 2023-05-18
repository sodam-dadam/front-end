import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:3000/start', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        start: 'start',
      }),
    );
  }),

  rest.get('http://localhost:3000/', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        consulting: [
          {
            img: '/images/persnalCounselingImg.png',
            title: '개인 상담',
            content: '스트레스 완화, 적응력 향상을 위한 1:1 성인상담',
          },
          {
            img: '/images/psychologicalTestImg.png',
            title: '심리 검사',
            content: '개인 맞춤형 심리검사를 선정하여 심층적 자기 이해',
          },
          {
            img: '/images/teenagerAndParentCounselingImg.png',
            title: '청소년 & 부모상담',
            content: '청소년의 적응문제 해결 및 부모역량강화',
          },
          {
            img: '/images/coupleCounselingImg.png',
            title: '부부 & 커플상담',
            content: '부부, 커플의 관계성 향상을 위한 심리상담',
          },
          {
            img: '/images/groupCounselingImg.png',
            title: '집단 상담',
            content: '공동의 주제에 대해 나누는 성장, 교육집단',
          },
        ],
        education: [
          {
            img: '/images/workShopImg.png',
            title: '특강 및 워크샵',
            content: '주제별 강연, 참여 활동 프로그램',
          },
          {
            img: '/images/supervisionImg.png',
            title: '상담자 교육',
            content: '상담 전문가 양성을 위한 교육 프로그램',
          },
          {
            img: '/images/bookReadingImg.png',
            title: '북리딩 세미나',
            content: '책을 통해 내면의 성장을 돕는 소규모 세미나',
          },
        ],
      }),
    );
  }),

  rest.get('http://localhost:3000/centerinfo/waytocome', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        title: '경기도 수원시 팔달구 인계동 940-18',
        wayToComeName: '오시는 길',
        wayToComeImg: '/images/wayToCome.png',
        wayToComeFirstLocation: 'MJ아이티밸리 9층 906호',
        wayToComesecondLocation: '동수원 사거리 라마다 호텔과 은혜와 진리 교회 사이',
        callName: '전화 번호',
        callImg: '/images/call.png',
        callContent: '010-2331-4058',
        infomationUseName: '이용 안내',
        infomationImg: '/images/InformationUse.png',
        reservationImg: '/images/reserve.png',
        reservationName: '예약',
        internetImg: '/images/wifi.png',
        internetName: '무선 인터넷',
        parkinginfoName: '주차정보',
        parkinginfoContent: '지하 3층까지 가능, 주차비는 본 기관에서 부담합니다.',
      }),
    );
  }),
];
