import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>cargando perfil...</div>;
  }

  return isAuthenticated && (
    <div className="relative w-full h-32 flex items-center justify-center">
      <img className="rounded-full" src={user.picture} alt="photo profile" />
      <h2 className="font-quicksand text-whitesmoke ml-[20px]">{`Horario semanal de ${user.name}`}</h2>
    </div>
  );
}
