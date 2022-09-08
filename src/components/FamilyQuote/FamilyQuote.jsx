import './FamilyQuote.css'
import TrashCan from '../../images/Trash Can.png'
import HighPri from '../../images/High Priority.png'
import { useState } from 'react'


const FamilyQuote = ({ Heading, subHeading, subHeadingImg }) => {

  const [message, setMessage] = useState()

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div className="familyForm">
      <div className="familyTitle">
        <h2>{Heading}</h2>
        <p>{subHeadingImg}{subHeading}</p>
        
      </div>
      <div className="familyDetails">
        <h2>Name</h2>
        <input type='text' placeholder="First Name" onChange={handleChange} value={message} />
        <input type='text' placeholder="Middle Name" />
        <input type='text' placeholder="Last Name" />
      </div>
      <div className="DOB">
        <h2>Date of Birth</h2>
        <input type='text' placeholder="dd/mm/year" />
      </div>
      <div className="License">
        <h2>License Type</h2>
        <select>
            <option>Please Select</option>
            <option>Learners</option>
            <option>Restricted</option>
            <option>Full</option>
        </select>
        </div>
        <div className="licenseTime">
            <h2>How long has this driver been <br/> holding their drivers license?</h2>
            <select>
                <option>Please Select</option>
                <option>1-5 years</option>
                <option>5-10 years</option>
                <option>10-15 years</option>
            </select>
        </div>
        <div className="accidents">
            <h2>Have they been involved in any <br/> incidents, damage or theft of a <br/> vehicle?</h2>
            <button id='button1' type="submit">Yes</button>
            <button id='button2' type="submit">No</button>
        </div>
      </div>
  )
}

FamilyQuote.defaultProps = {
  Heading: 'Enter the details of the first driver in your family plan',
  subHeading: 'This person will be in charge of the Family Plan and will be responsible for any changes',
  HeadingImg: <img src={TrashCan} alt='can'/>,
  subHeadingImg: <img src={HighPri} alt='highp' />
}

export default FamilyQuote
