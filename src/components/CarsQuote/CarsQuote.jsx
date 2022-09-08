import CarsForm from './CarsForm'

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
