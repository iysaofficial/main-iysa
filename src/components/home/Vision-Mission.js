const VisionMission = () => {
  return (
    <section className="vision-mission-section">
      <div className="card-container">
        <div className="card">
          <img src="./assets/images/icon/vision.png"></img>
          <div className="card-content">
            <h3 className="text-center mb-3">Vision</h3>
            <p>
              Become an institution that can facilitate Indonesian young
              researchers to continue communicate and innovate in conducting
              research.
            </p>
          </div>
        </div>
        <div className="card">
          <img src="./assets/images/icon/mission.png"></img>
          <div className="card-content">
            <h3 className="text-center mb-3">Mission</h3>
            <ol>
              <li>
                Implement a national level collaboration program between
                Indonesian young researchers.
              </li>
              <li className="mt-1">Conduct domestic competition programs.</li>
              <li className="mt-1">
                Prepare Indonesian young scientists to represent Indonesian in
                international level competitions.
              </li>
            </ol>
          </div>
        </div>
        <div className="card">
          <img src="./assets/images/icon/goals.png"></img>
          <div className="card-content">
            <h3 className="text-center mb-3">Goals</h3>
            <ol>
              <li>
                Provide oppotunities for Indonesian students to develop their
                potential, especially in the field of science & technology.
              </li>
              <li className="mt-1">
                Cultivate the spirit of competition in order to optimize the
                potential that exists in Indonesian students.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
export default VisionMission;
