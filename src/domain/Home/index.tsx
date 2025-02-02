import { useState } from "react";
import { Header } from "./components/Header";
import { First } from "./components/First";
import { Second } from "./components/Second";
import { Third } from "./components/Third";

export const Home = () => {
  const [showOne, setShowOne] = useState(true);
  const [congratulations, setCongratulations] = useState(false);
  const [curent, setCurrent] = useState(0);
  const previous = () => setCurrent(0);
  const next = () => setCurrent(1);
  const pages = [
    <First setShowOne={setShowOne} key={0} next={next} />,
    <Second setCongratulations={setCongratulations} key={1} />,
  ];
  return (
    <div className="w-screen flex justify-center items-center">
      {congratulations ? (
        <Third
        setCurrent={setCurrent}
          setCongratulations={setCongratulations}
          setShowOne={setShowOne}
        />
      ) : (
        <div className="">
          <Header
            previous={previous}
            showOne={showOne}
            setShowOne={setShowOne}
          />
          <div className="overflow-hidden relative w-[393]">
            <div
              className="flex transition ease-out duration-200"
              style={{ transform: `translateX(-${curent * 100}%)` }}
            >
              {pages.map((page) => page)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
