import React, { useEffect, useState } from "react"
import Swal from "sweetalert2"
import { useSelector, useDispatch } from "react-redux"
import {
  getUserInfo,
  addTurnToUser,
  getUserDays,
  deleteTurnToUser,
} from "../redux/user/userActions"

const daysAndTimes = [
  { day: "lunes", time: "07.00" },
  { day: "martes", time: "07.00" },
  { day: "miercoles", time: "07.00" },
  { day: "jueves", time: "07.00" },
  { day: "viernes", time: "07.00" },
  { day: "lunes", time: "08.00" },
  { day: "martes", time: "08.00" },
  { day: "miercoles", time: "08.00" },
  { day: "jueves", time: "08.00" },
  { day: "viernes", time: "08.00" },
  { day: "lunes", time: "09.30" },
  { day: "martes", time: "09.30" },
  { day: "miercoles", time: "09.30" },
  { day: "jueves", time: "09.30" },
  { day: "viernes", time: "09.30" },
  { day: "lunes", time: "14.00" },
  { day: "martes", time: "14.00" },
  { day: "miercoles", time: "14.00" },
  { day: "jueves", time: "14.00" },
  { day: "viernes", time: "14.00" },
  { day: "lunes", time: "15.00" },
  { day: "martes", time: "15.00" },
  { day: "miercoles", time: "15.00" },
  { day: "jueves", time: "15.00" },
  { day: "viernes", time: "15.00" },
  { day: "lunes", time: "16.00" },
  { day: "martes", time: "16.00" },
  { day: "miercoles", time: "16.00" },
  { day: "jueves", time: "16.00" },
  { day: "viernes", time: "16.00" },
  { day: "lunes", time: "17.00" },
  { day: "martes", time: "17.00" },
  { day: "miercoles", time: "17.00" },
  { day: "jueves", time: "17.00" },
  { day: "viernes", time: "17.00" },
  { day: "lunes", time: "18.00" },
  { day: "martes", time: "18.00" },
  { day: "miercoles", time: "18.00" },
  { day: "jueves", time: "18.00" },
  { day: "viernes", time: "18.00" },
  { day: "lunes", time: "18.30" },
  { day: "martes", time: "18.30" },
  { day: "miercoles", time: "18.30" },
  { day: "jueves", time: "18.30" },
  { day: "viernes", time: "18.30" },
  { day: "lunes", time: "19.00" },
  { day: "martes", time: "19.00" },
  { day: "miercoles", time: "19.00" },
  { day: "jueves", time: "19.00" },
  { day: "viernes", time: "19.00" },
  { day: "lunes", time: "20.00" },
  { day: "martes", time: "20.00" },
  { day: "miercoles", time: "20.00" },
  { day: "jueves", time: "20.00" },
  { day: "viernes", time: "20.00" },
  { day: "lunes", time: "21.00" },
  { day: "martes", time: "21.00" },
  { day: "miercoles", time: "21.00" },
  { day: "jueves", time: "21.00" },
  { day: "viernes", time: "21.00" },
]

export default function Shifts() {
  const { user_noted_days, days } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [disabledTurns, setDisabledTurns] = useState([
    "lunes 07.00",
    "martes 07.00",
    "miercoles 07.00",
    "jueves 07.00",
    "viernes 18.30",
    "martes 18.30",
    "miercoles 18.30",
    "jueves 18.30",
    "viernes 18.30",
  ])

  useEffect(() => {
    dispatch(getUserInfo())
    dispatch(getUserDays())
  }, [dispatch])

  const addTurn = () => {
    Swal.fire("agendado!", "", "success")
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  const isDayAlreadyNoted = (value) => {
    const cadena = value
    // Separar la cadena en un array utilizando el espacio como delimitador
    const parte = cadena.split(" ")
    // partes contendrá ["martes", "18.00"]
    const day = parte[0] // "martes"
    const time = parte[1] // "18.00"

    if (days.includes(day)) {
      return true
    }
  }

  const handleConfirmTurno = (value) => {
    Swal.fire({
      title: `${value}`,

      showCancelButton: true,
      confirmButtonText: "agendar turno",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const turn = value
        const userName = "sofia27"

        try {
          isDayAlreadyNoted(turn)
            ? Swal.fire("Ya estás agendado para este día", "", "warning")
            : (await addTurnToUser(turn, userName)) && addTurn()
        } catch (error) {
          console.error("Error al agendar el turno:", error.message)
          Swal.fire("Hubo un error al agendar el turno", "", "error")
        }
      }
    })
  }

  const handleDivClick = (value) => {
    if (disabledTurns.includes(value)) {
      return
    }
    // Verificar si ya está agendado antes de mostrar el SweetAlert
    else if (!user_noted_days.includes(value)) {
      handleConfirmTurno(value)
    } else {
      Swal.fire({
        title: `${value}`,
        text: "queres eliminarte de este turno?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "si",
      }).then((result) => {
        if (result.isConfirmed) {
          const turn = value
          const userName = "sofia27"
          try {
            deleteTurnToUser(turn, userName)
            Swal.fire({
              title: "Deleted!",
              text: `fuiste eliminado del horario: ${value}`,
              icon: "success",
            })
            setTimeout(() => {
              window.location.reload()
            }, 1000)
          } catch (error) {
            console.error("Error al eliminar el turno:", error.message)
            Swal.fire("Hubo un error al eliminar el turno", "", "error")
          }
        }
      })
    }
  }

  return (
    <div className="grid grid-cols-5 items-center items-center justify-center mt-[58px] ml-[460px] w-[1137px]">
  {daysAndTimes.map((item, index) => {
    const value = `${item.day} ${item.time}`;
    const isCrossfitClass = user_noted_days.includes(value) ? "crossfit" : "";
    const isDisabled = disabledTurns.includes(value);
    const isSpecialTurn = ""

    return (
      <div
        key={index}
        value={value}
        onClick={() => handleDivClick(value)}
        className={`mx-[3px] my-[10px] rounded-3xs shadow-[0px_5px_4px_rgba(0,_0,_0,_0.25)] w-[166px] h-[46px] ${isCrossfitClass} ${
          isDisabled
            ? "cursor-not-allowed shadow-[0px_0px_0px_rgba(0,_0,_0,_0.25)]"
            : ""
        } ${
          isSpecialTurn
            ? "bg-whitesmoke text-red text-[33px]"
            : "bg-whitesmoke"
        }`}
      >
        {isCrossfitClass && <span>CrossFit</span>}
      </div>
    );
  })}
</div>
  )
}
