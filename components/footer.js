import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" bg-slate-300">
      <div className=" mt-8 flex justify-between">
        <div>
          <h1 className=" text-2xl">Drovishki96</h1>
        </div>
        <div>
          <h1 className=" text-2xl">Навигация</h1>
        </div>
        <div>
          <h1 className=" text-2xl">Контакты</h1>
        </div>
      </div>
    </footer>
  );
}
