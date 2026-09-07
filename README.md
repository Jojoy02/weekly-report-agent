# Weekly Report Transformation Skill

企业业务周报智能转化 Agent 的求职作品集与 Skill 工程。

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

## Vercel 部署

1. 将整个仓库上传 GitHub
2. 登录 Vercel
3. Add New → Project
4. Import Git Repository
5. 选择本仓库
6. Framework 自动识别为 Next.js
7. Deploy

## 目录

```text
app/                    作品集页面
components/             Interactive Demo
data/                   Demo 场景
skill/                  Skill 本体
evals/                  Evaluation Cases
docs/                   产品、架构、评测与迭代文档
```

当前 Demo 使用预置数据，不调用真实业务接口，因此不依赖公司内部系统、不泄露真实业务材料、不消耗模型 Token，适合面试现场稳定展示。
