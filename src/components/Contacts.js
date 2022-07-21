import React from 'react'

function Contacts({contact,deleteContact,toggFav}) {
  return (
    <div className='col col-md-4 mt-3'>
      <div className='card shadow-sm w-100'>
        <div className='m-1 px-2'>{contact.name}</div>
        <div className='m-1 px-2'><i  onClick={()=>toggFav(contact.id)} className={contact.fav?"fas fa-star text-warning":" far fa-star text-warning"}></i></div>
        <div className='m-1 px-2'>{contact.email}</div>
        <div className='m-1 px-2'>{contact.phone}</div>
        <button className='btn btn-danger btn-sm w-25 m-3' onClick={()=>deleteContact(contact.id)}>Delete</button>
      </div>
    </div>
  )
}

export default Contacts