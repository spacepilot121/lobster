import {CONFIG} from './config.js';
import {UPGRADES, RELICS} from './upgrades.js';
export function createState(){
 const r={...CONFIG.start};
 const upgrades=Object.fromEntries(UPGRADES.map(u=>[u.id,0]));
 const relics=Object.fromEntries(RELICS.map(u=>[u.id,0]));
 return {version:CONFIG.version, resources:r, stage:1, moultCount:0, maxGrowthThisMoult:r.growth, overgrowth:false, tabs:['Feed','Upgrades','Settings'], activeTab:'Feed', upgrades, relics, cult:{followers:0, devotion:0, suspicion:0, roles:{Fishers:0,Acolytes:0,Scrubbers:0,Keepers:0,Choristers:0}}, rituals:{active:{},cooldowns:{}}, finalChain:{}, stats:{feeds:0,bucketClicks:0,totalShell:0,totalDepth:0,totalMadness:0,totalFish:128}, achievements:{}, settings:{animations:true,reducedMotion:false,sound:false,debug:false,autoFeed:true}, log:['Harold arrives in a chipped tank. He is cute. This is how it starts.'], lastSave:Date.now(), lastTick:Date.now(), endingSeen:false, worldShell:false};
}
export function mergeState(raw){ const s=createState(); if(!raw) return s; const out={...s,...raw}; out.resources={...s.resources,...raw.resources}; out.upgrades={...s.upgrades,...raw.upgrades}; out.relics={...s.relics,...raw.relics}; out.cult={...s.cult,...raw.cult,roles:{...s.cult.roles,...(raw.cult?.roles||{})}}; out.rituals={active:{...(raw.rituals?.active||{})},cooldowns:{...(raw.rituals?.cooldowns||{})}}; out.finalChain={...(raw.finalChain||{})}; out.stats={...s.stats,...raw.stats}; out.achievements={...s.achievements,...raw.achievements}; out.settings={...s.settings,...raw.settings}; out.tabs=Array.from(new Set(raw.tabs||s.tabs)); return out; }
export function getStage(s){ return CONFIG.stages.find(x=>x.id===s.stage)||CONFIG.stages[0]; }
