import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Leon<span className="studio">工作室</span></h2>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <button onClick={() => scrollToSection('home')} className="nav-link">
              首頁
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('about')} className="nav-link">
              關於我
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('portfolio')} className="nav-link">
              作品集
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              聯繫我
            </button>
          </li>
        </ul>
        <div 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar