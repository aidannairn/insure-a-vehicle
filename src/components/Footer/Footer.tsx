import React from "react";
import "./Footer.css";
import FacebookIco from "../../images/Facebook.png";
import PhoneIco from "../../images/Phone.png";
import MapIco from "../../images/Map Pinpoint.png";
import TurnersLogo from "../../images/turnerscars_logo_1line_horz_true-rgb-desktop.png";
import InstagramIcon from "@mui/icons-material/Instagram";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  const FORM_URL = `the URL you created in the previous section`;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = new FormData(event.target as HTMLFormElement);

    try {
      const response = await fetch(FORM_URL, {
        method: "post",
        body: data,
        headers: {
          accept: "application/json",
        },
      });
      const json = await response.json();

      if (json.status === "success") {
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [email, setEmail] = React.useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmail(value);
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-menu">
            <h3>Cars</h3>
            <ul>
              <li>
                <a href="" title="How to Buy">
                  How to Buy
                </a>
              </li>
              <li>
                <a href="" title="Sell Your Car">
                  Sell Your Car
                </a>
              </li>
              <li>
                <a href="" title="Finance &amp; Insurance">
                  Finance &amp; Insurance
                </a>
              </li>
              <li>
                <a href="" title="Auctions &amp; Events">
                  Auctions &amp; Events
                </a>
              </li>
              <li>
                <a href="" title="Buyer &amp; Seller Fees">
                  Buyer &amp; Seller Fees
                </a>
              </li>
              <li>
                <a href="" title="Vehicle Sale Price History Tool">
                  Vehicle Sale Price History Tool
                </a>
              </li>
              <li>
                <a href="" title="Shipping Costs">
                  Shipping Costs
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <h3>Finance</h3>
            <ul>
              <li>
                <a href="" target="_top" title="Finance page">
                  Finance Homepage
                </a>
              </li>
              <li>
                <a href="" title="Car &amp; Personal Finance">
                  Car &amp; Personal Finance
                </a>
              </li>
              <li>
                <a href="" target="_top" title="Loan Calculator">
                  Loan Calculator
                </a>
              </li>
              <li>
                <a href="">Trucks Finance</a>
              </li>
              <li>
                <a href="" title="Financial Information">
                  Financial Information
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <h3>Insurance</h3>
            <ul>
              <li>
                <a href="" target="_top" title="Finance page">
                  Insurance Homepage
                </a>
              </li>
              <li>
                <a href="" title="Finance page">
                  Car Insurance
                </a>
              </li>
              <li>
                <a href="" title="Finance page">
                  Mechanical Breakdown Insurance
                </a>
              </li>
              <li>
                <a href="" title="General Insurances">
                  Insurance
                </a>
              </li>
              <li>
                <a href="" title="Family Plan">
                  Family Plan
                </a>
              </li>
              <li>
                <a href="" title="Insurance FAQ">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <h3>Search For</h3>
            <ul>
              <li>
                <a href="" target="_top" title="Search for Cars">
                  Cars
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_top"
                  title="Search for Trucks &amp; Machinery"
                >
                  Trucks &amp; Machinery
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_top"
                  title="Search for Damaged &amp; End of Life Cars"
                >
                  Damaged &amp; End of Life Cars
                </a>
              </li>
              <li>
                <a href="" target="_top" title="Search for Boats and Marine">
                  Boats &amp; Marine
                </a>
              </li>
              <li>
                <a href="" target="_top" title="Search for Motorcycles">
                  Motorcycles &amp; Scooters
                </a>
              </li>
              <li>
                <a href="" target="_top" title="Search for General Goods">
                  General Goods
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_top"
                  title="Search for Buses, Caravans &amp; Motorhomes"
                >
                  Buses, Caravans &amp; Motorhomes
                </a>
              </li>
              <li>
                <a href="" target="_top" title="Auction Schedule">
                  Turners Auction Schedule
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-menu">
            <h3>About Us</h3>
            <ul>
              <li>
                <a href="">Overview</a>
              </li>
              <li>
                <a href="">Turners Careers</a>
              </li>
              <li>
                <a href="" title="See out Terms &amp; Conditions">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="" title="Learn about Turners Live">
                  Turners Live
                </a>
              </li>
              <li>
                <a href="" title="The Good Oil Blog">
                  The Good Oil Blog
                </a>
              </li>
              <li>
                <a href="">Email Alerts</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-middle">
          <div className="social-media">
            <h2>Follow us on</h2>
            <a>
              <img src={FacebookIco} className="footer-facebook" />
            </a>
            <a>
              <InstagramIcon fontSize="large" className="footer-instagram" />
            </a>
          </div>
          <div className="sign-up">
            <h2>Subscribe to our newsletter</h2>
            <form onSubmit={handleSubmit}>
              <input
                aria-label="Enter your email address"
                name="email_address"
                placeholder="Enter your email address"
                required
                type="email"
                onChange={handleEmailChange}
                value={email}
                className="footer-input"
              />
              <button className="footer-btn">SUBSCRIBE</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="contact-us">
            <h2>Contact us / Find us</h2>
            <a>
              <img src={PhoneIco} className="footer-phone" />
            </a>
            <a>
              <img src={MapIco} className="footer-map" />
            </a>
          </div>
        </div>
        <div className="footer-logo">
          <img src={TurnersLogo} />
        </div>
        <div className="copyright">© Copyright 2022 Turners</div>
      </div>
    </footer>
  );
};
