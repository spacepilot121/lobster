export const CONFIG = {
  version: 1,
  start: { fish:128, offerings:17, faith:6, shell:0, depth:0, madness:0, growth:4, hunger:40, moultCount:0, stage:1 },
  base: { feedCost:10, feedGrowth:2, feedHunger:8, bucketGain:10, hungerPerSecond:.5, autosaveSeconds:5, offlineCapSeconds:28800 },
  tabs: ['Feed','Upgrades','Cult','Rituals','Moult','Relics','Evolution','Achievements','Settings'],
  stages: [
    {id:1,name:'Baby',tone:'cosy, silly, innocent',env:'cellar',req:'Start',scale:1, unlocks:['Feed','Upgrades'], flavour:['Harold seems hungry.','A local fisherman has begun asking questions.','The tank glass makes a sound at night.','The lobster watches the room.','The candle has gone out. It is still smoking.','The bucket is empty again.']},
    {id:2,name:'Tiny Cultling',tone:'odd but funny',env:'cellar',req:'Moult once',scale:1.2, unlocks:['Cult','Moult'], flavour:['The first follower insists Harold blinked in Morse code.','Someone has left flowers beside the tank.','The sign now says DO NOT TAP THE GLASS in three handwritings.','The lobster has been given a title. It does not object.']},
    {id:3,name:'Tank Juvenile',tone:'suspicious',env:'shrine',req:'3 moults and 3 total Shell',scale:1.45, unlocks:['Relics','Evolution'], flavour:['The tank is no longer level.','The landlord has asked about the chanting.','Harold’s left claw has its own followers.','The glass bows outward when no one is looking.']},
    {id:4,name:'Hungry Acolyte',tone:'cult comedy',env:'shrine',req:'5 moults and 5 followers',scale:1.75, unlocks:['Rituals'], flavour:['Robes are now mandatory near the tank.','The fishmonger gives you a discount and refuses eye contact.','The lobster accepts offerings with worrying confidence.','A hymn has been written. It is mostly clicking.']},
    {id:5,name:'Sacred Claw',tone:'religious absurdity',env:'crypt',req:'8 moults and strong Faith income',scale:2.05, unlocks:[], flavour:['No one says Harold anymore.','The Sacred Claw has chosen the dampest corner.','The shell fragments hum when stacked.','The cult has formed a committee for miracles.']},
    {id:6,name:'Harbour Horror',tone:'local myth',env:'harbour',req:'12 moults and Harbour Shrine',scale:2.4, unlocks:[], flavour:['The harbour tide now comes in early.','Boats drift toward the tank house.','Fishermen leave offerings and pretend they do not.','The fog smells faintly of butter.']},
    {id:7,name:'Temple Beast',tone:'ancient and eerie',env:'temple',req:'16 moults and 1,000 Depth',scale:2.8, unlocks:[], flavour:['The lower temple was not built by your followers.','The stairs continue below sea level.','The water pressure chants back.','Something ancient recognises the shell.']},
    {id:8,name:'Abyss King',tone:'cosmic horror',env:'abyss',req:'22 moults, 5,000 Depth and Madness',scale:3.25, unlocks:[], flavour:['The abyss has a king and he is hungry.','Your followers dream in bubbles.','Eyes open in the dark water.','The lobster is now too large for maps.']},
    {id:9,name:'Moon Devourer',tone:'apocalyptic',env:'cosmic',req:'30 moults and 10,000 Madness',scale:3.7, unlocks:[], flavour:['The moon has bite marks.','The tides apologise.','Every telescope points toward the tank.','The moonlight smells of brine.']},
    {id:10,name:'World Eater God',tone:'absurd cosmic apocalypse',env:'cosmic',req:'40 moults and the final ritual chain',scale:4.4, unlocks:[], flavour:['The world is a bowl.','The final shell contains the sky.','There are no oceans now, only appetite.','The lobster regards the planet as garnish.']}
  ],
  roles: ['Fishers','Acolytes','Scrubbers','Keepers','Choristers'],
};
export const FLAVOUR_RETURN = 'While you were away, the cellar remained damp.';
