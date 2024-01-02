import Days from "./days";
import Hours from "./hours";
import Shifts from "./shifts";
import Info from "./info"
export default function  Horario() {
  return (
    <div className=" mt-8 h-[1000px] w-[2000px] text-center text-21xl text-maroon font-quicksand mx-auto items-center">
      <Hours/>
      <Days/>
      <Shifts/>
      <Info/>
        
     
      
      
      
     
    </div>
  );
}





