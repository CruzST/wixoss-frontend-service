enum AbilityType {
    CARD_EFFECT = "Card Effect",
    LIFE_BURST = "Life Burst"
}

export class Ability {
    abilityType: AbilityType;
    abilityText: string[];
}