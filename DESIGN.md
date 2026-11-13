---
name: "知了"
category: Brands
surface: web
reference: "https://www.radix-ui.com/colors/custom?accent-light=30764B&gray-light=DFE5DC&bg-light=FAFBF9"
colors:
  accent: "#30764b"
  background: "#fafbf9"
  foreground: "#202b23"
  surface: "#ffffff"
  muted: "#536255"
  border: "#cdd5c9"
---

# 知了

> Category: Brands

> Surface: web

*清晰有序，自然成形。*

以灰绿配色、MiSans 排版与局部纯色玻璃构成的产品设计体系。

## Color Palette

| Role | Name | Hex | Usage |
| --- | --- | --- | --- |
| accent | 森林绿 | `#30764b` | 主要动作与关键链接，用户指定 |
| background | 清浅底色 | `#fafbf9` | 页面背景，用户指定 |
| foreground | 深绿墨色 | `#202b23` | 正文与标题，设计扩展 |
| surface | 实色白 | `#ffffff` | 内容与表单面板，设计扩展 |
| muted | 次级文字 | `#536255` | 辅助说明，设计扩展 |
| border | 柔和边界 | `#cdd5c9` | 非交互分隔线，设计扩展 |

## Typography
- **Display:** MiSans — weights 600, 700 — fallbacks: PingFang SC, Microsoft YaHei, system-ui, sans-serif
- **Body:** MiSans — weights 400, 500, 600 — fallbacks: PingFang SC, Microsoft YaHei, system-ui, sans-serif

## Voice & Tone

- **Adjectives:** 清晰, 平静, 可信
- **Tone:** 以具体、简明的语言帮助用户完成任务。

### Messaging pillars
- 阅读优先，材质克制
- 实色内容，局部玻璃
- 统一令牌，持续编辑

### Vocabulary
- **Use:** 保存设置, 查看详情, 请填写项目名称
- **Avoid:** 虚构指标, 夸张承诺, 无来源评价

## Imagery

- **Style:** 克制的产品界面表达，不依赖装饰图片。
- **Subjects:** 真实产品, 授权场景
- **Treatment:** 内容图片保留完整比例；图标采用统一线性描边。
- **Avoid:** 虚构标志, 整页渐变玻璃, 无意义光斑

## Layout

- **Radius:** 8px
- **Border weight:** 1px
- **Spacing:** 4px unit / 8px rhythm

### Posture rules
- 按钮、输入框与面板统一 8px 圆角；小圆角可用 4px，圆形控件保持圆形
- 正文 16px，行高 1.625
- 640 / 1024 / 1440px 响应式断点
- 玻璃仅用于导航、菜单与浮层
- 仅支持浅色主题，保留紧凑密度


## Radix 视觉补充（2026-11-11）

本次仅调整现有页面的视觉设计。各页面的标题、正文、导航、表单字段、图片、示例数据、链接与交互脚本保持原样；不把项目改成 Radix 色板工具。

### 颜色与层次

以指定参考页的强调色 #30764B、中性色 #DFE5DC、背景 #FAFBF9 为视觉锚点。浅色交互表面采用 #E1F1E5 / #D1EBD8，分隔线 #DFE5DC，控件边界 #C3CABF，正文 #1C2218，辅助文字 #596055。主操作悬停使用 #20683E。原有品牌色板的内容与标注继续保留，页面视觉通过语义变量覆写统一。

### 排版与形状

- 正确加载项目内 MiSans Regular / Medium / Semibold / Bold，正文保持 400，标签与操作 500，标题 600。
- 界面基础字号 14px，正文行高约 1.55；宣传页与海报保留各自的信息层级和版式。
- 控件圆角 4px，普通面板 8px，主要表单 12px；圆形控件保持原状。
- 使用 1px 灰绿细边界，阴影仅作轻微补充。品牌总览减少多层大圆角卡片；保留原有分区和内容顺序。
- 主内容最大宽度约 1136px，桌面列间距 24–32px；手机保留原有重排规则并收紧边距。
- 表单品牌区使用浅绿表面与深色文字；保留原有标志、文案和装饰。既有深色组件页继续可用，采用同色系深绿中性色。

### 作用范围与维护

品牌总览、设计体系目录、浅色和深色组件页，以及落地页、演示文稿、海报、邮件、简报、表单共十个页面，均通过带有 data-radix-visual 标记的附加样式应用视觉调整。目录中的内嵌页面预览同步应用样式。

共享基础样式存于 system/radix-visual.css，页面内联样式是预览使用的快照。品牌文案与原有脚本保持原样；语义令牌随功能色、材质规范同步。重新生成页面时需重新应用此视觉层。


## Functional 与纯色玻璃规范（2026-11-11）

### Functional 语义色

主色与成功色统一使用同一森林绿，以减少同一界面中相近绿调的竞争。两者保留独立语义变量：主色表示操作，成功色表示完成；成功反馈同时使用勾选图标或成功文案，不能仅凭绿色表达状态。CSS 中 success 系列引用 primary 系列，数据令牌保存对应的同值快照。

| 角色 | 浅色实色 / 前景 | 浅色背景 | 浅色边界 |
| --- | --- | --- | --- |
| primary | #30764B | #E1F1E5 | #ABD6B7 |
| success | #30764B | #E1F1E5 | #ABD6B7 |
| info | #596055（gray 11） | #E8EDE5（gray 3） | #C3CABF（gray 7） |
| warning | #925F14 | #FFF7DF | #EAD3A2 |
| error | #B54548 | #FFF0EF | #EDC5C3 |

Info 是中性说明，使用灰绿中性色阶，与操作和成功反馈区分。Info 徽标、提示条及 Functional 色块必须消费同一组 info 令牌，不得沿用 primary 的绿色底和绿色边框。Functional 色块绑定语义变量，避免保留写死的旧颜色。

既有深色组件页继续兼容：primary / success 同为 #4D9466；info 前景 #B0BEB2，背景 #202D25，边界 #3A4C40。深色主要按钮使用 #111713 前景，避免在偏亮绿色上放置对比不足的白字。

### 纯色玻璃的定义与范围

纯色玻璃采用一层均匀的半透明底色与背景模糊，不添加渐变、反光或彩色噪点。浅色底为 rgba(250,251,249,0.88)，深色底为 rgba(23,30,25,0.88)，背景模糊 16px，配 1px 低对比边框。透明度只作用于背景色，不对整个元素设置 opacity，文字、图标与按钮保持完整不透明。

实际应用位置：

- 落地页顶部吸附导航，包括设计体系目录内的对应页面预览。
- 品牌总览的资产预览与图片总览浮层外框；浮层中的 iframe、图片和滚动内容区保持实色。
- 图片预览的关闭与前后切换悬浮控件。
- 演示文稿的悬浮翻页控制栏。

静态品牌标题、正文卡片、表单、普通输入框、色板、邮件、简报及海报保持实色。页面没有浮层或吸附导航时不强行添加玻璃。现有 .glass 样式也使用相同令牌，不以未定义变量模拟玻璃。

### 回退与维护

通过 @supports 启用模糊与半透明背景。浏览器不支持模糊、用户偏好减少透明效果或打印时，改用完全不透明的纯色背景并关闭 backdrop-filter 与 -webkit-backdrop-filter。

CSS 导出、tokens.default / compact / dark、seed、theme 与品牌 seed 同步相关功能色；页面内联视觉层与目录里的内嵌页面同步更新。页面原文、图片、链接及交互脚本继续保留。


## Tags（2026-11-11）

标签使用不透明浅色背景、1px 同语义边框和 4px 圆角；不使用玻璃或阴影。高度 22px、字号 12px、字重 500、行高 16px、横向内边距 7px，标签之间间距 8px，窄屏自然换行。紧凑密度高度 20px、横向内边距 6px。

Primary 与 Success 共用绿色外观，但继续保留各自语义。Warning 使用浅琥珀底与琥珀色边框，Error 使用浅红底与红色边框，Info 使用中性色前景、背景与边框。每一类的文字、背景与边框必须来自同组语义令牌，禁止警告或错误标签沿用绿色底框。深色主题使用对应深色状态令牌。

标签保持原文与原有功能。静态标签不增加点击或悬停效果，不伪装成按钮。数据表中的分类标签、落地页的小徽标及品牌语气标签使用同一套尺寸与边界规则；演示图表中的 TAM / SAM / SOM 排版标注保留图表自身的比例。

共享规则保存于 system/tags.css，并同步到 radix-visual.css、各页面内联样式和目录内嵌预览。
