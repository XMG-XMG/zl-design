(() => {
  const root = document.documentElement;
  const host = document.getElementById('showcase');
  const groups = [
    ['背景', ['#FAFBF9', '#F3F6F1']],
    ['交互表面', ['#EAF2E9', '#DFEBDD', '#D1E2D0']],
    ['边框与分隔', ['#CDD5C9', '#A7C6AC', '#7B8978']],
    ['实色动作', ['#30764B', '#286540']],
    ['可读文字', ['#536255', '#202B23']]
  ];
  let step = 0;
  const scales = groups.map(([label, colors]) => `<div class="scale-group"><p>${label}</p><div class="scale-chips">${colors.map(color => `<div class="scale-step"><i style="--step:${color}" title="${color}"></i><span>${++step}</span></div>`).join('')}</div></div>`).join('');
  host.innerHTML = `
  <div class="page">
    <header class="topbar"><span class="wordmark">Product<span class="small"> / 设计体系</span></span><nav aria-label="文档导航"><a href="#palette">色彩</a><a href="#components">组件</a><a href="#type">排版</a><a href="../DESIGN.md">完整规范 ↗</a></nav></header>
    <main>
      <div class="hero"><div><span class="eyebrow">PRODUCT / LIGHT PALETTE</span><h1>清晰有序，<br>自然成形。</h1><p class="lead">森林绿表达行动，灰绿组织信息，清浅底色留给内容。让颜色在真实组件中自然成形。</p></div><div class="hero-note"><p>仅浅色主题 · 基础圆角 8px<br>MiSans 排版 · 实色内容与局部玻璃</p><p class="small">参照 Radix 自定义配色样例的功能分组，保留你的三个色彩锚点。</p><div class="controls" style="margin-top:24px"><button type="button" class="button" id="density-toggle" aria-pressed="false">紧凑密度</button><a href="#components">查看组件示例 ↓</a></div></div></div>
      <section class="section" id="palette"><div class="section-head"><h2>01 / 色彩与用途</h2><p>从背景到文字，用色随信息层级逐步加深。</p></div><div class="palette">
        <figure class="swatch"><div class="color-block forest">森林绿</div><figcaption><span>Accent / 主要动作</span><code>#30764B</code></figcaption></figure>
        <figure class="swatch"><div class="color-block sage">灰绿</div><figcaption><span>Gray / 中性基底</span><code>#DFE5DC</code></figcaption></figure>
        <figure class="swatch"><div class="color-block mist">清浅底色</div><figcaption><span>Background / 页面</span><code>#FAFBF9</code></figcaption></figure>
      </div><div class="scale-groups" aria-label="按用途分组的十二个色彩样本">${scales}</div><div class="theme-strip"><span>1–2 背景</span><span>3–5 交互表面</span><span>6–8 边框</span><span>9–10 实色</span><span>11–12 文字</span></div><p class="hint" style="margin-top:16px">三个锚点来自你的配置。以上为本体系的语义色样本与设计扩展，不是 Radix 官方算法生成的色阶。</p></section>
      <section class="section" id="components"><div class="section-head"><h2>02 / 组件中的颜色</h2><p>共用 8px 圆角与浅色语义令牌，状态变化清晰可见。</p></div><div class="two-col"><div><section class="panel"><h3>动作与反馈</h3><div class="actions"><button type="button" class="button primary" id="demo-action">提交示例</button><a class="button" href="#rules">查看规范</a><button type="button" class="button" disabled>暂不可用</button></div><p class="hint">默认高度 44px，圆角 8px。使用 Tab 键查看焦点。</p><p class="status" role="status" id="action-status">示例：等待操作。</p><p class="status warning"><strong>提醒：</strong>发布前请确认内容完整。</p><p class="status error"><strong>错误：</strong>请填写项目名称后重试。</p></section><article class="panel sample-card"><span class="eyebrow">实色内容面板</span><h3>让信息回到中心</h3><p>8px 圆角、1px 边框与有节奏的留白。内容区域保持实色，让阅读不受下层背景影响。</p><a href="#material">了解材质规则</a></article></div><section class="panel"><h3>创建项目</h3><p class="small" style="margin-bottom:24px">表单示例，不会上传或持久保存数据。</p><form id="demo-form" novalidate><div class="field"><label for="project-name">项目名称（必填）</label><input id="project-name" name="projectName" placeholder="例如：产品工作台" required aria-describedby="name-help"><span class="hint" id="name-help">使用简洁、可识别的名称。</span></div><div class="field"><label for="project-type">项目类型</label><select id="project-type"><option>产品界面</option><option>品牌网站</option><option>内部工作台</option></select></div><div class="field"><label for="project-note">补充说明</label><textarea id="project-note" rows="3" placeholder="描述需要解决的问题"></textarea></div><label class="check"><input type="checkbox" checked><span>保留项目更新提醒</span></label><button class="button primary" type="button" id="save-project">保存示例</button><p class="hint" role="status" id="form-status">仅在当前页面演示。</p></form></section></div></section>
      <section class="section" id="type"><div class="section-head"><h2>03 / 中文优先的排版</h2><p>统一使用 MiSans，以字重、字号与留白建立层级。</p></div><div class="two-col"><div class="panel"><span class="small">MiSans / 字体样张</span><p class="type-big">把复杂理清，<br>让体验自然。</p><p>好的界面，让用户看得清、找得到、用得顺。正文以舒适的行高与适度的行长，建立从容的阅读节奏。</p><p class="hint">加载项目内 MiSans 字体；加载不可用时回退至中文系统字体。</p></div><div class="panel"><div class="type-line"><span style="font-size:32px;font-weight:600">章节标题</span><code>32 / 600</code></div><div class="type-line"><span style="font-size:24px;font-weight:600">内容层级</span><code>24 / 600</code></div><div class="type-line"><span style="font-size:20px;font-weight:600">组件标题</span><code>20 / 600</code></div><div class="type-line"><span>正文内容</span><code>16 / 400</code></div><div class="type-line"><span class="small">说明与标签</span><code>14 / 400</code></div><p class="hint">正文行高 1.625；标题行高 1.25。手机正文字号不缩小。</p></div></div></section>
      <section class="section" id="material"><div class="section-head"><h2>04 / 克制的玻璃层次</h2><p>导航、菜单与浮层可以通透，主要内容保持实色。</p></div><div class="two-col"><div class="glass-stage"><div class="glass"><nav aria-label="材质示例导航"><strong>Product</strong><a href="#palette" aria-current="page">设计基础</a><a href="#components">组件</a><a href="#rules">使用规范</a></nav></div><p>半透明纯色背景，让下层灰绿轻轻透出，文字与操作保持清晰。</p><p class="hint">88% 不透明度 / 模糊 16px。缺少模糊支持或偏好减少透明度时回退实色。</p></div><div class="panel"><h3>圆角与留白</h3><div class="type-line"><span>borderRadius</span><code>8</code></div><div class="type-line"><span>按钮、输入框</span><code>8px</code></div><div class="type-line"><span>面板、菜单、浮层</span><code>8px</code></div><div class="type-line"><span>小型色样</span><code>4px</code></div><p class="hint">圆形状态点保持圆形。间距以 4px 为单位、8px 为主节奏。</p></div></div></section>
      <section class="section" id="rules"><div class="section-head"><h2>05 / 随场景伸展</h2><p>小屏重排内容，触控保持足够操作空间。</p></div><div class="table-scroll" role="region" aria-label="响应式断点表" tabindex="0"><table><caption>响应式布局约定</caption><thead><tr><th scope="col">范围</th><th scope="col">布局</th><th scope="col">页边距</th></tr></thead><tbody><tr><td>小于 640px</td><td>单列，导航换行</td><td>16px</td></tr><tr><td>640–1023px</td><td>双列，色阶分组重排</td><td>24px</td></tr><tr><td>1024–1439px</td><td>按内容分组，限宽阅读</td><td>32px</td></tr><tr><td>1440px 起</td><td>居中，最大 1200px</td><td>至少 48px</td></tr></tbody></table></div><details open><summary>如何在后续设计中使用？</summary><p>以 DESIGN.md 为规范来源，使用 variables.css 的语义令牌。仅提供浅色主题；添加 compact 类可调整密度。玻璃与控件边框令牌需要组件显式消费。</p></details><details><summary>配色参考</summary><p>参考用户提供的 Radix 自定义样例，以背景、交互表面、边框、实色和文字分组展示。衍生色为本体系设计扩展。</p><p><a href="https://www.radix-ui.com/colors/custom?accent-light=30764B&gray-light=DFE5DC&bg-light=FAFBF9" target="_blank" rel="noopener noreferrer">查看参考样例 ↗</a></p></details><details><summary>无障碍与动效</summary><p>状态配有文字说明，键盘操作具有可见焦点。交互过渡 240ms，偏好减少动态效果时关闭非必要过渡。</p></details><div class="resources"><a href="../DESIGN.md">DESIGN.md</a><a href="tokens.default.json">浅色令牌</a><a href="tokens.compact.json">紧凑令牌</a><a href="variables.css">CSS 变量</a><a href="../brand.html">品牌概览</a></div></section>
    </main><footer>Product / 设计体系 · 浅色主题 · 8px 圆角 · MiSans<br>以实色保证阅读，以局部玻璃建立层次。</footer>
  </div>`;
  const density = document.getElementById('density-toggle');
  density.addEventListener('click', () => {
    root.classList.toggle('compact');
    density.setAttribute('aria-pressed', String(root.classList.contains('compact')));
  });
  document.getElementById('demo-action').addEventListener('click', () => {
    document.getElementById('action-status').textContent = '成功：主要动作已触发。此操作仅用于组件演示。';
  });
  const form = document.getElementById('demo-form');
  const name = document.getElementById('project-name');
  const help = document.getElementById('name-help');
  const validate = () => {
    const valid = Boolean(name.value.trim());
    if (valid) name.removeAttribute('aria-invalid');
    else name.setAttribute('aria-invalid', 'true');
    help.textContent = valid ? '名称格式有效。' : '请填写项目名称，不能只输入空格。';
    return valid;
  };
  const save = () => {
    const valid = validate();
    document.getElementById('form-status').textContent = valid ? '成功：示例已完成。数据未上传，也不会在刷新后保留。' : '未保存：请先修正项目名称。';
    if (!valid) name.focus();
  };
  name.addEventListener('blur', validate);
  document.getElementById('save-project').addEventListener('click', save);
  form.addEventListener('submit', event => { event.preventDefault(); save(); });
  form.addEventListener('keydown', event => {
    if (event.key === 'Enter' && event.target.tagName === 'INPUT' && !event.isComposing) { event.preventDefault(); save(); }
  });
})();
