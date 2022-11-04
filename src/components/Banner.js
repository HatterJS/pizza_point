import Carousel from 'react-bootstrap/Carousel';

import bannerImg01 from '../assets/img/banner/pizza-01.webp';
import bannerImg02 from '../assets/img/banner/pizza-02.webp';
import bannerImg03 from '../assets/img/banner/pizza-03.webp';

function Banner() {
  return (
    <div className="bannerBlock">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerImg01} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerImg02} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={bannerImg03} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
