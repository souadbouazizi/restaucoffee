import { Carousel as BootstrapCarousel } from 'react-bootstrap'; // Alias the Carousel import
import slide1 from '../user/img/carousel1.jpg';
import slide2 from '../user/img/carousel2.jpg';
import slide3 from '../user/img/carousel3.jpg';
import slide4 from '../user/img/carousel4.jpg';

function Carousel() {
  return (
    <div>
      <BootstrapCarousel>
        <BootstrapCarousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
          />
          <BootstrapCarousel.Caption>
            <h3 className='fs-1'>Where Coffee Dreams Come True</h3>
            <p className='fs-3'>Coffee That Speaks to You</p>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>

        <BootstrapCarousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide"
          />
          <BootstrapCarousel.Caption>
            <h3 className='fs-1'>For the love of delicious food</h3>
            <p className='fs-3'>Nothing brings people together like good food.</p>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>

        <BootstrapCarousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
          />
          <BootstrapCarousel.Caption>
            <h3 className='fs-1'>Where Coffee Dreams Come True</h3>
            <p className='fs-3'>Coffee That Speaks to You</p>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
        
        <BootstrapCarousel.Item>
          <img
            className="d-block w-100"
            src={slide4}
            alt="Fourth slide"
          />
          <BootstrapCarousel.Caption>
            <h3 className='fs-1'>For the love of delicious food</h3>
            <p className='fs-3'>Nothing brings people together like good food.</p>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
      </BootstrapCarousel>
    </div>
  );
}

export default Carousel;