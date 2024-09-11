import React, { useState } from "react";
import photo1 from '../user/img/breackfast.png';
import photo2 from '../user/img/salade4.png';
import photo3 from '../user/img/break.png';
import photo4 from '../user/img/salade1.png';
import photo5 from '../user/img/plat1.png';
import photo6 from '../user/img/plat2.png';
import photo7 from '../user/img/img7.jpg';
import photo8 from '../user/img/thee.jpg';

export function PhotoGallery() {
  const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => {
    setCurrentIndex(index); // Set the clicked image index
  };

  const closeModal = () => {
    setCurrentIndex(null); // Close the modal
  };

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length); // Move to the next image
  };

  const showPreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length); // Move to the previous image
  };

  return (
    <div className='section-photoGallery py-5 overflow-hidden'>
      <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold">Photo Gallery</h2>
      <div className='row'>
        {photos.map((photo, index) => (
          <div key={index} className="col-md-3 px-2">
            <div className='my-2'>
              <img 
                src={photo} 
                className='img-fluid shadow rounded w-100' 
                style={{ height: "250px", objectFit: "cover" }} 
                alt='restaurant coffee'
                onClick={() => openModal(index)} // Open modal on click
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {currentIndex !== null && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body p-0 position-relative text-center">
                <h2 className='mb-3'>Gallery photo restau coffee</h2>
                <img 
                  src={photos[currentIndex]} 
                  alt="restaurant coffee" 
                  className="img-fluid w-100" 
                />
                {/* Navigation Arrows */}
                <button 
                  className="btn btn-light position-absolute top-50 start-0 translate-middle-y" 
                  style={{ zIndex: 1055 }} 
                  onClick={showPreviousImage}
                >
                  &#8249;
                </button>
                <button 
                  className="btn btn-light position-absolute top-50 end-0 translate-middle-y" 
                  style={{ zIndex: 1055 }} 
                  onClick={showNextImage}
                >
                  &#8250;
                </button>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
