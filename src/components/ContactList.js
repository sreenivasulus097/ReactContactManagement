import React from 'react';
import uuid from "react-uuid";
import {Link} from "react-router-dom";
import trashImg from "../public/images/trash.png";
import editImg from "../public/images/edit.png";

const ContactList = (props) => {
console.log(props);
const cntList = props.displayRetrievedCntDetails;
console.log("contact list::"+cntList.length);
    return (
        <div>
            <h2>Contact List</h2>
            <div>
               <Link to="/add"><button className="btn btn-primary">Add Contact</button></Link> 
            </div>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
      {cntList.map((contact) => {
          console.log("name::"+contact.contact.name);
          return( <tr key={uuid()}>
            <td ><Link to={`/contact/${contact.contact.id}`}>{contact.contact.id}</Link></td>
            <td>{contact.contact.name}</td>
            <td>{contact.contact.email}</td>
            <td>
                <Link to={`/delete/${contact.contact.id}`}><img src={trashImg} alt="Trash Img"/></Link>
                <Link to={`/update/${contact.contact.id}`}><img style={{height:23}}src={editImg} alt="Edit Img"/></Link>
            </td>
          </tr>);
       
      }
      )
    }
    
    
  </tbody>
</table>


            
        </div>
    );
}

export default ContactList
