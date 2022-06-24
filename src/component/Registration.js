import React, { useState } from "react";

const Registration = () => {

    const [registration,setRegistration] = useState({
        name:"",
        email:"",
        age:"",
        phone:"",
        password:"",
        confirmpassword:""

    });

    const [records,setRecords] = useState([]);

    const handleChange = (e)=>{
          const name = e.target.name;
          const value = e.target.value;
          console.log(name , value);

          setRegistration({... registration, [name]:value});
    }

    const handleSubmit = (e)=>{
            e.preventDefault();
            const newRecord = {...registration, id:new Date().getTime().toString()}
            console.log(newRecord);
            setRecords([...records, newRecord]);
            //console.log(records);

            setRegistration({name:"", email:"", age:"", phone:"", password:"", confirmpassword:""});
    }
  return (
    <>
    <h2>Registration form</h2>
    <form  action="" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label><br />
        <input
          type="name"
          className="form-control"
          name="name"
          id="name"
          placeholder="Enter name"
          value={registration.name}
           onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Email address:</label><br />
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          onChange={handleChange}
          placeholder="Enter email"
          value={registration.email}
        />
      </div>
      <div className="form-group">
        <label>Age:</label><br />
        <input
          type="number"
          className="form-control"
          name="age"
          id="age" onChange={handleChange}
          placeholder="Enter age"
          value={registration.age} 
        /><br/>
      </div>
      <div className="form-group">
        <label>phone:</label><br />
        <input
          type="number"
          className="form-control"
          name="phone"
          id="phone" onChange={handleChange}
          placeholder="Enter phone number"
          value={registration.phone}
        />
      </div>
      <div className="form-group">
        <label>Password:</label><b></b>
        <input
          type="password"
          className="form-control"
          name="password"
          id="password" onChange={handleChange}
          placeholder="Password"
          value={registration.password}
        />
      </div>
      <div className="form-group">
        <label>Confirm Password:</label><br />
        <input
          type="password"
          className="form-control"
          name="confirmpassword"
          id="cpassword" 
          placeholder="Confirm Password"
          onChange={handleChange}
          value={registration.confirmpassword}
        />
      </div>
      <br />
      <button type="submit" className="btn btn-primary form-group" id="bt">
        Submit
      </button>
    </form>

    
    <h4>Details</h4>
    <br/>
        {
            records.map((currEle)=>{
                return (
                   <div className="showDataStyle">
                   <p>Name: {currEle.name}</p>
                   <p>Email: {currEle.email}</p>
                   <p>Age: {currEle.age}</p>
                   <p>Phone: {currEle.phone}</p>
                   <p>Password: {currEle.password}</p>
                   {/* <p>{currEle.confirmpassword}</p> */}
                    <hr />
                   </div>
                )
            })
        }
    

</>
  );
};

export default Registration;
