type ResumeEntry = {
    id: string
    role: string
    organization: string
    period: string
    description: string
}

type ResumeProps = {
    headline: string
    entries: ResumeEntry[]
}

function Resume({ headline, entries }: ResumeProps) {
    return (
        <section id="resume">
            <h2>{headline}</h2>

            {entries.map((entry) => (
                <div key={entry.id} className="resume-entry">
                    <h3>
                        {entry.role} — {entry.organization}
                    </h3>
                    <p className="resume-period">{entry.period}</p>
                    <p>{entry.description}</p>
                </div>
            ))}
        </section>
    )
}

export default Resume