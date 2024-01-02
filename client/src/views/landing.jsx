import logoBarbel from "../assets/logoBarbellFondo.png"
import { useAuth0 } from "@auth0/auth0-react"
import collage from '../assets/collage.png'
import OpenBoxCard from "../components/openBox";

export default function Landing() {
    const { loginWithRedirect} = useAuth0();
    return(
        <div className=" flex flex-row font-quicksand h-[768px] w-[1366] ">
        <div className="bg-whitesmoke w-[680px] h-screen flex flex-col items-center">
            <div className="mt-[200px] flex flex-col items-center">
            <img 
            className="w-[300px]"
            src={logoBarbel} 
            alt="logo BarbellBox" />
            <div 
            className="text-[50px]"
            >
                Primera Clase Gratis!
            </div>
            <button 
            className="flex items-center justify-center mt-[30px] w-[300px] h-[50px] bg-maroon hover:bg-blue-500 text-black text-[30px] font-quicksand py-3 px-6 rounded-[20px] shadow-lg shadow-neutral-950 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce"
            onClick={()=> loginWithRedirect()}
            >
                iniciar
            </button>
            </div>
        </div>
        <div className="flex items-center justify-center h-screen w-[1400px]"
        style={{ backgroundImage: `url(${collage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div>Empeza a entrenar con nosotros</div>
            <OpenBoxCard className='absolute z-10'/>
        </div>
        </div>    
              
    )
}