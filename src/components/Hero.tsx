import dog from '../assets/nori.png'

type HeroProps = {
    name: string
    tagline: string
    available?: boolean
}

function Hero({ name, tagline, available = true }: HeroProps) {
    return (
        <section id="hero">
            <div className="hero">
                <img src={dog} className="dog" alt={`${name} avatar`} />
            </div>

            {available && (
                <span className="status-badge">
                    <span className="status-dot" />
                    Available for work
                </span>
            )}

            <div className="hero-text">
                <h1>{name}</h1>
                <p className="hero-tagline">{tagline}</p>
            </div>

            <div className="hero-cta">
                <a href="#projects" className="btn btn-primary">
                    View my work
                </a>
                <a href="#contact" className="btn btn-secondary">
                    Get in touch
                </a>
            </div>
        </section>
    )
}

export default Hero
