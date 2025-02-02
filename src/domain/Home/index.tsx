import { useState } from "react";
import { Header } from "./components/Header";
import { First } from "./components/First";

export const Home = () => {
  const [showOne, setShowOne] = useState(true);
  return (
    <div>
      {!showOne ? (
        <div>
           <Header showOne={showOne} setShowOne={setShowOne}/>
        </div>
      ) : (
        <div>
          <Header showOne={showOne} setShowOne={setShowOne}/>
          <First setShowOne={setShowOne}/>
        </div>
      )}
    </div>
  );
};
