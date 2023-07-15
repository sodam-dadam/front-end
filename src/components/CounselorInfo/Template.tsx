import CareerInfo from './CareerInfo';
import { ICounselorInfoType } from './CounselorInfoType';

function Template({ counselorData }: { counselorData: ICounselorInfoType }) {
  return (
    <div className="mb-8 mmd:mb-6">
      <div className="flex mt-6 mmd:mt-4">
        <div>
          <p className="text-xl text-blue-800 mmd:text-lg">안녕하세요</p>
          <p className="mt-4 text-lg text-blue-800 mmd:text-base">소담다담 심리상담 센터는</p>
          <p className="mt-4 text-base leading-relaxed mmd:text-sm">{counselorData.infoText}</p>
          <p className="mt-4 text-base text-blue-800 mmd:text-sm">{counselorData.lastText}</p>
        </div>
      </div>
      <div>
        {counselorData.career.map((list, index) => {
          return <CareerInfo item={list} key={index} />;
        })}
      </div>
    </div>
  );
}
export default Template;
