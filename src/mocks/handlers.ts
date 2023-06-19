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

  rest.get('http://localhost:3000/centerinfo/sodaInfo', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        title: '소담다담 소개',
        headText: '소담다담 심리상담센터는,',
        img: '../../../public/images/sodaInfoImg.jpg',
        alt: '초록색 나뭇잎 이미지',
        content: [
          '삶을 살아가며 만나는 수많은 경험과 관계 속에서 우리가 마주하는 아픔에 대한 세심한 마음 채집활동을 통해 진짜 나를 만나기 위한 여정을 함께 하고자 합니다.',
          '소담다담은 경험적으로 검증된 다양한 상담 이론을 통합적으로 접근하여 일상적인 고민 및 학교, 직장, 가정생활 적응 등의 어려움을 나누고, 건강한 심리적 성장을 도모하는 과정을 함께 하고자 합니다.',
          '소담다담은 일상 속의 문제들에서 시작되어 혼자서는 점차 해결하기 어려워진 심리적 문제들에 귀 기울입니다. 사소하다고 무심코 지나쳐 버렸지만, 중요한 자리를 차지하고 있던 내면의 소리를 함께 함으로써 당신의 일상에 평온함과 작은 기쁨을 되찾아가는 과정을 만들어 갑니다.',
          '소담다담은 자신만을 위한 시간과 공간을 향유하실 수 있도록 예약제로만 운영됩니다. 상담실을 내방하시는 분들이 최대한 다른 내방객들과 마주치지 않도록 상담시간 사이의 간격을 적절히 유지함으로써 상담에 대한 비밀 보장을 최우선으로 제공하고자 합니다.',
          '소담다담은 국내 최고의 상담 관련 학회인 한국상담심리학회(한국심리학회 산하)의  공인 자격을 갖춘(상담심리전문가, 1급, 주수련감독자) 박사급 상담심리사가 직접 심리상담을 진행합니다. 상담 효과가 경험적으로 검증된 정신역동적 접근, 인지행동적 접근, 게슈탈트 접근, 인간중심접근 등을 통합적으로 적용하여 전문적인 심리상담을 실시합니다.',
          '소담다담은 한국상담심리학회의 상담심리사 윤리강령을 준수하며, 내담자와 상담자의 상호간 인간적이며 전문적인 신뢰관계를 중시합니다. 아울러 내담자와 상담자 모두의 인격적인 존중을 바탕으로 상담을 진행합니다.',
        ],
        detailImg: [
          '../../../public/images/centerImg1.jpeg',
          '../../../public/images/centerImg2.jpeg',
          '../../../public/images/centerImg3.jpeg',
        ],
      }),
    );
  }),

  rest.get('http://localhost:3000/centerinfo/reservationInfo', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        title: '상담예약 안내',
        reservation: [
          {
            img: '../../../public/images/Reservation.png',
            step: 1,
            stepName: '상담 예약',
            stepInfo: '홈페이지 및 전화를 통해 상담일정 예약 – 최종일정 확인 – 예약 완료',
          },
          {
            img: '../../../public/images/firstCounseling.png',
            step: 2,
            stepName: '초기 상담',
            stepInfo: '주 호소문제 확인, 심리상담/심리치료 과정 안내',
          },
          {
            img: '../../../public/images/counselingTest.png',
            step: 3,
            stepName: '심리검사(선택 사항)',
            stepInfo: '심리검사를 통한 다차원적이고 객관적인 심리분석',
          },
          {
            img: '../../../public/images/deepCounseling.png',
            step: 4,
            stepName: '심층상담/치료',
            stepInfo: '체계적이고 심층적인 심리상담/심리치료 진행',
          },
          {
            img: '../../../public/images/counselingFinish.png',
            step: 5,
            stepName: '상담/치료 종결',
            stepInfo: '심리상담/치료 종결 및 사후관리 안내',
          },
        ],
        counselingTime: [
          {
            name: '개인상담',
            time: '50분',
          },
          {
            name: '부부/커플/가족 상담',
            time: '70분',
          },
          {
            name: '심리검사',
            time: '종류에 따라 상이',
          },
          {
            name: '집단상담',
            time: '1회당 2시간',
          },
        ],
      }),
    );
  }),

  rest.get('http://localhost:3000/navList', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          url: '/CenterInfo',
          listName: '센터 안내',
          listItem: ['소담다담 소개', '상담예약 안내', '오시는 길'],
          listImg: '../../../public/images/centerInfoImg.png',
          listImgAlt: '두사람이 손을 잡고 있는 따뜻한 이미지',
        },
        {
          url: '/CounselorInfo',
          listName: '상담전문가 소개',
          listItem: ['상담심리전문가', '전임 상담원'],
          listImg: '../../../public/images/centerInfoImg.png',
          listImgAlt: '두사람이 손을 잡고 있는 따뜻한 이미지',
        },
        {
          url: '/Counseling',
          listName: '심리상담',
          listItem: ['개인상담', '집단상담', '심리검사', '청소년 & 부모상담', '부부 & 커플상담'],
          listImg: '../../../public/images/centerInfoImg.png',
          listImgAlt: '두사람이 손을 잡고 있는 따뜻한 이미지',
        },
        {
          url: '/Education',
          listName: '심리교육',
          listItem: ['특강 및 워크숍', '상담자 교육', '북리딩 세미나'],
          listImg: '../../../public/images/centerInfoImg.png',
          listImgAlt: '두사람이 손을 잡고 있는 따뜻한 이미지',
        },
        {
          url: '/Notice',
          listName: '공지 ・ 문의',
          listItem: ['교육/워크숍 공지', '이벤트', '문의'],
          listImg: '../../../public/images/centerInfoImg.png',
          listImgAlt: '두사람이 손을 잡고 있는 따뜻한 이미지',
        },
      ]),
    );
  }),

  rest.get('http://localhost:3000/counselorInfo/main', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        infoText:
          '가온해 우리는 별하 감사합니다 도담도담 나비잠 함초롱하다 아슬라 사과 옅구름 나비잠 아름드리 나비잠 다솜 도담도담 여우비 별빛 도서 소록소록 로운 함초롱하다 바람꽃 별빛 여우비 예그리나 포도 사과 감사합니다 미리내 노트북 컴퓨터 책방 도르레 책방 바나나 가온누리 여우비 나래 그루잠 가온해 나래 별하 포도 우리는 별빛 여우별달볓 안녕 포도 아름드리. 옅구름 감사합니다 가온해 그루잠 달볓 옅구름 함초롱하다 별빛 우리는 예그리나예그리나 이플 별빛 도르레 아름드리 미쁘다 아슬라 감또개 도르레 도서 아름드리 소록소록 옅구름 예그리나 미쁘다늘품 감또개 아름드리 도담도담 가온해 이플 이플 별빛 아련 사과 예그리나 감또개 감사합니다 예그리나 사과노트북 다솜 달볓 산들림 달볓 가온누리 미쁘다 비나리 감사합니다 함초롱하다. 소솜 소록소록 달볓 나비잠 안녕아련 안녕 가온해 우리는 우리는 사과 옅구름 달볓 예그리나 예그리나 아슬라 비나리 달볓 우리는 로운 감사합니다감사합니다 노트북 우리는 컴퓨터 함초롱하다 비나리 포도 도르레 미리내 가온해 도르레 함초롱하다 가온누리미리내 감또개 포도 비나리 비나리 가온해 도서관 달볓 도담도담 이플 감또개 아름드리 소솜 나비잠 포도 도서관.',
        lastText: '끝맺음말',
        career: [
          {
            img: '../../../public/images/centerImg1.jpeg',
            name: '권문희',
            role: '교육학 박사 PH.D',
            careerList: [
              '아주대학교 일반대학원 교육학 박사(교육상담 및 심리 전공)',
              '현) 경기대학교 학생상담센터 연구교수',
              '아주대학교 학생상담센터 책임상담원(주수퍼바이저)',
              '경기대학교 학생상담센터 전임상담원(주수퍼바이저)',
              '의왕시청소년상담센터 통합지원팀장',
              '심리상담센터 행복나무 부센터장',
              '위너스제이엠 협약 상담사',
              '(주) 휴먼 다이나믹 EAP 상담',
              '한국상담심리학회 상담심리사 1급(주수련감독자)',
              '한국정신건강상담사협의회 정신건강증진상담사 1급',
              '여성가족부 청소년상담사 1급',
              '한국힐링문화진흥협회 힐링원예지도사 1급',
            ],
          },
          {
            img: '../../../public/images/centerImg1.jpeg',
            name: '김정희',
            role: '교육학 박사 PH.D',
            careerList: [
              '상명대학교 학생상담센터 책임연구원',
              '가천대학교 학생상담센터 책임연구원',
              '연세드림심리상담센터 상담원',
              '강남대학교 학생생활상담소 상담원',
              '봄, 심리상담센터장',
              '한양대학교 상담심리대학원 강사',
              '경기대학교 행정복지상담대학원 강사',
              '서울시 지방 병무청 병역 판정관',
              '상담심리사 1급(한국상담심리학회)',
              '청소년상담사 2급(여성가족부)',
            ],
          },
        ],
      }),
    );
  }),

  rest.get('http://localhost:3000/counselorInfo/sub', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        infoText:
          '가온해 우리는 별하 감사합니다 도담도담 나비잠 함초롱하다 아슬라 사과 옅구름 나비잠 아름드리 나비잠 다솜 도담도담 여우비 별빛 도서 소록소록 로운 함초롱하다 바람꽃 별빛 여우비 예그리나 포도 사과 감사합니다 미리내 노트북 컴퓨터 책방 도르레 책방 바나나 가온누리 여우비 나래 그루잠 가온해 나래 별하 포도 우리는 별빛 여우별달볓 안녕 포도 아름드리. 옅구름 감사합니다 가온해 그루잠 달볓 옅구름 함초롱하다 별빛 우리는 예그리나예그리나 이플 별빛 도르레 아름드리 미쁘다 아슬라 감또개 도르레 도서 아름드리 소록소록 옅구름 예그리나 미쁘다늘품 감또개 아름드리 도담도담 가온해 이플 이플 별빛 아련 사과 예그리나 감또개 감사합니다 예그리나 사과노트북 다솜 달볓 산들림 달볓 가온누리 미쁘다 비나리 감사합니다 함초롱하다. 소솜 소록소록 달볓 나비잠 안녕아련 안녕 가온해 우리는 우리는 사과 옅구름 달볓 예그리나 예그리나 아슬라 비나리 달볓 우리는 로운 감사합니다감사합니다 노트북 우리는 컴퓨터 함초롱하다 비나리 포도 도르레 미리내 가온해 도르레 함초롱하다 가온누리미리내 감또개 포도 비나리 비나리 가온해 도서관 달볓 도담도담 이플 감또개 아름드리 소솜 나비잠 포도 도서관.',
        lastText: '끝맺음말',
        career: [
          {
            img: '../../../public/images/centerImg1.jpeg',
            name: '김혜미',
            role: '아주대학교 박사 과정',
            careerList: [
              '가톨릭대학교 학생생활상담소 상담원',
              '고려대학교 학생상담센터 상담원',
              '양천구청소년상담복지센터 상담원',
              '경기대학교 학생상담센터 전임상담원',
              '서울청소년상담복지센터 청소년동반자',
              '상담심리사 2급(한국상담심리학회)',
              '청소년상담사 2급(여성가족부)',
            ],
          },
        ],
      }),
    );
  }),

  rest.get('http://localhost:3000/counseling/personal', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        mainText: ['개인문제의 근원을 찾고', '지지와 공감 속에 함께 해결방향을 찾는 상담'],
        img_1: '../../../public/images/centerImg2.jpeg',
        subText_1: ['스트레스 완화, 적응력 향상을 위한', '1:1 성인 상담으로 다양한', '삶의 이슈와 정서를 다룹니다.'],
        subText_2: [
          '삶의 고비마다 혼자서 감당하기 어려운 문제가 있고,',
          '때로는 심리적 고통을 겪기도 합니다.',
          '소담다담은 자신의 주관적인 느낌이나 생각을',
          '스스로 탐색하고 이해해나가는 과정을 함께 하겠습니다.',
        ],
        img_2: '../../../public/images/centerImg2.jpeg',
      }),
    );
  }),

  rest.get('http://localhost:3000/counseling/group', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        mainText: ['집단의 역동을 활용하여', '개인관계, 대인관계를 돕는 집단상담'],
        img_1: '../../../public/images/centerImg2.jpeg',
        subText_1: ['공동의 주제에 대해 나누는 성장,', '교육집단으로 서로의 경험과 지혜를', '나누는 시간을 갖습니다.'],
        subText_2: [
          '소담다담은 집단의 역동을 활용하여 자기 이해를 돕고,',
          '대인관계에서의 불편함이나 소외감,',
          '갈등 요소들을 다루고 해결해감으로써',
          '개인의 성장을 이끌고 있습니다.',
        ],
        img_2: '../../../public/images/centerImg2.jpeg',
      }),
    );
  }),

  rest.get('http://localhost:3000/counseling/psychologicalTest', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        mainText: ['검사를 통해 다양한 심리적 특성에 대해 ', '파악하고 이를 통해 자신의 스토리를 찾는 심리검사'],
        img_1: '../../../public/images/centerImg2.jpeg',
        subText_1: ['개인 맞춤형 심리검사를', '선정하여 심층적인 자기 이해를 돕습니다.'],
        subText_2: [
          '소담다담은 검사를 통해 다양한 심리적',
          '특성에 대해 파악하고 이를 통해 자신의 스토리를 찾아드립니다.',
          '이를 통해 개인의 성향이나 향후 행동을 예측하는데',
          '도움을 얻을 수 있어 일상생활의 다양한 부분에서',
          '사용되고 있습니다.',
        ],
        img_2: '../../../public/images/centerImg2.jpeg',
      }),
    );
  }),

  rest.get('http://localhost:3000/counseling/adolescentsParents', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        mainText: ['부모와 자녀가 함께', '성장통을 극복하도록 돕는 상담'],
        img_1: '../../../public/images/centerImg2.jpeg',
        subText_1: ['청소년의 적응문제', '해결 및 부모역량강화를 도와드립니다.'],
        subText_2: [
          '소담다담은 자녀의 특성을 이해하고,',
          '문제행동을 하는 자녀의 마음을 돌봐주고,',
          '문제 행동의 원인을 찾아 부모와 자녀가 함께',
          '성장통을 극복하도록 도와드립니다.',
        ],
        img_2: '../../../public/images/centerImg2.jpeg',
      }),
    );
  }),

  rest.get('http://localhost:3000/counseling/couple', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        mainText: ['관계의 근본적인', '해결책을 찾는 부부상담과 커플상담'],
        img_1: '../../../public/images/centerImg2.jpeg',
        subText_1: [
          '부부, 커플의 관계성 향상을 위한',
          '심리상담으로 관계문제, 심리적 문제를 파악하고',
          '근본적인 해결책을 찾아나가는 상담입니다.',
        ],
        subText_2: [
          '소담다담은 소중한 인연으로 만나 겪게 되는',
          '다양한 어려움을 슬기롭게 극복하고 서로에게 힘과 용기를',
          '주는 관계로 성장할 수 있도록 성찰할 시간을 제공합니다.',
        ],
        img_2: '../../../public/images/centerImg2.jpeg',
      }),
    );
  }),

  rest.get('http://localhost:3000/education/workShop', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        mainText: ['상담 및 치료에 대한 이론이나', '기법소개, 실습 기회등을 제공하는 특강 및 워크숍'],
        img_1: '../../../public/images/centerImg2.jpeg',
        subText_1: [
          '주제별 강연, 참여 활동 프로그램을 통해',
          '자기 돌봄 및 삶에 대해 폭넓은 조망 능력을',
          '증진시킬 수 있습니다.',
        ],
        subText_2: [
          '소담다담은 상담 및 치료에 대한 이론이나 기법 소개,',
          '실습 시회 등을 제공하는 워크샵을 통해 다양하고 질좋은',
          '교육과 실습 기회를 제공합니다.',
        ],
        img_2: '../../../public/images/centerImg2.jpeg',
      }),
    );
  }),

  rest.get('http://localhost:3000/education/counselingEducation', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        mainText: ['훈련과정에 있는 상담자들의', '성장에 도움이 되는 상담자 교육'],
        img_1: '../../../public/images/centerImg2.jpeg',
        subText_1: ['상담 전문가 양성을 위한 교육 프로그램으로', '슈퍼비전과 공개사례발표를 진행합니다.'],
        subText_2: [
          '소담다담은 훈련과정에 있는 상담자들의',
          '개인적, 전문적 성장에 도움이 되는 교육 활동, 교육분석 등의',
          '체계적인 교육을 제공합니다.',
        ],
        img_2: '../../../public/images/centerImg2.jpeg',
      }),
    );
  }),

  rest.get('http://localhost:3000/education/bookReading', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        mainText: ['자신을 돌보는 북리딩 프로그램'],
        img_1: '../../../public/images/centerImg2.jpeg',
        subText_1: ['책을 통해 내면의 성장을 돕는', '소규모 세미나 형식으로 진행됩니다.'],
        subText_2: [
          '소담다담은 자신을 돌보는 북리딩 프로그램을 통해',
          '책을 매개로 서로의 생각이나 느낌을 나누고 내면의 세계를',
          '깊고, 넒게 확장시켜 나가고자 합니다.',
        ],
        img_2: '../../../public/images/centerImg2.jpeg',
      }),
    );
  }),
];
