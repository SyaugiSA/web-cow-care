import React from "react";
import { ArrowBackIos, ArrowForwardIos, WhatsApp } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const pengembang = [
  {
    image: "/pengembang1.jpg",
    alt: "Pengembang 1",
    nama: "Syaugi Salim Amar",
    posisi: "Full Stack developer",
    deskripsi:
      "Syaugi merupakan full stack developer yang berkecimpung dalam pengembangan aplikasi web",
  },
  {
    image: "/pengembang2.jpg",
    alt: "Pengembang 2",
    nama: "Ezra Alannathaniel",
    posisi: "UI/UX Designer",
    deskripsi:
      "Ezra adalah UI/UX Designer yang mengerjakan desain tampilan web ini. Ia sekarang sedang berkuliah di Politeknik Negeri Jember. Sedang mengerjakan skripsinya. Mahasiswa semester akhir, tabah sampai akhir.",
  },
];

export default function Home() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = pengembang.length;

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
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: { md: 18, xs: 9 } }}>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ mx: 4, flexDirection: { md: "row", xs: "column" }, mb: 10 }}
        >
          <Image src="/img1.png" alt="Sapi" width={450} height={450} />

          <Box
            maxWidth={550}
            display="flex"
            flexDirection="column"
            justifyContent="space-evenly"
            sx={{ my: 3 }}
          >
            <Box sx={{ my: 3 }}>
              <Typography
                variant="h4"
                component="span"
                sx={{ color: "#EBFF00", fontFamily: "Poppins" }}
              >
                Membantu
              </Typography>
              <Typography
                variant="h4"
                component="span"
                sx={{ fontFamily: "Poppins" }}
              >
                {" peternak"} monitoring kesehatan sapi
              </Typography>
            </Box>

            <Typography
              component="p"
              variant="body1"
              sx={{
                fontFamily: "Poppins",
                fontSize: { md: 20, xs: 15 },
                mb: 3,
              }}
            >
              MooCare memiliki tekad untuk dapat membantu peternak sapi agar
              dapat memahami kondisi peternakan mereka dengan bantuan teknologi.
              Sehingga mereka dapat mengelolanya dengan lebih baik lagi,
              terhidar dari berbagai macam resiko kegagalan beternak serta
              meningkatkan produktivitasnya.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowForwardIos sx={{ fill: "black" }} />}
              sx={{
                backgroundColor: "#EAFF00",
                color: "black",
                height: 50,
                width: "max-content",
                fontFamily: "Poppins",
                mb: 3,
              }}
            >
              Selengkapnya
            </Button>

            <Divider
              flexItem
              variant="middle"
              sx={{ backgroundColor: "#EBFF00", mx: 2, my: 3 }}
            />
          </Box>
        </Box>
      </Container>

      <Box sx={{ backgroundColor: "white" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#040c1f"
            fill-opacity="1"
            d="M0,160L80,149.3C160,139,320,117,480,101.3C640,85,800,75,960,74.7C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>

        <Container>
          <Box
            display="flex"
            justifyContent="space-around"
            sx={{ flexDirection: { md: "row", xs: "column-reverse" }, py: 6 }}
          >
            <Box
              maxWidth={550}
              display="flex"
              justifyContent="space-around"
              flexDirection="column"
            >
              <Typography
                variant="h4"
                component="span"
                sx={{ fontFamily: "Poppins", color: "black" }}
              >
                Mengapa harus kami?
              </Typography>

              <Typography
                variant="body1"
                component="p"
                sx={{
                  fontFamily: "Poppins",
                  color: "black",
                  my: 3,
                  fontSize: { md: 20, xs: 15 },
                }}
              >
                Kami peduli dengan keberlangsungan dan kesejahteraan peternak
                sapi di Indonesia. Potensi daging dan susu sapi sangat tinggi di
                Indonesia sehingga dengan bantuan teknologi, kami harap produksi
                dan kualitas daging dan susu sapi meningkat dan menambah daya
                saing peternak sapi Indonesia dalam skala global.
              </Typography>

              <Button
                endIcon={<ArrowForwardIos />}
                variant="contained"
                sx={{
                  fontFamily: "Poppins",
                  width: "max-content",
                  backgroundColor: "#040C1F",
                  height: 50,
                }}
              >
                Selengkapnya
              </Button>
            </Box>

            <Image src="/img2.png" alt="computer" width={400} height={400} />
          </Box>
        </Container>
      </Box>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,96L120,117.3C240,139,480,181,720,197.3C960,213,1200,203,1320,197.3L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>

      <Container>
        <Box display="flex" justifyContent="center">
          <Typography
            variant="h4"
            component="div"
            sx={{ fontFamily: "Poppins", my: 3 }}
          >
            Tim Pengembang
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Box display="flex" justifyContent="center" flexDirection="column">
            <IconButton
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{
                border: 1,
                borderRadius: "100%",
                height: 50,
                width: 50,
                borderColor: "white",
              }}
            >
              <ArrowBackIos />
            </IconButton>
          </Box>

          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {pengembang.map((step, index) =>
              Math.abs(activeStep - index) <= 2 ? (
                <Box display="flex" justifyContent="center">
                  <Box
                    key={step.nama}
                    display="flex"
                    justifyContent="space-between"
                    sx={{
                      flexDirection: { md: "row", xs: "column" },
                      width: { md: 550, xs: 200 },
                    }}
                  >
                    <Box xs={{ height: "100%" }}>
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        sx={{
                          border: 2,
                          borderRadius: "100%",
                          bprderColor: "white",
                          height: 200,
                          width: 200,
                        }}
                      >
                        <Image
                          src={step.image}
                          alt={step.nama}
                          width={300}
                          height={300}
                          style={{ borderRadius: "100%" }}
                        />
                      </Box>
                    </Box>

                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-evenly"
                      maxWidth={300}
                      sx={{ height: { md: 300, xs: 400 } }}
                    >
                      <Typography
                        variant="h6"
                        component="span"
                        sx={{ fontFamily: "Poppins", color: "#EBFF00" }}
                      >
                        {step.nama}
                      </Typography>

                      <Typography
                        variant="body1"
                        component="span"
                        sx={{ fontFamily: "Poppins" }}
                      >
                        {step.posisi}
                      </Typography>

                      <Typography
                        variant="body1"
                        component="p"
                        sx={{ fontFamily: "Poppins" }}
                      >
                        {step.deskripsi}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ) : null
            )}
          </AutoPlaySwipeableViews>

          <Box display="flex" justifyContent="center" flexDirection="column">
            <IconButton
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              sx={{
                border: 1,
                borderRadius: "100%",
                height: 50,
                width: 50,
                borderColor: "white",
              }}
            >
              <ArrowForwardIos />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ mt: 10, mb: -5 }}>
          <Box display="flex" justifyContent="center">
            <Typography
              variant="h4"
              component="div"
              sx={{ fontFamily: "Poppins", my: 3 }}
            >
              Tertarik?
            </Typography>
          </Box>

          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              startIcon={<WhatsApp sx={{ fill: "black" }} />}
              sx={{
                backgroundColor: "#EBFF00",
                color: "black",
                fontFamily: "Poppins",
                height: 50,
              }}
            >
              Hubungi Kami
            </Button>
          </Box>
        </Box>
      </Container>

      <svg
        style={{ width: "100%" }}
        width="1320"
        height="204"
        viewBox="0 0 1440 204"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <path
            d="M0 9.50114C258.965 3.84834 316.948 41.6788 398.91 60.8112C495.428 83.3415 718.202 112.916 806.104 102.555C902.016 91.2495 942.997 28.6337 1060.27 9.50114C1177.55 -9.63138 1383.76 12.545 1440 23.8506"
            stroke="url(#paint0_linear_282_3697)"
            stroke-width="4"
            stroke-linecap="round"
          />
          <path
            d="M0 32.8213C258.965 27.1685 316.948 64.9989 398.91 84.1314C495.428 106.662 718.202 136.236 806.104 125.875C902.016 114.57 942.997 51.9538 1060.27 32.8213C1177.55 13.6888 1389.14 53.0227 1440 47.1708"
            stroke="url(#paint1_linear_282_3697)"
            stroke-width="4"
          />
          <path
            d="M0 57.0853C258.965 51.4325 316.948 89.2629 398.91 108.395C495.428 130.926 718.202 160.5 806.104 150.139C902.016 138.834 942.997 76.2178 1060.27 57.0853C1177.55 37.9527 1394.51 94.4443 1440 71.4347"
            stroke="url(#paint2_linear_282_3697)"
            stroke-width="4"
          />
          <path
            d="M0 81.8215C258.965 76.1687 316.948 113.999 398.91 133.132C495.428 155.662 718.202 185.237 806.104 174.875C902.016 163.57 942.997 100.954 1060.27 81.8215C1177.55 62.689 1399.89 136.338 1440 96.171"
            stroke="url(#paint3_linear_282_3697)"
            stroke-width="4"
          />
          <path
            d="M0 106.813C258.965 101.161 316.948 138.991 398.91 158.123C495.428 180.654 718.202 210.228 806.104 199.867C902.016 188.562 942.997 125.946 1060.27 106.813C1177.55 87.6808 1405.27 178.487 1440 121.163"
            stroke="url(#paint4_linear_282_3697)"
            stroke-width="4"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_282_3697"
            x1="10.0272"
            y1="2.10932"
            x2="1454.82"
            y2="2.10935"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#00267C" stop-opacity="0" />
            <stop offset="0.520833" stop-color="#00267C" />
            <stop offset="1" stop-color="#00267C" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_282_3697"
            x1="9.13923e-06"
            y1="27.3296"
            x2="1489.7"
            y2="27.3296"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#002A89" stop-opacity="0" />
            <stop offset="0.515625" stop-color="#002A89" />
            <stop offset="1" stop-color="#002A89" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_282_3697"
            x1="1.65492e-05"
            y1="69.9431"
            x2="1563.81"
            y2="53.3331"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#002E97" stop-opacity="0" />
            <stop offset="0.520833" stop-color="#002E97" />
            <stop offset="0.953125" stop-color="#002E97" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_282_3697"
            x1="-11.3351"
            y1="78.6392"
            x2="1511.93"
            y2="67.7118"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0032A4" stop-opacity="0" />
            <stop offset="0.520833" stop-color="#0032A4" />
            <stop offset="1" stop-color="#0032A4" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_282_3697"
            x1="2.70809e-05"
            y1="94.2929"
            x2="1521.09"
            y2="121.394"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0036B1" stop-opacity="0" />
            <stop offset="0.526042" stop-color="#0036B1" />
            <stop offset="1" stop-color="#0036B1" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <Footer />
    </>
  );
}
