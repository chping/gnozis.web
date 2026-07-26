# Gnozis 格知算存 - Web Site 需求文档 

------

## 一、项目概述

### 1.1 基本信息

- **应用名称**：Gnozis（格知算存）
- **网站类型**：品牌展示型
- **核心定位**：国际化 AI 科技创业公司官网，展现 SRAM DTCO 领域的技术创新实力
- **目标用户**：SRAM Compiler IP 团队、Foundry 工程师、IDM 研发人员、AI Chip Companies、Research Labs
- **风格参考**：https://linear.app/

### 1.2 技术配置

- **数据库**：不使用数据库（纯展示型网站，无表单提交或动态数据需求）
- **网站主语言**：英文（国际化定位）
- **响应式要求**：适配移动端/平板/桌面端

------

## 二、核心功能

### 2.1 MVP 功能（高优先级）

#### 2.1.1 产品展示

展示 AI-Driven SRAM DTCO Workbench 的核心能力、平台架构和技术优势

#### 2.1.2 案例/架构图展示

通过抽象技术插图展示产品工作流程和平台架构

#### 2.1.3 联系转化

提供 Request Demo 和 Contact Us 的转化入口

------

## 三、页面结构

### 3.1 首页布局

**整体布局模式**：传统线性布局 + Bento Grid 混合风格

参考 Linear.app 的设计语言，采用深色背景、精致卡片、柔和光晕效果，打造国际 AI 科技公司的专业形象。

**核心区域**：

1. **Header（顶部导航）**

   - 左侧：Gnozis Logo（文字 Logo，Inter 字体）
   - 中部：导航菜单（Product, Platform, Why Gnozis, Vision）
   - 右侧：Request Demo 按钮
   - 移动端：汉堡菜单

2. **Hero 区（首屏）⚠️ 关键视觉区域**

   **背景实现方式**：渐变背景 + 微妙光晕效果

   参考 Linear.app 的 Hero 区设计，采用深色渐变背景配合柔和的光晕效果，营造科技感和未来感。

   - 背景色：深灰黑色系渐变（#0A0A0A → #141414）
   - 装饰元素：微妙的蓝绿色光晕（#2DD4BF 低透明度）
   - 前景内容：
     - 大标题：AI-Driven SRAM DTCO Workbench
     - 副标题：Connect simulation, silicon and intelligence into one engineering workflow.
     - CTA 按钮：Request Demo（主按钮）、View Architecture（次按钮）
   - 右侧插图：现代科技感技术流程图
     - 展示 TCAD → SPICE → Monte Carlo → AI → DTCO Report 的闭环流程
     - 使用抽象电路/芯片/神经网络元素
     - SVG 线条动画连接各节点

3. **Problems 区**

   - 标题：SRAM Development Is Becoming Increasingly Complex
   - 4 张问题卡片（Bento Grid 布局）：
     - Simulation Cost
     - Data Fragmentation
     - Engineering Knowledge
     - Silicon Learning
   - 每张卡片：Lucide 图标 + 标题 + 简短说明（不超过 4 行）

4. **Solution 区**

   - 标题：One Platform. Complete DTCO Workflow.
   - 横向流程图展示：
     - Simulation → Data → AI Models → Root Cause → Optimization → DTCO Report
   - 使用 SVG 连线动画展示流程关系

5. **Core Capabilities 区**

   - 6 张 Feature Cards（网格布局）：
     - Simulation Data Parser
     - Surrogate Modeling
     - Active Learning DOE
     - Root Cause Analysis
     - Yield & Vmin Projection
     - Automated DTCO Reports
   - 鼠标悬停效果：轻微放大 + 阴影加深

6. **Platform 区**

   - 展示平台架构图：
     - EDA Tools → Data Layer → AI Layer → Engineering Knowledge → Applications
   - 采用现代 SaaS 架构图风格，分层清晰

7. **Why Gnozis 区**

   - 4 个优势点（卡片或列表形式）：
     - SRAM Native
     - AI First
     - Explainable
     - Private Deployment
   - 每项一句话说明

8. **Vision 区**

   - 标题：Building the Intelligence Layer for Silicon.
   - 背景：科技感插图（芯片/神经网络抽象图）
   - 传递愿景和使命感

9. **CTA 区**

   - 标题：Ready to build the future of SRAM?
   - 按钮：Request Demo（主）、Contact Us（次）

10. **Footer（底部信息）**

    - Logo
    - 导航链接
    - 社交媒体：LinkedIn、GitHub
    - Email 联系
    - Copyright 信息

### 3.2 关键内页

本阶段仅生成单页官网，所有信息在首页呈现。

------

## 四、核心交互流程

### 4.1 流程：Request Demo 转化流程

**操作步骤**：

1. 用户点击"Request Demo"按钮
2. 滚动至 CTA 区或弹出联系表单（根据实现方案）
3. 用户填写基本信息（姓名、邮箱、公司、职位）
4. 提交后显示成功提示

**异常处理**：网络超时/服务器错误时的友好提示文案

------

## 五、视觉与品牌策略

### 5.1 品牌个性定位

**核心定位**：专业权威型 + 科技创新型

**目标情感**：

- 第一层感受：专业信任、技术前沿
- 第二层感受：创新活力、国际视野

**差异化策略**：

- 我们不是传统 EDA 软件公司，而是 AI-Native 的工业软件创新者
- 核心差异点：强调 AI 驱动、SRAM 领域专精、国际化定位

**设计决策摘要**：

- 主色：深灰黑 #0A0A0A | 辅色：中性灰 #737373 | 强调色：蓝绿 #2DD4BF
- 布局模式：传统线性 + Bento Grid 卡片混合
- 动效基调：克制精致、Scroll Reveal、微交互
- 字体策略：Inter 字体家族，大标题粗体 + 正文常规
- 采用趋势：Scroll-driven 动画 + Glassmorphism 卡片 + 精致微交互

### 5.2 设计语言

**整体风格**：极简科技风（参考 Linear.app、Vercel、Anthropic）

**核心调性**：专业、前沿、克制、国际化

**设计目标**：让访问者在 5 秒内理解 Gnozis 是一家利用 AI 加速 SRAM DTCO 开发的工业软件公司，传递技术实力和创新能力。

### 5.3 色彩方案

**主背景色**：#0A0A0A（深灰黑）

- 应用：页面主背景、导航栏背景

**次级背景色**：#141414（深灰）

- 应用：卡片背景、Section 分隔

**主色调**：#FFFFFF（白色）

- 应用：主标题文字、重要信息

**辅助文字色**：#A3A3A3（中灰）

- 应用：副标题、正文、说明文字

**强调色**：#2DD4BF（蓝绿色）

- 应用：CTA 按钮、重点标题、交互元素 hover 状态、SVG 连线

**边框/分割线色**：#262626（深灰边框）

- 应用：卡片边框、分割线

**图片/插图风格**：

- 抽象技术插图（芯片、电路、神经网络、Memory Array）
- 单色或双色系（白 + 蓝绿）
- 线条简洁、几何化、无具象元素
- 禁止使用股票图片、人物办公图片

### 5.4 布局策略

**首屏布局**：全屏 Hero 区，左右分栏（文字左，插图右）

**内容区布局**：

- Problems/Solution/Capabilities：Bento Grid 不规则网格
- Platform：垂直分层架构图
- Why/Vision：居中对称布局

**留白策略**：大量留白，Section 之间间距充足（120px+）

**排版原则**：

- 大标题传递力量感（64-72px）
- 充足留白营造呼吸感
- 卡片之间保持统一节奏（24px 间距）
- Container 宽度 1200px 居中

### 5.5 字体规范

**标题字体**：

- 样式：Inter Variable，粗体（Bold 700 / Semibold 600）
- 大小：H1 64-72px / H2 48px / H3 32px / H4 24px

**正文字体**：

- 样式：Inter Variable，常规（Regular 400）
- 大小：16-18px

**小字/辅助文字**：

- 大小：14px
- 颜色：#A3A3A3

**字间距**：

- 大标题：-0.02em（紧凑）
- 正文：0（默认）

**行高**：

- 标题：1.2
- 正文：1.6

### 5.6 交互动效

**整体基调**：克制精致、流畅自然

**核心动效**：

1. **Scroll Reveal（滚动揭示动画）**
   - 元素进入视口时淡入 + 轻微上移
   - 参数：translateY(30px → 0) + opacity(0 → 1)
   - 触发时机：元素进入视口 20% 时
   - 交错延迟：列表项依次进入，每项间隔 50-100ms
2. **卡片渐入**
   - Bento Grid 卡片依次进入
   - 缓动函数：cubic-bezier(0.4, 0, 0.2, 1)
   - 过渡时长：400-600ms
3. **Hero Background Gradient（背景渐变流动）**
   - 微妙的蓝绿色光晕缓慢流动
   - 动画周期：8-12 秒循环
   - 透明度变化：0.05 → 0.1 → 0.05
4. **鼠标悬停轻微浮起**
   - 卡片 hover：translateY(-4px) + shadow 加深
   - 按钮 hover：轻微缩放（scale 1.02）+ 背景色变亮
   - 过渡时长：200-300ms
   - 缓动函数：ease-out
5. **SVG 连线动画**
   - 流程图中连接线绘制动画
   - 描边 dashoffset 动画
   - 持续时间：1.5-2 秒
   - 仅在首次加载或进入视口时触发一次
6. **按钮点击反馈**
   - 点击时轻微缩放（scale 0.98）
   - 过渡时长：100ms

**动效性能原则**：

- 避免过度动画导致卡顿
- 移动端简化动效，优先考虑性能
- 关键转化路径上的动效不能干扰用户操作
- 使用 will-change 优化性能

### 5.7 品牌元素

**Logo 使用**：

- 导航栏左侧：文字 Logo "Gnozis"（Inter Bold）
- Footer：Logo + 中文"格知算存"
- Favicon：抽象芯片/电路图标

**视觉一致性元素**：

- 圆角半径：12px（统一设计系统）
- 阴影风格：柔和扩散阴影（box-shadow: 0 4px 24px rgba(0,0,0,0.3)）
- 图标风格：Lucide Icons，线条简洁，2px 描边
- 边框：1px solid #262626

### 5.8 文案调性（含示例）

**语言风格**：精炼有力、数据驱动、专业但不晦涩

**具体示例**：

- **Hero 标题**：AI-Driven SRAM DTCO Workbench
- **Hero 副标题**：Connect simulation, silicon and intelligence into one engineering workflow.
- **Mission 文案**：Accelerating SRAM innovation with AI.
- **核心理念**：Knowledge begins with observation. Wisdom begins with understanding.
- **Problems 区标题**：SRAM Development Is Becoming Increasingly Complex
- **Solution 区标题**：One Platform. Complete DTCO Workflow.
- **Vision 区标题**：Building the Intelligence Layer for Silicon.
- **CTA 文案**：Ready to build the future of SRAM?
- **按钮文案**：Request Demo / View Architecture / Contact Us

**文案原则**：

- 短句为主，避免冗长描述
- 强调技术价值，而非企业介绍
- 国际化表达，避免本地化词汇（如"国产替代""政策"等）
- 专业术语适度，确保目标用户可理解

------

## 六、多端适配策略

### 6.1 响应式要求

网站必须在移动端/平板/桌面端提供一致的高质量体验。

### 6.2 断点定义

| 设备类型 | 屏幕宽度       | 布局特征                                    |
| :------- | :------------- | :------------------------------------------ |
| 移动端   | < 768px        | 单列，导航折叠为汉堡菜单                    |
| 平板     | 768px - 1023px | 2 列网格，适度留白                          |
| 桌面端   | ≥ 1024px       | 多列 Bento Grid，完整导航，1200px Container |

### 6.3 核心适配规则

**导航栏**：

- 移动端：汉堡菜单，点击展开全屏覆盖式菜单
- 桌面端：完整水平菜单，右侧 CTA 按钮

**Hero 区**：

- 移动端：单列垂直布局，标题 40-48px，插图缩小或简化
- 桌面端：左右分栏，标题 64-72px，完整插图

**Bento Grid 卡片**：

- 移动端：单列堆叠
- 平板：2 列网格
- 桌面端：3-4 列不规则网格（Bento 风格）

**流程图**：

- 移动端：垂直流程，箭头向下
- 桌面端：横向流程，箭头向右

**动效适配**：

- 移动端：简化 Scroll Reveal，禁用复杂 SVG 动画
- 桌面端：完整动效体验

**性能优化**：

- 移动端：图片懒加载，降低插图复杂度
- 桌面端：高分辨率插图，丰富交互细节

------

## 七、补充说明

### 7.1 视觉元素要求

**全部使用抽象技术插图**：

- ✅ Abstract Illustration（抽象插图）
- ✅ Chip / Circuit（芯片/电路）
- ✅ Neural Network（神经网络）
- ✅ Memory Array（存储阵列）
- ✅ EDA Workflow Diagram（EDA 工作流图）
- ✅ Technology Diagram（技术示意图）

**严格禁止**：

- ❌ 传统企业 Banner 轮播图
- ❌ 股票图片（Stock Photos）
- ❌ 人物办公图片
- 复杂 3D 模型/VR 展示

### 7.2 图标系统

- 使用 Lucide Icons 作为统一图标库
- 图标风格：线条简洁，2px 描边，单色
- 尺寸规范：16px / 20px / 24px / 32px

### 7.3 SEO 优化

- Meta Title：Gnozis | AI-Driven SRAM DTCO Workbench
- Meta Description：Building the Intelligence Layer for SRAM DTCO. Accelerating SRAM innovation with AI. Connect simulation, silicon and intelligence into one engineering workflow.
- Open Graph 标签完善
- 语义化 HTML 结构（h1-h6 层级清晰）
- 图片 alt 属性完整

### 7.4 Dark Mode

- 默认采用深色主题（符合科技品牌调性）
- 可提供浅色模式切换（可选功能）
- 深色模式配色已在 5.3 章节定义