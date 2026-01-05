// native event vs synthetic event 
// native event : the event provided by the browser it self 
// when we play with addEventListener it is native event 
// this direclty play with the dom element 
// the behavior of the event can be change browser to browser 

// to solve this problem libararys what they do they basically wrapped the native event into 
// a wrapper so that it will behave same across all the browsers 


//synthetic event : this event is provided by the react or some other library 
// both have syntax differn 
// native = onclick 
// synthetic = onClick

// if we want to see the orignal event then we can see it by event.nativeEvent
