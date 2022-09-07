import React from "react";
import { Banner } from "../components/Banner/Banner";
import { Header } from "../components/Header/Header";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import arrowImg from "../images/arrow.png";
import "../App.css";
import { Box } from "@mui/system";
import { DiscoverInsurance } from "../components/DiscoverInsurance/DiscoverInsurance";
import { Footer } from "../components/Footer/Footer";
import { FamilyPlan } from "../components/FamilyPlan/FamilyPlan";
import { WhyTurners } from "../components/WhyTurners/WhyTurners";
import { Question } from "../components/Question/Question";
import { Testimonials } from "../components/Testimonials/Testimonials";

interface HomeProps {}

const headingButtons = [
  <Button key="one">Car Insurance</Button>,
  <Button key="two">Mechanical Breakdown Insurance</Button>,
];

export const Home: React.FC<HomeProps> = ({}) => {
    const [alignment, setAlignment] = React.useState('left');
  
    const handleAlignment = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string | null,
    ) => {
      if (newAlignment !== null) {
        setAlignment(newAlignment);
      }
    };

  return (
    <div>
      <Header />
      <Banner />
      <div className="homepage-header">
        <h1 className="heading">
          <img src={arrowImg} className="left-arrow" />
          <span className="heading-text">Discover our insurances</span>
          <img src={arrowImg} className="right-arrow" />
        </h1>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="header-menu"
          className="homepage-btn-container"
        >
          <ToggleButton value="left" className='left-btn' sx={{ textTransform: 'capitalize', m: 0 }}>Car Insurance</ToggleButton>
          <ToggleButton value="right" className='right-btn' sx={{ textTransform: 'capitalize', m: 0 }}>
            Mechanical Breakdown Insurance
          </ToggleButton>
        </ToggleButtonGroup>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolore
          <br />
          suscipit dignissimos eum commodi quos aut animi, earum vitae, est
          <br />
          quasi? Officia, similique cupiditate. Vel porro libero autem tenetur
          nemo.
        </p>
      </div>
      <DiscoverInsurance alignment={alignment}/>
      <FamilyPlan />
      <WhyTurners />
      <Question />
      <Testimonials />
      <Footer />
    </div>
  );
};
