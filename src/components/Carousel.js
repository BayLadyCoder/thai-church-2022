import { useState, useEffect } from "react";
import { Paper, IconButton, Container, Typography } from "@mui/material";
import "./carousel.css";
import {
  imagesWithDetails,
  totalImageWithDetails,
} from "../media/carouselPhotos/";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const lastSlide = totalImageWithDetails - 1;

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
  console.log("currentSlide", currentSlide);
  console.log("imagesWithDetails", imagesWithDetails);
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
        {/* <img
          className="carousel-img"
          src={imagesWithDetails[currentSlide].img}
          alt={imagesWithDetails[currentSlide].alt}
        /> */}
        <div className="carousel-items">
          <div className="carousel-img" id={`img${currentSlide + 1}`}></div>
        </div>
        <div className="carousel-overlay">
          <Typography variant="h3">
            {imagesWithDetails[currentSlide].header}
          </Typography>
          <Typography variant="h5">
            {imagesWithDetails[currentSlide].description}
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

function Image(props) {
  console.log("props", props);
  return <img className="carousel-img" src={props.item.img} alt={props.alt} />;
}

export default Carousel;
