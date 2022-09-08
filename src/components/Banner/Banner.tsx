import React from "react";
import bannerImg from "../../images/bannerImg1.png";
import "./Banner.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface BannerProps {}

export const Banner: React.FC<BannerProps> = ({}) => {
  return (
    <div>
      <div className="banner-container">
      <div className="text-box">
          <h1>
            Our car insurances are designed <br /> with our customers in mind...
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ex
            <br />
            aut unde error cupiditate facilis expedita quasi obcaecati molestiae
            <br />
            labore, reiciendis odit ipsa dolorum sequi sint voluptas dicta.
            <br />
            Rerum, iure?
          </p>
          <Stack spacing={2} direction="row" className="btn-box">
            <Button variant="contained" size="medium" sx={{ textTransform: 'capitalize', m: 0 }}>Get an Instant Quote Online</Button>
            <Button variant="outlined" size="large" sx={{ textTransform: 'capitalize', m: 0 }}>Retrieve your Quote</Button>
          </Stack>
        </div>
        <img src={bannerImg} className="banner-img" />
      </div>
    </div>
  );
};
