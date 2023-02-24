import './Home.css'
import Card from "../../Components/Card/Card";
import React from 'react';

function Home() {
    const [currentCard, setCurrentCard] = React.useState(null)
    const [myCards, setMyCards] = React.useState(JSON.parse(localStorage.getItem("sendCardsData")) || [])
    function clearData() {
        window.localStorage.clear();
    }

    const cardComponents = myCards.map((card, index) => {

        return < Card key={index} cardNumber={card.cardNumber} name={card.name} valid={card.valid} ccv={card.ccs} vendor={card.vendor} changeCard={() => changeCard(index)} />
    });
    function changeCard(index) {
        setCurrentCard(index)
            ;
    }

    function removeCard(index) {
        console.log(index)
        console.log(cardComponents);
        let newMyCards = []
        newMyCards = myCards.filter((card, i) => {
            return index != i
        })
        setMyCards(newMyCards)
        localStorage.setItem("sendCardsData", JSON.stringify(newMyCards))
    }


    console.log(cardComponents);

    const singleCard = cardComponents[currentCard]
    const allCards = cardComponents.reverse()

    return (
        <div className="home-container" >
            <h1 className="rubrik">E-WALLET</h1>
            <article className='newcard'>
                <div className='wrapper'>
                    <button className='removeCard' onClick={() => removeCard(currentCard)}>delete</button>
                </div>
                {singleCard}
            </article>

            <article className='oldCards'>
                {allCards}
            </article>
            <a href="/add">
                <button className="home-button">ADD A NEW CARD</button>
                <button className='clear-button' onClick={clearData}>Clear list of cards</button>
            </a>
        </div>

    )
}

export default Home