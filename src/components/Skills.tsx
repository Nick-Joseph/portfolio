export type SkillGroup = {
    category: string
    items: string[]
}

type SkillsProps = {
    headline: string
    groups: SkillGroup[]
}

function Skills({ headline, groups }: SkillsProps) {
    return (
        <section id="skills">
            <h2>{headline}</h2>

            <div className="skills-grid">
                {groups.map((group) => (
                    <div key={group.category} className="skill-group">
                        <h3>{group.category}</h3>
                        <ul className="tech-list">
                            {group.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
