import './insurance-footer.css'

interface Props {

}

const InsuranceFooter: React.FC<Props> = () => {
  return (
    <div id="insurance-footer">
      <div id="social-media">
        <p>Follow us on Social Media</p>
        <div id="if-social-media">
          <img src="images/fb-icon.png" alt="Facebook" />
          <img src="images/ig-icon.png" alt="Instagram" />
        </div>
      </div>
      <div id="terms-privacy-copyright">
        <div id="terms-and-privacy">
          <a href='#' >Terms of use</a>
          <a href='#' >Privacy Policy</a>
        </div>
        <p>© Copyright 2022 Turners</p>
      </div>
      <div id="out-of-time">
        <div id="icon-and-text">
          <img src="images/clock.png" alt="Clock" />
          <p>Running out of time?</p>
        </div>
        <div id="save-for-later-btn">
          Save for Later
        </div>
      </div>
    </div>
  )
}

export default InsuranceFooter