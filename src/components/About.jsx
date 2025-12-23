import React from 'react'

const About = () => {
  const skills = [
    { icon: 'fab fa-html5', name: 'HTML5' },
    { icon: 'fab fa-css3-alt', name: 'CSS3' },
    { icon: 'fab fa-js-square', name: 'JavaScript' },
    { icon: 'fab fa-react', name: 'React' },
    { icon: 'fab fa-node-js', name: 'Node.js' },
    { icon: 'fas fa-mobile-alt', name: '響應式設計' }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">關於我</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              我是一名熱愛程式設計的創作者，專精於前端開發和使用者介面設計。
              作為 Vibe Coding 的忠實使用者，我相信程式碼不僅僅是邏輯，更是藝術的表現。
            </p>
            <div className="skills">
              <h3>技能專長</h3>
              <div className="skill-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-item">
              <h4>10+</h4>
              <p>完成專案</p>
            </div>
            <div className="stat-item">
              <h4>2+</h4>
              <p>年經驗</p>
            </div>
            <div className="stat-item">
              <h4>100%</h4>
              <p>客戶滿意度</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About