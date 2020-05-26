// create and trigger custom events in node.js

const events = require('events');
const event = new events.EventEmitter();

event.on('click',()=>console.log("Panakj_Tomar"))   // event triggered
event.emit("click")                           // event created

event.on('xyzclick',(a,b)=>console.log(`${a}+${b} =`,a+b))     // event triggered
event.emit("xyzclick",3,4)                             // event created


// -----------Event trigger inside in event----------------------------

const firstEvent = function(a,b) {
    console.log(`First event triggered ${a}+${b} =`,a+b)
    event.on("SecondEvent",SecondEvent)  // Second event triggered inside first
}
const SecondEvent = function(a,b) {
    console.log(`SecondEvent event triggered ${a}+${b} =`,a+b)
    event.on("ThirdEvent",ThirdEvent)       // third event triggered inside second
}
const ThirdEvent = function(a,b) {
    console.log(`ThirdEvent event triggered ${a}+${b} =`,a+b)   
}

event.on("firstEvent",firstEvent)       // first event triggered

event.emit("firstEvent",5,3)      // first event created
event.emit("SecondEvent",4,4)       // second event created
event.emit("ThirdEvent",6,2)        // third event created


