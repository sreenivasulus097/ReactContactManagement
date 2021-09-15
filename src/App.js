import './App.css';
import React,{useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import uuid from "react-uuid";
import ContactDetails from './components/ContactDetails';
import DeleteContact from './components/DeleteContact';
import UpdateContact from './components/UpdateContact';

function App() {
  const [contactDetails, setContactDetails] = useState([]); 
  const LOCAL_STORAGE_KEY = "contacts";

  const setCntDtails = (contact) =>{
console.log(contact.name+"::"+contact.email);
setContactDetails([...contactDetails,{key:uuid(),contact}]);

  }

const setFilteredContactDetails = (contact) => {
  console.log("set filtered contact details");
  setContactDetails(contact);
}

const updateCntDetails = (contact) => {
  
  const contactExstList = [...contactDetails];
  contactExstList.map((cnt)=>{
    if(cnt.contact.id === contact.id){
      cnt.contact.name = contact.name;
      cnt.contact.email = contact.email;
      return cnt;
    }
    return cnt;
  })
  setContactDetails(contactExstList);

}

useEffect(() => {
  const retrievedContactDetails = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if(retrievedContactDetails) setContactDetails(retrievedContactDetails);
  return () => {
    console.log("empty arrary useeffect");
  }
}, []);


  useEffect(() => {
    console.log("use effect called set");
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contactDetails));
    console.log(contactDetails);
    return () => {
      console.log("clean up");
    }
  }, [contactDetails])

  return (
    <div className="App">
     <h1>Contact Management</h1>
     <Router>
       <Switch>
         <Route path="/"  exact
         render={(props) => <ContactList {...props} displayRetrievedCntDetails={contactDetails}  /> }
         />
         <Route path="/add"  
         render={(props) => <AddContact {...props} setCntDtails={setCntDtails}  /> }
         />
          <Route path="/contact/:id"  
         render={(props) => <ContactDetails {...props} getCntDetails={contactDetails}  /> }
         />
         <Route path="/delete/:id"  
         render={(props) => <DeleteContact {...props} getCntDetails={contactDetails} setFilteredContactDetails={setFilteredContactDetails} /> }
         />
          <Route path="/update/:id"  
         render={(props) => <UpdateContact {...props} getCntDetails={contactDetails} updateContactDetails={updateCntDetails} /> }
         />
       </Switch>
     </Router>

    </div>
  );
}

export default App;
