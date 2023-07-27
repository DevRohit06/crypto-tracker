
import Switcher from "./switcher"
export default  function Header(){
  
    return(
        <>
       <div className="w-full h-full dark:bg-gray-800 bg-white">
       <header className="text-black dark:text-white w-5/6 mx-auto mb-6 px-4  rounded-lg bg-opacity-25 backdrop-blur-sm">
        
            <nav className=" flex  justify-between py-4">
                <div className=" text-2xl font-bold">CRYPTO TRACKER</div>
                <ul className="flex ">
                   
                    {/* <li className="ml-2">test</li>
                    <li className="ml-2">test</li>
                    <li className="ml-2">test</li> */}
                    <Switcher/>
                </ul>
            </nav>
        </header>
       </div>

       
        </>
    )
}