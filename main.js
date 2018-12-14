function genMessage() {
  var randNum = Math.floor(Math.random() * 8) + 1;
  document.getElementById("shitty").innerHTML = translations[randNum];
}

//quote array
var translations = [
  "Blank",
  "Sei keine beschissene Person.",
  "Vær ikke en shitty person.",
  'No seas una persona de mierda.',
  'Ne sois pas une personne de merde.',
  'Kaua e waiho he tangata whakahihi.',
  "Ikke vær en skitne person.",
  'おっぱい人にならないでください。',
  "Don't be a shitty person."
];
