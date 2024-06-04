import Card from "./Card";


const HomeCards = ({cards}) => {
   
   return (
      <div>
         <h3 className="text-gray-500 text-3xl font-fStyle font-bold text-center">Our choice of popular real estate</h3>
         <div className="grid md:grid-cols-3 gap-8 my-8">
            {cards.map((card) => (
               <Card key={card.id} card={card}></Card>
            ))}
         </div>
      </div>
   );
};

export default HomeCards;