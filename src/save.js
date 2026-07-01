import {mergeState} from './state.js';
const KEY='thousand-year-tank-save';
export function saveGame(state){ state.lastSave=Date.now(); localStorage.setItem(KEY, JSON.stringify(state)); }
export function loadGame(){ try{return mergeState(JSON.parse(localStorage.getItem(KEY)||'null'));}catch{return mergeState(null);} }
export function exportSave(state){ return btoa(unescape(encodeURIComponent(JSON.stringify(state)))); }
export function importSave(text){ return mergeState(JSON.parse(decodeURIComponent(escape(atob(text.trim()))))); }
export function resetSave(){ localStorage.removeItem(KEY); }
