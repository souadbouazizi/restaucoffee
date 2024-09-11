
import React from "react";
import logo from '../user/img/logo-restau.png';
import SocialLinks from './SocialLinks';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './footer.css';



export const Footer = () => {
    return (

<footer className="footer font-small blue pt-4  text-dark">
        <div className="container-fluid text-center text-md-left">
          <div className='row justify-content-center'>
            <div className='col-md-6'>
              <form action=''>
                <p className='pt-2'>
                  <strong className='fs-6'>Sign up for our newsletter</strong>
                </p>
                <Row className='d-flex justify-content-center'>
                  <Col md='8'>
                    <Form.Control type='email' placeholder='Email address' className='mb-4' />
                  </Col>
                  <Col size="auto">
                    <Button outline color='light' type='submit' className='mb-4 w-100'>
                      Subscribe
                    </Button>
                  </Col>
                </Row>
              </form>
            </div>
            <div className='col-md-4'>
              <SocialLinks />
            </div>
          </div>
          <hr />
          <div className="row justify-content-center">
            <div className="col-md-4 mt-md-0 mt-3">
              <img src={logo} alt="Restau Logo" />
              <h5 className="text-uppercase">Restau Coffee</h5>
              <p>Here you can use rows and columns to organize your footer content.</p>
            </div>
            <hr className="clearfix w-100 d-md-none pb-0 color-light" />
            <div className="col-md-4 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled">
                <li><a href="#!">Link 1</a></li>
                <li><a href="#!">Link 2</a></li>
                <li><a href="#!">Link 3</a></li>
                <li><a href="#!">Link 4</a></li>
              </ul>
            </div>
            <div className="col-md-4 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled">
                <li><a href="#!">Link 1</a></li>
                <li><a href="#!">Link 2</a></li>
                <li><a href="#!">Link 3</a></li>
                <li><a href="#!">Link 4</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2024 Copyright: <a href="https://RestauCoffee.com/"> Restau Coffee</a>
        </div>
</footer>

);
};


export default Footer;
