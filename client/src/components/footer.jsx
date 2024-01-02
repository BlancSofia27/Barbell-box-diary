import logoInf from '../assets/logoInf.png'

export default function Footer(){
    return(
        <div className="w-full h-16 bg-maroon flex items-center justify-start ">
            <img className="w-[70px] mb-1 ml-3 mx-[10px]" src={logoInf} alt="" />
            <div className="flex space-x-16 mr-16 text-whitesmoke text-21xl font-quicksand">
            <div className="text-5xl">Made by infinity Software</div>
            </div>
        </div>
    )
}