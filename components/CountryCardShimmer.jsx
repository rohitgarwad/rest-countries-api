import './CountryCardShimmer.css'

function CountryCardShimmer() {
  return (
    <div className='countries-container'>
        {
            Array.from({length: 12}).map((element, index) => (
                <div key={index} className="country-card shimmer-card">
                  <div className="image-container"></div>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                </div>
            ))
        }
    </div>
  )
}

export default CountryCardShimmer