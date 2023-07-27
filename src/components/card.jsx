import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { ChevronUp, ChevronDown } from 'lucide-react';
export default function Card() {
  const { response } = useAxios("/coins/markets?vs_currency=usd");
  const result = response;

  if (!result) {
    return (
      <div className="loader">
      <div className="lds-hourglass"></div>
      </div>
    )
  }
  return (
    <>
      <div className="grid-cols-1 w-5/6 mx-auto text-white items-center lg:grid-cols-2 xl:grid-cols-3 grid gap-10">
        {result.map((data) => {
          const price = data.current_price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          });
          const changeMoney =  data.price_change_percentage_24h
          .toLocaleString("en-US")
          const money = price;
          function changeColor() {
            if (
              data.price_change_percentage_24h
                .toLocaleString("en-US")
                .startsWith("-")
            ) {
              return (
                <h1 className="text-center flex px-2 py-1 bg-[#D93E3E]  rounded-xl ">
                  <ChevronDown /> {changeMoney.substr(1,4)}
                </h1>
              );
            } else {
              return (
                <h1 className="text-center flex px-2 py-1 bg-[#109A2F]  rounded-xl ">
                  <ChevronUp />  {changeMoney.substr(0,4)}
                </h1>
              );
            }
          }
          function changeBGColor() {
            if (
              data.price_change_percentage_24h
                .toLocaleString("en-US")
                .startsWith("-")
            ) {
              return " p-4 w-auto bg-[#753232] h-26 rounded-xl border-red-500 border-2";
            } else {
              return " p-4 w-auto bg-[#2F683B]  h-26 rounded-xl border-green-500 border-2";
            }
          }
          return (
            <Link key={data.id} to={`/${data.id}`} className="">
              <div className={changeBGColor()}>
                <div className="flex justify-between items-center gap-2">
                  <div className="flex items-center">
                    <div className="">
                      <img width={75} src={data.image} alt="" />
                    </div>
                    <div className="ml-3">
                      <h1 className="text-2xl font-bold">{data.name}</h1>
                      <div className="flex ">
                        <h1 className="mr-2 uppercase">{data.symbol}</h1>
                        <h1>24H</h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end">
                    <h1 className=" text-xl sm:text-2xl font-bold">{money}</h1>
                    <div className="flex justify-end">{changeColor()}</div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
