import { useAuth0 } from "@auth0/auth0-react"

export default function Dropdown() {
  const { logout } = useAuth0()
  return (
    <div className="flex items-center justify-center h-[200px] absolute left-[1800px] mt-[250px]">
      <div className="w-full max-w-sm rounded-lg ">
        <div
          aria-label="header"
          className="flex flex-col space-x-4 items-center p-4 grid-cols-1"
        >
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className=" text-2xl text-maroon font-quicksand rounded-3xs shadow-[0px_5px_4px_rgba(0,_0,_0,_0.25)] w-[166px] h-[46px]"
          >
            Salir
          </button>
        </div>
      </div>
    </div>
  )
}
