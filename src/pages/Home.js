import React from 'react'
import Contacts from '../components/Contacts'
import Form from '../components/Form'

function Home({formSub,contacts,deleteContact,toggFav}) {
  console.log(contacts)
  return (
    <div className='container my-5'>
      <div className='row justify-content-sm-center my-5'>
      <Form formSub={formSub}/>
      <div className="row">
      {contacts.map((singleContact)=>{
          return <Contacts key={singleContact.id} contact={singleContact} deleteContact={deleteContact} toggFav={toggFav} />
      })}
      {contacts.length === 0 && <div>No Contacts to show</div> }

      </div>
      
      </div>
    </div>
  )
}

export default Home