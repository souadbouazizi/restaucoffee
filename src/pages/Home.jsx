import React from "react";
import { MenuBtn } from '../components/MenuBtn';
import homeImg from '../user/img/home-img.png'; // Fixed import statement
import './Home.css';
import aboutImg from '../user/img/about.jpg';
import { Link } from "react-router-dom";
import { PhotoGallery } from "../components/PhotoGallery";
import { ContactInfo } from "../components/Contactinfo";
import ContactImg from '../user/img/ContactImg.jpg'





function Home() {
  return (
    <div className="home-page">
      <div className="container mt-5">
        <div className="row mb-3 justify-content-center"> 
          <div className="col-md-7"> 
            <h1>Welcom to Restau Coffee 100% Tunisien</h1>
            <h5>Quality grilling is our business</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, vero velit aperiam error ut nam facere deleniti quas reiciendis in quia quidem distinctio recusandae, assumenda voluptate similique inventore eaque culpa!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio error culpa iste eaque alias atque consectetur aperiam quasi.</p>
             <MenuBtn />
          </div>
          <div className="col-md-5 mt-5"> 
            <img src={homeImg} alt="Restau Coffee" className="img-fluid rounded shadow" />
          </div>
        </div>
        {/* section about */}
        <div className="row mt-3 mb-5 justify-content-center align-items-center">
        <div className="col-md-7 order-md-2 mt-5">
            <h2>About us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed harum delectus? A aliquid rem accusantium itaque aliquam nulla voluptas?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam perspiciatis numquam consectetur excepturi! Ex, accusantium recusandae! Animi nisi mollitia hic, ullam perspiciatis veniam quibusdam autem necessitatibus, iure, iste alias ipsa!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolor sint ad dolores veniam nam vel magni nesciunt?</p>
            <Link to='/about'>
                <button type='button' className='btn btn-outline-primary btn-lg'>More About us</button>
            </Link>
        </div>
        <div className="col-md-5  order-md-1">
        <img src={aboutImg} alt="Restau Coffee" className="img-fluid rounded shadow" />
        </div>
        </div>
      </div>

 {/* section Menu */}
 <div className='menu-section py-5 text-light shadow'>
            
                <div className=' container text-center py-5'>
                <h2 className='fs-1 mb-5 text-uppercase fw-bold text-center'>Our Favorites</h2>
                    <div className='row mb-5 w-100 px-2'>
                        <div className='col-md-6 d-fles flex-column align-items-center mb-5 mb-md-0'>
                                    <h3>Food</h3>
                                    <ul className='px=0'>
                                        <li className='d-flex justify-content-between'>
                                            <p className='fs-3 mx-2'>Breackfast</p>
                                            <p className="fs-2 text-warning fw-bold">$9</p>
                                        </li>
                                        <li className='d-flex justify-content-between'>
                                            <p className='fs-3 mx-2'>Salade</p>
                                            <p className="fs-2 text-warning fw-bold">$10</p>
                                        </li>
                                        <li className='d-flex justify-content-between'>
                                            <p className='fs-3 mx-2'>Couscous </p>
                                            <p className="fs-2 text-warning fw-bold">$12</p>
                                        </li>
                                        <li className='d-flex justify-content-between'>
                                            <p className='fs-3 mx-2'>Spaghetti</p>
                                            <p className="fs-2 text-warning fw-bold">$10</p>
                                        </li>
                                        <li className='d-flex justify-content-between'>
                                            <p className='fs-3 mx-2'>Dessert</p>
                                            <p className="fs-2 text-warning fw-bold">$10</p>
                                        </li>
                                    </ul>
                        </div>
                        <div className='col-md-6 d-fles flex-column align-items-center mb-5 mb-md-0'>
                                    <h3>Drinks</h3>
                                    <ul className='px=0'>
                                        <li className='d-flex justify-content-between'>
                                            <p className='fs-3 mx-2'>Coffee</p>
                                            <p className="fs-2 text-warning fw-bold">$1.5</p>
                                        </li>
                                        <li className='d-flex justify-content-between'>
                                            <p className='fs-3 mx-2'>The </p>
                                            <p className="fs-2 text-warning fw-bold">$.5</p>
                                        </li>
                                        <li className='d-flex justify-content-between'>
                                            <p className='fs-3 mx-2'>Juice</p>
                                            <p className="fs-2 text-warning fw-bold">$2</p>
                                        </li>
                                        <li className='d-flex justify-content-between'>
                                            <p className='fs-3 mx-2'>Soft drinks</p>
                                            <p className="fs-2 text-warning fw-bold">$2</p>
                                        </li>
                                        <li className='d-flex justify-content-between'>
                                            <p className='fs-3 mx-2'>Mineral water</p>
                                            <p className="fs-2 text-warning fw-bold">$2</p>
                                        </li>

                                    </ul>
                        </div>
                    </div>

                    <MenuBtn/>
                </div>
        </div>
<PhotoGallery/>
<div className='bg-dark text-light py-5 shadow'>
    <div className='container'>
        <div className='row justify-content-center align-items-center'>
            <div className='col-md-6 mb-5'>
                <div className="text-light">
                <ContactInfo/>
                </div>
            </div>
            <div className='col-md-6'>
                <img  src={ContactImg} className='img-fluid rounded shadow border border-4' alt="restau coffee contact"/>
            </div>
        </div> 
    </div>
</div>


    </div>
  );
}

export default Home;
