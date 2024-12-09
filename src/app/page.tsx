import DontMiss from "./main-page-components/DontMiss";
import Essentials from "./main-page-components/Essentials";
import Featured from "./main-page-components/Featured";
import Gearup from "./main-page-components/Gearup";
import Hello from "./main-page-components/Hello";

import MainPageShoe from "./main-page-components/Main-page-shoe";
import Mainpageshoes from "./main-page-components/main-page-shoes";

export default function Home() {
  return (
    <>
    <Hello/>
    <MainPageShoe/>
    <Mainpageshoes/>
    <Featured/>
    <Gearup/>
    <DontMiss/>
    <Essentials/>
    </>
  );
}
