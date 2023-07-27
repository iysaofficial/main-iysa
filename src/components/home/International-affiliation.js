import React, { useEffect } from 'react';

const InternationalAffiliation = ()=> {
  useEffect(() => {
    var copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector('.logos').appendChild(copy);
  }, []);
  return(
      <section className="affiliation-section">
          <div className="container">
              <h2 className="text-center">International Affiliation</h2>
              <div className="logos">
                <div className="logos-slide">
                  <img src="./assets/images/logo/International Affiliation/africa.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/asia.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/asti.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/ayrid.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/azs.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/barrc.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/buca.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/burung.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/cpc.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/diece.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/esi.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/fdct.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/fna.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/gysc.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/hkfi.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/i3l.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/iarc.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/ibix.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/idea.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/ifest.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/ifia.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/img.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/isb.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/its.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/jgu.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/kiif.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/klesf.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/pmr.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/pohon.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/poshs.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/red g.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/red.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/solacyt.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/spartakus.png" alt="" />
                  <img src="./assets/images/logo/International Affiliation/usm.png" alt="" />   
                </div>
              </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
      </section>


  )
}
export default InternationalAffiliation;