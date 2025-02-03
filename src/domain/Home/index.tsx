import { useState } from "react";
import { Header } from "./components/Header";
import { First } from "./components/First";
import { Second } from "./components/Second";
import { Third } from "./components/Third";

export const Home = () => {
  // state to truck if you are on the first, second or third page
  const [congratulations, setCongratulations] = useState(false);
  const [current, setCurrent] = useState(0);
  const previous = () => setCurrent(0);
  const next = () => setCurrent(1);
  const pages = [
    <First setCurrent={setCurrent} key={0} next={next} />,
    <Second setCongratulations={setCongratulations} key={1} />,
  ];
  //------------------------------------------------------//
  return (
    <div className="w-screen flex justify-center items-center">
      {congratulations ? (
        <Third
          setCurrent={setCurrent}
          setCongratulations={setCongratulations}
        />
      ) : (
        <div className="flex justify-center">
          <div className="overflow-hidden relative w-[393px]">
            <Header current={current} previous={previous} />
            <div
              className="flex transition ease-out duration-200"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {pages.map((page) => page)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
