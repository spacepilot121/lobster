export function drawTank(canvas, state, t){
 const ctx=canvas.getContext('2d'), w=canvas.width, h=canvas.height, st=state.stage; ctx.imageSmoothingEnabled=false; ctx.clearRect(0,0,w,h);
 const palettes={cellar:['#071926','#123347','#1f6f78'],shrine:['#120d22','#35204f','#1f6f78'],crypt:['#061d22','#263449','#2c8b8f'],harbour:['#081927','#174463','#257d86'],temple:['#031d25','#0d4a55','#226f6a'],abyss:['#020611','#10163d','#172060'],cosmic:['#080512','#271145','#561f5f']};
 const env=['cellar','cellar','shrine','shrine','crypt','harbour','temple','abyss','cosmic','cosmic'][st-1]; const p=palettes[env];
 ctx.fillStyle=p[0]; ctx.fillRect(0,0,w,h); for(let i=0;i<24;i++){ctx.fillStyle=i%3?'#ffffff18':'#f7d36a33'; ctx.fillRect((i*47+t*10)%(w+20)-10,(i*31)%130,3,3)}
 ctx.fillStyle=p[1]; ctx.fillRect(20,40,w-40,h-70); ctx.fillStyle=p[2]; ctx.fillRect(34,62,w-68,h-110); ctx.strokeStyle='#9be0d8'; ctx.lineWidth=6; ctx.strokeRect(30,55,w-60,h-100);
 for(let i=0;i<8;i++){ctx.fillStyle='#c9fff455'; const y=(h-55-((t*28+i*41)%(h-100))); ctx.fillRect(70+i*45,y,6,6);}
 if(st>=4){ctx.fillStyle='#f1b84b'; for(let x of [48,w-62]){ctx.fillRect(x,205,12,28);ctx.fillRect(x-5,198,22,8)}}
 if(st>=6){ctx.fillStyle='#9e6a3e'; ctx.fillRect(5,238,w-10,18); ctx.fillStyle='#ddd'; ctx.fillRect(65,222,42,16)}
 if(st>=9){ctx.fillStyle='#ddd6ff'; ctx.beginPath(); ctx.arc(w-72,58,28,0,7); ctx.fill(); ctx.fillStyle=p[0]; ctx.fillRect(w-91,45,18,14)}
 drawLobster(ctx,w/2,h/2+35+Math.sin(t*3)*5,st,t,state.settings.reducedMotion);
}
function pix(ctx,x,y,s,c){ctx.fillStyle=c;ctx.fillRect(Math.round(x),Math.round(y),s,s)}
function drawLobster(ctx,cx,cy,st,t,still){ const scale=2.2+st*.23, s=8*scale, bob=still?0:Math.sin(t*4)*2; cx+=bob; const body='#b94a3f', hi='#f07d61', dark='#5b1f2c', gold='#f1b84b', purple='#8f5bc2';
 for(let i=-2;i<=2;i++) pix(ctx,cx+i*s*.45,cy,s,body); pix(ctx,cx,cy-s*.55,s,hi); pix(ctx,cx-s*.55,cy-s*.9,s,dark); pix(ctx,cx+s*.55,cy-s*.9,s,dark);
 for(let i=0;i<4+Math.min(st,5);i++){pix(ctx,cx-(i+1)*s*.38,cy+s*.45+i*1.5,s*.7,body); pix(ctx,cx+(i+1)*s*.38,cy+s*.45+i*1.5,s*.7,body)}
 const claw=st>5?1.45:1; pix(ctx,cx-2.2*s,cy-s*.2,s*claw,dark); pix(ctx,cx+1.4*s,cy-s*.2,s*claw,dark); pix(ctx,cx-2.55*s,cy-s*.55,s*.75,hi); pix(ctx,cx+2.05*s,cy-s*.55,s*.75,hi);
 ctx.strokeStyle=hi; ctx.lineWidth=4; ctx.beginPath(); ctx.moveTo(cx-s*.3,cy-s*.8); ctx.lineTo(cx-s*(1.4+Math.sin(t)*.2),cy-2.2*s); ctx.moveTo(cx+s*.3,cy-s*.8); ctx.lineTo(cx+s*(1.4+Math.cos(t)*.2),cy-2.2*s); ctx.stroke();
 if(st>=2){pix(ctx,cx,cy-1.7*s,s*.45,gold)} if(st>=4){pix(ctx,cx-s,cy+s*.2,s*.35,purple);pix(ctx,cx+s,cy+s*.2,s*.35,purple)} if(st>=8){ctx.strokeStyle='#d9ccff';ctx.strokeRect(cx-3*s,cy-2*s,6*s,4*s)}
}
