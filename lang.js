// High Templater - simple client-side i18n (G4: ko, en, es, ja)
const HT_LANGS = ['ko','en','es','ja'];
let HT_CURRENT = localStorage.getItem('ht_lang') || 'ko'; // 기본 한국어

function langPath(lang){
  // 상위 폴더로 이동하여 lang 폴더를 찾도록 수정 (하위 폴더 깊이에 상관없이 작동하도록 절대경로 활용 권장)
  // 여기서는 단순함을 위해 루트 상대 경로 사용
  return `/lang/${lang}.json`;
}

async function loadLang(lang){
  try{
    const path = langPath(lang);
    const res = await fetch(path);
    if(!res.ok) throw new Error(`lang load failed: ${lang} at ${path}`);
    const dict = await res.json();

    // 본문 텍스트 번역
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const k = el.getAttribute('data-i18n');
      if (dict[k]) el.textContent = dict[k];
    });

    // 속성 번역 (data-i18n-attr="title:meta_title,aria-label:lang_switch"...)
    document.querySelectorAll('[data-i18n-attr]').forEach(el=>{
      const map = el.getAttribute('data-i18n-attr')
                    .split(',')
                    .map(s=>s.trim())
                    .filter(Boolean);
      map.forEach(pair=>{
        const [attr,key] = pair.split(':').map(s=>s.trim());
        if(attr && key && dict[key]) el.setAttribute(attr, dict[key]);
      });
    });

    // 문서 타이틀
    if (dict.meta_title) document.title = dict.meta_title;

    // 카테고리 라벨이 JS로 생성되는 경우를 위해 재렌더 트리거
    if (typeof renderGrid === 'function') renderGrid(dict);

    HT_CURRENT = lang;
    localStorage.setItem('ht_lang', lang);
  }catch(e){
    console.error(e);
  }
}

function setLang(lang){
  if(!HT_LANGS.includes(lang)) return;
  loadLang(lang);
}

// 초기 적용
document.addEventListener('DOMContentLoaded', ()=> loadLang(HT_CURRENT));
