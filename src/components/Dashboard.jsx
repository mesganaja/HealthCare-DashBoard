import './dashboard.css'
import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function Dashboard(props) {

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                data: [65, 59, 80, 81, 56, 55],
                borderColor: 'red',
                yAxisID: 'y2',
            },
            {
                data: [28, 48, 40, 19, 86, 27],
                borderColor: 'blue',
                yAxisID: 'y2',
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y2: {
                type: 'linear',
                position: 'left',
            
            },
            y2: {
                type: 'linear',
                position:'left',
                grid: {
                    display:true,
                }
            },
        },
    };

    return (
        <>
            <div className="dashboard-main-container">
                <div className="dashboard-title">
                    <p>Diagnosis History</p>

                </div>

                <div className="graph-main-container">

                    <div className="graph">
                        <div className="graph-title">
                            <h3>BloodPressure</h3>
                            <p>Last months</p>
                            {/* <img src="src/assets/expand_more_FILL0_wght300_GRAD0_opsz24.svg" alt="icon" /> */}
                        </div>


                        <div className="chart">
                            <Line data={data} options={options} />



                        </div>


                    </div>

                    <div className="graph-summary">
                        <div className="systolic">
                        
                                <p>Systolic</p>
                                <h3>160</h3>
                                <p>Higher than average</p>
                      

                        </div>

                        <div className="diastolic">
                            <p>Diastolic</p>
                            <h3>78</h3>
                            <p>Lower than average</p>
                        </div>
                    </div>



                </div>



                <div className="main-health-data">
                    <div className="respiratory-rate">
                        <img src="src/assets/respiratory rate.jpg" alt="icon" />

                        <div className="h-detail">
                            <p className='p-head'>Respiratory Rate</p>
                            <h3>20 bpm</h3>
                            <p className='p-status'>Normal</p>
                        </div>
                    </div>

                    <div className="temprature" >
                        {/* <div className='temprature'> */}
                        <img src="src/assets/temperature.jpg" alt="icon" />

                        <div className="h-detail">
                            <p>Respiratory Rate</p>
                            <h3>20 bpm</h3>
                            <p>Normal</p>
                        </div>
                        {/* </div> */}
                    </div>

                    <div className="heart-rate">
                        <img src="src/assets/HeartBPM.jpg" alt="icon" />

                        <div className="h-detail">
                            <p>Respiratory Rate</p>
                            <h3>20 bpm</h3>
                            <p>Normal</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Dashboard