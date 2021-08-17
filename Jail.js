class Jail {
    constructor(jailName) {
        this.jail = jailName;
        this.jailCellList = [];
    }

    intro() {
        console.log(`Sveiki atvyke i kalejima "${this.jail}"!`);
    }
    changeName(newJailName) {
        this.jail = newJailName;
        console.log(`Kalejimas pakeite varda i "${this.jail}".`);
    }
    addCell(beds, cellQty) {
        this.jailCellList.push({ beds, cellQty });
        //console.log(this.jailCellList);
    }
    addPrisoners(prisonersQty) {
    }
}


module.exports = Jail;