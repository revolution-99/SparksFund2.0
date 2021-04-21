import React from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import "../style.css";
import "../slidestyle.css";
import Nav from "./Nav";
// import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import contactLogo from "../images/contactus.jpg";
import education from "../images/education.jpg";
import homeless from "../images/homeless.jpg";
import noHunger from "../images/no hunger.jpg";
import volunteer from "../images/volunteer.jpg";
import Sonali from "../images/Sonali.jpg";
import Ali from "../images/Ali.jpg";
import Anjali from "../images/Anjali.jpg";
import Bikash from "../images/Bikash.jpg";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import displayRazorPay from "../payment/PaymentPage";

export default function Home() {
  let history = useHistory();
  function handleClick() {
    history.push("https://rzp.io/l/1pO0oCLEK");
  }

  return (
    <header>
      <Nav />
      <section className="hero-header-text">
        <div className="mainText">
          <h1>The Spark Fund</h1>
          <h2>Create a better future for someone</h2>
          {/* <button 
          // onClick = {displayRazorPay}
          onclick= {handleClick}
          
          className="donateButton">
             Donate
          </button> */}
          <form action="https://rzp.io/l/1pO0oCLEK">
            <input className="donateButton" type="submit" value="Donate Here" />
          </form>
        </div>
      </section>
      {/***************************************************************************/}
      <h2 className="about" id="section1">
        About Us
      </h2>
      <div className="row">
        <div class="card">
          <img src={education} class="card-img-top" alt="Education for all" />
          <div class="card-body">
            <h4 class="card-title">Mission</h4>
            <h5 class="card-title">Education For All</h5>
            <p class="card-text">
              We believe that whether you are addressing healthcare, poverty,
              population control, unemployment or human rights, there's no
              better place to start than in the corridors of education. Sparks
              Foundation's educational initiatives include Pre-school [3-6 yrs],
              Non Formal Education [6-14 yrs non-school going], Remedial
              Education [6-14 yrs school going] and Bridge Course [14-18 yrs
              drop-outs].
            </p>
            <a href="https://rzp.io/l/1pO0oCLEK" class="btn btn-primary">
              Educate a child
            </a>
          </div>
        </div>
        <div class="card">
          <img src={noHunger} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title">Mission</h4>
            <h5 class="card-title">No Child Hungry</h5>
            <p class="card-text">
              Pioneering No Hungry Child Free Food Program is focused towards
              distributing hot, nutritious and fresh food to poor, needy &
              hungry children across pockets of poverty in India. We have a
              daily nutritious meal coverage of more than 20,000 hungry &
              underprivileged children and our daily food distribution regimen
              is smooth, efficient and dependable - 365 days a year. Our belief
              is that the Nutritious Meal Program has an important
              “socialisation role”.
            </p>
            <a href="https://rzp.io/l/1pO0oCLEK" class="btn btn-primary">
              Feed a child
            </a>
          </div>
        </div>
        <div class="card">
          <img src={homeless} class="card-img-top" alt="All children at home" />
          <div class="card-body">
            <h4 class="card-title">Mission</h4>
            <h5 class="card-title">Every Child Gets a Home</h5>
            <p class="card-text">
              Home is where children find safety and security, where we find our
              identities, where citizenship starts. It usually starts with
              believing you’re part of a community, and that is essential to
              having a stable home. We are on a mission to provide shelters to
              the street childrens by collaborating with NGOs and orphanages.
            </p>
            <a href="https://rzp.io/l/1pO0oCLEK" class="btn btn-primary">
              Abode a child
            </a>
          </div>
        </div>
      </div>

      {/***************************************************************************/}
      <section className="row">
        <img src={volunteer} class="reshapeImg" />
        <div>
          <h3>Become a Volunteer</h3>
          <div className="volunteerDescription">
            <p>
              Be a part of this revolution!!!
              <br />
              1. Help Us to teach children
              <br />
              2. Help us in distributing foods
              <br />
              3. Help us in giving a shelter to homeless
              <br />
            </p>
          </div>
        </div>
      </section>

      {/* ********************************************************* */}
      <section>
        <div class="container-fluid">
          <h3 className="blogs">Hear From Them</h3>
          <div class="row">
            <div class="col-sm-12">
              <div id="inam" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="container">
                      <div class="row">
                        <div class="col-sm-12 col-lg-4">
                          <div class="card">
                            <img src={Anjali} class="card-img-top" />
                            <div class="card-body">
                              <h4 class="card-title">Anjali</h4>
                              <p class="card-text">
                                A 10 year old jovial and ambitious Anjali was
                                made to drop out of school by her parents. But
                                this young girl fought to achieve what was
                                rightfully hers.
                              </p>
                              <button type="button"class="btn btn-primary">
                                Read More
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-12 col-lg-4">
                          <div class="card">
                            <img src={Bikash} class="card-img-top" />
                            <div class="card-body">
                              <h4 class="card-title">Bikash</h4>
                              <p class="card-text">
                                Born to an unwed mother, orphaned immediately
                                after birth and saved by a eunuch. This is not a
                                plot from a Hindi blockbuster film but the real
                                story Bikash.
                              </p>
                              <button type="button" class="btn btn-primary">
                                Read More
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-12 col-lg-4">
                          <div class="card">
                            <img src={Sonali} class="card-img-top" />
                            <div class="card-body">
                              <h4 class="card-title">Sonali</h4>
                              <p class="card-text">
                                I study in a school and I like being here a lot
                                These words bring so much encouragement for a
                                society such as ours where school dropouts and
                                illiteracy have increased more than ever.
                              </p>
                              <button type="button" class="btn btn-primary">
                                Read More
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="container">
                      <div class="row">
                        <div class="col-sm-12 col-lg-4">
                          <div class="card">
                            <img src={Ali} class="card-img-top" />
                            <div class="card-body">
                              <h4 class="card-title">
                               Ali
                              </h4>
                              <p class="card-text">
                              His early job was picking up rags and doing odd jobs. Earning two square meals a day was his only goal. His parents had big dreams for him, but poverty stopped them from dreaming any bigger.
                              </p>
                              <button type="button" class="btn btn-primary">
                                Read More
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-12 col-lg-4">
                          <div class="card">
                            <img src={Sonali} class="card-img-top" />
                            <div class="card-body">
                              <h4 class="card-title">Sonali</h4>
                              <p class="card-text">
                                I study in a school and I like being here a lot
                                These words bring so much encouragement for a
                                society such as ours where school dropouts and
                                illiteracy have increased more than ever.
                              </p>
                              <button type="button" class="btn btn-primary">
                                Read More
                              </button>
                            </div>
                          </div>
                        </div>
                     
                        {/* <div class="col-sm-12 col-lg-4">
                          <div class="card">
                            <img src="images/f.jpg" class="card-img-top" />
                            <div class="card-body">
                              <h4 class="card-title">
                                Why you should use skin masks ?
                              </h4>
                              <p class="card-text">
                                Skin masks help us to make are skin fresh and
                                also they protect our skin from the harm rays of
                                sun
                              </p>
                              <button type="button" class="btn btn-warning">
                                Read More
                              </button>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#inam" class="carousel-control-prev" data-slide="prev">
                  <span class="carousel-control-prev-icon"></span>
                </a>
                <a href="#inam" class="carousel-control-next" data-slide="next">
                  <span class="carousel-control-next-icon"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* *********************************************** */}
      <section>
        <div className="mainText row">
          <img src={contactLogo} class="reshapeImg" />
          <form class="editForm">
            <h6 class="text-center">Reach Us</h6>
            <div class="form-group addSpace">
              <label for="exampleFormControlInput1"></label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="E-mail address"
              />
            </div>
            <div class="form-group addSpace ">
              <label for="exampleFormControlInput1"></label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Full Name"
              />
            </div>

            <div class="form-group addSpace">
              <label for="exampleFormControlTextarea1"></label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Your message here..."
                rows="3"
              ></textarea>
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
            <div class="col text-center">
              <button type="submit" class="btn btn-danger ">
                Submit
              </button>
            </div>
          </form>
          <div className="socialMedia">
            <a
              href="https://www.facebook.com/thesparksfoundation.info"
              class="fa fa-facebook"
              target="_blank"
            ></a>
            <a
              href="https://twitter.com/tsfsingapore"
              class="fa fa-twitter"
            ></a>
            <a
              href="https://www.linkedin.com/company/the-sparks-foundation/mycompany/"
              class="fa fa-linkedin"
            ></a>
            <a href="#" class="fa fa-youtube"></a>
            <a
              href="https://www.instagram.com/thesparksfoundation.info/"
              class="fa fa-instagram"
            ></a>
          </div>
        </div>
      </section>

      {/* *****************************Footer************************************/}
      <footer class="bg-light text-center text-lg-start">
        <div class="text-center p-3" style={{ backgroundColor: "black" }}>
          © 2021 Copyright :
          <a class="text-dark" href="https://mdbootstrap.com/">
            The Sparks Donation.com
          </a>
        </div>
      </footer>
    </header>
  );
}
