import logo from "../assets/logoBarbell.png"
import { useState } from "react";
import Dropdown from '../components/dropdown'

export default function Admin(){
    const [dropdown, setDropdown] = useState(false);

const handleDropdown = () => {
        setDropdown(!dropdown)}
    return(
        <div className="relative w-full h-32 bg-maroon flex items-center justify-between">
        <img className="w-32 mb-1 ml-3" src={logo} alt="" />
        <div className="flex items-center justify-center h-32 w-[130px] flex mr-16 text-whitesmoke text-21xl font-quicksand text-5xl">
            Panel de administrador
          </div>
        <div className="flex mr-16 text-whitesmoke text-21xl font-quicksand">
          <div className="flex items-center justify-center hover:bg-marroncito text-5xl w-[200px]">Box Podium</div>
          <div className="flex items-center justify-center h-32 w-[130px] hover:bg-marroncito text-5xl">
            Pagos
          </div>
          <div
            className="flex items-center justify-center text-5xl cursor-pointer hover:bg-marroncito w-[150px]"
            onClick={handleDropdown}
          >
            Usuario
          </div>
        </div>
        {dropdown && <Dropdown className="absolute top-full left-0" />}
      </div>
    )
}