import { useState, useRef } from 'react';
import '../App.css';
import poke1 from '../images/4.png'
import poke2 from '../images/5.png'
import poke3 from '../images/23.png'
import poke4 from '../images/24.png'
import poke5 from '../images/25.png'
import poke6 from '../images/26.png'
import poke7 from '../images/41.png'
import poke8 from '../images/42.png'
import poke9 from '../images/63.png'
import poke10 from '../images/65.png'
import poke11 from '../images/93.png'
import poke12 from '../images/94.png'

function Game() {
    const [startGame, setStartGame] = useState(true)
    const [randomImages, setRandomImages] = useState()
    const [restartGame, setRestartGame] = useState(false)

    const [timer, setTimer] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const countRef = useRef(null)

    const images = () => [
        { src: poke1, nb: 1 },
        { src: poke2, nb: 2 },
        { src: poke3, nb: 3 },
        { src: poke4, nb: 4 },
        { src: poke5, nb: 5 },
        { src: poke6, nb: 6 },
        { src: poke7, nb: 7 },
        { src: poke8, nb: 8 },
        { src: poke9, nb: 9 },
        { src: poke10, nb: 10 },
        { src: poke11, nb: 11 },
        { src: poke12, nb: 12 },
        { src: poke1, nb: 1 },
        { src: poke2, nb: 2 },
        { src: poke3, nb: 3 },
        { src: poke4, nb: 4 },
        { src: poke5, nb: 5 },
        { src: poke6, nb: 6 },
        { src: poke7, nb: 7 },
        { src: poke8, nb: 8 },
        { src: poke9, nb: 9 },
        { src: poke10, nb: 10 },
        { src: poke11, nb: 11 },
        { src: poke12, nb: 12 },

    ]

    const shuffle = () => {
        const random = images()
        random.sort(() => Math.random() - 0.5)
        setRandomImages(random)
    }

    const flipCard = (event) => {
        const element = event.currentTarget;
        element.classList.toggle('flip');
    }

    const matchingCard = (e) => {
        const clickedCard = e.currentTarget
        const rotateBack = document.querySelectorAll('.flip-card-inner, .flip')
        clickedCard.classList.add('flipped')
        const flippedCard = document.querySelectorAll('.flipped')

        if (flippedCard.length === 2) {

            if (flippedCard[0].getAttribute('number') === flippedCard[1].getAttribute('number')) {

                flippedCard.forEach(e => {
                    e.classList.remove('flipped')
                    e.classList.toggle('makeInvisible')
                })
                const test = document.querySelectorAll('.makeInvisible')
                if (test.length === 24) {
                    handlePause(true)
                    setRestartGame(!restartGame)
                }
            }

            else {

                flippedCard.forEach(e => {
                    e.classList.remove('flipped')
                })
                rotateBack.forEach(e => {
                    setTimeout(() => e.classList.remove('flip'), 600)
                })
            }
        }
    }


    const handleStart = () => {
        setIsActive(!isActive)
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }
    const handlePause = () => {
        clearInterval(countRef.current)
        setIsPaused(!isPaused)
    }
    // const handleReset = () => {
    //   clearInterval(countRef.current)
    //   setIsActive(false)
    //   setTimer(0)
    // }

    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)

        return `${getMinutes} : ${getSeconds}`
    }


    return (
        <div className='game'>
            {startGame &&
                <div className='start-screen'>
                    <p className='game-rules'>Find the matching pairs as fast as you can!</p>
                    <h1 className='start-title'>Press</h1>
                    <span onClick={() => handleStart()}><button className='start-button' onClick={() => { shuffle(); setStartGame(!startGame) }}>Start</button></span>
                </div>
            }
            {restartGame &&
                <div className='restart-screen'>
                    <h1>Well done!</h1>
                    <h1 className='restart-title'>Press</h1>
                    <button className='restart-button' onClick={() => document.location.reload()}>Restart</button>
                </div>
            }
            <section>
                {randomImages &&
                    randomImages.map((e, index) =>
                        <div className="flip-card" key={index} >
                            <div onClick={flipCard} className="flip-card-inner" >
                                <div onClick={matchingCard} className="flip-card-front" number={e.nb}>
                                </div>
                                <div className="flip-card-back" >
                                    <img className='cardImage' src={e.src} alt='pokemon' />
                                </div>
                            </div>
                        </div>
                    )}
            </section>
            <div className='bottom-container'>
                <h1>Time: {formatTime()}</h1>
                <h2>Best Time: 00.00</h2>
            </div>
        </div>
    );
}
export default Game;