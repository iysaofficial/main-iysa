const CompanyProfileComp = () => {
  return (
    <section className="company-profile-section">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 hero-content mt-auto mb-auto">
            <h1 className="fw-bold text-center text-lg-start text-md-start">
              Indonesian Young
            </h1>
            <h1 className="fw-bold text-center text-lg-start text-md-start">
              Scientist Association
            </h1>
            <p className="">
              Indonesian Young Scientist Association (IYSA) is an institution
              engaged in developing Indonesian students potential, talents, and
              creativity by providing them opportunities to participate in
              scientific and non competitive competitions also activities in
              Indonesia and abroad.
            </p>
            <p>
              Since its inception, IYSA has been active in various activities so
              that it can be affiliated with many countries such as: Malaysia,
              Thailand, Singapore, China, India, Korea, Taiwan, Turkey, Tunisia,
              Egypt, Abu Dhabi and so on.{" "}
            </p>
          </div>

          <div className="col-md-6  hero-image text-center">
            <img
              src="assets/images/logo/about-logo.WebP"
              className=" img-fluid "
            ></img>
          </div>
          <div className="about-iframe text-center">
            {/* <iframe
              src="https://drive.google.com/file/d/1ugnGlm8fgfojHUD32qMmce9l2yPxKt3k/preview"
              width="70%"
              height="560"
            ></iframe> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfileComp;
