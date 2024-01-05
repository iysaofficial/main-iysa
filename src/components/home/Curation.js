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
              height="435px"
              src="https://www.youtube.com/embed/w-VKoOfn9Lk?si=GvDNeHJAAtQbUHnr"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div className="col-md-6 curation-content mb-auto mt-auto">
            <h1 className="text-tittle">Company Profile</h1>
            <p className="text-justify">
              IYSA atau Indonesian Young Scientist Association adalah
              sebuah lembaga yang bergerak di bidang pendidikan untuk
              mengembangkan potensi, bakat, dan kreativitas pelajar
              Indonesia dengan memberikan kesempatan kepada mereka
              untuk berpartisipasi dalam kompetisi ilmiah dan
              non-kompetisi di tingkat nasonal maupun internasional.
            </p>
            <p className="text-justify">
              Didirikan pada November 2018, dan dikukuhkan secara
              legal di Kemenkumham dalam bentuk akta notaris pada
              tahun 2019. IYSA didirikan oleh Bapak Deni Irawan dan
              kemudian menggandeng Ibu Anggraini dan Ibu Prita Elriza
              dalam tim manajemennya.
            </p>
            <p className="text-justify">
              Selain memiliki program kompetisi, IYSA juga memiliki
              berbagai program non-kompetisi yang bermanfaat bagi para
              peneliti belia. IYSA juga memiliki lebih dari 50
              afiliasi yang tersebar diseluruh dunia.
            </p>
            <p className="text-justify">
              Mari bergabung dalam komunitas research penuh
              kreativitas dan prestasi bersama IYSA!
            </p>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </section>
  );
};

export default Curation;
