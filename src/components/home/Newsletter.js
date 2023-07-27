const Newsletter = () => {
    return (
        <section className="newsletter-section">
            <div className="modal-container row ">
                <div className="modal-inner row col-12 pb-3 pt-3">
                    <div className="modal-image text-center col-lg-4 col-12 ">
                        <img src="assets/images/logo/about-logo.png" alt="Modal Image" className="modal-img" />
                    </div>
                    <div className="col-lg-2 col-12"></div>
                    <div className="content-modal col-lg-6 col-12">
                        <h1 className="heading">Subscribe Newsletter</h1>
                        <p className="">Join the thousands of people who are already benefiting from our newsletter. Subscribe to emails now to get unique content and the latest information.</p>
                        <div className="input-container mx-auto text-center">
                            <div className="input-group ">
                                <input className="email-col " type="email" placeholder="Your Email"></input>
                                <button className="subscribe-col btn btn-subscribe">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;