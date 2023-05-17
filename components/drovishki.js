import Image from "next/image";
import arrow from "../public/image/arrow.svg";
export default function Drovishki() {
  return (
    <>
      <div className="text-orange-100 bg-firewood ">
        <div className="backdrop-blur-xs flex flex-col justify-center self-center items-center">
          <div className="text-5xl font-extrabold pb-16 pt-24 ">
            Drovishki96
          </div>
          <div>
            <button className="flex justify-center self-center items-center border-2 font-semibold border-orange-100 mb-24  py-5 px-3">
              <span className=" mr-5">Посмотреть товар</span>
              <Image src={arrow} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
