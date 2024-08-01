import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { ShopOneProduct } from "./product";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function LandingSwipeableTextMobileStepper({ data }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = data.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ minWidth: "full", flexGrow: 1 }} className="shadow-md">
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      ></Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {data.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div className="flex flex-row justify-between px-14">
                <div className="text-[#127816] text-center md:text-[50px] lg:text-[50px] flex justify-center items-center font-extrabold">
                  {step.label}
                </div>
                <div>
                  <div className="hidden md:block lg:block w-full">
                    <Box
                      component="img"
                      sx={{
                        display: "block",
                        maxWidth: "100%",
                        overflow: "hidden",
                        width: "full",
                        height: "400px",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  </div>
                  <div className="block md:hidden lg:hidden w-full">
                    <Box
                      component="img"
                      sx={{
                        display: "block",
                        maxWidth: "100%",
                        overflow: "hidden",
                        width: "full",
                        height: "200px",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

function SwipeableTextMobileStepperOne({ data }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = data.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{ minWidth: "full", flexGrow: 1, border: "hidden" }}
      className="flex flex-col justify-center items-center border-none overflow-hidden"
    >
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      ></Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {data.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div className="flex flex-row justify-center items-center px-2 md:px-14 lg:px-14 relative overflow-hidden">
                <div
                  className={`absolute text-[#fff] text-center flex flex-col ${
                    step.position === "right"
                      ? "right-auto md:right-[300px] lg:right-[300px]"
                      : "right-auto md:left-[300px] lg:left-[300px]"
                  } space-y-3 md:space-y-7 lg:space-y-7 justify-end items-center`}
                >
                  <span className="bg-[#E9AF4C] rounded-lg h-8 w-40 md:h-11 md:w-32 lg:h-11 lg:w-32 px-1 flex justify-center items-center font-bold">
                    {step.btnText}
                  </span>
                  <div className="flex flex-col space-y-1">
                    <span className="text-[15px] md:text-[30px] lg:text-[30px] font-extra-thick">
                      {step.mainText}
                    </span>
                    <span className="font-bold -mt-2">{step.subtext}</span>
                  </div>
                </div>
                <Box
                  component="img"
                  sx={{
                    display: "block",
                    minWidth: "full",
                    overflow: "hidden",
                    width: "full",
                    maxHeight: "full",
                    borderRadius: 6,
                  }}
                  src={step.image}
                  alt={step.label}
                />
                <MobileStepper
                  sx={{
                    padding: 0,
                    background: "rgba(255, 255, 255, 0)",
                  }}
                  steps={maxSteps}
                  position="static"
                  activeStep={activeStep}
                  className="absolute bottom-2"
                />
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

function SwipeableTextMobileStepperComponent({ data }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = data.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{ minWidth: "full", flexGrow: 1, border: "hidden" }}
      className="flex flex-col justify-center items-center border-none"
    >
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      ></Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={5000}
      >
        {data.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div className="flex flex-row justify-center px-14 relative">
                <div className="w-[35%]">
                  <ShopOneProduct data={step} largeIsRequired={true} />
                </div>
                <MobileStepper
                  sx={{
                    padding: 0,
                    background: "rgba(255, 255, 255, 0)",
                  }}
                  steps={maxSteps}
                  position="static"
                  activeStep={activeStep}
                  className="absolute bottom-2"
                />
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

function PrimeReactProductCarousel({ ProductService }) {
  const [products, setProducts] = useState([]);

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 4))
    );
  }, []);

  const productTemplate = (product) => {
    return (
      <div className="border border-1 surface-border border-round rounded-lg m-2 flex flex-row justify-around items-center text-center py-5 px-3">
        <div className="mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="shadow-2 w-32 h-20"
          />
        </div>
        <div className="text-[#127816]">
          <h4 className="mb-1">{product.name}</h4>
          <h6 className="mt-0 mb-3">${product.price}</h6>
        </div>
      </div>
    );
  };

  return (
    <div className="card md:px-64 lg:px-64">
      <Carousel
        value={products}
        numVisible={3}
        numScroll={3}
        circular
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
    </div>
  );
}

//Prime React
function ReviewCarousel({ reviews }) {
  const [products, setProducts] = useState([]);

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    reviews.getReviewSmall().then((data) => setProducts(data.slice(0, 4)));
  }, []);

  const productTemplate = (product) => {
    return (
      <div className="flex flex-col border border-black rounded-lg w-[300px] h-[270px] p-1 mx-6 md:mx-auto lg:mx-auto">
        <div className="flex flex-row justify-between items-center mr-9 ml-1">
          <img src={product.image} alt="" />
          <span className="text-[#127816] font-extrabold text-[20px]">
            {product.name}
          </span>
        </div>
        <div className="bg-[#B0E4B2] text-[15px] py-2 px-3 rounded-lg mt-4 h-[170px]">
          {product.review}
        </div>
      </div>
    );
  };

  return (
    <div className="card md:px-64 lg:px-64">
      <Carousel
        value={products}
        numVisible={3}
        numScroll={3}
        circular
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
    </div>
  );
}

export {
  LandingSwipeableTextMobileStepper,
  SwipeableTextMobileStepperOne,
  SwipeableTextMobileStepperComponent,
  PrimeReactProductCarousel,
  ReviewCarousel,
};
