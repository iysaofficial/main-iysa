// Import Data
import PhotoData from "../../data/gallery/Photo.json";

import React, { useState } from "react";

function Photo() {
  const [selectedFilter, setSelectedFilter] = useState("all"); // Menambahkan state untuk menyimpan filter yang dipilih

  // Fungsi untuk mengubah filter yang dipilih
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <section id="product">
      <div className="container">
        <div className="controls">
          <button
            type="button"
            className="control"
            onClick={() => handleFilterChange("all")}
          >
            ALL
          </button>
          <button
            type="button"
            className="control"
            onClick={() => handleFilterChange("year2023")}
          >
            2023
          </button>
          <button
            type="button"
            className="control"
            onClick={() => handleFilterChange("year2022")}
          >
            2022
          </button>
          <button
            type="button"
            className="control"
            onClick={() => handleFilterChange("year2021")}
          >
            2021
          </button>
          <button
            type="button"
            className="control"
            onClick={() => handleFilterChange("year2020")}
          >
            2020
          </button>
        </div>
        <div className="products">
          {/* Tampilkan image sesuai dengan filter yang dipilih */}
          {selectedFilter === "all" && (
            <>
            <div className="row">
                {PhotoData.year2023.map((gallery) => {
                  return (
                    <div
                      className="col-lg-3 col-sm-12 col-md-6 mt-2 mix year2023"
                      key={gallery.id}
                    >
                      <img
                        src={gallery.image}
                        width="500"
                        height="auto"
                        alt="image 2023"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="row">
                {PhotoData.year2022.map((gallery) => {
                  return (
                    <div
                      className="col-lg-3 col-sm-12 col-md-6 mt-2 mix year2022"
                      key={gallery.id}
                    >
                      <img
                        src={gallery.image}
                        width="500"
                        height="auto"
                        alt="image 2022"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="row">
                {PhotoData.year2021.map((gallery) => {
                  return (
                    <div
                      className="col-lg-3 col-sm-12 col-md-6 mt-2 mix year2021"
                      key={gallery.id}
                    >
                      <img
                        src={gallery.image}
                        width="500"
                        height="auto"
                        alt="image 2021"
                      />
                    </div>
                  );
                })}
              </div>
              <div className="row">
                {PhotoData.year2020.map((gallery) => {
                  return (
                    <div className="col-lg-3 col-sm-12 col-md-6 mt-2 mix duapuluh" key={gallery.id}>
                      <img
                        src={gallery.image}
                        width="500"
                        height="auto"
                        alt="image 2020"
                      />
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {selectedFilter !== "all" && (
            <div className="row">
              {PhotoData[selectedFilter].map((gallery) => {
                return (
                  <div
                    className={`col-lg-3 col-sm-12 col-md-6 mt-2 mix ${selectedFilter}`}
                    key={gallery.id}
                  >
                    <img
                      src={gallery.image}
                      width="500"
                      height="auto"
                      alt="image"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Photo;
