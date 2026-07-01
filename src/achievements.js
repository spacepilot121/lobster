export const ACHIEVEMENTS = [
 {id:'firstFeed',name:'First Feed',description:'Feed Harold once.',test:s=>s.stats.feeds>=1},
 {id:'bucketTheology',name:'Bucket Theology',description:'Collect Fish 10 times.',test:s=>s.stats.bucketClicks>=10},
 {id:'doNotTap',name:'Do Not Tap The Glass',description:'Reach Hunger below 10.',test:s=>s.resources.hunger<10},
 {id:'firstFollowerAch',name:'First Follower',description:'Recruit your first follower.',test:s=>s.cult.followers>=1},
 {id:'firstCrackAch',name:'The First Crack',description:'Moult for the first time.',test:s=>s.moultCount>=1},
 {id:'shellCollector',name:'Shell Collector',description:'Earn 10 total Shell.',test:s=>s.stats.totalShell>=10},
 {id:'tankTooSmall',name:'The Tank Is Too Small',description:'Reach Stage 3.',test:s=>s.stage>=3},
 {id:'localLegend',name:'Local Legend',description:'Reach Stage 6.',test:s=>s.stage>=6},
 {id:'deepNotices',name:'The Deep Notices',description:'Unlock Depth.',test:s=>s.resources.depth>0||s.stage>=7},
 {id:'moonNervous',name:'The Moon Looks Nervous',description:'Reach Stage 9.',test:s=>s.stage>=9},
 {id:'worldEater',name:'World Eater',description:'Reach Stage 10.',test:s=>s.stage>=10},
];
