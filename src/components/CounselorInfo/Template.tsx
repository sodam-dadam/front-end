import CareerInfo from './CareerInfo';
import { ICounselorInfoType } from './CounselorInfoType';

function Template({ counselorData }: { counselorData: ICounselorInfoType }) {
  return (
    <div className="mb-12">
      <div className="flex mt-12 gap-14">
        <div>
          <p className="text-3xl text-blue-800 mxl:text-2xl">안녕하세요</p>
          <p className="mt-4 text-2xl text-blue-800 mxl:text-xl">소담다담 심리상담 센터는</p>
          <p className="mt-6 text-xl leading-relaxed mxl:text-lg">{counselorData.infoText}</p>
          <p className="mt-4 text-xl text-blue-800 mxl:text-lg">{counselorData.lastText}</p>
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
