import './Card.css'


function Card(props) {
    let link = ""
    const { vendor } = props
    const { name } = props
    const { cardNumber } = props
    const { valid } = props

    if (vendor == "evil") {
        link = "vendor-evil.svg"
    } else if (vendor == "blockchain") {
        link = "vendor-blockchain.svg"
    } else if (vendor == "ninja") {
        link = "vendor-ninja.svg"
    } else if (vendor == "bitcoin") {
        link = "vendor-bitcoin.svg"
    };

    return (
        <div>
            <div onClick={props.changeCard}>
                <section className={`'cartConteiner' ${vendor}`}>
                    <img className='card-chip' src="/chip-dark.svg" alt="chip" />


                    <img className='card-vendor' src={link} alt="vendor" />
                    <h2 className='card-number'> {cardNumber} </h2>
                    <small className='card-cardholder'>CARDHOLDER NAME</small>
                    <small className='card-valid'>VALID THRU</small>
                    <p className='card-name' >{name}</p>
                    <p className='card-date'>{valid}</p>
                </section>
            </div>
        </div>

    )
}

export default Card