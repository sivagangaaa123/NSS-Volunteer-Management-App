import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewAllVolunteers = () => {
    
      const [data, changeData] = useState([])
   const fetchData = () => {
      axios
      .post("http://localhost:3500/view-all-volunteers")
      .then((response) => {
        changeData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
<div>
    <NavigationBar/>
      <h1><center>View All Volunteers</center></h1>
      <div className="container">
        <div className="row">
          <div className="col col-12">
            <table className="table table-bordered table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Volunteer ID </th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone </th>
                  <th>Date of Birth </th>
                  <th>Gender</th>
                  <th>Blood Group</th> 
                  <th>Department</th>
                  <th>Year of Study</th>
                  <th>Camp Name</th>
                  <th>Hours Completed</th>
                  <th>Address</th>
                  <th>Unit Number</th>
                </tr>  
              </thead>

              <tbody>
                {data.map((value, index) => (
                  <tr key={index}>
                    <td>{value.VolunteerID}</td>
                    <td>{value.FullName}</td>
                    <td>{value.Email}</td>
                    <td>{value.Phone}</td>
                    <td>{value.DateofBirth}</td>
                    <td>{value.Gender}</td>
                    <td>{value.BloodGroup}</td>
                    <td>{value.Department}</td>
                    <td>{value.YearofStudy}</td>
                    <td>{value.CampName}</td>
                    <td>{value.HoursCompleted}</td>
                    <td>{value.Address}</td>
                    <td>{value.UnitNumber}</td>
                    <td>
                      <button className="btn btn-primary">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  
</div>    
    </div>
  )
}

export default ViewAllVolunteers