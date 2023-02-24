import { useState } from "react"
import './CardForm.css'

function CardForm() {

        const [cardNumber, setCardNumber] = useState("")
        const [name, setName] = useState("")
        const [valid, setValid] = useState("")
        const [ccv, setCcv] = useState("")
        const [vendor, setVendor] = useState("")

        let cardsData = JSON.parse(localStorage.getItem("sendCardsData")) || []

        function handleClick() {

                const newData = {
                        id: cardsData.length, cardNumber: cardNumber, name: name.toUpperCase(), valid: valid, ccv: ccv, vendor: vendor
                }
                cardsData.push(newData)
                localStorage.setItem("sendCardsData", JSON.stringify(cardsData))
        }

        return (
                <article  >

                        <form className="form-container" >
                                <label className="form-number"> <small>CARD NUMBER</small>
                                        <input type="number" value={cardNumber}
                                                onChange={(e) => setCardNumber(e.target.value.slice(0, 16))}
                                        />
                                </label>
                                <label className="form-name"> <small>CARDHOLDER NAME</small>
                                        <input type="text" value={name}
                                                onChange={(e) => setName(e.target.value)}
                                        />
                                </label>
                                <label className="form-valid"> <small>VALID THRU</small>
                                        <input type="number" value={valid}
                                                onChange={(e) => setValid(e.target.value.slice(0, 4))}
                                        />
                                </label>
                                <label className="form-ccv" type="number" > <small>CCV</small>
                                        <input type="number" value={ccv}
                                                onChange={(e) => setCcv(e.target.value.slice(0, 3))}
                                        />
                                </label>
                                <label className="form-vendor"> <small className="vendor-text">VENDOR</small>
                                        <select name="vendor" id="vendor" className="form-vendor-options"
                                                onChange={(e) => { setVendor(e.target.value) }}
                                        >
                                                <option value="">--please choose a bank--</option>
                                                <option value="bitcoin">Bitcoin Bank</option>
                                                <option value="blockchain">Blockchain Inc.</option>
                                                <option value="evil">Evil AB</option>
                                                <option value="ninja">Ninja Cool Cash</option>
                                        </select>
                                </label>

                        </form>
                        <a className='add-link' href="/" >
                                <button className="add-button" type="submit"
                                        onClick={handleClick}
                                >ADD CARD</button>
                        </a>

                </article>
        )
}

export default CardForm