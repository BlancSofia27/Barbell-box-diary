export default function Info(){
    return(
        <div className="flex mt-[40px] mx-[500px]">
          <div className="flex items-center mx-8">
             <div className=" bg-limegreen-100 w-[23px] h-[23px]" />
      <div className=" text-5xl text-limegreen-100 w-[220px] h-8">
        Poca concurrencia
      </div>
      </div>

      <div className="flex items-center mx-8">
      <div className=" bg-goldenrod w-[23px] h-[23px]" />
      <div className=" text-5xl text-goldenrod w-[270px] h-8">
        Mitad de cupos llenos
      </div>
      </div>

      <div className="flex items-center mx-8 ">
      <div className="bg-red w-[23px] h-[23px]" />
      <div className=" text-5xl text-red w-[150px] h-8">
        sin cupos
      </div>
      </div>
        </div>
    )
}