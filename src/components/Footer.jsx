import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Leon工作室</h3>
            <p>創造優秀的數位體驗</p>
          </div>
          <div className="footer-social">
            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Leon工作室. 版權所有.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer