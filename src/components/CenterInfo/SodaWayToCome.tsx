import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { ISodaSubBoxType } from './CenterInfoType';

const data = {
  title: '경기도 수원시 팔달구 인계동 940-18',
  wayToCome: {
    name: '오시는 길',
    img: '../../../public/images/wayToCome.png',
    content: {
      firstLocation: 'MJ아이티밸리 9층 906호',
      secondLocation: '동수원 사거리 라마다 호텔과 은혜와 진리 교회 사이',
    },
  },
  parkingInfo: {
    name: '주차정보',
    content: '지하 3층까지 가능, 주차비는 본 기관에서 부담합니다.',
  },
  call: {
    name: '전화 번호',
    img: '../../../public/images/call.png',
    content: '010-2331-4058',
  },
  informationUse: {
    name: '이용 안내',
    img: '../../../public/images/InformationUse.png',
    content: [
      {
        img: '../../../public/images/reserve.png',
        name: '예약',
      },
      {
        img: '../../../public/images/wifi.png',
        name: '무선 인터넷',
      },
    ],
  },
};

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
  return (
    <div className="w-full h-full">
      <Map
        center={{ lat: 37.2770403, lng: 127.031917 }}
        level={3}
        style={{ width: '100%' }}
        className="mt-12 mb-12 h-80">
        <MapMarker position={{ lat: 37.2770403, lng: 127.031917 }} />
      </Map>
      <div className="flex flex-col">
        <span className="mb-8 text-3xl text-blue-500">{data.title}</span>

        <SubBox name={data.wayToCome.name} img={data.wayToCome.img}>
          <div className="flex flex-col">
            <p>{data.wayToCome.content.firstLocation}</p>
            <p>{data.wayToCome.content.secondLocation}</p>
            <div>
              <span className="text-neutral400">{data.parkingInfo.name} |</span> <span>{data.parkingInfo.content}</span>
            </div>
          </div>
        </SubBox>

        <SubBox name={data.call.name} img={data.call.img}>
          <div>{data.call.content}</div>
        </SubBox>

        <SubBox name={data.informationUse.name} img={data.informationUse.img}>
          <div className="flex h-full mb-12">
            {data.informationUse.content.map((item) => {
              return (
                <div className="flex flex-col items-center w-32 h-full" key={item.name}>
                  <img src={item.img} alt="img" className="max-w-[30%]" />
                  <span className="mt-2">{item.name}</span>
                </div>
              );
            })}
          </div>
        </SubBox>
      </div>
    </div>
  );
}

export default SodaWayToCome;
