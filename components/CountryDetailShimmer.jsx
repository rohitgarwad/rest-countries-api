import './CountryDetailShimmer.css'

function CountryDetailShimmer() {
    return (
        <section>
            <div className='country-container'>
                <div className="country-flag shimmer-flag"></div>
                <div className="country-details-container shimmer-content">
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <div className='shimmer-border-container'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CountryDetailShimmer