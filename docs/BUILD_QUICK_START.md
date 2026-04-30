# 快速构建命令

## 开发构建（首次）

### iOS

```bash
# 登录 EAS
eas login

# 初始化项目（如果还没做）
eas init

# 为 iOS 构建开发客户端
eas build --profile development --platform ios

# 等待构建完成（约 15-20 分钟）
# 通过二维码或下载安装到设备
```

### Android

```bash
# 为 Android 构建开发客户端
eas build --profile development --platform android

# 等待构建完成（约 10-15 分钟）
# 通过二维码或下载 APK 安装到设备
```

## 运行应用

```bash
# 启动 Metro 打包器
npm start

# 在设备上：
# 1. 打开 dev client 应用
# 2. 扫描二维码或输入 URL
# 3. 应用加载，热重载已启用
```

## 验证热重载

1. 编辑 `App.tsx` - 修改一些文本
2. 保存文件
3. 检查设备 - 更改应立即显示
4. 如果没有，摇晃设备 → "Reload"

## 常见问题

**无法连接到 Metro：**

```bash
npm start --tunnel
```

**构建失败 - 未登录：**

```bash
eas login
eas whoami
```

**需要重新构建：**

- 添加原生依赖后
- 修改 app.json 插件后
- 30 天后（开发构建会过期）

## 构建状态

```bash
# 列出所有构建
eas build:list

# 查看特定构建
eas build:view [BUILD_ID]
```

---

详细文档请查看 [DEV_CLIENT_BUILD.md](./DEV_CLIENT_BUILD.md)
