export type ResumeEntry = {
    id: string
    role: string
    organization: string
    period: string
    description: string
}

type ResumeProps = {
    headline: string
    entries: ResumeEntry[]
    resumeUrl?: string
}

function Resume({ headline, entries, resumeUrl }: ResumeProps) {
    return (
        <section id="resume">
            <div className="resume-header">
                <h2>{headline}</h2>
                {resumeUrl && (
                    <a
                        href={resumeUrl}
                        download
                        className="btn btn-secondary resume-download"
                    >
                        Download résumé (PDF)
                    </a>
                )}
            </div>

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
