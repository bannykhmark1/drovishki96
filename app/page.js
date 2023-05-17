import Image from "next/image";
import Header from "@/components/header";
import Firewood from "@/components/firewood";
import Footer from "@/components/footer";
import Drovishki from "@/components/drovishki";
import Info from "@/components/info";
export default function Home() {
  return (
    <>
      <head>
        <title>Дровишки96</title>
      </head>
      <body className="">
        <Header />
        <main>
          <Drovishki />
          <Info />
        </main>
      </body>
    </>
  );
}
