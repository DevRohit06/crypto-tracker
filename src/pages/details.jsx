import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

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
   
    return (
        <>
        <h1 className="text-white"> {response.name}</h1>
        </>
    )
}