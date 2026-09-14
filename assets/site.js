const jannatStyle=document.createElement('style');
jannatStyle.textContent=`@font-face{font-family:'HAKIM Jannat';src:local('A Jannat LT'),local('Jannat LT'),local('A Jannat LT Regular');font-style:normal;font-weight:400 900;font-display:swap}html[lang="ar"] body,html[lang="ar"] button,html[lang="ar"] input,html[lang="ar"] textarea,html[lang="ar"] select{font-family:'HAKIM Jannat','A Jannat LT','Jannat LT','Tajawal',sans-serif!important}html[lang="ar"] .hero h1{font-weight:700;letter-spacing:0}html[lang="ar"] .head h2,html[lang="ar"] .card h3,html[lang="ar"] .founder h3,html[lang="ar"] .contact h2,html[lang="ar"] .callout h3{font-weight:700}html[lang="ar"] .nav-parent,html[lang="ar"] .links a,html[lang="ar"] .btn,html[lang="ar"] .kicker,html[lang="ar"] .eyebrow{font-weight:700}`;
document.head.appendChild(jannatStyle);
document.getElementById('year')?.append(new Date().getFullYear());
const menu=document.querySelector('.menu'),links=document.querySelector('.links');
if(menu&&links){menu.addEventListener('click',()=>links.classList.toggle('open'));}
const ar=document.documentElement.lang==='ar';
if(links){
  const items=ar?[
    ['عن حاكم',[['عن حاكم','about.html'],['الرؤية والرسالة والقيم','about.html#vision'],['لماذا حاكم','about.html#why'],['القيادة المهنية','abdulkarim-alsahli.html'],['نموذج الفريق','team.html']]],
    ['الخبرات',[['الحوكمة والمجالس واللجان','governance-committees.html'],['المخاطر والالتزام','risk-compliance.html'],['القانون والتنظيم','legal-regulatory.html'],['التحقيقات والمحاسبة القضائية','investigations-forensic.html'],['حوكمة الذكاء الاصطناعي','ai-governance.html']]],
    ['المنهجيات',[['منهجية حاكم','methodology.html'],['الأعمال والمنهجيات المنشورة','cases.html'],['مختبر حاكم','lab.html']]],
    ['المعرفة',[['مركز المعرفة','blog.html'],['تقييم نضج اللجان','blog/committee-maturity-evidence.html'],['التعلم المهني','learning.html']]],
    ['التعاون',[['التعاون المهني','collaborate.html'],['الانضمام لشبكة الخبراء','collaborate.html#experts'],['الشراكات التقنية','collaborate.html#technical'],['تواصل معنا','index.html#contact']]]
  ]:[
    ['About',[['About HAKIM','about.html'],['Professional Lead','abdulkarim-alsahli.html'],['Team Model','team.html']]],
    ['Expertise',[['Governance, Boards & Committees','governance-committees.html'],['Risk & Compliance','risk-compliance.html'],['Legal & Regulatory','legal-regulatory.html'],['Investigations & Forensic','investigations-forensic.html'],['AI Governance','ai-governance.html']]],
    ['Methods',[['HAKIM Methodology','methodology.html'],['Published Methods','cases.html'],['HAKIM Lab','lab.html']]],
    ['Knowledge',[['Knowledge Center','blog.html'],['Professional Learning','learning.html']]],
    ['Collaborate',[['Professional Collaboration','collaborate.html'],['Expert Network','collaborate.html#experts'],['Technical Partners','collaborate.html#technical']]]
  ];
  links.innerHTML='';
  items.forEach(([label,subs])=>{const li=document.createElement('li');li.className='nav-group';const b=document.createElement('button');b.className='nav-parent';b.type='button';b.setAttribute('aria-expanded','false');b.innerHTML=`${label}<span class="chev">⌄</span>`;const ul=document.createElement('ul');ul.className='dropdown';subs.forEach(([t,h])=>{const x=document.createElement('li'),a=document.createElement('a');a.textContent=t;a.href=h;x.appendChild(a);ul.appendChild(x)});b.addEventListener('click',e=>{e.stopPropagation();document.querySelectorAll('.nav-group.open').forEach(g=>{if(g!==li)g.classList.remove('open')});li.classList.toggle('open');b.setAttribute('aria-expanded',li.classList.contains('open'))});li.append(b,ul);links.appendChild(li)});
  const lang=document.createElement('li'),a=document.createElement('a');a.className='nav-lang';a.href=ar?'index-en.html':'index.html';a.textContent=ar?'EN':'العربية';lang.appendChild(a);links.appendChild(lang);
  links.addEventListener('click',e=>{if(e.target.closest('.dropdown a')||e.target.closest('.nav-lang'))links.classList.remove('open')});
}
document.addEventListener('click',()=>document.querySelectorAll('.nav-group.open').forEach(g=>g.classList.remove('open')));