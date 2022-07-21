import React from 'react'
import { useForm } from "react-hook-form"

function Form({formSub}) {
    const { register, handleSubmit, watch, formState: { errors },reset } = useForm()
    const onSub = (data) => {
        data.id =  Date.now()
        data.fav = false
        formSub(data)
        reset()
    }
  return (
    <div className="col-sm-4 shadow rounded g-5 m-4 p-4">
        <form onSubmit={handleSubmit(onSub)}>
            <div className="form-group p-1">
                <label for="col-form-label">Name:</label>
                <input {...register("name",{required:"Name is required"})}  type="name" className="form-control"  placeholder="Enter name"/>
                {errors.name && <small className="text-danger">{errors.name.message}</small>}
                
            </div>
            <div className="form-group p-1">
                <label for="col-form-label">Email:</label>
                <input {...register("email",{required:"Email is required",
                pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address"
      }})}  type="email" className="form-control"  placeholder="Enter email"/>
                {errors.email && <small className='text-danger'>{errors.email.message}</small>}
                
            </div>
            <div className="form-group p-1">
                <label for="col-form-label">Phone:</label>
                <input {...register("phone",{required:"Phone is required"})}  type="phone" className="form-control"  placeholder="Enter phone"/>
                {errors.phone && <small className='text-danger'>{errors.phone.message}</small>}
                
            </div>
            
            <button type="submit" className="btn btn-primary m-1">Add Contact</button>
        </form>
    </div>
  )
}

export default Form