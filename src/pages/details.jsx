import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import TradingViewWidget from "../components/tradingViewChart";
import Header from "../components/header";
export const GetDetails =  () => {
const {id} = useParams();
    const {response } = useAxios(`/coins/${id}`);
    

   
    if (!response) {
        return (
            <div className="loader">
            <div className="lds-hourglass"></div>
            </div>
        )
    }
    const data = new DOMParser().parseFromString(response.description.en, 'text/html');
    const description = data.body.textContent;
    return (
        <>
        <Header/>
       <div className="w-5/6 m-6 mx-auto">

       <h1 className="text-dark dark:text-white text-center">{description}</h1>
        <div className="h-full">
        <TradingViewWidget symbol={response.symbol} />
        </div>
       </div>
        </>
    )
}