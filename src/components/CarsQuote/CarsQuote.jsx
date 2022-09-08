import CarsForm from './CarsForm'
import { useNavigate } from "react-router-dom"

const CarsQuote = () => {


  return (
    <div>
      <CarsForm />
      <CarsForm />
      <div className="NavButtons">
        <button id="previous">Previous</button>
        <button id="next">Next</button>
      </div>
    </div>
  )
}

export default CarsQuote
