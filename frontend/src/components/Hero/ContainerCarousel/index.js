import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom'
const StyledContainerCarousel = styled.div`
  flex: 1 60%;
  /* background-color: green; */
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  /* z-index: -1; */

  /* Slideshow container */
  .slideshow-container {
    position: relative;
    margin: auto;
  }
  
  /* Hide the images by default */
  .mySlides {
    display:none;
  }
  .mySlides.visible {
    display:block;
  }

  /* The dots/bullets/indicators */
  .dots {
    position: absolute;
    bottom: 10px;
  }
.dot {
  cursor: pointer;
  height: 13px;
  width: 13px;
  margin: 0 5px;
  border: 2px solid #F7F7F7;
  background-color: transparent;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #F7F7F7;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}


`
export default function ContainerCarousel({ data }) {
  const [visibleSlide, setVisibleSlide] = useState(0)

  const handleSlide = (idSlide) => {
    setVisibleSlide(idSlide)
  }
  // let slideData = data.find()
  return (
    <StyledContainerCarousel>
      <div className="slideshow-container">

        {
          data.map((slide, id) => {
              return (
                <div className={`fade mySlides${id === visibleSlide ? " visible":""}`}  key={id}>
                  <img src={slide.imgsrc} alt="carousel 1" />
                </div>
              )
          })
        }

      </div>

      <div className="dots" >
        {
          data.map((_, id) => (
            <span
              key={id}
              onClick={() => handleSlide(id)}
              className={`${id === visibleSlide ? "dot active" : "dot"}`}
            ></span>
          ))
        }
      </div>
    </StyledContainerCarousel>
  )
}
