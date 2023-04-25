import MainBox from './MainBox';
import personalImg from '/images/persnalCounselingImg.png';
import psychologicalTestImg from '/images/psychologicalTestImg.png';
import teenagerAndParentCounselingImg from '/images/teenagerAndParentCounselingImg.png';
import coupleCounselingImg from '/images/coupleCounselingImg.png';
import groupCounselingImg from '/images/groupCounselingImg.png';
import workShopImg from '/images/workShopImg.png';
import supervisionImg from '/images/supervisionImg.png';
import bookReadingImg from '/images/bookReadingImg.png';
import TopCarousel from './TopCarousel';
import BottomCarousel from './BottomCarousel';

const consultingObj = [
  {
    img: personalImg,
    title: '개인상담',
    content: '스트레스 완화, 적응력 향상을 위한 1:1 성인상담',
  },
  {
    img: psychologicalTestImg,
    title: '심리 검사',
    content: '개인 맞춤형 심리검사를 선정하여 심층적 자기 이해',
  },
  {
    img: teenagerAndParentCounselingImg,
    title: '청소년 & 부모상담',
    content: '청소년의 적응문제 해결 및 부모역량강화',
  },
  {
    img: coupleCounselingImg,
    title: '부부 & 커플상담',
    content: '부부, 커플의 관계성 향상을 위한 심리상담',
  },
  {
    img: groupCounselingImg,
    title: '집단 상담',
    content: '공동의 주제에 대해 나누는 성장, 교육집단',
  },
];
const educationObj = [
  {
    img: workShopImg,
    title: '특강 및 워크샵',
    content: '주제별 강연, 참여 활동 프로그램',
  },
  {
    img: supervisionImg,
    title: '상담자 교육',
    content: '상담 전문가 양성을 위한 교육 프로그램',
  },
  {
    img: bookReadingImg,
    title: '북리딩 세미나',
    content: '책을 통해 내면의 성장을 돕는 소규모 세미나',
  },
];

function Template() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <TopCarousel />
      <MainBox data={consultingObj} name={'심리 상담'} />
      <MainBox data={educationObj} name={'심리 교육'} />
      <BottomCarousel />
    </div>
  );
}

export default Template;
