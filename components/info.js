import Image from "next/image";
import champion from "../public/image/champion.jpg";
export default function Info() {
  return (
    <>
      <div className="mt-16 border-y-2 border-dashed border-orange-border">
        <div className="flex justify-between mx-20 my-12">
          <div className="w-1/2 mb-7">
            <h1 className="font-bold text-4xl mb-16">/ О нашем производстве</h1>
            <span className=" ">
              Если вам нужно выбрать и недорого купить строительные материалы из
              древесины, наша пилорама предложит большой ассортимент. Здесь
              жители ленобласти смогут приобрести с доставкой пиломатериал
              высушенный в камере или свежий, естественной влажности. В каталоге
              представлены изделия стандартных габаритов, но мы готовы выполнить
              и индивидуальные заказы по указанным замерам.
            </span>
          </div>
          <div className="w-1/3">
            <Image src={champion} />
          </div>
        </div>
      </div>
    </>
  );
}
