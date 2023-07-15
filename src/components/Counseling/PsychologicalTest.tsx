import { useEffect, useState } from 'react';
import Template from './Template';
import { ICounselingType } from './CounselingType';
import { getPsychologicalTest } from '../../api/psychologicalTest';

function PsychologicalTest() {
  const [psychologicalTestData, setPsychologicalTestData] = useState<ICounselingType | undefined>();
  useEffect(() => {
    const ptFn = async () => {
      const data = await getPsychologicalTest();
      setPsychologicalTestData(data);
    };
    ptFn();
  }, []);
  return <>{psychologicalTestData && <Template data={psychologicalTestData} />}</>;
}

export default PsychologicalTest;
