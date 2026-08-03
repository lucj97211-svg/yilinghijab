# Yiling Hijab 独立站部署指南

## 技术架构

```
GitHub (代码托管) → Vercel (自动部署) → Cloudflare R2 (图片CDN) → Namecheap (域名)
```

## 第一步：Namecheap 域名配置

1. 登录 [Namecheap](https://www.namecheap.com)
2. 购买域名：**yilinghijab.com**（或你选定的域名）
3. 暂时不要配置 DNS，等 Vercel 部署完成后再说

## 第二步：GitHub 推送代码

### 2.1 创建 Git 仓库

在项目目录执行：

```bash
cd yiling-hijab
git init
git add .
git commit -m "Initial commit: Yiling Hijab B2B website"
```

### 2.2 推送到 GitHub

1. 在 [GitHub](https://github.com) 创建一个**新仓库**（建议命名：`yiling-hijab`）
2. **不要**勾选 "Add a README file"（本地已有）
3. 创建后，执行 GitHub 给出的 push 命令，类似：

```bash
git remote add origin https://github.com/你的用户名/yiling-hijab.git
git branch -M main
git push -u origin main
```

## 第三步：Vercel 部署

### 3.1 导入项目

1. 登录 [Vercel](https://vercel.com)（用 GitHub 账号登录）
2. 点击 **"Add New..." → "Project"**
3. 选择刚才导入的 GitHub 仓库 `yiling-hijab`
4. Vercel 会自动识别为 Vite 项目

### 3.2 构建配置

Vercel 会自动填入以下配置，无需修改：

| 配置项 | 值 |
|--------|-----|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

### 3.3 部署

点击 **"Deploy"**，等待 30-60 秒。部署成功后 Vercel 会提供一个免费子域名，如：
`yiling-hijab.vercel.app`

## 第四步：Cloudflare R2 图片存储（可选优化）

> 当前所有图片已打包在项目内，Vercel 可直接托管。Cloudflare R2 用于后续扩容：
> 当你有大量产品图需要更新时，可将图片迁移到 R2 获得更快的全球加载速度。

### 4.1 创建 R2 存储桶

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 左侧菜单 → **R2** → **创建存储桶**
3. 名称填写：`yiling-hijab-images`
4. 位置选择：**亚太地区 (APAC)**

### 4.2 配置公共访问

1. 进入存储桶 → **设置** → **公共访问**
2. 开启 **"允许公共访问"**，并设置自定义域名（如 `images.yilinghijab.com`）

### 4.3 上传图片

将所有产品图片上传到 R2 存储桶，然后更新代码中的图片路径为 R2 域名。

## 第五步：域名绑定

### 5.1 Vercel 添加自定义域名

1. Vercel Dashboard → 你的项目 → **Settings → Domains**
2. 添加域名：`yilinghijab.com`
3. Vercel 会给出需要配置的 DNS 记录

### 5.2 Namecheap 配置 DNS

1. Namecheap Dashboard → Domain List → yilinghijab.com → **Manage → Advanced DNS**
2. 根据 Vercel 的指示添加记录，通常如下：

| Type | Host | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

3. 保存后等待 DNS 生效（1-48 小时，通常几分钟）

## 第六步：后续维护清单

- [ ] 更新 WhatsApp 号码（搜索 `wa.me/86` 替换为你的真实号码）
- [ ] 更新联系邮箱（搜索 `sales@yilinghijab.com` 替换为你的真实邮箱）
- [ ] 更新工厂地址（`Yiwu, Zhejiang Province` 替换为详细地址）
- [ ] 更新实际认证信息（SGS、Intertek 等按实际情况调整）
- [ ] 替换产品图片为真实产品照
- [ ] 添加工厂视频 YouTube 链接
- [ ] 配置 Google Analytics 跟踪代码
- [ ] 设置 Vercel 自动部署（main 分支 push 自动触发）

---

## 需要你提供的信息

为了完善网站，请告诉我以下信息：

1. **WhatsApp 号码**（含国家代码，如 +8613812345678）
2. **联系邮箱**
3. **工厂详细地址**
4. **实际持有的认证**（SGS / Intertek / TUV / ISO 等）
5. **工厂成立年份**（目前填的是 2008）
6. **实际工人数量**（目前填的是 200+）
7. **工厂视频链接**（YouTube / Youku）
