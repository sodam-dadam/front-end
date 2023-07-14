import { Link } from 'react-router-dom';

function ReservationBtn() {
  return (
    <>
      <p className="pb-4 mt-4 text-sm border-b mmd:text-xs">모든 상담 및 프로그램은 사전 예약제로 운영됩니다.</p>
      <p className="pb-4 mt-4 text-sm border-b mmd:text-xs">
        예약 없는 방문은 어려우니, 미리 전화로 예약 문의를 해주시면 안내해 드립니다. 전화 연결이 안 될 때는 상담 진행
        중일 수 있으니, 문자 메시지를 남겨 주시면 상담 종료 후에 연락 드리겠습니다.
      </p>
      <p className="pb-4 mt-4 text-sm font-light border-b mmd:text-xs">
        * 상담 내용은 철저한 비밀 보장이 되며, 내담자분의 안전을 보장하기 위한 조치가 제 1순위로 이루어집니다.{' '}
      </p>
      <div className="flex justify-center my-8 mmd:my-4">
        <Link
          to={'/Reservation'}
          className="px-2 leading-[3] text-sm text-white bg-blue-800 mmd:leading-[3] mmd:text-xs">
          온라인 상담예약하기 ▶︎
        </Link>
      </div>
    </>
  );
}
export default ReservationBtn;
