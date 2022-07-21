import React from 'react'
import Contacts from '../components/Contacts'

function Favourite({contacts,deleteContact,toggFav}) {
  return (
    <div className="row">
      {contacts.map((singleContact)=>{
          return singleContact.fav &&( <Contacts key={singleContact.id} contact={singleContact} deleteContact={deleteContact} toggFav={toggFav} /> )
      })}
      {contacts.filter(singleC => singleC.fav).length === 0 && <div>No Favourite to show</div> }

      </div>
  )
}

export default Favourite