class Jail {
    constructor(jailName) {
        this.jail = jailName;
        this.jailCellList = [];
        this.prisonersCount = 0;
        this.occupiedBedsCount = 0;
    }

    intro() {
        console.log(`Sveiki atvyke i kalejima "${this.jail}"!`);
    }
    changeName(newJailName) {
        this.jail = newJailName;
        console.log(`Kalejimas pakeite varda i "${this.jail}".`);
    }
    addCell(beds, cellQty) {
        this.jailCellList.push({ beds, cellQty, occuppied: false });
        console.log(`Kalejimas "${this.jail}" turi: ${cellQty}vnt  ${beds} -vieciu kameru.`);
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
        this.prisonersCount += prisonersQty;
        let bedsFree = 0;
        if (prisonersQty < this.bedsTotal) {
            bedsFree = this.bedsTotal - this.prisonersCount;

        }
        this.bedsFree = bedsFree;
        console.log(`Kalejimas "${this.jail}" turi ${this.bedsFree} vnt laisvu vietu.`);
    }
    cellOccupation() {
        //console.log(this.jailCellList);
    }
}


module.exports = Jail;