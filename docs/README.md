# 项目文档

## 构建与部署

- [Dev Client 构建指南](./DEV_CLIENT_BUILD.md) - 开发客户端完整构建指南
- [快速开始](./BUILD_QUICK_START.md) - 常用构建命令快速参考

## 环境配置

- [环境变量](../README_ENV.md) - 环境变量配置说明

## 快速开始

1. **配置环境**
   - 复制 `.env.example` 到 `.env`
   - 更新为你的配置

2. **安装依赖**

   ```bash
   npm install
   ```

3. **运行开发服务器**

   ```bash
   npm start
   ```

4. **构建开发客户端**（首次）

   ```bash
   eas login
   eas init
   eas build --profile development --platform ios
   # 或
   eas build --profile development --platform android
   ```

5. **安装与测试**
   - 在设备上安装 dev client
   - 扫描 Metro 打包器的二维码
   - 验证热重载是否工作

## 下一步

完成 Day 4 后：

- 配置导航（React Navigation）
- 配置状态管理（Redux Toolkit）
- 创建基础组件
- 配置 API 服务层
