import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { getWayToCome } from '../../api/wayToCome';
import { ISodaSubBoxType, IWayToComeResponseType } from './CenterInfoType';

function SubBox({ name, children, img }: ISodaSubBoxType) {
  return (
    <div className="flex pt-8 pb-8 border-t">
      <div className="flex align-middle">
        <img src={img} alt="img" className="h-4 mr-4" />
        <span className="mr-12 font-semibold whitespace-nowrap">{name}</span>
      </div>
      <div className="text-gray500">{children}</div>
    </div>
  );
}

function SodaWayToCome() {
  const [wayToComeData, setWayToComeData] = useState<IWayToComeResponseType | undefined>();
  useEffect(() => {
    const wayFn = async () => {
      const data = await getWayToCome();
      setWayToComeData(data);
    };
    wayFn();
  }, []);
  return (
    <div className="w-full h-full">
      <Map
        center={{ lat: 37.2770403, lng: 127.031917 }}
        level={3}
        style={{ width: '100%' }}
        className="mt-12 mb-12 h-80">
        <MapMarker position={{ lat: 37.2770403, lng: 127.031917 }} />
      </Map>

      {wayToComeData && (
        <div className="flex flex-col">
          <span className="mb-8 text-3xl text-blue-800">{wayToComeData.title}</span>
          <SubBox name={wayToComeData.wayToComeName} img={wayToComeData.wayToComeImg}>
            <div className="flex flex-col">
              <p>{wayToComeData.wayToComeFirstLocation}</p>
              <p>{wayToComeData.wayToComesecondLocation}</p>
              <div>
                <span className="text-neutral400">{wayToComeData.parkinginfoName} |</span>{' '}
                <span>{wayToComeData.parkinginfoContent}</span>
              </div>
            </div>
          </SubBox>

          <SubBox name={wayToComeData.callName} img={wayToComeData.callImg}>
            <div>{wayToComeData.callContent}</div>
          </SubBox>

          <SubBox name={wayToComeData.infomationUseName} img={wayToComeData.infomationImg}>
            <div className="flex h-full mb-12">
              <div className="flex flex-col items-center w-32 h-full" key={wayToComeData.reservationName}>
                <img src={wayToComeData.reservationImg} alt="img" className="max-w-[30%]" />
                <span className="mt-2">{wayToComeData.reservationName}</span>
              </div>
              <div className="flex flex-col items-center w-32 h-full" key={wayToComeData.internetName}>
                <img src={wayToComeData.internetImg} alt="img" className="max-w-[30%]" />
                <span className="mt-2">{wayToComeData.internetName}</span>
              </div>
            </div>
          </SubBox>
        </div>
      )}
    </div>
  );
}

export default SodaWayToCome;
