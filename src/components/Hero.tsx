import dog from '../assets/nori.png'
import { useState } from 'react'

type HeroProps = {
    name: string,
    tagline: string
}

function Hero({ name, tagline }: HeroProps) {
    const [showStatus, setShowStatus] = useState(false)
    const [likes, setLikes] = useState(0)

    return (<section id="hero">

        <div className="hero">
            <img src={dog} className="dog" alt='dog logo' />

        </div>
        <div><h1>{name}</h1><p>{tagline}</p></div>
        <button onClick={() => setShowStatus(!showStatus)}>{showStatus ? 'Hide status' : 'Show status'}</button>
        {showStatus && <p>✅ Available for work</p>}
        <button onClick={() => setLikes(likes + 1)}>Like : {likes}</button>

    </section>)


}

export default Hero