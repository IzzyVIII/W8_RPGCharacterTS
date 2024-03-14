import { v4 as uuidv4 } from 'uuid';

//export?
export class Weapon {
    readonly id: string;
    name: string;
    description?: string;
    damagePoints: number;

    constructor(name: string, damagePoints: number, description?: string) {
        this.id = uuidv4();
        this.name = name;
        this.damagePoints = damagePoints;
        this.description = description;
    }
}


export interface Attack {
    attack(): void
}

export interface Defences {
    defend(): void
}

export interface GoldCollect {
    gold(): void
}

export class Club implements Attack {
         attack() {
        console.log("Club")
    }
}

export class Sword implements Attack {
    attack() {
        console.log("Sword")
    }
}

export class Bow implements Attack {
    attack() {
        console.log("Bow & Arrow")
    }
}

export class Shield implements Defences {
    defend() {
        console.log("Shield")
    }
}

export class Armor implements Defences {
    defend() {
        console.log("Armor")
    }
}

export class Tunic implements Defences {
    defend() {
        console.log("Tunic")
    }
}

export class Gold implements GoldCollect {
    gold() {
        console.log("Collected Gold")
    }
}

export abstract class Character implements Defences, Attack, GoldCollect {
    protected defendAbility$: Defences
    protected attackAbility$: Attack
    protected goldAbility$: GoldCollect

    constructor(protected character_name$: string, goldAbility$: GoldCollect, attackAbility$: Attack, defendAbility$: Defences) {
        this.goldAbility$ = goldAbility$
        this.attackAbility$ = attackAbility$
        this.defendAbility$ = defendAbility$

    }

    get krtr() { return this.character_name$ }

    set defendAbility(da: Defences) {
        this.defendAbility$ = da
    }

    set attackAbility(aa: Attack) {
        this.attackAbility = aa
    }

    set goldAbility(ga: GoldCollect) {
        this.goldAbility$ = ga
    }

    attack(): void {
        this.attackAbility$.attack()
    }

    defend(): void {
        this.defendAbility$.defend()
    }

    gold(): void {
        this.goldAbility$.gold()
    }
}

export class Orges extends Character {

    constructor(character_name$: string, goldAbility$: GoldCollect, attackAbility$: Attack, defendAbility$: Defences) {
        super(character_name$, goldAbility$, attackAbility$, defendAbility$)
    }

}

export class Peons extends Character {

    constructor(character_name$: string, goldAbility$: GoldCollect, attackAbility$: Attack, defendAbility$: Defences) {
        super(character_name$, goldAbility$, attackAbility$, defendAbility$)
    }
}

export class Knights extends Character {
    constructor(character_name$: string, goldAbility$: GoldCollect, attackAbility$: Attack, defendAbility$: Defences) {
        super(character_name$, goldAbility$, attackAbility$, defendAbility$)
    }
}


export class Archers extends Character {
    constructor(character_name$: string, goldAbility$: GoldCollect, attackAbility$: Attack, defendAbility$: Defences) {
        super(character_name$, goldAbility$, attackAbility$, defendAbility$)
    }
    // constructor(){
    //     super("" , new Gold(), new Bow(), new Tunic())
    // }
}

export type Category = 'sword' | 'club' | 'bow'


export interface Managing<T> {
    addTask(arg: T):void
    removeTask(arg: T):void
}


export interface ManagingWeapon<T> {
    addWeapon(arg: T):void
    removeWeapon(arg: T):void
}
// let allCharacters: Character[] = [
//     new Orges("Orge", new Gold(), new Bow(), new Tunic()),
//     new Peons("Peon", new Gold(), new Club(), new Armor()),
//     new Knights("Knight", new Gold(), new Sword(), new Shield()),
//     new Archers("Archer", new Gold(), new Bow(), new Tunic())
// ]

// for (let character of allCharacters) {
//     console.log(character.krtr)
//     character.attack()
//     character.defend()
//     character.gold()
// }