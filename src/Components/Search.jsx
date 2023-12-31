
import { FaSearch } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

const Search = ({ Onopen }) => {
  return (

    <>
    <div className="flex gap-2">
    <div className="flex flex-grow relative items-center">
    <FaSearch className="text-white absolute ml-1 text-3xl "/>
     <input type="text"
     className="h-10 flex-grow rounded-md border border-white bg-transparent text-white pl-9" />
    </div>
    
    <FaCirclePlus onClick={Onopen}  className="text-4xl text-white cursor-pointer"/>
  
    </div>
    </>
  )
}


export default Search




