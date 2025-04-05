import './patientDetail.css'


function PatientDetail(props){

    const lab_results = props.lab;
    return (
        <div className='patient-detail-main'>
            <div className="patient-detail-main-container">
                <div className="patient-profile-container">
                    <img src={props.photo} alt="profile image" />
                    <p>{props.name}</p>
                </div>

                <div className="patient-profile-details">
                    <div className="info-header">
                        <img src="src/assets/BirthIcon.jpg" alt="icon" />
                        <div className="detail-container">
                            <p className='first'>Date Of Birth</p>
                             <p className='second'>{props.DOB}</p>
                        </div>
                    </div>
                    <div className="info-header">

                        <img src="src/assets/FemaleIcon.svg" alt="icon" />
                        <div className="detail-container">
                            <p className='first'>Gender</p>
                            <p className='second'>{props.gender}</p>
                        </div>
                    </div>

                    <div className="info-header">
                        <img src="src/assets/PhoneIcon.svg" alt="icon" />
                        <div className="detail-container">
                            <p className='first'>Contact Info.</p>
                            <p className='second'>{props.phone}</p>
                        </div>
                    </div>

                    <div className="info-header">
                        <img src="src/assets/PhoneIcon.svg" alt="icon" />
                        <div className="detail-container">
                            <p className='first'>Emergency Contact</p>
                            <p className='second'>{props.emergencyPhone}</p>
                        </div>
                    </div>


                    <div className="info-header">
                        <img src="src/assets/InsuranceIcon.jpg" alt="icon" />
                        <div className="detail-container">
                            <p className='first'>Insurance Provider</p>
                            <p className='second'>{props.insurance}</p>
                        </div>
                    </div>



                </div>


                <div className='show-all-btn'> <p>Show All Informaion </p></div> 
            </div>


            <div className="lab-results">

                <h3>Lab Results</h3>

                <div className="lab-test-lists">
                        {
                            lab_results.map(results => {
                                return (
                                 
                                    <div className="test-name">
                                         <p>{results}</p>
                                        <img src="src/assets/download_FILL0_wght300_GRAD0_opsz24 (1).jpg" alt="icons" />
                                    </div>
                               
                                )
                            })
                        }                                    
                </div>
            </div>
        
        
        
        
        
        </div>
    )
}


export default PatientDetail