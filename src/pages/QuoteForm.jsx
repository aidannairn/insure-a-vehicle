import {  Header } from '../components/Header/Header'
import quoteHome from '../images/quotehome.PNG'
import familyplan from '../images/family-plan-home.png'
import { Link } from "react-router-dom"
import '../components/DriversQuote/DriversQuote.css'


const QuoteForm = () => {

  return (
    <div className='quoteHomeContainer'>
      <Header />
      <div className='homeImg'>
      <img src={quoteHome} alt='home' />
      <select>
        <option>Select</option>
        <option>Family Plan</option>
      </select>
      <Link to='/insurance'><button>Let's get started!</button></Link>
      </div>
      <div className='quoteHomeText'>
        <h1>By subscribing to our Family Plan, <br />you’ll spend less time on admin and enjoy great <br /> discounts... <img src={familyplan} alt='family' /></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <br />
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
           
         </p>
         
      </div>
    </div>
  )
}

export default QuoteForm
