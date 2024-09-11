import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import chef1 from '../user/img/chef1.png';
import chef2 from '../user/img/chef2.png';
import chef3 from '../user/img/chef3.png';
import chef4 from '../user/img/chef4.png';
import { PhotoGallery } from '../components/PhotoGallery';
import { Reviews } from '../components/Reviews';
import './About.css';

function About() {
    return (
      <div>
        <div className="container py-5">
          <h1>About us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nesciunt ipsum maxime, illo maiores aliquam saepe qui enim. Cupiditate, deserunt.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reiciendis repellat at quaerat! Provident, enim dolor dignissimos doloribus modi hic natus tempora nemo totam quidem suscipit minima recusandae! Ullam, dolore.</p>
  
          {/* Carousel */}
          <div id="chefCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-6">
                    <img src={chef1} alt="restau coffee chef" className="img-fluid rounded shadow" />
                    <h3>Chef 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem modi eos nesciunt repudiandae dolorem.</p>
                    <div className="team-leader-social-links">
                      
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                          <FaFacebook size={30} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                          <FaTwitter size={30} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                          <FaInstagram size={30} />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                          <FaLinkedin size={30} />
                        </a>
                      </div>
                  </div>
                  <div className="col-md-6">
                    <img src={chef2} alt="restau coffee chef" className="img-fluid rounded shadow" />
                    <h3>Chef 2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem modi eos nesciunt repudiandae dolorem.</p>
                    <div className="team-leader-social-links">
                        
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                          <FaFacebook size={30} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                          <FaTwitter size={30} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                          <FaInstagram size={30} />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                          <FaLinkedin size={30} />
                        </a>
                      </div>
                  </div>
                </div>
              </div>
  
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6">
                    <img src={chef3} alt="restau coffee chef" className="img-fluid rounded shadow" />
                    <h3>Chef 3</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem modi eos nesciunt repudiandae dolorem.</p>
                    <div className="team-leader-social-links">
                       
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                          <FaFacebook size={30} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                          <FaTwitter size={30} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                          <FaInstagram size={30} />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                          <FaLinkedin size={30} />
                        </a>
                      </div>
                  </div>
                  <div className="col-md-6">
                    <img src={chef4} alt="restau coffee chef" className="img-fluid rounded shadow" />
                    <h3>Chef 4</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem modi eos nesciunt repudiandae dolorem.</p>
                    <div className="team-leader-social-links">
                       
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                          <FaFacebook size={30} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                          <FaTwitter size={30} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                          <FaInstagram size={30} />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                          <FaLinkedin size={30} />
                        </a>
                      </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Carousel controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#chefCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#chefCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
  
            {/* Navigation dots */}
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#chefCarousel" data-bs-slide-to="0" className="active" aria-current="true"></button>
              <button type="button" data-bs-target="#chefCarousel" data-bs-slide-to="1"></button>
            </div>
          </div>

        </div>
        <div  className='bg-dark'>
            <PhotoGallery/>
        </div>
       
        <div className="my-5 reviews-section ">
            < Reviews/>
        </div>


      </div>
    );
  }
  
  export default About;