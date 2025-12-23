import React from 'react'

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            你好，我是<span className="highlight">Leon</span>
          </h1>
          <p className="hero-subtitle">創意程式設計師 · Vibe Coding 愛好者</p>
          <p className="hero-description">
            專注於創造美觀且實用的網頁應用程式，將創意與程式碼完美融合
          </p>
          <div className="hero-buttons">
            <button onClick={scrollToPortfolio} className="btn btn-primary">
              查看作品
            </button>
            <button onClick={scrollToContact} className="btn btn-secondary">
              聯繫我
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="code-animation">
            <div className="code-line"></div>
            <div className="code-line"></div>
            <div className="code-line"></div>
            <div className="code-line"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero