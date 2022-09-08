import FamilyQuote from "../FamilyQuote/FamilyQuote"
import Add from '../../images/Add.png'
import './DriversQuote.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const DriversQuote = () => {

  const FamilyForm = () => {
    return <FamilyQuote subHeading={'This person will only be a member of the family plan'} Heading={'Enter the details of another driver in your family plan'}/>
  }

  const [form, setForm] = useState([])

  const handleClick = (e) => {
    setForm(form.concat(<FamilyForm key={form.length} />))
  }

  return (
    <div className="quoteContainer">
      <FamilyQuote />
      <FamilyQuote subHeading={'This person will only be a member of the family plan'} Heading={'Enter the details of the second driver in your family plan'} />
      {form}
      <div className="buttonContainer">
          <button id="addMemberButton" onClick={handleClick}>
          <img src={Add} alt='plus' />
          Add another member to the Family Plan
          </button>
      </div>
      <div className="NavButtons">
        <Link to='/quote'><button id="previous" >Previous</button></Link>
        <button id="next">Next</button>
      </div>
    </div>
  )
}

export default DriversQuote
