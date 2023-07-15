import { IReservation } from './CenterInfoType';

function ReservationProcedure({ procedureData }: { procedureData: IReservation }) {
  return (
    <div className="flex pb-4 mb-8 border-b-2">
      <div>
        <img
          className="w-20 h-20 mmd:w-16 mmd:h-16"
          src={procedureData.img}
          alt={`${procedureData.stepName} 절차 이미지`}
        />
      </div>
      <div className="flex flex-col justify-center ml-6">
        <p className="mb-1 text-sm font-medium mmd:text-xs">STEP {procedureData.step}</p>
        <p className="mb-2 text-base font-semibold text-blue-800 mmd:text-sm">{procedureData.stepName}</p>
        <p className="text-sm font-light mmd:text-xs">{procedureData.stepInfo}</p>
      </div>
    </div>
  );
}
export default ReservationProcedure;
