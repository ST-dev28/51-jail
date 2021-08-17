const Jail = require('./Jail');

const kalejimas = new Jail("Lukiskes");

kalejimas.intro();
// Sveiki atvyke i kalejima "Lukiskes"!

kalejimas.changeName("Uola");
// Kalejimas pakeite varda i "Uola". 
kalejimas.changeName("Zona");
// Kalejimas pakeite varda i "Zona".

kalejimas.addCell(1, 10);
kalejimas.addCell(3, 10);
kalejimas.addCell(8, 20);
//console.log(kalejimas);

kalejimas.addPrisoners(15);