import React from 'react';
import { Link } from 'react-router-dom';

const DeleteContact= (props) =>{
    console.log("delete function")
    console.log(props);
    console.log(props.match.params.id);
    
    function filteredContacts(){
       
          props.setFilteredContactDetails(props.getCntDetails.filter((contact)=>{
            return props.match.params.id !== contact.contact.id;
          }));
     alert("Contact has been deleted successfully");
     props.history.push('/'); 
    }
     
     return (
        <div>
            <h2> Delete Contact Page</h2>
            <h5> Are you sure you want to Delete the contact {props.match.params.id}</h5>
            <button onClick={filteredContacts}>Yes</button>&nbsp;
            <Link to="/"><button>No</button></Link>
         
        </div>
    )
}

export default DeleteContact;
