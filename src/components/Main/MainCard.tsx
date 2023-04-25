import { IMainCardType } from './MainType';

function MainCard({ title, content, img }: IMainCardType) {
  return (
    <div className="flex flex-col items-center justify-between w-full h-full px-4">
      <div className="flex flex-col items-center">
        <img src={img} alt={title} className="w-[35%] h-[35%] mr-1.5 mt-4" />
        <span className="h-12 py-5 mt-4 text-base font-bold tracking-tight mlg:text-sm msm:text-xs msm:mb-4 ">
          {title}
        </span>
        <span className="w-32 mt-4 text-xs mlg:hidden">{content}</span>
      </div>
      <div>
        <button className="self-end h-10 my-4 border-2 msm:text-xs whitespace-nowrap w-28 msm:w-16">자세히보기</button>
      </div>
    </div>
  );
}

export default MainCard;
