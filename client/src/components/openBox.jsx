import gymLogo from '../assets/gym.svg'
import { useForm } from "react-hook-form"

export default function OpenBoxCard(){

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()




 
 


  const onSubmit = handleSubmit((data) => {

  })


    return(
        <div className="flex flex-col items-center p-3 ml-[350px] w-[400px] h-[600px] bg-white rounded-md shadow-lg">
  <section className="flex justify-center items-center mt-[34px] w-24 h-24 rounded-full shadow-md bg-gradient-to-r from-maroon to-[#dc6e64] ">
    <img className='w-16'
    src={gymLogo} alt="" />
  </section>

  <section className="flex flex-col items-center mt-[30px] border-gray-300">
    
      <h3 className="text-gray-600 font-semibold text-20xl bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A]">Proximo open box:</h3>
      <h3 className=" text-lg font-bold">
        inscribite aca:</h3>
        <label className="text-20xl"
        htmlFor="">Nombre:</label>
        <input 
        className="bg-whitesmoke text-2xl"
        type="text" 
        {...register("name", {
          required: {
            value: true,
            message: "campo requerido",
          },
        })}
        />
        {errors.name && <span>{errors.name.message}</span>}
        <label className='text-20xl'
        htmlFor="">Celular:</label>
        <input 
        className="bg-whitesmoke text-2xl"
        type="text"
        {...register("phone",{
          required:{
          value: true,
          message: "campo requerido",
        },
          pattern:{
            value:/^[0-9]+$/,
            message: "el campo solo acepta numeros",
          },
        })}
        />
        {errors.phone && <span>{errors.phone.message}</span>}
        {errors.name && errors.phone
         ?<button className="flex justify-center font-quicksand text-20xl items-center mt-[50px] w-[260px] h-14 rounded-[10px] shadow-md bg-gradient-to-r from-maroon to-[#dc6e64] hover:from-[#C9A9E9] hover:to-[#7EE7FC] hover:cursor-pointer hover:scale-110 duration-300">
            inscribirme
        </button>
        :<button className="flex justify-center font-quicksand text-20xl items-center mt-[50px] w-[260px] h-14 rounded-[10px] shadow-md bg-gradient-to-r from-maroon to-[#dc6e64] hover:from-[#C9A9E9] hover:to-[#7EE7FC] hover:cursor-pointer hover:scale-110 duration-300" type='submit'>
        inscribirme
    </button>}
    
  </section>
</div>
    )
}