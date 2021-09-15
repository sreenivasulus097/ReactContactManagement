import React from 'react';
import {Link} from 'react-router-dom';

const  ContactDetails = (props) => {
    console.log('contact details page');
    const contacts = props.getCntDetails;
 console.log(props);
 let fetchedValues ='';


contacts.map((cnt)=>{
    if(cnt.contact.id === props.match.params.id){
        fetchedValues = cnt.contact;
    }
    return cnt;
})

    return (
        <div>
            <h3>Contact Details page</h3>
            <h5>ID:</h5><p>{fetchedValues.id}</p>
            <h5>Name:</h5><p>{fetchedValues.name}</p>
            <h5>Email:</h5><p>{fetchedValues.email}</p>
          <Link to="/"><button>Back To Home</button></Link>
        </div>
    )
}

export default ContactDetails;
