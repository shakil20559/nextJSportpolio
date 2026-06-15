'use client'
import React, { useState } from 'react'
import './Contact.css'

import { BsSend } from 'react-icons/bs'

const ContactForm = () => {
   
   const initalValues = {username:"", email:"", message:""};
   const [formValues, setFormValues] = useState(initalValues);
   const [formError, setFormError] = useState("")

    const handleChange = (e) =>{
        const {name, value} = e.target;

        setFormValues({
            ...formValues, 
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    setFormError(validate(formValues));

        const errors = validate(formValues);
        setFormError(errors);
        if(Object.keys(errors).length === 0){

        setTimeout(() => {
            setFormValues(initalValues);
        }, 3000);
    }
    }

    function validate(index){
        const errors = {};
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if(index.username.trim() === ''){
            errors.username= 'Name is required!'
        }
        if(index.email.trim() === ''){
        errors.email = 'Email is required!'
      } 
      else if(!pattern.test(index.email)){
        errors.email = 'Invaild Email!'
      }

        if(index.message.trim() === ''){
            errors.message= 'You must write something!'
        } else if (index.message.length < 20){
            errors.message = 'At least 20 characters!';
        }       

        return errors;
    
    }
    const textLeft = 200 - formValues.message.length;
  return (
    <form 
        onSubmit={handleSubmit} 
        className="form_card 
        max-w-lg py-6 px-2 lg:px-4
        rounded-3xl border border-violet-500/20"       
    > 
    {/* <pre className='text-white'>{JSON.stringify(formValues, null, 2) } </pre> */}
        <div className=" flex flex-col  gap-5">
            <div className='w-full'>
              <input className='input_style flex-1;'
                type="text" 
                name='username'
                placeholder='Enter Name' 
                value={formValues.username}
                onChange={handleChange}
             />
             <p  className=" mt-1 text-red-400 italic text-lg">
                {formError && formError.username } 
            </p>
            </div>
            <div className=''>
             <input className='input_style flex-1'
                type="text"
                name='email' 
                placeholder='Enter Email'
                value={formValues.email}
                onChange={handleChange} 
             />
             <p className=" mt-1 text-red-400 italic text-lg">
                {formError && formError.email } 
            </p>
            </div>
        </div>

        <div className='w-full relative'>       
            <textarea className='input_style my-5'
            maxLength={250}
            name='message'
            value={formValues.message}
            rows={4}
            placeholder='Write Something...'
            onChange={handleChange}
            > 
        </textarea>
        <p className='-mt-3 text-red-400 italic text-lg'>
            {formError && formError.message } 
        </p>
        <p className="absolute bottom-1 right-3 text-xs md:text-sm text-gray-400">
            Left: {textLeft}
        </p>
        </div>
        <button 
            type="submit" className='btn_globalStyle w-full mt-5 mb-2'>
                Send Message 
                <BsSend className='ml-5'/> 
        </button>
    </form>
  )
}

export default ContactForm