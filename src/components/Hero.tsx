import dog from '../assets/nori.png'

type HeroProps = {
    name: string,
    tagline: string
}

function Hero({ name, tagline }: HeroProps) {
    return (<section id="center">

        <div className="hero">
            <img src={dog} className="dog" alt='dog logo' />

        </div>
        <div><h1>{name}</h1><p>{tagline}</p></div>
    </section>)
}

export default Hero