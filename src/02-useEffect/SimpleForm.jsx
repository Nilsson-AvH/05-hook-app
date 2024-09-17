// import React from 'react'

import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'nicho@google.com'
    })

    const { username, email } = formState

    const onInputChange = ({target}) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [ name ]: value
        })
        // console.log({name, value})
    }

    useEffect(() => {
        // console.log('useEffect Called !!!')
    }, [])

    useEffect(() => {
        // console.log('formState Changed !!!')
    }, [formState])
    
    useEffect(() => {
        // console.log('email Changed !!!')
    }, [email])    

  return (
    <>
        <h1>Simple Form</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={ onInputChange }
            />

           

        {
            (username === 'strider2') && < Message />
        }

        <hr />      

        <input 
            type="email"
            className="form-control mt-4" // mt-4 es margin top = 4 de Bootstrap
            placeholder="example@microsoft.com"
            name="email"
            value={email}
            onChange={ onInputChange }
        />

        <hr />      
    </>
  )
}
