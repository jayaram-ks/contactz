import './App.css'
import React, { Component, useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Favourite from './pages/Favourite'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Nav from './components/Nav'

function App (){
  const [contacts, setContacts] = useState([])
  useEffect(() => {
    const getContacts = async () =>{
      const contactsFromServer = await fetchContacts()
      setContacts(contactsFromServer)
    }
    getContacts()

  }, [])
  const formSub =  async (data) =>{
    const res = await fetch("http://localhost:3004/contacts",{
      method: "POST",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify(data),
    })
    const newdata = await res.json()
    if(res.ok){
      setContacts([...contacts,newdata])
    }
    
  }
  const deleteContact = async (id) => {
    const res = await fetch(`http://localhost:3004/contacts/${id}`,{
    method:"DELETE"
   }) 

      if(res.status===200){
        let newContacts = contacts.filter((singleContact) => {
          return singleContact.id !== id
        })
        setContacts(newContacts)
      }
  }
  

  const getSinContact = async(id) => {
    const res = await fetch(`http://localhost:3004/contacts/${id}`)
    const data = await res.json()
    return data
  } 
    
  
  const toggFav = async (id)=>{ 
    const singleCon = await getSinContact(id)
    const updatask = {...singleCon,fav: !singleCon.fav}

    const res = await fetch(`http://localhost:3004/contacts/${id}`,{
      method:"PUT",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(updatask)
    })

        if(res.status===200){
            let updContact = contacts.map((singleContact)=>{
              return singleContact.id == id?{ ...singleContact,fav : !singleContact.fav } : singleContact
            })
            setContacts(updContact)
        }

  }

  const fetchContacts = async () => {
    const res = await fetch("http://localhost:3004/contacts")
    const data = await res.json()
    return data
  }
  
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/'>  
            <Home formSub={formSub} contacts={contacts} deleteContact={deleteContact} toggFav={toggFav}/>
          </Route>
          <Route path='/favourite'>
            <Favourite contacts={contacts} deleteContact={deleteContact} toggFav={toggFav} />
          </Route>
          <Route path='*'>
            <NotFound  />
          </Route>
        </Switch> 
      </Router>
    );
  
}

export default App

//aded by renjith
