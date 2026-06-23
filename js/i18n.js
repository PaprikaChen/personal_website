const translations = {
  en: {
    'nav.research': 'Research',
    'nav.project': 'Project',
    'nav.about': 'About Me',
    'home.subtitle': 'designer · researcher · creative technologist',

    'research.title1': 'Hierarchical Finetuning for Visual Reasoning in VLMs',
    'research.authors1': 'Advised by Ehsan Adeli | Stanford University',
    'research.desc1': 'HiTune is a hierarchical fine-tuning framework designed to improve quantitative visual reasoning in vision-language models. It teaches models to decompose video-based physics problems and explicitly use tools for tasks such as object tracking, pixel measurement, scale conversion, and numerical calculation. Using LoRA-based supervised fine-tuning and STaR-style bootstrapping, HiTune aims to produce more accurate and interpretable answers instead of relying on plausible guesses.',
    'research.venue1': 'Aiming for ICLR 2027',

    'research.title2': 'QuantiPhy: A Quantitative Benchmark Evaluating Physical Reasoning Abilities of Vision-Language Models',
    'research.authors2': 'Advised by Fei-Fei Li and Ehsan Adeli | Stanford University',
    'research.desc2': 'QuantiPhy is the first benchmark that asks vision-language models to perform physical reasoning with numerical accuracy. Across more than 3,300 video-text instances, we show that today’s VLMs often produce plausible-sounding responses but fail quantitatively on physical reasoning tasks. They rely more heavily on memorized world knowledge from pretraining than on the actual video and text inputs.',
    'research.venue2': 'CVPR 2026 · Read paper →',

    'research.title3': 'Real-Time Watermarking for VR Motion',
    'research.authors3': 'Advised by Prof. Dianna Xu and Prof. Aline Normoyle',
    'research.desc3': 'Developed a real-time watermark embedding system using Quantization Index Modulation (QIM), optimized for VR motion data with angular velocity-based filtering. Simulated various real-world distortions—including frame rate resampling, partial frame loss, and motion blending—to test watermark robustness. Evaluated performance using both text and image watermarks, comparing accuracy, visual impact, and resilience under different attack types.',
    'research.venue3': 'View slides →',

    'project.tag1': 'OpenGL · C++',
    'project.title1': 'OpenGL: Interactive 3D Mini-Minecraft World',
    'project.desc1': 'A custom OpenGL game engine with player physics, flight/gravity modes, and ray-cast terrain interaction. Features procedural world generation via 3D Perlin noise — distinct biomes, cave systems, and lava pools. Rendering pipeline supports animated textures, transparency, and water/lava overlays; multithreaded terrain expansion keeps performance smooth.',
    'project.link1': 'Watch demo →',
    'project.tag2': 'Unity · C#',
    'project.title2': 'Unity: First-Person Shooter RPG Game Design',
    'project.desc2': 'An adventure game about a skeleton postman delivering a mysterious letter to a haunted maze. Peaceful by day, the maze fills with ghosts at night — players must manage time and health to survive. Features NPC hints, train transitions, and layered tasks for an immersive experience.',
    'project.link2': 'View on GitHub →',
    'project.tag3': 'Maya · Substance Painter',
    'project.title3': 'Maya + Substance Painter: Interactive Organic Modeling and Rendering',
    'project.desc3': 'A 3D scene featuring a bathroom environment with an orchid plant as the hero model. Created in Maya with materials and textures authored in Substance Painter.',
    'project.link3': 'View on Sketchfab →',
    'project.expand': 'Details',
    'project.tag4': 'Godot · 2.5D',
    'project.title4': 'Twenty-Two Lotus Realms 《二十二莲境》',
    'project.teaser4': 'A 2.5D Chinese psychological horror game in Godot — platforming and light puzzles wrapped in surreal, oppressive dreamscapes.',
    'project.desc4': 'A 2.5D Chinese psychological horror game developed in Godot, blending platformer mechanics with light puzzle design. Surreal, dream-like scenes infused with Chinese horror aesthetics build a subtle and oppressive narrative atmosphere. Currently in active <strong>Demo development</strong>.',
    'project.teaser1': 'A custom OpenGL game engine with procedural terrain generation, player physics, and advanced rendering.',
    'project.teaser2': 'An adventure game about a skeleton postman delivering a mysterious letter to a haunted maze.',
    'project.teaser3': 'A 3D bathroom scene with an orchid plant as the hero model, built in Maya and textured in Substance Painter.',
    'project.link': 'View project →',

    'about.name': 'Paprika Chen',
    'about.role': 'Designer · Researcher · Creative Technologist',
    'about.bio': 'I\'m Paprika, an M.S. student in Computer Science at <strong>Stanford University</strong>, specializing in <strong>Visual Computing</strong>. I work on a physical reasoning project co-advised by <strong>Prof. Fei-Fei Li</strong> and <strong>Prof. Ehsan Adeli</strong>. Before Stanford, I graduated from <strong>Bryn Mawr College</strong>, where my research explored VR immersive theater, digital doppelgängers, and motion data watermarking.',
    'about.bio2': 'I have over five years of <strong>graphic design</strong> experience, which has shaped my visual sensibility and attention to detail. Beyond research, I\'m passionate about <strong>independent game development</strong> and the possibilities at the intersection of technology, art, and storytelling.',
    'about.bio3': 'I\'m currently leading <strong>Twenty-Two Lotus Realms (《二十二莲境》)</strong> — a 2D Chinese horror game blending narrative puzzle-solving with platforming. Inspired by Chinese folklore and stories of female growth, it spans programming, visual direction, and narrative to create a world that is both unsettling and emotionally resonant.',
    'about.bio4': 'My interests lie at the intersection of <strong>visual computing</strong>, <strong>interactive systems</strong>, and <strong>creative expression</strong> — building experiences that are technically thoughtful, visually distinctive, and emotionally meaningful.',
    'about.photoPlaceholder': 'Photo',
    'about.storyIntro': 'Ready to know more about Paprika?',
    'about.scrollDown': 'Scroll down.',
    'about.story1': 'Paprika is an artist of makeup.',
    'about.story2': "She loves dancing with her friends.",
    'about.story3': "She can't hold a tune, but that doesn't stop her from singing a cappella with friends.",
    'about.story4': 'She is devoted to public service, and once taught in remote mountain villages.',
    'about.story5': "Her graphic design work has appeared on Weibo's homepage and the Chongqing Twin Towers.",
    'about.story6': 'She once dyed her hair <span class="text-pink">pink</span>.',
    'about.story7': 'She loves Bryn Mawr College so dearly.',
  },

  zh: {
    'nav.research': '研究',
    'nav.project': '项目',
    'nav.about': '关于我',
    'home.subtitle': '设计师 · 研究者 · 创意技术人',

    'research.title1': '面向视觉语言模型视觉推理的分层微调',
    'research.authors1': '由斯坦福大学 Ehsan Adeli 教授指导',
    'research.desc1': 'HiTune 是一个旨在提升视觉语言模型定量视觉推理能力的分层微调框架。它训练模型将基于视频的物理问题拆解为多个步骤，并显式调用物体追踪、像素测量、尺度转换和数值计算等工具。通过基于 LoRA 的监督微调和 STaR 风格的自举训练，HiTune 希望模型能够生成更加准确、可解释的答案，而不是依赖看似合理的猜测。',
    'research.venue1': '目标投稿 ICLR 2027',

    'research.title2': 'QuantiPhy：评估视觉语言模型定量物理推理能力的基准',
    'research.authors2': '由斯坦福大学李飞飞教授与 Ehsan Adeli 教授指导',
    'research.desc2': 'QuantiPhy 是首个要求视觉语言模型以数值精度完成物理推理的评测基准。通过超过 3,300 个视频与文本实例，我们发现当前的视觉语言模型虽然经常能够生成听起来合理的回答，却难以在物理推理任务中获得准确的定量结果。相比真正理解视频和文本输入，这些模型往往更加依赖预训练阶段记忆的世界知识。',
    'research.venue2': 'CVPR 2026 · 阅读论文 →',

    'research.title3': 'VR 动作数据实时水印嵌入',
    'research.authors3': '由 Dianna Xu 教授与 Aline Normoyle 教授联合指导',
    'research.desc3': '基于量化索引调制（QIM）开发了一套实时水印嵌入系统，针对 VR 动作数据的角速度特征进行了专项优化。模拟了多种真实场景下的干扰方式——包括帧率重采样、帧丢失及动作混合——以测试水印的鲁棒性。分别采用文本水印与图像水印评估嵌入效果，在准确率、视觉影响及抗攻击能力等维度进行了对比分析。',
    'research.venue3': '查看幻灯片 →',

    'project.tag1': 'OpenGL · C++',
    'project.title1': 'OpenGL：交互式3D迷你我的世界',
    'project.desc1': '基于 OpenGL 构建的自定义游戏引擎，支持飞行与重力双模式及射线碰撞交互。使用三维 Perlin 噪声程序化生成地形——不同生物群系、洞穴与熔岩池一应俱全。后处理管线支持动态纹理、透明度与水/熔岩叠加效果；多线程地形扩展保障流畅性能。',
    'project.link1': '观看演示 →',
    'project.tag2': 'Unity · C#',
    'project.title2': 'Unity：第一人称射击 RPG 游戏设计',
    'project.desc2': '以骷髅邮差为主角的冒险游戏，需将神秘信件送达幽灵迷宫。白天平静，入夜幽灵袭来——玩家须合理分配时间并管理生命值。包含 NPC 提示、火车过场与多层任务，打造沉浸式游戏体验。',
    'project.link2': '在 GitHub 上查看 →',
    'project.tag3': 'Maya · Substance Painter',
    'project.title3': 'Maya + Substance Painter：有机体建模与渲染',
    'project.desc3': '以浴室为场景的三维作品，主角模型为一株兰花。在 Maya 中完成建模，并使用 Substance Painter 制作材质与贴图。',
    'project.link3': '在 Sketchfab 上查看 →',
    'project.expand': '详情',
    'project.tag4': 'Godot · 2.5D',
    'project.title4': '《二十二莲境》',
    'project.teaser4': '使用 Godot 开发的 2.5D 中式微恐游戏，以平台跳跃与轻度解谜为核心，营造含蓄压抑的叙事氛围。',
    'project.desc4': '使用 Godot 开发的 2.5D 中式微恐游戏，以平台跳跃与轻度解谜为核心玩法，通过诡谲梦境般的场景与中式恐怖元素，营造含蓄而压抑的叙事氛围。目前项目正处于 <strong>Demo 制作阶段</strong>。',
    'project.teaser1': '自定义 OpenGL 游戏引擎，包含程序化地形生成、玩家物理模拟与高级渲染技术。',
    'project.teaser2': '以骷髅邮差为主角的冒险游戏，需将神秘信件送达幽灵迷宫。',
    'project.teaser3': '以兰花为主角模型的三维浴室场景，在 Maya 中建模并用 Substance Painter 制作材质。',
    'project.link': '查看项目 →',

    'about.name': 'Paprika Chen',
    'about.role': '设计师 · 研究者 · 创意技术人',
    'about.bio': '我是 Paprika，<strong>斯坦福大学计算机科学硕士</strong>在读，专注于<strong>视觉计算</strong>方向。在<strong>李飞飞教授</strong>与 <strong>Ehsan Adeli 教授</strong>的联合指导下开展物理推理研究。本科毕业于<strong>布林茅尔学院</strong>，研究涵盖 <strong>VR 沉浸式剧场</strong>、<strong>数字分身</strong>与<strong>动作数据水印</strong>——动作水印成为我本科毕业论文的核心课题。',
    'about.bio2': '我拥有超过<strong>五年的平面设计经验</strong>，深刻塑造了我的视觉审美与细节把控能力。研究之外，我对<strong>独立游戏开发</strong>充满热情，着迷于技术、艺术与叙事交汇时涌现的可能性。',
    'about.bio3': '我目前主导开发<strong>《二十二莲境》</strong>（Twenty-Two Lotus Realms）——一款融合叙事解谜与横版跳台的 <strong>2D 中式心理恐怖游戏</strong>。以中国民间传说与女性成长叙事为灵感，游戏横跨编程、视觉方向与叙事开发，构建一个既令人不安又具情感共鸣的世界。',
    'about.bio4': '我的兴趣横跨<strong>视觉计算</strong>、<strong>交互系统</strong>与<strong>创意表达</strong>——构建技术上经得起推敲、视觉上独树一帜、情感上触动人心的体验。',
    'about.photoPlaceholder': '照片',
    'about.storyIntro': '想更多地了解 Paprika 吗？',
    'about.scrollDown': '往下滑。',
    'about.story1': 'paprika是个化妆的艺术家。',
    'about.story2': '她动作不协调，但是喜欢和朋友们跳舞。',
    'about.story3': '她五音不全，但这不影响她和朋友们唱阿卡贝拉。',
    'about.story4': '她是个公益热爱者，并且曾去到大山中支教。',
    'about.story5': '她的平面设计作品曾经登上过微博首页，和重庆双子塔。',
    'about.story6': '她曾经染过<span class="text-pink">粉色</span>的头发。',
    'about.story7': '她是如此地热爱 Bryn Mawr College。',
  }
};


const LANG_KEY = 'paprika_lang';

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'en';
}

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = lang === 'en' ? '中文' : 'EN';
}

function initI18n() {
  const lang = getLang();
  applyLang(lang);

  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const current = getLang();
      const next = current === 'en' ? 'zh' : 'en';
      localStorage.setItem(LANG_KEY, next);
      applyLang(next);
    });
  }
}

document.addEventListener('DOMContentLoaded', initI18n);
