// Import CSS
import "../../css/event/eventPoster.css";

// Import FontAwesome
import React, { useState } from "react";
import {
  faLocationDot,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareTwitter,
  faLinkedin,
  faSquarePinterest,
} from "@fortawesome/free-brands-svg-icons";

// Import Data
import EventPosterDetail from "../../data/event/EventPosterDetail.json";

function EventPoster13() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  return (
    <section>
      <div id="main-event" className="container">
        <div className="row event-wrapper ">
          {EventPosterDetail.event13.map((EventPosterDetail13) => {
            return (
              <section>
                <div className="event-poster col-12 text-center">
                  <img src={EventPosterDetail13.image}></img>
                </div>
                <br />
                <br />
                <div className="main-colom row col-12 mt-5 mb-5">
                  <div className="colom-left col-md-8  mt-2">
                    <h1 className="fw-bolder">{EventPosterDetail13.title}</h1>
                    <br></br>
                    <p>
                      Halo Young Scientist, IYSA punya program baru nih khusus
                      untuk para mahasiswa dan lokasinya di Suranaree
                      University, Bangkok bertajuk SUT Global Entrepreneurship
                      Camp (GEC) 2024, 👏👏
                    </p>
                    <br></br>
                    <p>
                      Diselenggarakan oleh Suranaree University of Technology,
                      Thailand, untuk keempat kalinya, GEC 2024 akan menawarkan
                      pengalaman menarik bagi siswa, baik budaya maupun
                      memperkaya kewirausahaan keterampilan.
                    </p>
                    <br></br>
                    <p>
                      GEC 2024 mengundang mahasiswa dari universitas mitra di
                      seluruh dunia, bersama-sama untuk menginspirasi orang lain
                      dalam mengatasi masalah lingkungan dan bertanggung jawab
                      bersama dalam menciptakan gelombang generasi muda yang
                      akan menginspirasi para pembuat perubahan dunia.
                    </p>
                    <br></br>
                    <p>
                      Selama program di SUT Global Entrepreneurship Camp 2024,
                      para mahasiswa akan mendapat banyak hal lain juga seperti
                      :
                    </p>
                    <br></br>
                    <ul>
                      <li>
                        1. Eksplorasi: Mengekplorasi negara, kota, budaya, dan
                        masyarakat Thailand
                      </li>
                      <li>
                        2. Pengalaman: budaya, alam, tantangan keberlanjutan,
                        membangun multikultural kompetensi kerja sama tim, dan
                        mempelajari serta mengembangkan solusi inovatif,
                      </li>
                      <li>
                      3. Kewirausahaan: keterampilan dan pola pikir kewirausahaan Anda
                      </li>
                    </ul>
                    <br></br>
                    <p>Tunggu apalagi? Yuk mendaftar di IYSA untuk mengikuti acara keren ini!</p>
                    <ul>
                      <li>
                        <strong>Batas Waktu Pendaftaran:</strong> 5 November
                        2023
                      </li>
                      <li>
                        <strong>Batas Waktu Pembayaran: </strong> 10 November
                        2023
                      </li>
                      <li>
                        <strong>Tanggal Acara:</strong> 14 - 24 January 2024
                      </li>
                    </ul>
                    <br></br>
                    <a
                      className="btn btn-primary mb-4"
                      href={EventPosterDetail13.LinkRegist}
                      target="-blank"
                    >
                      Link Pendaftaran
                    </a>
                    <p>Kalian bisa cek Guide book di link pendaftaran ya👆</p>
                    <br></br>
                    <br />
                    <p className="hastag">{EventPosterDetail13.Hastag}</p>
                  </div>
                  <div className="colom-right col-md-4 text-center text-md-start ">
                    <a className="btn btn-primary shadow mt-2">
                      About The Event
                    </a>
                    <br />
                    <br />
                    <h4 className="fw-bolder">Date and Time</h4>
                    <p>{EventPosterDetail13.DateAdTime}</p>
                    <br />
                    <h4 className="fw-bolder">Registration End Date</h4>
                    <p>{EventPosterDetail13.RegistEndDate}</p>
                    <br />
                    <h4 className="fw-bolder">Location</h4>
                    <p>{EventPosterDetail13.Location}</p>
                    <br />
                    <h4 className="fw-bolder">Event Types</h4>
                    <p>{EventPosterDetail13.EventType}</p>
                    <br />
                    <h4 className="fw-bolder">Event Category</h4>
                    <p>{EventPosterDetail13.EventCategory}</p>
                    <br />
                    <div className="event-share">
                      <h4 className="fw-bolder">Share With Friends</h4>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          window.location.href
                        )}`}
                        title="Share this page on Facebook"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faSquareFacebook}
                          style={{ color: "#1b56bb" }}
                          className="event-share-logo"
                        />
                      </a>
                      <a
                        href={`https://twitter.com/share?url=${encodeURIComponent(
                          window.location.href
                        )}`}
                        title="Share this page on Twitter"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faSquareTwitter}
                          style={{ color: "#0b8ee0" }}
                          className="event-share-logo"
                        />
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                          window.location.href
                        )}`}
                        title="Share this page on Linkedin"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          style={{ color: "#16b7df" }}
                          className="event-share-logo"
                        />
                      </a>
                      <a
                        href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
                          window.location.href
                        )}`}
                        title="Share this page on Pinterest"
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faSquarePinterest}
                          style={{ color: "#d30909" }}
                          className="event-share-logo"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="event-venue-wrapper ">
                    <h1
                      className="fw-bolder col-12 text-start ms-4"
                      onClick={toggleContent}
                    >
                      <FontAwesomeIcon
                        icon={showContent ? faMinus : faPlus}
                        style={{ color: "#1164e8" }}
                      />
                      <span className="ms-2">Venue</span>
                    </h1>
                    {showContent && (
                      <div className="row event-venue">
                        <div className="event-venue-left col-3">
                          <img src={EventPosterDetail13.ImageVeneu}></img>
                        </div>
                        <div className="event-venue-right col-8 mt-auto mb-auto">
                          <a
                            className="ms-3 fw-bolder"
                            href={EventPosterDetail13.LinkGmaps}
                            target="-blink"
                          >
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              style={{ color: "#1164e8" }}
                            />
                            {EventPosterDetail13.NameLocation}
                          </a>
                          <br />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
        {/*  */}
      </div>
    </section>
  );
}

export default EventPoster13;
