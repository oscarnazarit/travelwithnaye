import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function ImageCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section>
    <Carousel id="carousel" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="carousel-item">
        <div>
        <Image className = "carouselImage" src="./images/Mexico/TijuanaSign.jpg" text="Tijuana" />
        </div>
        <Carousel.Caption className = "carousel-caption">
          <h3>I've been to Mexico</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <Image className = "carouselImage" src="./images/CanadaNF&T/NiagaraFalls.jpg" text="Niagara Falls" />
        <Carousel.Caption className = "carousel-caption">
          <h3>Canada</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <Image className = "carouselImage" src="./images/FloridaD&M&kw/KeyWestSign.jpg"text="Key West"/>
        <Carousel.Caption className = "carousel-caption">
          <h3>But there's more</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
  );
}

export default ImageCarousel;
