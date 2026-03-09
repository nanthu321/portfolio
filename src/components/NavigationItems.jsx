import { useState } from 'react';
import '../styles/header.css';

export default function NavigationItems(){

    const navItems = [
    { label: 'About', href: '#about-container' },
    { label: 'Skills', href: '#skills-container' },
    { label: 'Projects', href: '#projects-container' },
    { label: 'Contact', href: '#contact-container' }
  ];

  const [activeSection, setActiveSection] = useState("About");
    return (
        <ul>
          {navItems.map((navItem, index) => (
            <li key={index}>
              <a
                href={navItem.href}
                onClick={() => setActiveSection(navItem.label)}
                className={`nav-item ${
                  activeSection === navItem.label ? 'active' : ''
                }`}
              >
                {navItem.label}
              </a>
            </li>
          ))}
        </ul>
    );
}