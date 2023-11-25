import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import css from "./app.module.css"

export function App() {
  
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) ?? [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ];
  });

  const [filter, setFilter] = useState("");
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))}, [contacts]);

  
  const formSubmitHandler = (data) => {
    const { name, number } = data;
    const newContact = { id: nanoid(), name, number };
    
    if(contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
    alert(`${newContact.name} is already in the contacts`);
    return;
  }
    
   setContacts(prevContacts => [newContact, ...prevContacts]);

  }
   
  const handleFilterChange = (input) => {
    setFilter(input); 
  }

  const deleteContact = (contactId) => { 
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId))
   }

  
  const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  
   return (
      <div className={css.container}>
        
        <h1 className={css.title}>Phonebook</h1>
        
        <ContactForm onSubmit={formSubmitHandler} />
        
        <h1 className={css.title}>Contacts</h1>

        <Filter onFilter={handleFilterChange} />
        
        <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
       
      </div>

  )
  
}