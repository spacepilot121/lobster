export const fmt = n => { n=Number(n)||0; if(n<10000) return Math.floor(n).toLocaleString(); const u=['K','M','B','T','Qa','Qi']; let i=-1; do{n/=1000;i++;}while(n>=1000&&i<u.length-1); return n.toFixed(n<10?1:0)+u[i]; };
export const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export const pick=a=>a[Math.floor(Math.random()*a.length)];
export const pct=n=>`${Math.round(n*100)}%`;
