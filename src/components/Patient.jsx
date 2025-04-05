import './patients.css'




function Patient(props) {

    return (
        <>
        <div className="patient-container">
                <div className="profile-img">
                    <img src={props.photo} alt="profile image" />
                
                </div>
               
                <div className="patient-info">
                    <p className='name'>{props.name}</p>
                    <p>{props.gender}, {props.age}</p>

                </div>

                <div className="more-horiz">
                    <img src={"src/assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg"} alt="more horizontal" />
                </div>

        </div>
            
        </>
    )
}

export default Patient