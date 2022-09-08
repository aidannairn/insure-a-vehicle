import './FamilyQuote.css'
import TimeIcon from '../../images/Time Machine.png'

const FamilyButtons = () => {
  return (
    <div className='familyButtonContainer'>
      <p>
        <img src={TimeIcon} alt='timeicon' />
        Estimated completion time 2 minutes
      </p>
      <div className="familyButtons">
        <button id='fbutton1'>Drivers</button>
        <button id='fbutton2'>Cars</button>
        <button id='fbutton3'>Policies & Extras</button>
      </div>
    </div>
  )
}

export default FamilyButtons
