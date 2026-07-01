const CACHE='thousand-year-tank-v1';
const ASSETS=['./','./index.html','./styles.css','./manifest.json','./src/main.js','./src/config.js','./src/state.js','./src/upgrades.js','./src/rituals.js','./src/achievements.js','./src/save.js','./src/render.js','./src/visuals.js','./src/utils.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{if(e.request.method==='GET')e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return res;})));});
