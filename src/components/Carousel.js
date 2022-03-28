import { useState, useEffect } from "react";
import { IconButton, Container, Typography } from "@mui/material";
import "./carousel.css";
import { imagesDetails } from "../media/carouselPhotos/";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const lastSlide = imagesDetails.length - 1;

const Carousel = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(onClickNext, 4000);

    return () => {
      clearInterval(id);
    };
  }, []);

  const onClickPrev = () => {
    setCurrentSlide((currentSlide) => {
      if (currentSlide > 0) {
        return currentSlide - 1;
      } else {
        return lastSlide;
      }
    });
  };

  const onClickNext = () => {
    setCurrentSlide((currentSlide) => {
      if (currentSlide < lastSlide) {
        return currentSlide + 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <>
      <div className="carousel">
        <IconButton
          color="secondary"
          aria-label="go to previous slide"
          onClick={onClickPrev}
          className="carousel-btn carousel-btn-prev"
        >
          <ArrowBackIosNewIcon fontSize="large" />
        </IconButton>

        <div className="carousel-items">
          <div className="carousel-img" id={`img${currentSlide + 1}`}></div>
        </div>
        <div className="carousel-overlay">
          <Typography variant="h3">
            {imagesDetails[currentSlide].header}
          </Typography>
          <Typography variant="h5">
            {imagesDetails[currentSlide].description}
          </Typography>
        </div>
        <IconButton
          color="secondary"
          aria-label="go to next slide"
          onClick={onClickNext}
          className="carousel-btn carousel-btn-next"
        >
          <ArrowForwardIosIcon fontSize="large" />
        </IconButton>
      </div>
    </>
  );
};

export default Carousel;
