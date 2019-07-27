import React from "react";

const About = () => {
  return (
    <div>
      <section id="about" className="py-4">
        <div className="container text-center mb-5">
          <div className="row">
            <div className="col-md-12">
              <h2 className="display-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis esse officia repudiandae ad saepe.
              </h2>
              <img src="assets/img/about.jpg" alt="" />
              <h5 className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis esse officia repudiandae ad saepe ex, amet neque
                quod accusamus rem quia magnam magni dolorum facilis ullam
                minima perferendis? Exercitationem at quaerat commodi id libero
                eveniet harum perferendis laborum molestias quia. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Perspiciatis esse
                officia repudiandae ad saepe ex, amet neque quod accusamus rem
                quia magnam magni dolorum facilis ullam minima perferendis?
                Exercitationem at quaerat commodi id libero eveniet harum.
              </h5>
              <h4 className="mt-4">
                Lorem ipsum dolor CMSPeer libero eveniet.
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section id="showcase-inner" className="py-5 bg-success">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h2 className="text-white text-center">
                Our customer's success facilis success.
              </h2>
              <div className="card-deck">
                <div className="card bg-white h-75 d-inline-block mt-4">
                  <div className="card-body">
                    <h4 className="card-title">
                      <u>HIGHLY ETHICAL</u>
                    </h4>
                    <p className="card-text">
                      Exercitationem at quaerat commodi id libero eveniet harum
                      perferendis laborum molestias quia. Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Perspiciatis esse
                      officia repudiandae ad saepe ex, amet neque quod accusamus
                      rem quia magnam magni dolorum
                    </p>
                  </div>
                </div>
                <div className="card bg-white mt-4">
                  <div className="card-body">
                    <h4 className="card-title">
                      <u>Customer Focused</u>
                    </h4>
                    <p className="card-text">
                      Exercitationem at quaerat commodi id libero eveniet harum
                      perferendis laborum molestias quia. Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Perspiciatis esse
                      officia repudiandae ad saepe ex, amet neque quod accusamus
                      rem quia magnam magni dolorum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-5">
        <div className="container">
          <h2 className="text-center mt-4 mb-4">Meet our leadership</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <img
                src="assets/img/realtors/kyle.jpg"
                alt="Darrel Frink"
                className="rounded-circle mb-3 mt-4"
              />
              <h4>Darrel Frink</h4>
              <p className="text-success">CEO</p>
              <hr />
              <p>VIEW BIO</p>
            </div>

            <div className="col-md-4">
              <img
                src="assets/img/realtors/mark.jpg"
                alt="Bruce Biltrite"
                className="rounded-circle mb-3 mt-4"
              />
              <h4>Bruce Biltrite</h4>
              <p className="text-success">CTO</p>
              <hr />
              <p>VIEW BIO</p>
            </div>

            <div className="col-md-4">
              <img
                src="assets/img/realtors/jenny.jpg"
                alt="Isabel Esparza"
                className="rounded-circle mb-3 mt-4"
              />
              <h4>Isabel Esparza</h4>
              <p className="text-success">Director</p>
              <hr />
              <p>VIEW BIO</p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="bg-dark text-white text-center mb-4">
        <div className="container">
          <h2 className="">TESTIMONIALS</h2>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem velit
            aperiam, unde aliquid at similique! Perspiciatis amet consectetur
            esse officia.
          </h4>
          <p>- Lorem Ipsum Law firm | California -</p>
          <hr />
        </div>
      </section>
      <section id="work" className="bg-white text-black text-center">
        <h2 className="mt-4 mb-4">Supercharge lorem ipsum</h2>
        <a
          href="listings.html"
          className="btn btn-success text-white btn-lg mb-4"
        >
          BOOK DEMO
        </a>
      </section>
    </div>
  );
};

export default About;
