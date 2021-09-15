import React, {useState} from 'react';
import {Link} from "react-router-dom";
import uuid from "react-uuid";
const AddContact = (props) => {
    const [uname, setUname] = useState('');
    const [uemail, setUemail] = useState('');
    
    const addContactRecord = (e) => {
        e.preventDefault();
        if(e.target.name.value === '' || e.target.email.value === ''){
            alert('Name and Email should not be em pty');
            return false;
        }
        else{
           
            props.setCntDtails({id:uuid(),name:uname,email:uemail});
           setUname('');
           setUemail('');
            props.history.push("/");
        }
    }


    return (
        <div>
            <h2>Add Contact</h2>
            <div>
              <Link to="/"><button className="btn btn-secondary">Back to Home </button></Link>  
            </div>
            <form onSubmit={addContactRecord}>
  <div className="form-group">
    <label>Name:</label>
    <input type="text" className="form-control" id="name" name="name" aria-describedby="nameHelp" 
    placeholder="Enter name" value={uname} onChange={(e)=>{setUname(e.target.value)}}/>
    
  </div>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" 
    placeholder="Enter email" value={uemail} onChange={e=>setUemail(e.target.value)}/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    );
}

export default AddContact;

