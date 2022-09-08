import './CarsQuote.css'


const CarsQuote = () => {
  return (
      <div className="carsForm">
      <div className="carsTitle">
        <h2>Enter the details of driver 1's car</h2>
      </div>
      <div className="carsDetails">
        <h2>Enter the car registration number <br /> 
        <h5>Or enter the car details manually below</h5></h2>
        <input type='text' placeholder="e.g. CYM840" />
      </div>
      <div className="makeModel">
        <h2>Make</h2>
        <input type='text' placeholder="Enter car make here" />
        <h2>Model</h2>
        <input type='text' placeholder="Enter car Model here" />
      </div>
      <div className="carYear">
        <h2>Year</h2>
        <input type='text' placeholder="Enter year here" />
        </div>
        <div className="carAddress">
            <h2>
            What address is this car usually kept at?
            <h5>Not showing? <a href='#'>Enter the address manually</a></h5>
            </h2>
            <input type='text' placeholder="Start typing and select address from the dropdown" />
        </div>
        <div className="carDriver">
            <h2>Will this car be driven by anyone else<br />under the age of 25?</h2>
            <button id='button1' type="submit">Yes</button>
            <button id='button2' type="submit">No</button>
        </div>
      </div>
  )
}

export default CarsQuote
