// import React from 'react'

import { useForm } from "../hooks/useForm"
// import { useForm } from "../hooks/useForm"

// import { useEffect } from "react"
// import { Message } from "./Message"

export const FormWithCustomHook = () => {
    
    const { formState, onResetForm, onInputChange, username, email, password } = useForm ({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState
   
  return (
    <>
        <h1>Form with cusmon hook</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={ onInputChange }
        />       

        <input 
            type="email"
            className="form-control mt-4" // mt-4 es margin top = 4 de Bootstrap
            placeholder="example@microsoft.com"
            name="email"
            value={email}
            onChange={ onInputChange }
        />

        <input 
            type="password"
            className="form-control mt-4" // mt-4 es margin top = 4 de Bootstrap
            placeholder="contraseña"
            name="password"
            value={password}
            onChange={ onInputChange }
        />

        <button onClick={ onResetForm } className="btn btn-primary mt-4">Reset</button>

        <hr />      
    </>
  )
}
