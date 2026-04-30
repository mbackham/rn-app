# 环境变量配置

## 创建的文件

- `.env` - 本地环境变量（已加入 .gitignore）
- `.env.example` - 环境变量模板（提交到 git）
- `src/constants/env.ts` - 带类型安全的环境变量包装器
- `src/types/env.d.ts` - @env 模块的 TypeScript 声明

## 使用方法

1. 复制 `.env.example` 到 `.env`：

   ```bash
   cp .env.example .env
   ```

2. 更新 `.env` 为你的实际值

3. 在代码中导入使用：

   ```typescript
   import { ENV } from '@/constants/env';

   console.log(ENV.API_BASE_URL);
   ```

## EAS 构建配置

`eas.json` 文件包含三个构建配置：

- **development**：用于本地开发，包含开发客户端
- **preview**：用于内部测试/预览构建
- **production**：用于生产发布

运行 EAS 构建需要：

1. 登录 EAS：`eas login`
2. 初始化项目：`eas init`
3. 构建：`eas build --profile development`

## 测试

运行应用查看控制台中的环境变量日志：

```bash
npm start
```
