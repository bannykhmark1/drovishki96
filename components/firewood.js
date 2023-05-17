import Image from "next/image";

export default function Firewood() {
  const products = [
    {
      id: 1,
      title: "Дрова березовые колотые",
      regular_price: {
        currency: "₽",
        value: 1600,
      },
      image: "/../public/image/1.jpg",
    },
    {
      id: 2,
      title: "Дрова березовые",
      regular_price: {
        currency: "₽",
        value: 1600,
      },
      image: "/../public/image/2.jpg",
    },
    {
      id: 3,
      title: "Дрова сосновые колотые",
      regular_price: {
        currency: "₽",
        value: 1500,
      },
      image: "/../public/image/3.jpg",
    },
    {
      id: 4,
      title: "Дрова осиновые колотые",
      regular_price: {
        currency: "₽",
        value: 1600,
      },
      image: "/../public/image/4.jpg",
    },
    {
      id: 5,
      title: "Кора березы",
      regular_price: {
        currency: "₽",
        value: 200,
      },
      image: "/../public/image/5.jpg",
    },
    {
      id: 6,
      title: "Кора сосны",
      regular_price: {
        currency: "₽",
        value: 200,
      },
      image: "/../public/image/6.jpg",
    },
  ];

  return (
    <>
      <div className="flex justify-center flex-wrap">
        {products.map((el) => (
          <div className="flex flex-col shadow-md py-4 px-4 mb-6 m-4 w-56 border-t-gray-300">
            <div className="flex justify-center h-full self-center items-center mb-4">
              <Image src={el.image} width={150} height={150} />
            </div>
            <div className="w-full h-full flex justify-end flex-col">
              <div className="text-sm">{el.title}</div>
              <div className="text-xs my-2 font-black">
                {el.regular_price.value + el.regular_price.currency}
              </div>
              <button className="bg-orange-50 rounded-full text-xs py-1 ">
                Заказать
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
