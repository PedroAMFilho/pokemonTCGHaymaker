export interface CardModel {
    cards?: Array<{
        id: string;
        name: string;
        nationalPokedexNumber?: number;
        imageUrl: string;
        imageUrlHiRes: string;
        types?: Array<string>;
        supertype: string;
        subtype: string;
        evolvesFrom?: string;
        hp?: string;
        retreatCost?: Array<string>;
        convertedRetreatCost?: number;
        ability?: Ability;
        number: string;
        artist?: string;
        rarity: string;
        series: string;
        set: string;
        text?: Array<string>;
        setCode: string;
        attacks?: Array<Attack>;
        resistances?: Array<Resistance>;
        weaknesses?: Array<Weakness>;
    }>;

    card?: {id: string;
        name: string;
        nationalPokedexNumber?: number;
        imageUrl: string;
        imageUrlHiRes: string;
        types?: Array<string>;
        supertype: string;
        subtype: string;
        evolvesFrom?: string;
        hp?: string;
        retreatCost?: Array<string>;
        convertedRetreatCost?: number;
        ability?: Ability;
        number: string;
        artist?: string;
        rarity: string;
        series: string;
        set: string;
        text?: Array<string>;
        setCode: string;
        attacks?: Array<Attack>;
        resistances?: Array<Resistance>;
        weaknesses?: Array<Weakness>;
    }
}

interface Attack {
    cost: Array<string>;
    name: string;
    text: string;
    damage: string;
    convertedEnergyCost: number;
}

interface Resistance {
    type: string;
    value: string;
}

interface Weakness {
    type: string;
    value: string;
}

interface Ability {
    name: string;
    text: string;
    type: string;
}