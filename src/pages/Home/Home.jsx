import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import HomeCards from "./HomeCards";
import { useLoaderData } from "react-router-dom";
import Works from "./Works";
const Home = () => {
   const cards = useLoaderData();

   return (
      <div>
         <Helmet>
            <title>Altair-Home</title>
         </Helmet>
         <Banner></Banner>
         <HomeCards cards={cards}></HomeCards>
         <Works Works={cards}></Works>
      </div>
   );
};

export default Home;
