import { useEffect, useState } from 'react';
import Template from './Template';
import { ICounselorInfoType } from './CounselorInfoType';
import { getSubCounselor } from '../../api/subCounselor';

function SubCounselor() {
  const [subCounselorData, setMainCounselorData] = useState<ICounselorInfoType | undefined>();
  useEffect(() => {
    const subCFn = async () => {
      const data = await getSubCounselor();
      setMainCounselorData(data);
    };
    subCFn();
  }, []);

  return <>{subCounselorData && <Template counselorData={subCounselorData} />}</>;
}
export default SubCounselor;
