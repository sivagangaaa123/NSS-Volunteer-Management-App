import axios from 'axios'
import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const AddVolunteer = () => {
    const[input, changeInput]=useState({
        VolunteerID: "",
        FullName: "",
        Email: "",
        Phone: "",
        DateofBirth: "",
        Gender: "",
        BloodGroup: "",
        Department: "",
        YearofStudy: "",
        CampName: "",
        HoursCompleted: "",
        Address: "",
        UnitNumber: ""
        })

    const inputhandler=(event)=>{
        changeInput({
            ...input,[event.target.name]:event.target.value
        })
    }
    const readValue= () =>{
        console.log(input)
        axios.post("http://localhost:3500/add-volunteer",input).then(
            (Response) =>{
                console.log(Response.data)
                alert("Volunteer Added Successfully")
            }
        ).catch(
            (Error) =>{
                console.log(Error)
            }
        )
    }
  return (
    <div>
<NavigationBar/>
<h1><center>Add Volunteer</center></h1>
         <div className="container">
             <div className="row">
                 <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <div className="row g-3">
                          <div className="col col-12 col-sm-6">
     <label className="form-label">Volunteer ID</label>
  <input
        type="text"
        className="form-control"
        required
        name="VolunteerID"
        value={input.VolunteerID}
        onChange={inputhandler}
    />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">Full Name</label>
    <input
        type="text"
        className="form-control"
        required
        name="FullName"
        value={input.FullName}
        onChange={inputhandler}
    />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">Email</label>
    <input
        type="email"
        className="form-control"
        required
        name="Email"
        value={input.Email}
        onChange={inputhandler}
    />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">Phone</label>
    <input
        type="number"
        className="form-control"
        name="Phone"
        value={input.Phone}
        onChange={inputhandler}
    />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">Date of Birth</label>
    <input
        type="date"
        className="form-control"
        name="DateofBirth"
        value={input.DateofBirth}
        onChange={inputhandler}
    />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
   <label className="form-label">Gender</label>
    <input
        type="text"
        className="form-control"
        name="Gender"
        value={input.Gender}
        onChange={inputhandler}
    />
</div>
<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">Blood Group</label>
    <input
        type="text"
        className="form-control"
        name="BloodGroup"
        value={input.BloodGroup}
        onChange={inputhandler}
    />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">Department</label>
    <input
        type="text"
        className="form-control"
        name="Department"
        value={input.Department}
        onChange={inputhandler}
    />
</div>
<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">Year of Study</label>
    <input
        type="number"
        className="form-control"
        name="YearofStudy"
        value={input.YearofStudy}
        onChange={inputhandler}
    />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">CampName</label>
    <input
        type="text"
        className="form-control"
        name="CampName"
        value={input.CampName}
        onChange={inputhandler}
    />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">Hours Completed </label>
    <input
        type="text"
        className="form-control"
        name="HoursCompleted"
        value={input.HoursCompleted}
        onChange={inputhandler}
    />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">Address</label>
    <input
        type="text"
        className="form-control"
        name="Address"
        value={input.Address}
        onChange={inputhandler}
    />
</div>

<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label className="form-label">Unit Number</label>
    <input
        type="number"
        className="form-control"
        name="UnitNumber"
        value={input.UnitNumber}
        onChange={inputhandler}
    />
</div>

<div className="col-12 text-center">
    <button className="btn btn-success" onClick={readValue}>
        Submit
    </button>
</div>
</div>
</div>
</div>
</div>
    </div>
  )
}

export default AddVolunteer






