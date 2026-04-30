# Dev Client 构建指南

## 前置条件

1. **全局安装 EAS CLI**

   ```bash
   npm install -g eas-cli
   ```

2. **Expo 账号**
   - 在 https://expo.dev 注册
   - 通过 CLI 登录：`eas login`

3. **项目初始化**
   ```bash
   eas init
   ```

## 构建开发客户端

### 首次设置

1. **配置 EAS 项目**

   ```bash
   eas init
   ```

   这将会：
   - 创建/更新 `eas.json`
   - 将项目关联到 Expo 账号
   - 在 `app.json` 中生成项目 ID

2. **构建 iOS（开发版）**

   ```bash
   eas build --profile development --platform ios
   ```

   **执行过程：**
   - 创建包含 expo-dev-client 的开发构建
   - 启用热重载和调试功能
   - 构建耗时约 15-20 分钟
   - 通过二维码或下载 `.tar.gz` 文件安装

3. **构建 Android（开发版）**

   ```bash
   eas build --profile development --platform android
   ```

   **执行过程：**
   - 创建包含开发客户端的 APK/AAB
   - 启用热重载和调试功能
   - 构建耗时约 10-15 分钟
   - 通过二维码或下载 `.apk` 文件安装

### 在设备上安装

#### iOS

1. **方式 A：直接安装（推荐）**
   - 扫描 EAS 构建页面的二维码
   - 通过 TestFlight 或直接下载安装
2. **方式 B：手动安装**
   - 从 EAS 控制台下载 `.tar.gz`
   - 解压后通过 Xcode 或 Apple Configurator 安装

#### Android

1. **方式 A：直接安装（推荐）**
   - 扫描 EAS 构建页面的二维码
   - 下载并安装 `.apk`
   - 如需要，启用"允许安装未知来源应用"

2. **方式 B：手动安装**
   - 从 EAS 控制台下载 `.apk`
   - 通过 USB/ADB 传输到设备
   - 安装：`adb install app.apk`

## 运行开发构建

1. **启动 Metro 打包器**

   ```bash
   npm start
   ```

2. **连接设备**
   - 在设备上打开 dev client 应用
   - 扫描二维码或手动输入 URL
   - 应用将从 Metro 打包器加载

3. **验证热重载**
   - 修改 `App.tsx`
   - 保存文件
   - 更改应立即显示在设备上

## 构建配置

### Development（开发）

```json
{
  "developmentClient": true,
  "distribution": "internal"
}
```

- 用于本地开发
- 包含开发工具和调试功能
- 连接到 Metro 打包器
- 启用热重载

### Preview（预览）

```json
{
  "distribution": "internal"
}
```

- 用于内部测试
- 不包含开发工具
- 独立应用
- 适合 QA 测试

### Production（生产）

```json
{
  "distribution": "store"
}
```

- 用于 App Store/Play Store
- 优化和压缩
- 不包含调试工具

## 故障排除

### 构建失败："No Expo account"

```bash
eas login
eas whoami  # 验证登录状态
```

### 构建失败："Project not initialized"

```bash
eas init
```

### 设备无法连接到 Metro

- 确保设备和电脑在同一网络
- 检查防火墙设置
- 尝试使用隧道：`npm start --tunnel`

### 热重载不工作

- 摇晃设备打开开发菜单
- 选择"Reload"
- 或在 Metro 终端按 `r`

## 构建命令参考

```bash
# 构建两个平台
eas build --profile development --platform all

# 仅构建 iOS
eas build --profile development --platform ios

# 仅构建 Android
eas build --profile development --platform android

# 查看构建状态
eas build:list

# 查看构建日志
eas build:view [BUILD_ID]

# 取消正在运行的构建
eas build:cancel [BUILD_ID]
```

## 下一步

成功构建开发版本后：

1. 在真机上安装
2. 测试热重载功能
3. 验证环境变量正确加载
4. 测试导航和基本功能
5. 记录任何设备特定问题

## 注意事项

- 开发构建有效期为 30 天
- 添加原生依赖时需要重新构建
- 保持 dev client 更新：`npm install expo-dev-client@latest`
- 使用 `--local` 标志进行本地构建（需要 Xcode/Android Studio）
