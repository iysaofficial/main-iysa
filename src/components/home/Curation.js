const Curation = () => {
  return (
    <section className="curation-section">
      <br></br>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-md-6 curation-video mb-auto mt-auto">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Cd6ej-2qfrY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="col-md-6 curation-content mb-auto mt-auto">
            <h1>Company Profile</h1>
            {/* <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cumque natus ex ut perspiciatis eveniet, reiciendis exercitationem harum vel aliquam. Aspernatur id rem dolores nihil ab culpa vitae nostrum modi?</p> 
                    <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cumque natus ex ut perspiciatis eveniet, reiciendis exercitationem harum vel aliquam. Aspernatur id rem dolores nihil ab culpa vitae nostrum modi?</p> 
                    <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cumque natus ex ut perspiciatis eveniet, reiciendis exercitationem harum vel aliquam. Aspernatur id rem dolores nihil ab culpa vitae nostrum modi?</p>  */}
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </section>
  );
};

export default Curation;
