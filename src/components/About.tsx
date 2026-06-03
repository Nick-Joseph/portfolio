


type AboutProps = {
    headline: string,
    paragraphs: string[]

}

function About({ headline, paragraphs }: AboutProps) {



    return (<section id="about">
        <div className="about">
            <h2>
                {headline}
            </h2>
            {paragraphs.map((text, index) => <p key={index}>{text}</p>)}
        </div>




    </section>)


}
export default About