import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import HomeCards from "./HomeCards";
import { useLoaderData } from "react-router-dom";
const Home = () => {
   const cards = useLoaderData();

   return (
      <div>
         <Helmet>
            <title>Altair | home</title>
         </Helmet>
         <Banner></Banner>
         <HomeCards cards={cards}></HomeCards>
      </div>
   );
};

export default Home;
