import React from "react";
import locssmileblue from "../../../Assets/Images/locssmileblue.svg";
import bluedashboard from "../../../Assets/Gifs/bluedashboard.gif";
import openssoucecode from "../../../Assets/Gifs/openssoucecode.gif";
import fullstack from "../../../Assets/Gifs/fullstack.gif";
import competitive from "../../../Assets/Gifs/competitive.webp";
import animation_500_ from "../../../Assets/Gifs/animation_500_l5tktz3o.gif";

function Home() {
  return (
    <div>
      <div className="container parentbanner">
        <div className="row childbanner">
          <div className="col-sm-12 col-lg-5 col-md-5 text-center align-bottom textdiv">
            <div className="aboutdiv">
              <br></br>
              <br></br>
              <br></br>
              <span
                className="text-decoration-underline fw-bold fs-3"
                style={{ fontFamily: "Poetsen One" }}
              >
                Developer • Techie • Engineer
              </span>
              <br></br>
              <br></br>

              <span>
                I apply analytic thinking to problems and find a pragmatic
                solutions that aren't quick fixes, but of lasting value.
              </span>
            </div>
          </div>
          <div className="imagediv d-none d-md-block col-lg-5 col-md-6">
            <img
              className="img-fluid headerimg"
              src={locssmileblue}
              alt="Kelvin Wachira"
            />
          </div>
        </div>
      </div>

      <div className="container text-center fs-2 fw-bold mt-5">
        <p> Here's what I have done</p>
      </div>
      <div className="container text-center ">
        <div className="container">
          <div className="row d-flex justify-content-round ">
            {/* <%# Card 1 %> */}
            <div className="col-sm-4">
              <div className="card">
                <div>
                  <img
                    className="Home_lottieImg__gBEbz"
                    src={animation_500_}
                    alt="..."
                  />
                </div>
                <div className="p-2 ">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    Backend Developer
                  </h5>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Behind the scenes hero - fulfilled by driving the back-side
                    of success. With a text editor and a vision, I'm a sucker
                    for writing code.
                  </p>
                </div>
              </div>
            </div>
            {/* <%# Card 2 %> */}
            <div className="col-sm-4">
              <div className="card">
                <div>
                  <img
                    className="Home_lottieImg__gBEbz"
                    src={bluedashboard}
                    alt="..."
                  />
                </div>
                <div className=" p-2 ">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    Automation Engineer
                  </h5>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Salesforce developer with strong Salesforce admin and
                    development skills. I enable and create user-friendly and
                    visually pleasing dashboards.
                  </p>
                </div>
              </div>
            </div>
            {/* <%# Card 3 %> */}
            <div className="col-sm-4">
              <div className="card">
                <div>
                  <img
                    className="Home_lottieImg__gBEbz"
                    src={fullstack}
                    alt="..."
                  />
                </div>
                <div className=" p-2">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    Project Management
                  </h5>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Being involved in the end to end product design process from
                    discovery to ideation, prototyping and testing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center fs-2 fw-bold mt-5 ">
        <p className="mt-5 ">Recent Activity</p>
      </div>
      <div className="container  text-center  ">
        <div className="container">
          <div className="row d-flex justify-content-round">
            {/* <%# Card 1 %> */}
            <div className="col-sm-6">
              <div className="card cards">
                <div>
                  <img
                    className="Home_lottieImg__gBEbz"
                    src={openssoucecode}
                    alt="..."
                  />
                </div>
                <div className=" p-2 ">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    Open-Source Contribution
                  </h5>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Wikimedia is a global movement whose mission is to bring
                    free educational content to the world. Its written in
                    python. I have worked on creating scripts that connect
                    various wikimedia objects together to make it more
                    infomative and closer to achieving its goal.
                  </p>
                </div>
              </div>
            </div>
            {/* <%# Card 2 %> */}
            <div className="col-sm-6">
              <div className="card cards">
                <div>
                  <img
                    className="Home_lottieImg__gBEbz"
                    src={competitive}
                    alt="..."
                  />
                </div>
                <div className=" p-2 ">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    Competitive Programming
                  </h5>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    I keep a beginners mind by playing and experimenting without
                    the fear of failure. There will always be things I have to
                    learn and I will make mistakes, which develop me, and
                    Competitive Programming gives me a platform to do just that
                  </p>
                </div>
              </div>
            </div>
            {/* <%# Card 3 %> */}
          </div>
        </div>
      </div>
      <footer className="text-muted py-5 bg-light">
        <div className="container">
          <p className="float-end">
            <i href="#" className="bi bi-arrow-up-circle">
              <a href="#">Back to top</a>
            </i>
          </p>
          <div className="container text-center">
            <button className="pushable">
              <a
                href="https://drive.google.com/file/d/1uC9gO9D4JxTcUyJGuoAO_D0F0967SHNL/view?usp=sharing"
                className="front b"
              >
                Resume
              </a>
            </button>
            <button className="pushable">
              <a
                href="https://github.com/k-wachira"
                className="front bi bi-github"
              ></a>
            </button>
            <button className="pushable">
              <a href="mailto:abkelvinwachira@gmail.com" className="front ">
                Lets chat
              </a>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
