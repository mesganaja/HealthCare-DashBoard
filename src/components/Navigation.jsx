import './Navigation.css'
import Doctor from './Patient'
import './patients.css'
function Navigation() {

    return (
        <div className="main-container">
            <div className="logo-container">
                <img src={"src/assets/TestLogo.svg"} alt="logo" />
            </div>

            <div className="navigation-container">
                <ul>
                    <li><img src={"src/assets/home_FILL0_wght300_GRAD0_opsz24.svg"} alt="Overview" /> Overview</li>
                    <li><img src={"src/assets/group_FILL0_wght300_GRAD0_opsz24.svg"} alt="Patients" /> Patients</li>
                    <li><img src={"src/assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg"} alt="Schedule" /> Schedule</li>
                    <li><img src={"src/assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg"} alt="Message" /> Message</li>
                    <li><img src={"src/assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg"} alt="Transactions" /> Transactions</li>
                </ul>

            </div>

            <div className="practitioner-container">
                <div className="profile-img-box">
                    <img src={"src/assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"} alt="profile image" />
                </div>
                <div className="description">
                    <p><strong>Dr. Jose Simmons</strong></p>
                    <p>General practitioner</p>
                </div>

                <div className="setting">
                    <img src={"src/assets/settings_FILL0_wght300_GRAD0_opsz24.svg"} alt="Settings" />
                    <img src={"src/assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg"}alt="More" />
                </div>
            </div>


        </div>
    )
    
}

export default Navigation