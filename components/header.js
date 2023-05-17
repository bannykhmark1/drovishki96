import Image from "next/image";
import logo from "../public/image/logo.png";

export default function Header() {
  return (
    <>
      <header>
        <nav className="flex text-base font-semibold justify-between items-center bg-orange-firewood px-20">
          <div className=" mb-6 mt-4 ">
            <Image className=" rela" src={logo} width={109} height={59} />
          </div>
          <div>
            <ul className="lg:flex justify-between">
              <li className="mr-11 line-he">
                <a href="#">Главная</a>
              </li>
              <li className="mr-11">
                <a href="#">О нас</a>
              </li>
              <li className="mr-11">
                <a href="#">Каталог</a>
              </li>
              <li className="mr-11">
                <a href="#">Доставка и стоимость</a>
              </li>
              <li className="mr-11">
                <a href="#">Статьи</a>
              </li>
              <li className="">
                <a href="#">Контакты</a>
              </li>
            </ul>
          </div>
          <div>
            <button className=" text-white  py-3 px-9 border border-black border-dashed rounded-full bg-orange-button">
              Заказать звонок
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
