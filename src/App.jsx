import './App.css'
import Nav from './components/Navigation'
import Patient from './components/Patient.jsx'
import Dashboard from './components/Dashboard.jsx'
import PatientDetail from './components/patientDetail.jsx'
import { useState, useEffect } from "react";
const token = btoa(`${import.meta.env.VITE_AUTH_USER}:${import.meta.env.VITE_AUTH_PASS}`);


function App() {
  const [patient, setData] = useState([]);
  const url = import.meta.env.VITE_API_URL;
  useEffect(() => {

    fetch(url, {
      headers: {
        "Authorization": `Basic ${token}`
      }
    })
      .then(response => response.json())
      .then(patient => setData(patient))
      .catch(error => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="main">

      <Nav />

      <div className="sub-main">


        <div className="patients-list">
          <div className="title">
            <p>Patients</p>
            <img src={"src/assets/search_FILL0_wght300_GRAD0_opsz24.svg"} alt="Search Icon" />
          </div>

          {
            patient.map((patient) => {
              return (
                <Patient
                  name={patient.name}
                  age={patient.age}
                  gender={patient.gender}
                  photo={patient.profile_picture}

                />
              )
            })
          }


        </div>


        <div className="middle-container">
          {
            patient.map((patient) => {
              if (patient.name != "Jessica Taylor") {
                return;
              }
              const diagnosticH = patient.diagnostic_history;
              return (
               
                <>

                
                  <Dashboard
                    diagnosticH={diagnosticH}

                  />
                
                </>

                
              )
            })
          }
          <div className="diagnostic-list">

            <h3>Diagnostic List</h3>
            <div className="table-header">
              <p>Problem/Diagnosis</p>
              <p>Description</p>
              <p>Status</p>
            </div>

            <div className="table-content">
              {
                patient.map((patient) => {

                  if (patient.name != "Jessica Taylor") {
                    return;
                  }
                  const diagnostics = patient.diagnostic_list;
                  return (
                    diagnostics.map(diagnostics => {
                      return (
                        <div className='single-line'>
                          <p>{diagnostics.name} </p>
                          <p>{diagnostics.description}</p>
                          <p>{diagnostics.status}</p>
                        </div>
                      )
                    })
                  )
                })
              }
            </div>
          </div>
        </div>


        <div className="side-container">

          {
            patient.map((patient) => {

              if (patient.name != "Jessica Taylor") {
                return;
              }

              return (
                <PatientDetail
                  name={patient.name}
                  gender={patient.gender}
                  photo={patient.profile_picture}
                  DOB={patient.date_of_birth}
                  phone={patient.phone_number}
                  emergencyPhone={patient.emergency_contact}
                  insurance={patient.insurance_type}
                  lab={patient.lab_results}
                />

              )
            })
          }
        </div>

      </div>


    </div>
  )
}

export default App
