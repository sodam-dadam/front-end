import { IMainCardType } from './MainType';

function MainCard({ title, content, img, name }: IMainCardType) {
  return (
    <div className="flex flex-col items-center justify-between w-full h-full border-b-2 border-l-2 border-r-2 rounded-t-2xl">
      <div
        className={`flex flex-col items-center ${
          name === '심리 상담' ? 'bg-[#4575CA] ' : 'bg-[#45ACCA]'
        } rounded-t-2xl px-8 py-4 mlg:px-4`}>
        <img src={img} alt={title} className="w-[50%] h-[35%] min-w-[25px]" />
      </div>
      <span className="h-8 py-5 text-base font-semibold tracking-tight mlg:text-xs msm:text-xs msm:mb-0">{title}</span>
      <span className="w-[90%] mt-4 text-sm text-center mlg:hidden ">{content}</span>
      <div className="w-full max-w-[200px]">
        <button className="self-end h-8 my-4 border text-sm msm:text-xs whitespace-nowrap  border-[#4575CA] text-[#4575CA] mlg:mb-0 w-full mlg:mt-2">
          자세히보기
        </button>
      </div>
    </div>
  );
}

export default MainCard;
