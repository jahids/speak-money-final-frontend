/* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import "./Cards.css";


// import Card from "../Card/Card";
// import { cardsData } from "../../Data/Data";

// const Cards = () => {
//   return (
//     <div className="Cards">
//       {cardsData.map((card : any, id : any) => {
//         return (
//           <div className="parentContainer" key={id}>
//             <Card
//               title={card.title}
//               color={card.color}
//               barValue={card.barValue}
//               value={card.value}
//               png={card.png}
//               series={card.series}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Cards;

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import "./Cards.css";
import Card from "../Card/Card";
import { apicardData } from "../../Data/NewCardData";

const Cards = () => {
  const [cardData, setCardData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const storageData : any  = JSON.parse(localStorage.getItem('user'));


  useEffect(() => {
    async function fetchCardData() {
      try {
        const data = await apicardData(storageData?._id);
        setCardData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching card data:", error);
        setIsLoading(false);
      }
    }

    fetchCardData();
  }, [storageData?._id]);

  return (
    <div className="Cards">
      {isLoading ? (
        // Show loader while data is being fetched
        <div className="text-center py-8 mx-auto ">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 mx-auto"></div>
        </div>
      ) : (
        // Render cards once data is fetched
        cardData?.map((card: any, id: any) => (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default Cards;

