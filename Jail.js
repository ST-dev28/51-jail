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
    capacity() {
        let bedsTotal = 0;
        for (const { beds, cellQty } of this.jailCellList) {
            const bedsQty = beds * cellQty;
            bedsTotal += bedsQty
            //console.log(bedsTotal);
        }
        this.bedsTotal = bedsTotal;
        console.log(`Kalejimas "${this.jail}" is viso turi ${this.bedsTotal} vietu.`);
    }
    addPrisoners(prisonersQty) {

    }
}


module.exports = Jail;