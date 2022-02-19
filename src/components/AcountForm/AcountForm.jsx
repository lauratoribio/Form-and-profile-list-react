import React, { useState } from 'react'
import "./styles.css"

export default function AcountForm({ addProfile }) {

  //1. Hacemos un preventDefault para evitar el comportamiento por defecto del Submit de recargar la pagina
  const submitForm = (e) => {
    e.preventDefault()
    //Añadimos al submitForm  que tenga en cuenta los cambios y los añada al state
    addProfile(user)
    setUser({
      userName: "",
      userAddress: "",
      userEmail: "",
      userImage: ""
    })

  }

  //2.Creamos un estado inicial donde guardaremos los datos del formulario
  const [user, setUser] = useState({
      userName: "",
      userAddress: "",
      userEmail: "",
      userImage: ""
  })

  //deconstruimos nuestro obj para no llamarlo user.fistName, user.lastName, ect
  const { userName, userAddress, userEmail, userImage } = user

  //3.Creamos un funcion handleChange que se encargará de relacionar el name del input con el valor del state
  const handleChange = (e) => {
    const {name, value} = e.target

    //Clonamos el estado actual y reemplazo solo el valor input que ejecuto el evento
    const newUser = {
      ...user,
      [name]: value
    }
    //Sincronizamos el estado de nuevo
    setUser(newUser)
  }


  return (
    <div class="container">
        <h2>Create Profile</h2>
        <form onSubmit={submitForm} class="form">
           <label>
            <input class="form__item" type="text" name="userName" value={userName} onChange={handleChange} placeholder="User name"/>
           </label>

           <label>
            <input class="form__item" type="text" name="userAddress" value={userAddress} onChange={handleChange} placeholder="Address"/>
           </label>

           <label>
            <input class="form__item" type="text" name="userEmail" value={userEmail} onChange={handleChange} placeholder="Email"/>
           </label>

           <label>
            <input class="form__item" type="text" name="userImage" value={userImage} onChange={handleChange} placeholder="Image"/>
           </label>

           <button class="form__btn form__btn--hover" type="submit">Create</button>
        </form>    
    </div>
  )
}
