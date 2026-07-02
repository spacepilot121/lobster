export const UPGRADES = [
 {id:'biggerBucket',name:'Bigger Bucket',description:'+10 Fish per bucket click per level.',category:'Fish',costType:'fish',baseCost:50,costScaling:1.6,maxLevel:10,unlock:s=>true},
 {id:'cheapSardines',name:'Cheap Sardines',description:'Feed costs 10% less per level, minimum 3 Fish.',category:'Feed',costType:'fish',baseCost:40,costScaling:1.8,maxLevel:5,unlock:s=>true},
 {id:'firstFollower',name:'First Follower',description:'+1 follower and +1 Faith/sec per level. Can be bought with fish if faith is scarce.',category:'Cult',costType:'faith',fallbackType:'fish',baseCost:20,costScaling:2.1,maxLevel:5,unlock:s=>s.stats.feeds>0||s.resources.growth>=20},
 {id:'tankScrubber',name:'Tank Scrubber',description:'Hunger rises 10% slower per level.',category:'Tank',costType:'fish',baseCost:60,costScaling:1.7,maxLevel:5,unlock:s=>true},
 {id:'candleShrine',name:'Candle Shrine',description:'+20% Faith generation per level.',category:'Faith',costType:'faith',baseCost:30,costScaling:1.75,maxLevel:10,unlock:s=>s.cult.followers>0},
 {id:'braverFishermen',name:'Braver Fishermen',description:'+25% Fish generation per level.',category:'Fish',costType:'fish',baseCost:90,costScaling:1.8,maxLevel:10,unlock:s=>s.cult.followers>0},
 {id:'blessedLeftovers',name:'Blessed Leftovers',description:'+10% Growth from feeding per level.',category:'Feed',costType:'fish',baseCost:120,costScaling:1.8,maxLevel:10,unlock:s=>s.resources.growth>=25},
 {id:'nightFeeder',name:'Night Feeder',description:'+15% offline gains per level.',category:'Automation',costType:'faith',baseCost:65,costScaling:2,maxLevel:5,unlock:s=>s.resources.faith>=25||s.cult.followers>0},
 {id:'autoFeed',name:'Auto Feed',description:'Automatically feeds every few seconds if enough Fish. More levels are faster.',category:'Automation',costType:'faith',baseCost:25,costScaling:2.2,maxLevel:5,unlock:s=>s.resources.faith>=25||s.upgrades.autoFeed>0},
 {id:'autoBucket',name:'Auto Bucket',description:'Automatically collects bucket fish once per second.',category:'Automation',costType:'faith',baseCost:90,costScaling:2.3,maxLevel:5,unlock:s=>s.upgrades.autoFeed>0},
 {id:'cellarShrine',name:'Cellar Shrine',description:'+0.4 Offerings/sec and +10% Faith.',category:'Cult',costType:'offerings',baseCost:35,costScaling:1.9,maxLevel:8,unlock:s=>s.stage>=3},
 {id:'harbourShrine',name:'Harbour Shrine',description:'Required for Harbour Horror. Unlocks harbour production.',category:'Cult',costType:'offerings',baseCost:250,costScaling:2.2,maxLevel:1,unlock:s=>s.stage>=5||s.moultCount>=10},
 {id:'trawlerFleet',name:'Trawler Fleet',description:'+5 Fish/sec per level.',category:'Fish',costType:'fish',baseCost:500,costScaling:2,maxLevel:10,unlock:s=>s.upgrades.harbourShrine>0},
 {id:'deepGate',name:'Deep Gate',description:'Unlock Depth and +1 Depth/sec per level.',category:'Depth',costType:'faith',baseCost:800,costScaling:2,maxLevel:10,unlock:s=>s.stage>=6},
 {id:'abyssalTrawler',name:'Abyssal Trawler',description:'+35% Depth and Fish generation.',category:'Depth',costType:'depth',baseCost:1000,costScaling:2,maxLevel:8,unlock:s=>s.resources.depth>0},
 {id:'dreamNet',name:'Dream Net',description:'Unlock Madness and +0.8 Madness/sec per level, improved by moonlit and planetary rites.',category:'Madness',costType:'depth',baseCost:5000,costScaling:2.4,maxLevel:8,unlock:s=>s.stage>=7&&s.resources.depth>=1000},
 {id:'moonlitFeeding',name:'Moonlit Feeding Rite',description:'+60% Growth and final chain access.',category:'Ritual',costType:'madness',baseCost:1500,costScaling:2,maxLevel:5,unlock:s=>s.stage>=8},
 {id:'planetaryOffering',name:'Planetary Offering',description:'+100% all production and Madness generation per level.',category:'Madness',costType:'madness',baseCost:10000,costScaling:3,maxLevel:5,unlock:s=>s.stage>=9},
];
export const RELICS = [
 {id:'memoryShell',name:'Memory in the Shell',description:'Start each moult with +100 Fish per level.',cost:1,maxLevel:20},
 {id:'sacredChitin',name:'Sacred Chitin',description:'+15% all feed Growth per level.',cost:2,maxLevel:20},
 {id:'hardenedHunger',name:'Hardened Hunger',description:'Hunger rises 8% slower per level.',cost:2,maxLevel:15},
 {id:'relicGlass',name:'Relic Tank Glass',description:'Auto Feed interval reduced 5% per level.',cost:3,maxLevel:10},
 {id:'lobsterRemembers',name:'The Lobster Remembers',description:'Keep 5% Fish after moulting per level.',cost:3,maxLevel:10},
 {id:'firstCrack',name:'The First Crack',description:'+12% Shell gained per level.',cost:4,maxLevel:15},
 {id:'inheritedAppetite',name:'Inherited Appetite',description:'Feed cost scaling reduced.',cost:4,maxLevel:10},
 {id:'dreamsShell',name:'Dreams in the Shell',description:'+20% Faith gain per level.',cost:5,maxLevel:10},
 {id:'deepShell',name:'Deep Shell',description:'+25% Depth gain per level.',cost:6,maxLevel:10},
 {id:'holyCarapace',name:'Holy Carapace',description:'Madness penalties reduced 10% per level.',cost:7,maxLevel:10}
];
export function upgradeCost(u, level){ return Math.floor(u.baseCost * Math.pow(u.costScaling, level)); }
