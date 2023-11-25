import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  contacts: [
     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}, ],
}



export const contactsSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
      state.contacts.unshift(action.payload);
    },

    remove: (state, action) => {

      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = contactsSlice.actions;

export default contactsSlice.reducer;