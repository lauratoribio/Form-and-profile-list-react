import React from "react";
import "./styles.css";

//Pasamos por prop todos los perfiles con ({ profiles })
export default function ProfileCard({ profiles }) {
  return (
    <>
      {/* Hacemos un bucle de todos los perfiles (con .map) que nos permita pintar uno a uno dichos perfiles */}
      {profiles.map((profile) => {
        return (
          //Tenemos un key por cada perfil que se pinta
          <div key={JSON.stringify(profile)} class="card">
            <div class="card__item">
             <img class="card__img" src={profile.userImage} alt="" width="200" />
            </div>
            <div class="card__item card__item--bg">
              <h3 class="card__title">{profile.userName}</h3>
              <p class="card__info">{profile.userAddress}</p>
              <p class="card__info">{profile.userEmail}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
