const Jail = require('./Jail');

const kalejimas = new Jail("Lukiskes");

kalejimas.intro();
// Sveiki atvyke i kalejima "Lukiskes"!

kalejimas.changeName("Uola");
// Kalejimas pakeite varda i "Uola". 
kalejimas.changeName("Zona");
// Kalejimas pakeite varda i "Zona".

kalejimas.addCell(1, 10);
// Kalejimas "" turi 10vnt 1 -vieciu kameru. 
kalejimas.addCell(3, 10);
// Kalejimas "" turi 10vnt 3 -vieciu kameru.
kalejimas.addCell(8, 20);
// Kalejimas "" turi 20vnt 8 -vieciu kameru.
//console.log(kalejimas);

kalejimas.capacity();
// Kalejimas "Zona" is viso turi 200 vietu.

kalejimas.addPrisoners(20);
// Kalejimas "Zona" turi 180 vnt laisvu vietu.
//kalejimas.addPrisoners(15);
// Kalejimas "Zona" turi 165 vnt laisvu vietu.

kalejimas.cellOccupation();
//