import React, { useState } from "react";

// Import Data JSON
import DataLetter from "../../data/newsletter/NewsletterData.json";


const NewsletterComp = () => {

    const [selectedFilter, setSelectedFilter] = useState("all"); // Menambahkan state untuk menyimpan filter yang dipilih

    // Fungsi untuk mengubah filter yang dipilih
    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };


    return (
        <section className="newsletter-section" id="newsletter-section">
            <div className="container">
                <div className="newsletter-wrapper">
                    <div className="controls">
                        <button
                            type="button"
                            className="control"
                            onClick={() => handleFilterChange("duapuluhdua")}
                        >
                            2023
                        </button>
                        <button
                            type="button"
                            className="control"
                            onClick={() => handleFilterChange("duapuluhtiga")}
                        >
                            2022
                        </button>
                    </div>
                    {selectedFilter !== "duapuluhtiga" && (
                        <>
                            <div className="row">
                                {DataLetter.duapuluhtiga.map((Letter) => {
                                    return (
                                        <div className="box " key={Letter.id}>
                                            <div className="heading text-center">
                                                <h4>{Letter.title}</h4>
                                            </div>
                                            <div>
                                                <img className="mt-4" src={Letter.gambar}></img>
                                            </div>
                                            <div className="text">
                                                <p>{Letter.content}
                                                </p>
                                                <a href={Letter.linkbtn}>Read more</a>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    )}
                    {selectedFilter !== "duapuluhdua" && (
                        <>
                            <div className="row">
                                {DataLetter.duapuluhdua.map((Letter) => {
                                    return (
                                        <div className="box"  key={Letter.id}>
                                            <div className="heading text-center">
                                                <h4>{Letter.title}</h4>

                                            </div>
                                            <div>
                                                <img className="mt-4" src={Letter.gambar}></img>
                                            </div>
                                            <div className="text">
                                                <p>{Letter.content}
                                                </p>
                                                <a href={Letter.linkbtn}>Read more</a>
                                            </div>
                                        </div>  
                                    );
                                })}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}
export default NewsletterComp 