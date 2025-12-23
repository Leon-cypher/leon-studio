# 🚀 Leon工作室 - 個人作品集網站

一個使用 React + Vite 構建的現代化個人作品集網站，展示我的程式設計技能和專案經驗。

## ✨ 功能特色

- 🎨 **現代化設計**：簡潔美觀的使用者介面
- 📱 **完全響應式**：支援所有設備和螢幕尺寸
- ⚡ **快速載入**：使用 Vite 構建，極快的開發和構建速度
- 🎯 **作品展示**：動態篩選和分類顯示GitHub項目
- 💫 **流暢動畫**：精心設計的互動動效
- 🌐 **SEO 友好**：優化的頁面結構和元數據

## 🛠️ 技術棧

- **前端框架**：React 18
- **構建工具**：Vite
- **樣式**：CSS3 (Custom Properties + Flexbox/Grid)
- **圖標**：Font Awesome
- **字體**：Noto Sans TC (Google Fonts)
- **部署**：可部署至 Vercel, Netlify, GitHub Pages

## 📁 項目結構

```
leon-studio/
├── public/
│   ├── vite.svg          # 網站圖標
│   └── index.html        # HTML 模板
├── src/
│   ├── components/       # React 組件
│   │   ├── Navbar.jsx   # 導航欄
│   │   ├── Hero.jsx     # 首頁英雄區塊
│   │   ├── About.jsx    # 關於我
│   │   ├── Portfolio.jsx # 作品集
│   │   ├── Contact.jsx  # 聯繫我
│   │   └── Footer.jsx   # 頁腳
│   ├── styles/          # 樣式文件
│   │   ├── index.css    # 全局樣式
│   │   └── App.css      # 組件樣式
│   ├── App.jsx          # 主應用組件
│   └── main.jsx         # 應用入口
├── package.json         # 依賴管理
└── vite.config.js       # Vite 配置
```

## 🚀 快速開始

### 1. 克隆項目
```bash
git clone https://github.com/yourusername/leon-studio.git
cd leon-studio
```

### 2. 安裝依賴
```bash
npm install
```

### 3. 啟動開發服務器
```bash
npm run dev
```

### 4. 打開瀏覽器
訪問 `http://localhost:3000` 查看網站

## 📝 自定義指南

### 1. 個人資訊
編輯 `src/components/Hero.jsx` 和 `src/components/About.jsx` 更新：
- 個人姓名和簡介
- 技能列表
- 統計數據

### 2. 作品集項目
編輯 `src/components/Portfolio.jsx` 中的 `portfolioItems` 數組：
```javascript
{
  id: 1,
  title: '你的項目名稱',
  description: '項目簡介',
  image: '項目截圖URL',
  category: 'frontend', // frontend, fullstack, backend, library, tool
  technologies: ['React', 'Node.js', '...'],
  demoLink: 'https://your-demo-link.com',
  githubLink: 'https://github.com/yourusername/project',
  featured: true, // 是否為精選項目
  status: 'completed', // completed, active, development
  developmentTime: '2024年3月'
}
```

### 3. 聯繫資訊
編輯 `src/components/Contact.jsx` 更新：
- 電子郵件
- 電話號碼
- 地址資訊

### 4. 社交媒體連結
編輯 `src/components/Footer.jsx` 更新社交媒體連結

## 🎨 自定義樣式

### 顏色主題
在 `src/styles/index.css` 中的 `:root` 選擇器修改 CSS 變數：
```css
:root {
  --primary-color: #667eea;    /* 主色調 */
  --secondary-color: #764ba2;  /* 次要色調 */
  --accent-color: #f093fb;     /* 強調色 */
  /* ... 其他顏色變數 */
}
```

### 字體
如需更改字體，修改 `index.html` 中的 Google Fonts 連結和 CSS 中的 `font-family`。

## 📦 構建和部署

### 構建生產版本
```bash
npm run build
```

### 預覽構建結果
```bash
npm run preview
```

### 部署選項

#### Vercel 部署
1. 將代碼推送到 GitHub
2. 在 [Vercel](https://vercel.com) 導入項目
3. 自動部署完成

#### Netlify 部署
1. 運行 `npm run build`
2. 將 `dist` 文件夾上傳到 [Netlify](https://netlify.com)

#### GitHub Pages 部署
```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d dist
```

## 🎯 性能優化

- ⚡ **Vite 構建**：快速的開發和構建體驗
- 🗜️ **代碼分割**：自動優化包大小
- 🖼️ **圖片優化**：建議使用 WebP 格式
- 📱 **響應式圖片**：根據設備載入適當大小

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request！

## 📄 授權

MIT License - 詳見 [LICENSE](LICENSE) 文件

## 👤 作者

**Leon** - Vibe Coding 愛好者
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: leon.studio@example.com

---

⭐ 如果這個項目對你有幫助，請給它一個 Star！