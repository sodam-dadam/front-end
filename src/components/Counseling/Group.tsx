import { useEffect, useState } from 'react';
import { ICounselingType } from './CounselingType';
import Template from './Template';
import { getGroup } from '../../api/group';

function Group() {
  const [groupData, setGroupData] = useState<ICounselingType | undefined>();
  useEffect(() => {
    const groupFn = async () => {
      const data = await getGroup();
      setGroupData(data);
    };
    groupFn();
  }, []);
  return <>{groupData && <Template data={groupData} />}</>;
}

export default Group;
