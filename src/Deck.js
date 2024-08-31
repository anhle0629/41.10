import React, {useState, useEffect} from "react";
import axios from "axios";
import Card from "./Cards";

const Deck = ()=>{
    const [shuffle, setShuffle] = useState(false)
    const [card, setCard] = useEffect([])
    const [deck, setDeck]= useState(null)

    const API_BASE_URL = "https://deckofcardsapi.com/api/deck"

    useEffect(function loadedDeckFromAPI (){
        async function  getADeck(){
            const response = await axios.get(`${API_BASE_URL}/new/shuffle/`)
            setDeck(response.data)
        }
        getADeck()
    }, [])

  

    useEffect(function startShuffling(){
        try{
            async function shuffleDeck() {
                await axios.get(`${API_BASE_URL}/${deck.deck_id}shuffle/`)
                setCard([])
            }  
        }
        catch(err){
            alert(err)
        }
        finally{
            setShuffle(false)
        }


    })


    async function drawACard() {
        try{

        const response = await axios.get(`${API_BASE_URL}/${deck.deckID}/draw/?count=1`)
        
        if(response.data.remaining === 0) throw new Error("No card left in the deck!")
        const card = response.data.cards[0]
    
        setCard(c => [
            ...c,
            {
                id: card.code,
                name: card.suit + " " + card.value,
                image:card.image
            }
        ])            
        }
        catch(err){
            alert(err)
        }

    }
    
    function renderDrawBtnIfOk(){
        if(!deck) return null

        return(
            <button
            className="Deck-gimme"
            onClick={drawACard}
            disabled={shuffle}>
            Draw a Card    
            </button>
        )
    }

    function renderShuffleBtnIfOk(){
        if(!deck) return null;

        return(
            <button
            className="Deck-gimme"
            onClick={drawACard}
            disabled={shuffle}>
            Shuffle Deck!
            </button>
        )
    }

    return(
        <main className="Deck">
            {renderDrawBtnIfOk()}
            {renderShuffleBtnIfOk()}

            <div className="Deck-cardarea">
                {
                    card.map(c =>
                        <Card key={c.id} name={c.name} image={c.image} />
                    )
                }
            </div>
        </main>
    )


}

export default Deck 