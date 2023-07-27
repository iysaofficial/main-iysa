const VisionMission = ()=>{
    return (
        <section className='vision-mission-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 order-1'>
                    <div className='main'>

                        <div className='vision-mission-logo  text-center'>
                            <img src='./assets/images/icon/shared-vision.png' className='vision-mission-logo'></img>
                        </div>

                        <div className='vision-mission-content'>
                            <h1 className='text-center'>Vision</h1>
                            <br></br>
                            <p className='text-justify'>Become an institution that can facilitate Indonesian young researchers to continue communicate and innovate in conducting research.</p>
                        </div>

                    </div>       
                </div>
                
                <div className='col-md-4 order-2 '>
                <div className='main'>

                    <div className='vision-mission-logo  text-center '>
                        <img src='./assets/images/icon/rocket.png' className='vision-mission-logo'></img>           
                    </div>

                    <div className='vision-mission-content'>
                        <h1 className='text-center'>Mission</h1>
                        <br></br>
                        <ol>
                            <li >Implement a national level collaboration program between Indonesian young researchers.</li>
                            <li className='mt-3'>Conduct domestic competition programs.</li>
                            <li className='mt-3'>Prepare Indonesian young scientists to represent Indonesian in international level competitions.</li>
                        </ol>
                    </div>
                    
                </div> 
                    
                </div>

                <div className='col-md-4 order-2 '>
                    <div className='main'>

                        <div className='vision-mission-logo  text-center'>
                            <img src='./assets/images/icon/mission.png' className='vision-mission-logo'></img>
                        </div>
                                
                        <div className='vision-mission-content'> 
                            <h1 className='text-center'>Goals</h1>
                            <br></br>
                            <ol>
                                <li>Provide oppotunities for Indonesian students to develop their potential, especially in the field of science & technology.</li>
                                <li className='mt-3'>Cultivate the spirit of competition in order to optimize the potential that exists in Indonesian students.</li>
                            </ol>
                        </div>

                    </div>    
                </div>
            </div>
        </div>  
        </section> 
    )
}
export default VisionMission;