import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { addUser} from "../redux/user/userActions"  // Asegúrate de ajustar la ruta correcta

export default function LoadDays() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { user } = useAuth0(); // Asegúrate de que estás utilizando useAuth0 correctamente

  const onSubmit = handleSubmit((data) => {
    const userData = {
      name: user.name,
      email: user.email,
      picture: user.picture,
      notedDays: data.notedDays,
    };

    dispatch(addUser(userData));
    
  });

  return (
    <div className="w-[250px] h-[100px] bg-blue-500 p-4 rounded-md">
      <label className="font-quicksand text-whitesmoke mb-2 block">
        Ingrese los días que asiste para comenzar a usar BarbellPlanner
      </label>
      <input
        type="text"
        className="border border-gray-300 p-2 mb-2 rounded-md"
        {...register("notedDays", {
          required: {
            value: true,
            message: "Ingresa el número de días que vas a asistir",
          },
          pattern: {
            value: /^[1-5]$/,
            message: "Ingresa un número del 1 al 5",
          },
        })}
      />
      {errors.notedDays && <span>{errors.notedDays.message}</span>}
      <button
       className="bg-green-500 text-white p-1 rounded-md"
       type= "button"
       onClick={onSubmit}
       >
        Ingresar
      </button>
    </div>
  );
}

  