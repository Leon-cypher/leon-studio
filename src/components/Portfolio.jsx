import React, { useState } from 'react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  // TODO: 請替換為你的實際GitHub項目
  const portfolioItems = [
    {
      id: 1,
      title: 'React電商平台',
      description: '完整的電商網站，包含購物車、付款功能',
      image: 'https://via.placeholder.com/400x300/667eea/ffffff?text=E-Commerce',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoLink: 'https://your-ecommerce-demo.vercel.app',
      githubLink: 'https://github.com/Leon-cypher/ecommerce-project',
      featured: true,
      status: 'completed',
      developmentTime: '2024年3月'
    },
    {
      id: 2,
      title: 'Vue任務管理器',
      description: '響應式任務管理應用，支援拖拽和實時同步',
      image: 'https://via.placeholder.com/400x300/f093fb/ffffff?text=Task+Manager',
      category: 'frontend',
      technologies: ['Vue 3', 'TypeScript', 'Pinia', 'Tailwind'],
      demoLink: 'https://your-taskmanager-demo.netlify.app',
      githubLink: 'https://github.com/Leon-cypher/vue-task-manager',
      featured: true,
      status: 'completed',
      developmentTime: '2024年2月'
    },
    {
      id: 3,
      title: 'UI組件庫',
      description: '可重用的React組件庫，包含完整文檔',
      image: 'https://via.placeholder.com/400x300/4facfe/ffffff?text=UI+Kit',
      category: 'library',
      technologies: ['React', 'Storybook', 'CSS-in-JS', 'TypeScript'],
      demoLink: 'https://your-ui-kit-storybook.vercel.app',
      githubLink: 'https://github.com/Leon-cypher/react-ui-components',
      featured: false,
      status: 'active',
      developmentTime: '2024年1月'
    },
    {
      id: 4,
      title: '天氣預報APP',
      description: '美觀的天氣應用，整合多個API數據源',
      image: 'https://via.placeholder.com/400x300/43e97b/ffffff?text=Weather+App',
      category: 'frontend',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'PWA'],
      demoLink: 'https://your-weather-app.surge.sh',
      githubLink: 'https://github.com/Leon-cypher/weather-forecast',
      featured: false,
      status: 'completed',
      developmentTime: '2023年12月'
    },
    {
      id: 5,
      title: 'Node.js API服務',
      description: 'RESTful API服務，包含認證和數據分析功能',
      image: 'https://via.placeholder.com/400x300/feca57/ffffff?text=API+Service',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'JWT', 'Swagger'],
      demoLink: 'https://api-docs.your-service.herokuapp.com',
      githubLink: 'https://github.com/Leon-cypher/nodejs-api-service',
      featured: true,
      status: 'completed',
      developmentTime: '2023年11月'
    },
    {
      id: 6,
      title: 'Chrome擴充功能',
      description: '提高生產力的瀏覽器擴充工具',
      image: 'https://via.placeholder.com/400x300/ff6b6b/ffffff?text=Extension',
      category: 'tool',
      technologies: ['JavaScript', 'Chrome APIs', 'Webpack', 'CSS3'],
      demoLink: 'https://chrome.google.com/webstore/detail/your-extension',
      githubLink: 'https://github.com/Leon-cypher/chrome-productivity-extension',
      featured: false,
      status: 'completed',
      developmentTime: '2023年10月'
    }
  ]

  const filterItems = (category) => {
    setActiveFilter(category)
  }

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  // 優先顯示精選項目
  const sortedItems = filteredItems.sort((a, b) => b.featured - a.featured)

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="section-title">我的作品集</h2>
        <p className="section-subtitle">精選的GitHub開源項目展示 🚀</p>
        
        <div className="portfolio-filter">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => filterItems('all')}
          >
            <i className="fas fa-th"></i> 全部項目
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'frontend' ? 'active' : ''}`}
            onClick={() => filterItems('frontend')}
          >
            <i className="fab fa-react"></i> 前端
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'fullstack' ? 'active' : ''}`}
            onClick={() => filterItems('fullstack')}
          >
            <i className="fas fa-layer-group"></i> 全棧
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'backend' ? 'active' : ''}`}
            onClick={() => filterItems('backend')}
          >
            <i className="fas fa-server"></i> 後端
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'library' ? 'active' : ''}`}
            onClick={() => filterItems('library')}
          >
            <i className="fas fa-cube"></i> 組件庫
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'tool' ? 'active' : ''}`}
            onClick={() => filterItems('tool')}
          >
            <i className="fas fa-tools"></i> 工具
          </button>
        </div>

        <div className="portfolio-grid">
          {sortedItems.map(item => (
            <div key={item.id} className={`portfolio-item ${item.featured ? 'featured' : ''}`}>
              {item.featured && (
                <div className="featured-badge">
                  <i className="fas fa-star"></i> 精選
                </div>
              )}
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    
                    <div className="tech-stack">
                      {item.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                      {item.technologies.length > 3 && (
                        <span className="tech-more">+{item.technologies.length - 3}</span>
                      )}
                    </div>
                    
                    <div className="project-meta">
                      <span className="dev-time">
                        <i className="fas fa-calendar"></i> {item.developmentTime}
                      </span>
                      <span className={`status ${item.status}`}>
                        {item.status === 'completed' ? '已完成' : 
                         item.status === 'active' ? '維護中' : '開發中'}
                      </span>
                    </div>
                    
                    <div className="portfolio-links">
                      <a 
                        href={item.demoLink} 
                        className="portfolio-btn demo-btn" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-external-link-alt"></i> 線上演示
                      </a>
                      <a 
                        href={item.githubLink} 
                        className="portfolio-btn github-btn" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github"></i> 源碼
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="portfolio-footer">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div className="footer-tech">
                  {item.technologies.slice(0, 2).map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
          <div className="portfolio-cta">
          <p>想看更多項目？</p>
          <a 
            href="https://github.com/Leon-cypher" 
            className="github-profile-btn"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> 查看我的GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio