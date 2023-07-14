import { useEffect, useState } from 'react';
import { ISodaInfoType } from './CenterInfoType';
import { getSodaInfo } from '../../api/sodaIntroduction';

function SodaIntroduction() {
  const [sodaInfoData, setSodaInfoData] = useState<ISodaInfoType | undefined>();
  useEffect(() => {
    const sodaFn = async () => {
      const data = await getSodaInfo();
      setSodaInfoData(data);
    };
    sodaFn();
  }, []);
  return (
    <>
      {sodaInfoData && (
        <div>
          <div className="mt-8 text-xl text-blue-900 mmd:text-lg mmd:mt-4">{sodaInfoData.headText}</div>
          <div className="w-[100%] h-80 overflow-hidden mb-8 mmd:mb-4 mmd:h-40">
            <img src={sodaInfoData.img} alt={sodaInfoData.alt} className="mt-8 mmd:mt-4" />
          </div>
          <ul>
            {sodaInfoData.content.map((item, index) => {
              return (
                <li key={index} className="mb-8 text-base mmd:text-sm">
                  • {item}
                </li>
              );
            })}
          </ul>
          <div className="flex justify-between gap-4 mb-12 mmd:flex-col mmd:items-center ">
            {sodaInfoData.detailImg.map((imgAdress, index) => {
              return (
                <img
                  src={imgAdress}
                  alt="사무실 내부 사진"
                  key={index}
                  className="max-w-[30%] mmd:max-w-4xl mmd:max-h-4xl max-h-xs w-[100%]"
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
export default SodaIntroduction;
