function scuberGreetingForFeet(someNumber){
if (someNumber < 400) {
  return 'This one is on me!'
} else if(someNumber < 2000) {
  return 'That will be twenty bucks.'
} else if(someNumber < 2500) {
  return 'I will gladly take your thirty bucks.'
} else {
  return 'No can do.'
}
}

function ternaryCheckCity(someCity){
if (someCity === 'NYC') {
  return 'Ok, sounds good.'
} else {
  return 'No go.'
}
}

function switchOnCharmFromTip(someAmount){
if (someAmount === 'generous') {
  return 'Thank you so much.'
} else if (someAmount === 'not as generous'){
  return 'Thank you.'
} else {
  return 'Bye.'
}
}