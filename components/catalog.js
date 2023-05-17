import Image from "next/image";

export default function Catalog() {
  const products = [
    {
      id: 1,
      title: "Дрова березовые колотые",
      regular_price: {
        currency: "₽",
        value: 1600,
      },
      image: "/../public/image/1.png",
    },
    {
      id: 2,
      title: "Дрова березовые",
      regular_price: {
        currency: "₽",
        value: 1600,
      },
      image: "/../public/image/2.png",
    },
    {
      id: 3,
      title: "Дрова сосновые колотые",
      regular_price: {
        currency: "₽",
        value: 1500,
      },
      image: "/../public/image/3.png",
    },
    {
      id: 4,
      title: "Дрова осиновые колотые",
      regular_price: {
        currency: "₽",
        value: 1600,
      },
      image: "/../public/image/4.png",
    },
    {
      id: 5,
      title: "Кора березы",
      regular_price: {
        currency: "₽",
        value: 200,
      },
      image: "/../public/image/5.png",
    },
    {
      id: 6,
      title: "Кора сосны",
      regular_price: {
        currency: "₽",
        value: 200,
      },
      image: "/../public/image/6.png",
    },
    {
      id: 7,
      title: "Кора сосны",
      regular_price: {
        currency: "₽",
        value: 200,
      },
      image: "/../public/image/7.png",
    },
    {
      id: 8,
      title: "Кора сосны",
      regular_price: {
        currency: "₽",
        value: 200,
      },
      image: "/../public/image/8.png",
    },
  ];
  return (
    <>
      <div className="mt-20 mx-20">
        <div className=" mb-11">
          <div className="flex justify-between">
            <h1 className="font-bold w-100 text-4xl mb-4">/ Каталог товаров</h1>
            <div className="w-full flex self-center -mt-2 border-t-2 border-dashed border-orange-border "></div>
          </div>
          <div className="text-lg font-normal text-orange-text">
            У нас вы можете приобрести дрова
          </div>
        </div>
        <div className="flex justify-between flex-wrap">
          {products.map((el) => (
            <div className="flex text-center flex-col py-4 mb-6 m-4 w-1/5">
              <div>
                <div className="flex justify-center self-center items-center ">
                  <Image src={el.image} width={400} height={300} />
                </div>
                <div className="mt-4 flex flex-col">
                  <div className="text-2xl">{el.title}</div>
                  <div className="text-xs my-2 font-black">
                    {el.regular_price.value + el.regular_price.currency}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
