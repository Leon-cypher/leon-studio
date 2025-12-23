# 🚀 GitHub Pages 部署指南

## 步驟 1: 在GitHub上創建倉庫

1. 打開 [GitHub](https://github.com) 並登入
2. 點擊右上角的 "+" 按鈕，選擇 "New repository"
3. 設置倉庫資訊：
   - **Repository name**: `leon-studio` (或你喜歡的名稱)
   - **Description**: `Leon工作室 - 個人作品集網站`
   - **Visibility**: Public (GitHub Pages需要公開倉庫)
   - ❌ 不要勾選 "Add a README file" (我們已經有了)

## 步驟 2: 連接本地倉庫到GitHub

在你的專案目錄執行以下命令：

```bash
# 添加遠程倉庫 (替換 YOUR_USERNAME 為你的GitHub用戶名)
git remote add origin https://github.com/YOUR_USERNAME/leon-studio.git

# 推送代碼到GitHub
git branch -M main
git push -u origin main
```

## 步驟 3: 配置GitHub Pages

1. 在GitHub倉庫頁面，點擊 **Settings** 標籤
2. 滾動到 **Pages** 部分
3. 在 **Source** 下選擇：
   - Source: `Deploy from a branch`
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. 點擊 **Save**

## 步驟 4: 部署網站

在本地專案目錄執行：

```bash
# 構建並部署到GitHub Pages
npm run deploy
```

## 🎉 完成！

部署成功後，你的網站將可以通過以下網址訪問：
```
https://YOUR_USERNAME.github.io/leon-studio/
```

## ⚠️ 重要提醒

1. **更新 vite.config.js**：
   確保 `base` 設置正確：
   ```javascript
   export default defineConfig({
     base: '/leon-studio/', // 你的倉庫名稱
   })
   ```

2. **等待部署**：
   首次部署可能需要 5-10 分鐘才能看到網站

3. **後續更新**：
   每次修改代碼後，只需執行：
   ```bash
   git add .
   git commit -m "更新描述"
   git push origin main
   npm run deploy
   ```

## 🔧 故障排除

### 404 錯誤
- 檢查 `vite.config.js` 中的 `base` 設置
- 確認GitHub Pages設置為 `gh-pages` 分支

### 樣式問題
- 確保所有資源路徑都是相對路徑
- 檢查控制台是否有加載錯誤

### 部署失敗
- 確認已安裝 `gh-pages`: `npm install --save-dev gh-pages`
- 檢查網路連接和GitHub權限

## 🎨 下一步優化建議

1. **自定義域名** (可選)：
   - 購買域名並在GitHub Pages設置
   - 創建 `CNAME` 文件

2. **SEO優化**：
   - 添加 `meta` 標籤
   - 創建 `sitemap.xml`

3. **Analytics**：
   - 添加 Google Analytics
   - 監控訪問數據

---

如有問題，請參考 [GitHub Pages 官方文檔](https://docs.github.com/en/pages)