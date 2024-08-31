import React, {useState} from "react";
// import axios from 'aixos'


// const Card = ()=>{
//     const [card, setCard] = useState(null)
//     const [deckID, setSameDeckId] = useState(null)
    

//     useEffect(()=>{
//         async function aDeck(){
//             const deck = await axios.get(`https://deckofcardsapi.com/api/deck/new/`)
//             const deckId = deck.data.deck_id
//             setSameDeckID(deck.data)
//         }
//     }, [deckID])

//     useEffect(()=>{
//         async function aCard() {
//             const card = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
//             setCard(card.data)
//         }
//     }, [])

//     return(
//         <div>
//             <button>Draw a card!</button>
//         </div>
//     )
    
// }
function Card({name, image}){
    const [{ angle, xPos, yPos}] = useState({
        angle: Math.random() * 90 - 45,
        xPos: Math.random() * 40 - 20,
        yPost: Math.random() * 40 - 20

    })

    const transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;

    return(
        <img 
        className="card"
        alt={name}
        src={image}
        style={{ transform }} />
    )
}


export default Card 