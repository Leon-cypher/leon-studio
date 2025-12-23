import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 這裡可以添加發送郵件的邏輯
    console.log('表單數據:', formData)
    alert('感謝您的訊息！我會盡快回覆您。')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">聯繫我</h2>
        <p className="section-subtitle">讓我們一起創造出色的專案</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>電子郵件</h4>
                <p>leon.studio@example.com</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>電話</h4>
                <p>+886 912 345 678</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>地點</h4>
                <p>台北, 台灣</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="您的姓名"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="您的信箱"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="主旨"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="您的訊息"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              發送訊息
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact