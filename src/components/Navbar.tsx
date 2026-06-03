const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
]

function Navbar() {
    return (
        <nav className="navbar">
            <a href="#hero" className="navbar-brand">
                Nicholas Joseph
            </a>
            <ul className="navbar-links">
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar
