const translations = {
  en: {
    navAbout:"about", navSkills:"skills", navExperience:"experience", navProjects:"projects", navEducation:"education", navContact:"contact",
    role:"Full Stack Developer & Flutter Mobile Developer",
    impact:"AI healthcare • distributed water system • national tourism platform",
    available:"✓ Available for freelance & full-time work — GCC & MENA",
    heroTitle:"Full Stack Developer | Flutter Mobile Developer | UI/UX-Oriented Software Engineer",
    statExp:"Year Experience", statProjects:"Flagship Projects", statGpa:"GPA",
    photoCaption:"Full Stack Developer",
    aboutP1:"I am a full stack and Flutter developer with hands-on experience building real-world web platforms, dashboards, REST APIs, database-driven systems, and AI-enabled products.",
    aboutP2:"I build projects end-to-end: from idea and UI/UX to backend architecture, APIs, databases, admin dashboards, AI integrations, and product delivery.",
    aboutP3:"My core strengths include UI/UX design, API-driven systems, Laravel backend development, FastAPI services, Flutter mobile thinking, database modeling, and practical problem solving.",
    experienceTitle:"Independent Full Stack Developer",
    exp1:"Built complete web platforms independently, covering UI/UX, frontend, backend, APIs, database design, and admin dashboards.",
    exp2:"Developed Laravel and FastAPI backends with structured REST APIs, database models, and integration-ready services.",
    exp3:"Integrated Gemini AI and agent-based workflows into smart ticketing, recommendations, and intelligent product flows.",
    masarTitle:"Masar — AI Smart Hospital Ticketing System",
    masarText:"AI-powered hospital ticket reservation and queue management platform. Achieved 2nd place in Tamheed Competition by Hayel Saeed Anam Group.",
    ghaithTitle:"Ghaith — Distributed Water Management System",
    ghaithText:"Distributed water delivery management system connecting citizens with water delivery drivers in Taiz to organize requests and support crisis response.",
    tourismTitle:"Yemen Tourism Platform",
    tourismText:"National tourism platform for Yemen’s natural, historical, coastal, island, and city landmarks with Google Maps navigation and AI recommendations.",
    educationDesc:"Comprehensive study in Information Technology with focus on software development, databases, system architecture, distributed systems, and emerging AI-enabled technologies.",
    cvDesc:"Curriculum Vitae · Full Stack Developer · Flutter Mobile Developer",
    cv1:"✓ Work experience & projects", cv2:"✓ Technical skills & stack", cv3:"✓ Education & contact information",
    connectTitle:"Let's Connect",
    connectText:"I'm excited to collaborate on useful products, modern platforms, and innovative software solutions.",
    freelance:"Available for freelance work",
    sendMessage:"Send a Message"
  },
  ar: {
    navAbout:"نبذة", navSkills:"المهارات", navExperience:"الخبرة", navProjects:"المشاريع", navEducation:"التعليم", navContact:"تواصل",
    role:"مطور Full Stack ومطور تطبيقات Flutter",
    impact:"نظام صحي ذكي • نظام مياه موزع • منصة سياحية وطنية",
    available:"✓ متاح للعمل الحر والفرص الوظيفية — الخليج والشرق الأوسط",
    heroTitle:"مطور Full Stack | مطور Flutter | مهندس برمجيات مهتم بـ UI/UX",
    statExp:"سنة خبرة", statProjects:"مشاريع رئيسية", statGpa:"المعدل",
    photoCaption:"مطور Full Stack",
    aboutP1:"أنا مطور Full Stack وFlutter لدي خبرة عملية في بناء منصات ويب واقعية، لوحات تحكم، REST APIs، أنظمة قواعد بيانات، ومنتجات مدعومة بالذكاء الاصطناعي.",
    aboutP2:"أبني المشاريع من البداية للنهاية: من الفكرة وUI/UX إلى هندسة الباك إند والـ APIs وقواعد البيانات ولوحات التحكم ودمج الذكاء الاصطناعي وتسليم المنتج.",
    aboutP3:"أبرز نقاط قوتي هي UI/UX، الأنظمة المعتمدة على APIs، Laravel، FastAPI، التفكير الخاص بتطبيقات Flutter، تصميم قواعد البيانات، وحل المشاكل العملية.",
    experienceTitle:"مطور Full Stack مستقل",
    exp1:"بنيت منصات ويب كاملة بشكل مستقل تشمل UI/UX والواجهات والباك إند والـ APIs وقواعد البيانات ولوحات التحكم.",
    exp2:"طورت Backends باستخدام Laravel وFastAPI مع REST APIs منظمة ونماذج قواعد بيانات وخدمات جاهزة للدمج.",
    exp3:"دمجت Gemini AI وتدفقات Agent في الحجز الذكي والتوصيات وتدفقات المنتجات الذكية.",
    masarTitle:"مسار — نظام حجز التذاكر الذكي للمستشفيات",
    masarText:"منصة مدعومة بالذكاء الاصطناعي لحجز تذاكر المستشفيات وتنظيم الطوابير. حقق المشروع المركز الثاني في مسابقة تمهيد التابعة لمجموعة هائل سعيد أنعم.",
    ghaithTitle:"غيث — نظام موزع لإدارة المياه",
    ghaithText:"نظام موزع لإدارة توصيل المياه يربط المواطنين بسائقي توصيل المياه في تعز لتنظيم الطلبات ودعم الاستجابة للأزمة.",
    tourismTitle:"منصة سياحة اليمن",
    tourismText:"منصة وطنية تعرض معالم اليمن الطبيعية والتاريخية والساحلية والجزرية ومعالم المدن مع خرائط Google وتوصيات ذكية.",
    educationDesc:"دراسة شاملة في تقنية المعلومات مع تركيز على تطوير البرمجيات وقواعد البيانات وهندسة الأنظمة والأنظمة الموزعة والتقنيات المدعومة بالذكاء الاصطناعي.",
    cvDesc:"السيرة الذاتية · مطور Full Stack · مطور Flutter",
    cv1:"✓ الخبرة العملية والمشاريع", cv2:"✓ المهارات التقنية والتقنيات", cv3:"✓ التعليم ومعلومات التواصل",
    connectTitle:"لنتواصل",
    connectText:"يسعدني التعاون في بناء منتجات مفيدة، منصات حديثة، وحلول برمجية مبتكرة.",
    freelance:"متاح للعمل الحر",
    sendMessage:"إرسال رسالة"
  }
};

let currentLang = localStorage.getItem("amjadNextLang") || "en";
const html = document.documentElement;
const langToggle = document.getElementById("langToggle");
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("terminalNav");

function applyLanguage(lang){
  currentLang = lang;
  localStorage.setItem("amjadNextLang", lang);
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
  langToggle.textContent = lang === "ar" ? "EN" : "AR";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if(translations[lang][key]) el.textContent = translations[lang][key];
  });
}
langToggle.addEventListener("click", () => applyLanguage(currentLang === "en" ? "ar" : "en"));
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".terminal-nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
applyLanguage(currentLang);

// Theme accents
const accents = ["green", "blue", "purple"];
let accentIndex = Number(localStorage.getItem("amjadAccentIndex") || "0");
function applyAccent(){
  document.documentElement.dataset.accent = accents[accentIndex] === "green" ? "" : accents[accentIndex];
  localStorage.setItem("amjadAccentIndex", accentIndex);
}
themeToggle.addEventListener("click", () => {
  accentIndex = (accentIndex + 1) % accents.length;
  applyAccent();
});
applyAccent();

// Boot sequence
const bootScreen = document.getElementById("bootScreen");
const bootLines = document.getElementById("bootLines");
const bootProgress = document.getElementById("bootProgress");
const bootMessages = [
  ["loading kernel modules", "OK"],
  ["mounting /portfolio", "OK"],
  ["initializing UI/UX engine", "OK"],
  ["linking Laravel + FastAPI + Flutter", "OK"],
  ["warming AI routes", "OK"],
  ["rendering terminal interface", "READY"]
];
let bootIndex = 0;
function bootStep(){
  if(bootIndex < bootMessages.length){
    const p = document.createElement("p");
    p.innerHTML = `<span>➜</span> ${bootMessages[bootIndex][0]} ... <span>${bootMessages[bootIndex][1]}</span>`;
    bootLines.appendChild(p);
    bootProgress.style.width = `${((bootIndex + 1) / bootMessages.length) * 100}%`;
    bootIndex++;
    setTimeout(bootStep, 210);
  } else {
    setTimeout(() => bootScreen.classList.add("hide"), 480);
  }
}
bootStep();

// Type when each element enters viewport
const typedElements = new WeakSet();
function typeElement(el){
  if(typedElements.has(el)) return;
  typedElements.add(el);
  const text = currentLang === "ar" ? (el.dataset.ar || el.dataset.en || "") : (el.dataset.en || el.dataset.ar || "");
  el.textContent = "";
  el.classList.add("typing");
  let i = 0;
  const speed = 28;
  function tick(){
    if(i <= text.length){
      el.textContent = text.slice(0, i++);
      setTimeout(tick, speed);
    } else {
      el.classList.remove("typing");
    }
  }
  tick();
}
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      entry.target.querySelectorAll("[data-type]").forEach(typeElement);
      if(entry.target.matches("[data-type]")) typeElement(entry.target);
      entry.target.querySelectorAll("[data-count]").forEach(startCounter);
    }
  });
}, {threshold: 0.22});
document.querySelectorAll(".reveal, [data-type]").forEach(el => revealObserver.observe(el));

// Counters
const counted = new WeakSet();
function startCounter(el){
  if(counted.has(el)) return;
  counted.add(el);
  const target = Number(el.dataset.count);
  let current = 0;
  const steps = 32;
  const inc = target / steps;
  function step(){
    current += inc;
    if(current < target){
      el.textContent = Math.floor(current);
      requestAnimationFrame(step);
    } else {
      el.textContent = target + (target === 93 ? "%" : "+");
    }
  }
  step();
}

// Filters
document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    document.querySelectorAll(".skill-item").forEach(item => {
      item.classList.toggle("hide", filter !== "all" && item.dataset.category !== filter);
    });
  });
});
document.querySelectorAll(".projects-command-bar button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".projects-command-bar button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.project;
    document.querySelectorAll(".project-window").forEach(item => {
      item.classList.toggle("hide", filter !== "all" && item.dataset.projectCategory !== filter);
    });
  });
});

// Contact fake send
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = document.getElementById("sentMsg");
  const name = document.getElementById("nameInput").value.trim() || "friend";
  msg.textContent = `$ message queued successfully for ${name}`;
});

// Scroll progress, active nav, top button
const scrollProgress = document.getElementById("scrollProgress");
const backTop = document.getElementById("backTop");
function onScroll(){
  const h = document.documentElement.scrollHeight - innerHeight;
  scrollProgress.style.width = `${(scrollY / h) * 100}%`;
  backTop.classList.toggle("show", scrollY > 650);
  document.querySelectorAll("section[id]").forEach(section => {
    const rect = section.getBoundingClientRect();
    if(rect.top < 150 && rect.bottom > 150){
      document.querySelectorAll(".terminal-nav a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${section.id}`));
    }
  });
}
addEventListener("scroll", onScroll);
backTop.addEventListener("click", () => scrollTo({top:0, behavior:"smooth"}));
onScroll();

// Command center
const commandOpen = document.getElementById("commandOpen");
const commandCenter = document.getElementById("commandCenter");
const commandClose = document.getElementById("commandClose");
const commandInput = document.getElementById("commandInput");
commandOpen.addEventListener("click", () => { commandCenter.classList.add("open"); commandInput.focus(); });
commandClose.addEventListener("click", () => commandCenter.classList.remove("open"));
commandCenter.addEventListener("click", (e) => { if(e.target === commandCenter) commandCenter.classList.remove("open"); });
document.querySelectorAll("[data-jump]").forEach(btn => btn.addEventListener("click", () => {
  commandCenter.classList.remove("open");
  document.querySelector(btn.dataset.jump).scrollIntoView({behavior:"smooth"});
}));
document.querySelector("[data-action='theme']").addEventListener("click", () => {
  accentIndex = (accentIndex + 1) % accents.length;
  applyAccent();
});
commandInput.addEventListener("keydown", (e) => {
  if(e.key === "Enter"){
    const v = commandInput.value.toLowerCase();
    const map = {projects:"#projects", skills:"#skills", contact:"#contact", experience:"#experience", cv:"#cv", education:"#education", about:"#about"};
    const key = Object.keys(map).find(k => v.includes(k));
    if(key){ commandCenter.classList.remove("open"); document.querySelector(map[key]).scrollIntoView({behavior:"smooth"}); }
    if(v.includes("theme")){ accentIndex = (accentIndex+1)%accents.length; applyAccent(); }
  }
});
addEventListener("keydown", (e) => {
  if((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k"){
    e.preventDefault(); commandCenter.classList.add("open"); commandInput.focus();
  }
  if(e.key === "Escape") commandCenter.classList.remove("open");
});

// 3D tilt
document.querySelectorAll(".tilt-card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    card.style.transform = `perspective(1000px) rotateX(${y * -5}deg) rotateY(${x * 5}deg) translateY(-2px)`;
  });
  card.addEventListener("mouseleave", () => card.style.transform = "");
});

// Calm mesh canvas
const canvas = document.getElementById("matrixMesh");
const ctx = canvas.getContext("2d");
let nodes = [];
function resizeCanvas(){
  canvas.width = innerWidth * devicePixelRatio;
  canvas.height = innerHeight * devicePixelRatio;
  canvas.style.width = innerWidth + "px";
  canvas.style.height = innerHeight + "px";
  ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);
  const count = Math.min(125, Math.floor(innerWidth/13));
  nodes = Array.from({length:count}, () => ({
    x:Math.random()*innerWidth,
    y:Math.random()*innerHeight,
    vx:(Math.random()-.5)*.13,
    vy:(Math.random()-.5)*.13,
    r:Math.random()*1.4+.5
  }));
}
function draw(){
  ctx.clearRect(0,0,innerWidth,innerHeight);
  const styles = getComputedStyle(document.documentElement);
  const green = styles.getPropertyValue("--green").trim() || "#42c55b";
  for(const n of nodes){
    n.x += n.vx; n.y += n.vy;
    if(n.x<0)n.x=innerWidth; if(n.x>innerWidth)n.x=0;
    if(n.y<0)n.y=innerHeight; if(n.y>innerHeight)n.y=0;
    ctx.beginPath(); ctx.arc(n.x,n.y,n.r,0,Math.PI*2);
    ctx.fillStyle = "rgba(180,240,220,.30)";
    ctx.fill();
  }
  for(let i=0;i<nodes.length;i++){
    for(let j=i+1;j<nodes.length;j++){
      const a=nodes[i], b=nodes[j], dx=a.x-b.x, dy=a.y-b.y;
      const dist=Math.sqrt(dx*dx+dy*dy);
      if(dist<130){
        ctx.beginPath();
        ctx.moveTo(a.x,a.y);
        const mid=(a.x+b.x)/2;
        ctx.lineTo(mid,a.y); ctx.lineTo(mid,b.y); ctx.lineTo(b.x,b.y);
        ctx.strokeStyle = `rgba(66,197,91,${(1-dist/130)*.12})`;
        ctx.lineWidth=1; ctx.stroke();
      }
    }
  }
  requestAnimationFrame(draw);
}
addEventListener("resize", resizeCanvas);
resizeCanvas(); draw();
