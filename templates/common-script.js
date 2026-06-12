
let templates = [], index = 0;

async function loadTemplates() {
    const res = await fetch('templates.json');
    templates = await res.json();
    const bar = document.getElementById('templateBar');
    if (!bar) return;
    
    bar.innerHTML = '';
    templates.forEach((t, i) => {
        const item = document.createElement('div');
        item.className = 't-item';
        item.style.setProperty('--accent', t.color);
        item.style.setProperty('--accent-light', t.color + '33');
        
        // 썸네일 경로: t.file이 /templates/cat/templateN/index.html 형식이므로 
        // 같은 폴더의 preview1.png를 찾도록 함 (없으면 onerror 처리)
        const thumbSrc = t.file.replace('index.html', 'preview1.png');
        
        item.innerHTML = `
            <img class="thumb" src="${thumbSrc}" alt="${t.title}" onerror="this.style.opacity=0;">
            <div class="color-dot" style="background:${t.color}"></div>
            <div class="t-label">${t.title}</div>`;
        item.onclick = () => showTemplate(i);
        bar.appendChild(item);
    });
    showTemplate(0);
}

function setActive(i) {
    document.querySelectorAll('.t-item').forEach((el, idx) =>
        el.classList.toggle('active', idx === i));
}

function showTemplate(i) {
    index = i;
    const viewer = document.getElementById('viewer');
    if (viewer) viewer.src = templates[i].file;
    document.title = templates[i].title + ' | High Templater';
    setActive(i);
}

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

if (prevBtn) prevBtn.onclick = () => {
    index = (index - 1 + templates.length) % templates.length;
    showTemplate(index);
};
if (nextBtn) nextBtn.onclick = () => {
    index = (index + 1) % templates.length;
    showTemplate(index);
};

async function copyCode(type) {
    try {
        const baseUrl = templates[index].file.substring(0, templates[index].file.lastIndexOf('/') + 1);
        let targetFile = '';
        
        if (type === 'html') targetFile = templates[index].file;
        else if (type === 'css') targetFile = baseUrl + 'style.css';
        else if (type === 'js') targetFile = baseUrl + 'script.js';

        const res = await fetch(targetFile);
        if (!res.ok) throw new Error('File not found');
        
        const txt = await res.text();
        await navigator.clipboard.writeText(txt);
        
        showToast(`${type.toUpperCase()} 코드 복사완료`);
    } catch (err) {
        console.error(err);
        showToast('파일을 찾을 수 없습니다.', true);
    }
}

function showToast(text, isError = false) {
    const msg = document.createElement('div');
    msg.textContent = text;
    msg.style.position = 'fixed';
    msg.style.bottom = '40px';
    msg.style.left = '50%';
    msg.style.transform = 'translateX(-50%)';
    msg.style.padding = '10px 16px';
    msg.style.background = isError ? 'rgba(220,38,38,0.9)' : 'rgba(0,0,0,0.8)';
    msg.style.color = '#fff';
    msg.style.borderRadius = '8px';
    msg.style.fontSize = '0.9rem';
    msg.style.zIndex = '1000';
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 1500);
}

document.addEventListener('DOMContentLoaded', loadTemplates);
