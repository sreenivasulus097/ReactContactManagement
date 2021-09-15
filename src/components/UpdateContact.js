import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function UpdateContact(props) {
    console.log("Update contact page");
    console.log(props);
    const cnts = props.getCntDetails.find((cnt)=>{
        return props.match.params.id === cnt.contact.id
   });
    const [uname, setUname] = useState(cnts.contact.name);
    const [uemail, setUemail] = useState(cnts.contact.email);
    
    const addContactRecord = (e) => {
        e.preventDefault();
        if(e.target.name.value === '' || e.target.email.value === ''){
            alert('Name and Email should not be em pty');
            return false;
        }
        else{
           
          props.updateContactDetails({id:props.match.params.id,name:uname,email:uemail});
           setUname('');
           setUemail('');
            props.history.push("/");
        }
        
    }

    console.log(cnts);
    
    return (
       
        <div>
            <h3>Update Contact Page</h3>
            <form onSubmit={addContactRecord}>
  <div className="form-group">
    <label>Name:</label>
    <input type="text" className="form-control" id="name" name="name" aria-describedby="nameHelp" 
    placeholder="Enter name" value={uname} onChange={(e)=>{setUname(e.target.value)}} />
    
  </div>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" 
    placeholder="Enter email" value={uemail} onChange={e=>setUemail(e.target.value)} />
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
  &nbsp;<Link to="/"><button className="btn btn-primary">Cancel</button></Link>
</form>

        </div>
    )
}

export default UpdateContact
