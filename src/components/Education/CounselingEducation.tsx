import { useEffect, useState } from 'react';
import { ICounselingType } from '../Counseling/CounselingType';
import Template from '../Counseling/Template';
import { getCounselingEducation } from '../../api/counselingEducation';

function CounselingEducation() {
  const [counselingEducationData, setCounselingEducationData] = useState<ICounselingType | undefined>();
  useEffect(() => {
    const cEFn = async () => {
      const data = await getCounselingEducation();
      setCounselingEducationData(data);
    };
    cEFn();
  }, []);
  return <>{counselingEducationData && <Template data={counselingEducationData} />}</>;
}

export default CounselingEducation;
