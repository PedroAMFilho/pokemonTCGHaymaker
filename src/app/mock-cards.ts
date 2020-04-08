import { Cards } from './card';

export const Cardmock: Cards[] =  [{
  "cards": [
      {
          "id": "dp6-90",
          "name": "Cubone",
          "nationalPokedexNumber": 104,
          "imageUrl": "https://images.pokemontcg.io/dp6/90.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/dp6/90_hires.png",
          "types": [
              "Fighting"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "60",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "90",
          "artist": "Kagemaru Himeno",
          "rarity": "Common",
          "series": "Diamond & Pearl",
          "set": "Legends Awakened",
          "setCode": "dp6",
          "attacks": [
              {
                  "cost": [
                      "Colorless"
                  ],
                  "name": "Headbutt",
                  "text": "",
                  "damage": "10",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Fighting",
                      "Colorless"
                  ],
                  "name": "Bonemerang",
                  "text": "Flip 2 coins. This attack does 20 damage times the number of heads.",
                  "damage": "20×",
                  "convertedEnergyCost": 2
              }
          ],
          "resistances": [
              {
                  "type": "Lightning",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Water",
                  "value": "+10"
              }
          ]
      },
      {
          "id": "ex14-85",
          "name": "Windstorm",
          "imageUrl": "https://images.pokemontcg.io/ex14/85.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/ex14/85_hires.png",
          "supertype": "Trainer",
          "subtype": "Item",
          "hp": "None",
          "number": "85",
          "artist": "Ryo Ueda",
          "rarity": "Uncommon",
          "series": "EX",
          "set": "Crystal Guardians",
          "setCode": "ex14",
          "text": [
              "Choose up to 2 in any combination of Pokémon Tool cards and Stadium cards in play (both yours and your opponent's) and discard them."
          ]
      },
      {
          "id": "pop9-17",
          "name": "Turtwig",
          "nationalPokedexNumber": 387,
          "imageUrl": "https://images.pokemontcg.io/pop9/17.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/pop9/17_hires.png",
          "types": [
              "Grass"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "60",
          "retreatCost": [
              "Colorless",
              "Colorless"
          ],
          "convertedRetreatCost": 2,
          "number": "17",
          "artist": "Midori Harada",
          "rarity": "Common",
          "series": "POP",
          "set": "POP Series 9",
          "setCode": "pop9",
          "attacks": [
              {
                  "cost": [
                      "Grass"
                  ],
                  "name": "Absorb",
                  "text": "Remove 1 damage counter from Turtwig.",
                  "damage": "10",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Grass",
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Parboil",
                  "text": "If you have Chimchar in play, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Burned.",
                  "damage": "40+",
                  "convertedEnergyCost": 3
              }
          ],
          "resistances": [
              {
                  "type": "Water",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Fire",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "ex8-100",
          "name": "Hariyama ex",
          "nationalPokedexNumber": 297,
          "imageUrl": "https://images.pokemontcg.io/ex8/100.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/ex8/100_hires.png",
          "types": [
              "Fighting"
          ],
          "supertype": "Pokémon",
          "subtype": "EX",
          "evolvesFrom": "Makuhita",
          "ability": {
              "name": "Commanding Aura",
              "text": "As long as Hariyama ex is your Active Pokémon, your opponent can't play any Stadium cards from his or her hand.",
              "type": "Poké-Body"
          },
          "hp": "110",
          "retreatCost": [
              "Colorless",
              "Colorless"
          ],
          "convertedRetreatCost": 2,
          "number": "100",
          "artist": "Ryo Ueda",
          "rarity": "Rare Holo EX",
          "series": "EX",
          "set": "Deoxys",
          "setCode": "ex8",
          "text": [
              "When Pokémon-ex has been Knocked Out, your opponent takes 2 Prize cards."
          ],
          "attacks": [
              {
                  "cost": [
                      "Fighting",
                      "Colorless"
                  ],
                  "name": "Knock Off",
                  "text": "Choose 1 card from your opponent's hand without looking and discard it.",
                  "damage": "40",
                  "convertedEnergyCost": 2
              },
              {
                  "cost": [
                      "Fighting",
                      "Fighting",
                      "Colorless"
                  ],
                  "name": "Pivot Throw",
                  "text": "During your opponent's next turn, any damage done to Hariyama ex by attacks is increased by 10 (before applying Weakness and Resistance).",
                  "damage": "80",
                  "convertedEnergyCost": 3
              }
          ],
          "weaknesses": [
              {
                  "type": "Psychic",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "xy7-4",
          "name": "Bellossom",
          "nationalPokedexNumber": 182,
          "imageUrl": "https://images.pokemontcg.io/xy7/4.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xy7/4_hires.png",
          "types": [
              "Grass"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 2",
          "evolvesFrom": "Gloom",
          "hp": "120",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "4",
          "artist": "Mizue",
          "rarity": "Uncommon",
          "series": "XY",
          "set": "Ancient Origins",
          "setCode": "xy7",
          "attacks": [
              {
                  "cost": [
                      "Grass"
                  ],
                  "name": "Windmill",
                  "text": "Switch this Pokémon with 1 of your Benched Pokémon.",
                  "damage": "20",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Grass",
                      "Colorless"
                  ],
                  "name": "Flower Tornado",
                  "text": "Move as many Grass Energy attached to your Pokémon to your other Pokémon in any way you like.",
                  "damage": "60",
                  "convertedEnergyCost": 2
              }
          ],
          "weaknesses": [
              {
                  "type": "Fire",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "xyp-XY05",
          "name": "Xerneas",
          "nationalPokedexNumber": 716,
          "imageUrl": "https://images.pokemontcg.io/xyp/XY05.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xyp/XY05_hires.png",
          "types": [
              "Fairy"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "130",
          "retreatCost": [
              "Colorless",
              "Colorless"
          ],
          "convertedRetreatCost": 2,
          "number": "XY05",
          "artist": "5ban Graphics",
          "rarity": "Rare",
          "series": "XY",
          "set": "XY Black Star Promos",
          "setCode": "xyp",
          "attacks": [
              {
                  "cost": [
                      "Fairy"
                  ],
                  "name": "Geomancy",
                  "text": "Choose 2 of your Benched Pokémon. For each of those Pokémon, search your deck for a Fairy Energy card and attach it to that Pokémon. Shuffle your deck afterward.",
                  "damage": "",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Fairy",
                      "Fairy",
                      "Colorless"
                  ],
                  "name": "Rainbow Spear",
                  "text": "Discard an Energy attached to this Pokémon.",
                  "damage": "100",
                  "convertedEnergyCost": 3
              }
          ],
          "resistances": [
              {
                  "type": "Darkness",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Metal",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "ex16-1",
          "name": "Aggron",
          "nationalPokedexNumber": 306,
          "imageUrl": "https://images.pokemontcg.io/ex16/1.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/ex16/1_hires.png",
          "types": [
              "Metal"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 2",
          "evolvesFrom": "Lairon",
          "ability": {
              "name": "Terraforming",
              "text": "Once during your turn (before your attack), you may look at the top 5 cards from your deck and put them back on top of your deck in any order. This power can't be used if Aggron is affected by a Special Condition.",
              "type": "Poké-Power"
          },
          "hp": "110",
          "retreatCost": [
              "Colorless",
              "Colorless",
              "Colorless",
              "Colorless"
          ],
          "convertedRetreatCost": 4,
          "number": "1",
          "artist": "Ken Sugimori",
          "rarity": "Rare Holo",
          "series": "EX",
          "set": "Power Keepers",
          "setCode": "ex16",
          "attacks": [
              {
                  "cost": [
                      "Colorless",
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Metal Claw",
                  "text": "",
                  "damage": "50",
                  "convertedEnergyCost": 3
              },
              {
                  "cost": [
                      "Metal",
                      "Metal",
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Mix-Up",
                  "text": "Your opponent discards the top card of his or her deck.",
                  "damage": "70",
                  "convertedEnergyCost": 4
              }
          ],
          "resistances": [
              {
                  "type": "Grass",
                  "value": "-30"
              }
          ],
          "weaknesses": [
              {
                  "type": "Fire",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "xy11-41",
          "name": "Joltik",
          "nationalPokedexNumber": 595,
          "imageUrl": "https://images.pokemontcg.io/xy11/41.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xy11/41_hires.png",
          "types": [
              "Lightning"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "30",
          "number": "41",
          "artist": "Ayaka Yoshida",
          "rarity": "Common",
          "series": "XY",
          "set": "Steam Siege",
          "setCode": "xy11",
          "attacks": [
              {
                  "cost": [
                      "Lightning"
                  ],
                  "name": "Attach",
                  "text": "",
                  "damage": "10",
                  "convertedEnergyCost": 1
              }
          ],
          "resistances": [
              {
                  "type": "Metal",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Fighting",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "dp6-107",
          "name": "Misdreavus",
          "nationalPokedexNumber": 200,
          "imageUrl": "https://images.pokemontcg.io/dp6/107.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/dp6/107_hires.png",
          "types": [
              "Psychic"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "60",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "107",
          "artist": "Sumiyoshi Kizuki",
          "rarity": "Common",
          "series": "Diamond & Pearl",
          "set": "Legends Awakened",
          "setCode": "dp6",
          "attacks": [
              {
                  "cost": [
                      "Free"
                  ],
                  "name": "Show Off",
                  "text": "Search your deck for a basic Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
                  "damage": "",
                  "convertedEnergyCost": 0
              },
              {
                  "cost": [
                      "Psychic"
                  ],
                  "name": "Payback",
                  "text": "If your opponent has only 1 Prize card left, this attack does 10 damage plus 20 more damage.",
                  "damage": "10+",
                  "convertedEnergyCost": 1
              }
          ],
          "resistances": [
              {
                  "type": "Colorless",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Darkness",
                  "value": "+10"
              }
          ]
      },
      {
          "id": "xy0-14",
          "name": "Greninja",
          "nationalPokedexNumber": 658,
          "imageUrl": "https://images.pokemontcg.io/xy0/14.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xy0/14_hires.png",
          "types": [
              "Water"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 2",
          "evolvesFrom": "Frogadier",
          "hp": "140",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "14",
          "artist": "5ban Graphics",
          "rarity": "",
          "series": "XY",
          "set": "Kalos Starter Set",
          "setCode": "xy0",
          "attacks": [
              {
                  "cost": [
                      "Water"
                  ],
                  "name": "Mat Block",
                  "text": "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
                  "damage": "40",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Water",
                      "Water",
                      "Colorless"
                  ],
                  "name": "Aqua Edge",
                  "text": "",
                  "damage": "80",
                  "convertedEnergyCost": 3
              }
          ],
          "weaknesses": [
              {
                  "type": "Grass",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "xy0-15",
          "name": "Clauncher",
          "nationalPokedexNumber": 692,
          "imageUrl": "https://images.pokemontcg.io/xy0/15.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xy0/15_hires.png",
          "types": [
              "Water"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "70",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "15",
          "artist": "5ban Graphics",
          "rarity": "",
          "series": "XY",
          "set": "Kalos Starter Set",
          "setCode": "xy0",
          "attacks": [
              {
                  "cost": [
                      "Water",
                      "Colorless"
                  ],
                  "name": "Water Gun",
                  "text": "",
                  "damage": "20",
                  "convertedEnergyCost": 2
              }
          ],
          "weaknesses": [
              {
                  "type": "Grass",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "ex16-16",
          "name": "Magneton",
          "nationalPokedexNumber": 82,
          "imageUrl": "https://images.pokemontcg.io/ex16/16.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/ex16/16_hires.png",
          "types": [
              "Lightning"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 1",
          "evolvesFrom": "Magnemite",
          "ability": {
              "name": "Magnetic Field",
              "text": "Once during your turn (before your attack), if you have basic Energy cards in your discard pile, you may discard any 1 card from your hand. Then search for up to 2 basic Energy cards from your discard pile, show them to your opponent, and put them into your hand. You can't return the card you first discarded to your hand in this way. This power can't be used if Magneton is affected by a Special Condition.",
              "type": "Poké-Power"
          },
          "hp": "70",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "16",
          "artist": "Masakazu Fukuda",
          "rarity": "Rare",
          "series": "EX",
          "set": "Power Keepers",
          "setCode": "ex16",
          "attacks": [
              {
                  "cost": [
                      "Lightning",
                      "Colorless"
                  ],
                  "name": "Magnetic Force",
                  "text": "Does 10 damage times the amount of Energy attached to all of your Pokémon (including Magneton).",
                  "damage": "10×",
                  "convertedEnergyCost": 2
              }
          ],
          "resistances": [
              {
                  "type": "Metal",
                  "value": "-30"
              }
          ],
          "weaknesses": [
              {
                  "type": "Fighting",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "xy0-18",
          "name": "Inkay",
          "nationalPokedexNumber": 686,
          "imageUrl": "https://images.pokemontcg.io/xy0/18.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xy0/18_hires.png",
          "types": [
              "Darkness"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "60",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "18",
          "artist": "5ban Graphics",
          "rarity": "",
          "series": "XY",
          "set": "Kalos Starter Set",
          "setCode": "xy0",
          "attacks": [
              {
                  "cost": [
                      "Darkness"
                  ],
                  "name": "Peck",
                  "text": "",
                  "damage": "10",
                  "convertedEnergyCost": 1
              }
          ],
          "resistances": [
              {
                  "type": "Psychic",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Fighting",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "xy0-17",
          "name": "Mightyena",
          "nationalPokedexNumber": 262,
          "imageUrl": "https://images.pokemontcg.io/xy0/17.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xy0/17_hires.png",
          "types": [
              "Darkness"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 1",
          "evolvesFrom": "Poochyena",
          "hp": "90",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "17",
          "artist": "Mitsuhiro Arita",
          "rarity": "",
          "series": "XY",
          "set": "Kalos Starter Set",
          "setCode": "xy0",
          "attacks": [
              {
                  "cost": [
                      "Darkness",
                      "Colorless"
                  ],
                  "name": "Hard Bite",
                  "text": "Flip a coin. If heads, this attack does 20 more damage.",
                  "damage": "40+",
                  "convertedEnergyCost": 2
              }
          ],
          "resistances": [
              {
                  "type": "Psychic",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Fighting",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "xy0-19",
          "name": "Pawniard",
          "nationalPokedexNumber": 624,
          "imageUrl": "https://images.pokemontcg.io/xy0/19.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xy0/19_hires.png",
          "types": [
              "Metal"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "60",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "19",
          "artist": "Kouki Saitou",
          "rarity": "",
          "series": "XY",
          "set": "Kalos Starter Set",
          "setCode": "xy0",
          "attacks": [
              {
                  "cost": [
                      "Metal"
                  ],
                  "name": "Pierce",
                  "text": "",
                  "damage": "10",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Cut",
                  "text": "",
                  "damage": "20",
                  "convertedEnergyCost": 2
              }
          ],
          "resistances": [
              {
                  "type": "Psychic",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Fire",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "dp6-113",
          "name": "Pineco",
          "nationalPokedexNumber": 204,
          "imageUrl": "https://images.pokemontcg.io/dp6/113.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/dp6/113_hires.png",
          "types": [
              "Grass"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "50",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "113",
          "artist": "Masakazu Fukuda",
          "rarity": "Common",
          "series": "Diamond & Pearl",
          "set": "Legends Awakened",
          "setCode": "dp6",
          "attacks": [
              {
                  "cost": [
                      "Colorless"
                  ],
                  "name": "Tackle",
                  "text": "",
                  "damage": "10",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Grass",
                      "Colorless"
                  ],
                  "name": "Selfdestruct",
                  "text": "This attack does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.) Pineco does 50 damage to itself.",
                  "damage": "40",
                  "convertedEnergyCost": 2
              }
          ],
          "weaknesses": [
              {
                  "type": "Fire",
                  "value": "+10"
              }
          ]
      },
      {
          "id": "ex16-30",
          "name": "Glalie",
          "nationalPokedexNumber": 362,
          "imageUrl": "https://images.pokemontcg.io/ex16/30.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/ex16/30_hires.png",
          "types": [
              "Water"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 1",
          "evolvesFrom": "Snorunt",
          "ability": {
              "name": "Synergy Effect",
              "text": "If Glacia's Stadium is in play, any damage done to Glalie by attacks from your opponent's Pokémon is reduced by 30 (after applying Weakness and Resistance).",
              "type": "Poké-Body"
          },
          "hp": "80",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "30",
          "artist": "Ken Sugimori",
          "rarity": "Uncommon",
          "series": "EX",
          "set": "Power Keepers",
          "setCode": "ex16",
          "attacks": [
              {
                  "cost": [
                      "Water",
                      "Colorless"
                  ],
                  "name": "Powder Snow",
                  "text": "The Defending Pokémon is now Asleep.",
                  "damage": "20",
                  "convertedEnergyCost": 2
              },
              {
                  "cost": [
                      "Water",
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Double-edge",
                  "text": "Glalie does 10 damage to itself.",
                  "damage": "60",
                  "convertedEnergyCost": 3
              }
          ],
          "weaknesses": [
              {
                  "type": "Metal",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "base4-112",
          "name": "Maintenance",
          "imageUrl": "https://images.pokemontcg.io/base4/112.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/base4/112_hires.png",
          "supertype": "Trainer",
          "subtype": "",
          "number": "112",
          "artist": "Keiji Kinebuchi",
          "rarity": "Uncommon",
          "series": "Base",
          "set": "Base Set 2",
          "setCode": "base4",
          "text": [
              "Shuffle 2 of the other cards from your hand into your deck in order to draw a card."
          ]
      },
      {
          "id": "xy11-25",
          "name": "Volcanion",
          "nationalPokedexNumber": 721,
          "imageUrl": "https://images.pokemontcg.io/xy11/25.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xy11/25_hires.png",
          "types": [
              "Fire"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "130",
          "retreatCost": [
              "Colorless",
              "Colorless"
          ],
          "convertedRetreatCost": 2,
          "number": "25",
          "artist": "5ban Graphics",
          "rarity": "Rare",
          "series": "XY",
          "set": "Steam Siege",
          "setCode": "xy11",
          "attacks": [
              {
                  "cost": [
                      "Fire"
                  ],
                  "name": "Power Heater",
                  "text": "Choose 2 of your Benched Pokémon. Attach a Fire Energy card from your discard pile to each of those Pokémon.",
                  "damage": "20",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Fire",
                      "Fire",
                      "Fire"
                  ],
                  "name": "Steam Artillery",
                  "text": "",
                  "damage": "100",
                  "convertedEnergyCost": 3
              }
          ],
          "weaknesses": [
              {
                  "type": "Water",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "hgss4-42",
          "name": "Magmar",
          "nationalPokedexNumber": 126,
          "imageUrl": "https://images.pokemontcg.io/hgss4/42.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/hgss4/42_hires.png",
          "types": [
              "Fire"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "70",
          "retreatCost": [
              "Colorless",
              "Colorless"
          ],
          "convertedRetreatCost": 2,
          "number": "42",
          "artist": "Masakazu Fukuda",
          "rarity": "Uncommon",
          "series": "HeartGold & SoulSilver",
          "set": "HS—Triumphant",
          "setCode": "hgss4",
          "attacks": [
              {
                  "cost": [
                      "Fire"
                  ],
                  "name": "Eruption",
                  "text": "Each player discards the top card of his or her deck. This attack does 20 damage times the number of Energy cards discarded in this way.",
                  "damage": "20×",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Fire",
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Combustion",
                  "text": "",
                  "damage": "30",
                  "convertedEnergyCost": 3
              }
          ],
          "weaknesses": [
              {
                  "type": "Water",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "det1-4",
          "name": "Charmander",
          "nationalPokedexNumber": 4,
          "imageUrl": "https://images.pokemontcg.io/det1/4.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/det1/4_hires.png",
          "types": [
              "Fire"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "evolvesFrom": "",
          "hp": "60",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "4",
          "rarity": "Common",
          "series": "Sun & Moon",
          "set": "Detective Pikachu",
          "setCode": "det1",
          "attacks": [
              {
                  "cost": [
                      "Colorless"
                  ],
                  "name": "Reckless Charge",
                  "text": "This Pokémon does 10 damage to itself.",
                  "damage": "20",
                  "convertedEnergyCost": 1
              }
          ],
          "weaknesses": [
              {
                  "type": "Water",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "ex16-32",
          "name": "Lairon",
          "nationalPokedexNumber": 305,
          "imageUrl": "https://images.pokemontcg.io/ex16/32.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/ex16/32_hires.png",
          "types": [
              "Metal"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 1",
          "evolvesFrom": "Aron",
          "hp": "70",
          "retreatCost": [
              "Colorless",
              "Colorless"
          ],
          "convertedRetreatCost": 2,
          "number": "32",
          "artist": "Sachiko Adachi",
          "rarity": "Uncommon",
          "series": "EX",
          "set": "Power Keepers",
          "setCode": "ex16",
          "attacks": [
              {
                  "cost": [
                      "Metal",
                      "Colorless"
                  ],
                  "name": "Granite Head",
                  "text": "During your opponent's next turn, any damage done to Lairon by attacks is reduced by 10 (after applying Weakness and Resistance).",
                  "damage": "20",
                  "convertedEnergyCost": 2
              },
              {
                  "cost": [
                      "Colorless",
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Stomp",
                  "text": "Flip a coin. If heads, this attack does 30 damage plus 20 more damage.",
                  "damage": "30+",
                  "convertedEnergyCost": 3
              }
          ],
          "resistances": [
              {
                  "type": "Grass",
                  "value": "-30"
              }
          ],
          "weaknesses": [
              {
                  "type": "Fire",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "bw1-105",
          "name": "Grass Energy",
          "imageUrl": "https://images.pokemontcg.io/bw1/105.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/bw1/105_hires.png",
          "supertype": "Energy",
          "subtype": "Basic",
          "number": "105",
          "artist": "",
          "rarity": "Common",
          "series": "Black & White",
          "set": "Black & White",
          "setCode": "bw1"
      },
      {
          "id": "base5-82",
          "name": "Potion Energy",
          "imageUrl": "https://images.pokemontcg.io/base5/82.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/base5/82_hires.png",
          "supertype": "Energy",
          "subtype": "Special",
          "number": "82",
          "artist": "Keiji Kinebuchi",
          "rarity": "Uncommon",
          "series": "Base",
          "set": "Team Rocket",
          "setCode": "base5",
          "text": [
              "If you play this card from your hand, remove 1 damage counter from the Pokémon you attach it to, if it has any. Potion Energy provides energy. (Doesn't count as a basic Energy card.)"
          ]
      },
      {
          "id": "xy11-99",
          "name": "Captivating Poké Puff",
          "imageUrl": "https://images.pokemontcg.io/xy11/99.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xy11/99_hires.png",
          "supertype": "Trainer",
          "subtype": "Item",
          "number": "99",
          "artist": "Toyste Beach",
          "rarity": "Uncommon",
          "series": "XY",
          "set": "Steam Siege",
          "setCode": "xy11",
          "text": [
              "Your opponent reveals his or her hand. Put any number of Basic Pokémon you find there onto your opponent's Bench."
          ]
      },
      {
          "id": "base4-113",
          "name": "PlusPower",
          "imageUrl": "https://images.pokemontcg.io/base4/113.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/base4/113_hires.png",
          "supertype": "Trainer",
          "subtype": "",
          "number": "113",
          "artist": "Keiji Kinebuchi",
          "rarity": "Uncommon",
          "series": "Base",
          "set": "Base Set 2",
          "setCode": "base4",
          "text": [
              "Attach PlusPower to your Active Pokémonn. At the end of your turn, discard PlusPower. If this Pokémon's attack does damage to the defending Pokémon (after applying Weakness and Resistance), the attack does 10 more damage to the Defending Pokémon."
          ]
      },
      {
          "id": "dp1-2",
          "name": "Dusknoir",
          "nationalPokedexNumber": 477,
          "imageUrl": "https://images.pokemontcg.io/dp1/2.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/dp1/2_hires.png",
          "types": [
              "Psychic"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 2",
          "evolvesFrom": "Dusclops",
          "ability": {
              "name": "Dark Palm",
              "text": "Once during your turn (before your attack), if your opponent has 4 or more Benched Pokémon, you may choose 1 of them and shuffle that Pokémon and all cards attached to it into his or her deck. This power can't be used if Dusknoir is affected by a Special Condition.",
              "type": "Poké-Power"
          },
          "hp": "120",
          "retreatCost": [
              "Colorless",
              "Colorless",
              "Colorless"
          ],
          "convertedRetreatCost": 3,
          "number": "2",
          "artist": "Takabon",
          "rarity": "Rare Holo",
          "series": "Diamond & Pearl",
          "set": "Diamond & Pearl",
          "setCode": "dp1",
          "attacks": [
              {
                  "cost": [
                      "Psychic",
                      "Psychic",
                      "Colorless"
                  ],
                  "name": "Hard Feelings",
                  "text": "Put 5 damage counters on the Defending Pokémon. Then, count the number of Prize cards your opponent has taken and put that many damage counters on the Defending Pokémon.",
                  "damage": "",
                  "convertedEnergyCost": 3
              }
          ],
          "resistances": [
              {
                  "type": "Colorless",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Darkness",
                  "value": "+30"
              }
          ]
      },
      {
          "id": "xy0-24",
          "name": "Swirlix",
          "nationalPokedexNumber": 684,
          "imageUrl": "https://images.pokemontcg.io/xy0/24.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xy0/24_hires.png",
          "types": [
              "Fairy"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "60",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "24",
          "artist": "5ban Graphics",
          "rarity": "",
          "series": "XY",
          "set": "Kalos Starter Set",
          "setCode": "xy0",
          "attacks": [
              {
                  "cost": [
                      "Fairy"
                  ],
                  "name": "Draining Kiss",
                  "text": "Heal 10 damage from this Pokémon.",
                  "damage": "10",
                  "convertedEnergyCost": 1
              }
          ],
          "resistances": [
              {
                  "type": "Darkness",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Metal",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "xy0-25",
          "name": "Farfetch'd",
          "nationalPokedexNumber": 83,
          "imageUrl": "https://images.pokemontcg.io/xy0/25.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xy0/25_hires.png",
          "types": [
              "Colorless"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "70",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "25",
          "artist": "Kagemaru Himeno",
          "rarity": "",
          "series": "XY",
          "set": "Kalos Starter Set",
          "setCode": "xy0",
          "attacks": [
              {
                  "cost": [
                      "Colorless"
                  ],
                  "name": "Slash",
                  "text": "",
                  "damage": "30",
                  "convertedEnergyCost": 1
              }
          ],
          "resistances": [
              {
                  "type": "Fighting",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Lightning",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "xy0-26",
          "name": "Snorlax",
          "nationalPokedexNumber": 143,
          "imageUrl": "https://images.pokemontcg.io/xy0/26.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xy0/26_hires.png",
          "types": [
              "Colorless"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "120",
          "retreatCost": [
              "Colorless",
              "Colorless",
              "Colorless",
              "Colorless"
          ],
          "convertedRetreatCost": 4,
          "number": "26",
          "artist": "Naoki Saito",
          "rarity": "",
          "series": "XY",
          "set": "Kalos Starter Set",
          "setCode": "xy0",
          "attacks": [
              {
                  "cost": [
                      "Colorless",
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Rock Smash",
                  "text": "Flip a coin. If heads, this attack does 30 more damage.",
                  "damage": "10+",
                  "convertedEnergyCost": 3
              },
              {
                  "cost": [
                      "Colorless",
                      "Colorless",
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Strength",
                  "text": "",
                  "damage": "70",
                  "convertedEnergyCost": 4
              }
          ],
          "weaknesses": [
              {
                  "type": "Fighting",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "dp6-116",
          "name": "Poochyena",
          "nationalPokedexNumber": 261,
          "imageUrl": "https://images.pokemontcg.io/dp6/116.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/dp6/116_hires.png",
          "types": [
              "Darkness"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "50",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "116",
          "artist": "Kouki Saitou",
          "rarity": "Common",
          "series": "Diamond & Pearl",
          "set": "Legends Awakened",
          "setCode": "dp6",
          "attacks": [
              {
                  "cost": [
                      "Darkness"
                  ],
                  "name": "Corner",
                  "text": "The Defending Pokémon can't retreat during your opponent's next turn.",
                  "damage": "",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Ambush",
                  "text": "Flip a coin. If heads, this attack does 10 damage plus 20 more damage.",
                  "damage": "10+",
                  "convertedEnergyCost": 2
              }
          ],
          "resistances": [
              {
                  "type": "Psychic",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Fighting",
                  "value": "+10"
              }
          ]
      },
      {
          "id": "dp1-3",
          "name": "Electivire",
          "nationalPokedexNumber": 466,
          "imageUrl": "https://images.pokemontcg.io/dp1/3.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/dp1/3_hires.png",
          "types": [
              "Lightning"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 1",
          "evolvesFrom": "Electabuzz",
          "ability": {
              "name": "Intense Voltage",
              "text": "As often as you like during your turn (before your attack), if Elekid is anywhere under Electivire, you may move a Lightning Energy attached to 1 of your Pokémon to Electivire. This power can't be used if Electivire is affected by a Special Condition.",
              "type": "Poké-Power"
          },
          "hp": "100",
          "retreatCost": [
              "Colorless",
              "Colorless",
              "Colorless"
          ],
          "convertedRetreatCost": 3,
          "number": "3",
          "artist": "Nakaoka",
          "rarity": "Rare Holo",
          "series": "Diamond & Pearl",
          "set": "Diamond & Pearl",
          "setCode": "dp1",
          "attacks": [
              {
                  "cost": [
                      "Lightning",
                      "Lightning",
                      "Lightning",
                      "Colorless"
                  ],
                  "name": "Giga Impact",
                  "text": "You may discard all  Lightning Energy attached to Electivire. If you do, this attack's base damage is 120 instead of 60.",
                  "damage": "60",
                  "convertedEnergyCost": 4
              }
          ],
          "resistances": [
              {
                  "type": "Metal",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Fighting",
                  "value": "+20"
              }
          ]
      },
      {
          "id": "dp1-5",
          "name": "Infernape",
          "nationalPokedexNumber": 392,
          "imageUrl": "https://images.pokemontcg.io/dp1/5.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/dp1/5_hires.png",
          "types": [
              "Fire"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 2",
          "evolvesFrom": "Monferno",
          "hp": "100",
          "convertedRetreatCost": 0,
          "number": "5",
          "artist": "Nakaoka",
          "rarity": "Rare Holo",
          "series": "Diamond & Pearl",
          "set": "Diamond & Pearl",
          "setCode": "dp1",
          "attacks": [
              {
                  "cost": [
                      "Colorless"
                  ],
                  "name": "Meteor Punch",
                  "text": "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
                  "damage": "30×",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Fire",
                      "Fire"
                  ],
                  "name": "Flare Blitz",
                  "text": "Discard all Fire Energy attached to Infernape.",
                  "damage": "90",
                  "convertedEnergyCost": 2
              }
          ],
          "weaknesses": [
              {
                  "type": "Water",
                  "value": "+30"
              }
          ]
      },
      {
          "id": "ex14-91",
          "name": "Delcatty ex",
          "nationalPokedexNumber": 301,
          "imageUrl": "https://images.pokemontcg.io/ex14/91.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/ex14/91_hires.png",
          "types": [
              "Colorless"
          ],
          "supertype": "Pokémon",
          "subtype": "EX",
          "evolvesFrom": "Skitty",
          "ability": {
              "name": "Constrain",
              "text": "Once during your turn (before your attack), you may use this power. Each player discards cards until that player has 6 cards in his or her hand. (You discard first.) This power can't be used if Delcatty ex is affected by a Special Condition.",
              "type": "Poké-Power"
          },
          "hp": "90",
          "convertedRetreatCost": 0,
          "number": "91",
          "artist": "Shizurow",
          "rarity": "Rare Holo EX",
          "series": "EX",
          "set": "Crystal Guardians",
          "setCode": "ex14",
          "text": [
              "When Pokémon-ex has been Knocked Out, your opponent takes 2 Prize cards."
          ],
          "attacks": [
              {
                  "cost": [
                      "Colorless"
                  ],
                  "name": "Upstream",
                  "text": "Search your discard pile for all Energy cards. This attack does 10 damage times the number of Energy cards you find there. Show them to your opponent, and put them on top of your deck. Shuffle your deck afterward.",
                  "damage": "10×",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Colorless",
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Tail Slap",
                  "text": "",
                  "damage": "60",
                  "convertedEnergyCost": 3
              }
          ],
          "weaknesses": [
              {
                  "type": "Fighting",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "ex14-100",
          "name": "Celebi Star",
          "nationalPokedexNumber": 251,
          "imageUrl": "https://images.pokemontcg.io/ex14/100.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/ex14/100_hires.png",
          "types": [
              "Grass"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "ability": {
              "name": "Time Travel",
              "text": "If Celebi Star would be Knocked Out by damage from an opponent's attack, you may flip a coin. If heads, Celebi Star is not Knocked Out, discard all cards attached to Celebi Star, and put Celebi Star on the bottom of your deck.",
              "type": "Poké-Power"
          },
          "hp": "60",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "100",
          "artist": "Masakazu Fukuda",
          "rarity": "Rare Holo",
          "series": "EX",
          "set": "Crystal Guardians",
          "setCode": "ex14",
          "text": [
              "You can't have more than 1 Pokémon Star in your deck."
          ],
          "attacks": [
              {
                  "cost": [
                      "Grass"
                  ],
                  "name": "Leaf Shade",
                  "text": "Count the amount of Energy attached to Celebi Star. Put that many damage counters on 1 of your opponent's Pokémon.",
                  "damage": "",
                  "convertedEnergyCost": 1
              }
          ],
          "weaknesses": [
              {
                  "type": "Fire",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "dp1-6",
          "name": "Lucario",
          "nationalPokedexNumber": 448,
          "imageUrl": "https://images.pokemontcg.io/dp1/6.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/dp1/6_hires.png",
          "types": [
              "Fighting"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 1",
          "evolvesFrom": "Riolu",
          "hp": "90",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "6",
          "artist": "Ken Sugimori",
          "rarity": "Rare Holo",
          "series": "Diamond & Pearl",
          "set": "Diamond & Pearl",
          "setCode": "dp1",
          "attacks": [
              {
                  "cost": [
                      "Colorless"
                  ],
                  "name": "Feint",
                  "text": "This attack's damage isn't affected by Resistance.",
                  "damage": "30",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Fighting",
                      "Fighting"
                  ],
                  "name": "Aura Sphere",
                  "text": "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
                  "damage": "40",
                  "convertedEnergyCost": 2
              }
          ],
          "weaknesses": [
              {
                  "type": "Psychic",
                  "value": "+20"
              }
          ]
      },
      {
          "id": "ex16-35",
          "name": "Metang",
          "nationalPokedexNumber": 375,
          "imageUrl": "https://images.pokemontcg.io/ex16/35.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/ex16/35_hires.png",
          "types": [
              "Metal"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 1",
          "evolvesFrom": "Beldum",
          "ability": {
              "name": "Clear Body",
              "text": "Metang can't be affected by any Special Conditions.",
              "type": "Poké-Body"
          },
          "hp": "80",
          "retreatCost": [
              "Colorless",
              "Colorless"
          ],
          "convertedRetreatCost": 2,
          "number": "35",
          "artist": "Tomokazu Komiya",
          "rarity": "Uncommon",
          "series": "EX",
          "set": "Power Keepers",
          "setCode": "ex16",
          "attacks": [
              {
                  "cost": [
                      "Metal",
                      "Colorless"
                  ],
                  "name": "Extra Comet Punch",
                  "text": "During your next turn, Extra Comet Punch does 30 damage plus 30 more damage.",
                  "damage": "30+",
                  "convertedEnergyCost": 2
              }
          ],
          "resistances": [
              {
                  "type": "Grass",
                  "value": "-30"
              }
          ],
          "weaknesses": [
              {
                  "type": "Fire",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "bw5-3",
          "name": "Venusaur",
          "nationalPokedexNumber": 3,
          "imageUrl": "https://images.pokemontcg.io/bw5/3.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/bw5/3_hires.png",
          "types": [
              "Grass"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 2",
          "evolvesFrom": "Ivysaur",
          "ability": {
              "name": "Floral Scent",
              "text": "Once during your turn (before your attack), you may search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
              "type": "Ability"
          },
          "hp": "140",
          "retreatCost": [
              "Colorless",
              "Colorless",
              "Colorless",
              "Colorless"
          ],
          "convertedRetreatCost": 4,
          "number": "3",
          "artist": "Masakazu Fukuda",
          "rarity": "Rare Holo",
          "series": "Black & White",
          "set": "Dark Explorers",
          "setCode": "bw5",
          "attacks": [
              {
                  "cost": [
                      "Grass",
                      "Grass",
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Poison Powder",
                  "text": "The Defending Pokémon is now Poisoned.",
                  "damage": "70",
                  "convertedEnergyCost": 4
              }
          ],
          "resistances": [
              {
                  "type": "Water",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Fire",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "gym1-104",
          "name": "The Rocket's Training Gym",
          "imageUrl": "https://images.pokemontcg.io/gym1/104.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/gym1/104_hires.png",
          "supertype": "Trainer",
          "subtype": "",
          "number": "104",
          "artist": "Keiji Kinebuchi",
          "rarity": "Rare",
          "series": "Gym",
          "set": "Gym Heroes",
          "setCode": "gym1",
          "text": [
              "Each player pays 1 more to retreat his or her Active Pokémon."
          ]
      },
      {
          "id": "xy0-28",
          "name": "Skitty",
          "nationalPokedexNumber": 300,
          "imageUrl": "https://images.pokemontcg.io/xy0/28.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xy0/28_hires.png",
          "types": [
              "Colorless"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "60",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "28",
          "artist": "Shin Nagasawa",
          "rarity": "",
          "series": "XY",
          "set": "Kalos Starter Set",
          "setCode": "xy0",
          "attacks": [
              {
                  "cost": [
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Jump On",
                  "text": "Flip a coin. If heads, this attack does 20 more damage.",
                  "damage": "20+",
                  "convertedEnergyCost": 2
              }
          ],
          "weaknesses": [
              {
                  "type": "Fighting",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "xy0-29",
          "name": "Bidoof",
          "nationalPokedexNumber": 399,
          "imageUrl": "https://images.pokemontcg.io/xy0/29.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xy0/29_hires.png",
          "types": [
              "Colorless"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "70",
          "retreatCost": [
              "Colorless",
              "Colorless"
          ],
          "convertedRetreatCost": 2,
          "number": "29",
          "artist": "Kouki Saitou",
          "rarity": "",
          "series": "XY",
          "set": "Kalos Starter Set",
          "setCode": "xy0",
          "attacks": [
              {
                  "cost": [
                      "Colorless",
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Rollout",
                  "text": "",
                  "damage": "60",
                  "convertedEnergyCost": 3
              }
          ],
          "weaknesses": [
              {
                  "type": "Fighting",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "xy0-30",
          "name": "Bunnelby",
          "nationalPokedexNumber": 659,
          "imageUrl": "https://images.pokemontcg.io/xy0/30.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xy0/30_hires.png",
          "types": [
              "Colorless"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "60",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "30",
          "artist": "5ban Graphics",
          "rarity": "",
          "series": "XY",
          "set": "Kalos Starter Set",
          "setCode": "xy0",
          "attacks": [
              {
                  "cost": [
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Tackle",
                  "text": "",
                  "damage": "20",
                  "convertedEnergyCost": 2
              }
          ],
          "weaknesses": [
              {
                  "type": "Fighting",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "xy11-94",
          "name": "Fletchling",
          "nationalPokedexNumber": 661,
          "imageUrl": "https://images.pokemontcg.io/xy11/94.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xy11/94_hires.png",
          "types": [
              "Colorless"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "40",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "94",
          "artist": "TOKIYA",
          "rarity": "Common",
          "series": "XY",
          "set": "Steam Siege",
          "setCode": "xy11",
          "attacks": [
              {
                  "cost": [
                      "Colorless"
                  ],
                  "name": "Peck",
                  "text": "",
                  "damage": "20",
                  "convertedEnergyCost": 1
              }
          ],
          "resistances": [
              {
                  "type": "Fighting",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Lightning",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "dp1-7",
          "name": "Luxray",
          "nationalPokedexNumber": 405,
          "imageUrl": "https://images.pokemontcg.io/dp1/7.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/dp1/7_hires.png",
          "types": [
              "Lightning"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 2",
          "evolvesFrom": "Luxio",
          "ability": {
              "name": "Sharp Eye",
              "text": "Once during your turn, when you play Luxray from your hand to evolve 1 of your Pokémon, you may look at your opponent's hand. If your opponent's Bench isn't full, choose 1 Basic Pokémon from your opponent's hand, and put it onto his or her Bench. Then, switch it with the Defending Pokémon.",
              "type": "Poké-Power"
          },
          "hp": "120",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "7",
          "artist": "Mikiko Takeda",
          "rarity": "Rare Holo",
          "series": "Diamond & Pearl",
          "set": "Diamond & Pearl",
          "setCode": "dp1",
          "attacks": [
              {
                  "cost": [
                      "Lightning",
                      "Lightning",
                      "Lightning",
                      "Lightning"
                  ],
                  "name": "Lightning Star",
                  "text": "Move all Lightning Energy attached to Luxray to 1 of your Benched Pokémon. (Ignore this effect if you don't have any Benched Pokémon.)",
                  "damage": "80",
                  "convertedEnergyCost": 4
              }
          ],
          "resistances": [
              {
                  "type": "Metal",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Fighting",
                  "value": "+30"
              }
          ]
      },
      {
          "id": "xy0-34",
          "name": "Crushing Hammer",
          "imageUrl": "https://images.pokemontcg.io/xy0/34.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xy0/34_hires.png",
          "supertype": "Trainer",
          "subtype": "Item",
          "number": "34",
          "artist": "5ban Graphics",
          "rarity": "",
          "series": "XY",
          "set": "Kalos Starter Set",
          "setCode": "xy0",
          "text": [
              "Flip a coin. If heads, discard an Energy attached to 1 of your opponent's Pokémon."
          ]
      },
      {
          "id": "xy0-35",
          "name": "Poké Ball",
          "imageUrl": "https://images.pokemontcg.io/xy0/35.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xy0/35_hires.png",
          "supertype": "Trainer",
          "subtype": "Item",
          "number": "35",
          "artist": "5ban Graphics",
          "rarity": "",
          "series": "XY",
          "set": "Kalos Starter Set",
          "setCode": "xy0",
          "text": [
              "Flip a coin. If heads, search your deck for a Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward."
          ]
      },
      {
          "id": "bw7-128",
          "name": "Energy Search",
          "imageUrl": "https://images.pokemontcg.io/bw7/128.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/bw7/128_hires.png",
          "supertype": "Trainer",
          "subtype": "Item",
          "number": "128",
          "artist": "Ryo Ueda",
          "rarity": "Common",
          "series": "Black & White",
          "set": "Boundaries Crossed",
          "setCode": "bw7",
          "text": [
              "Search your deck for a basic Energy card, reveal it, and put it into your hand. Shuffle your deck afterward."
          ]
      },
      {
          "id": "xy0-36",
          "name": "Pokémon Catcher",
          "imageUrl": "https://images.pokemontcg.io/xy0/36.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xy0/36_hires.png",
          "supertype": "Trainer",
          "subtype": "Item",
          "number": "36",
          "artist": "5ban Graphics",
          "rarity": "",
          "series": "XY",
          "set": "Kalos Starter Set",
          "setCode": "xy0",
          "text": [
              "Flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon."
          ]
      },
      {
          "id": "bw5-5",
          "name": "Carnivine",
          "nationalPokedexNumber": 455,
          "imageUrl": "https://images.pokemontcg.io/bw5/5.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/bw5/5_hires.png",
          "types": [
              "Grass"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "90",
          "retreatCost": [
              "Colorless",
              "Colorless"
          ],
          "convertedRetreatCost": 2,
          "number": "5",
          "artist": "Yukiko Baba",
          "rarity": "Rare",
          "series": "Black & White",
          "set": "Dark Explorers",
          "setCode": "bw5",
          "attacks": [
              {
                  "cost": [
                      "Grass"
                  ],
                  "name": "Lure Poison",
                  "text": "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon. The new Defending Pokémon is now Poisoned.",
                  "damage": "",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Grass",
                      "Grass",
                      "Colorless"
                  ],
                  "name": "Spit Squall",
                  "text": "Your opponent puts the Defending Pokémon and all cards attached to it into his or her hand.",
                  "damage": "",
                  "convertedEnergyCost": 3
              }
          ],
          "resistances": [
              {
                  "type": "Water",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Fire",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "dp1-8",
          "name": "Magnezone",
          "nationalPokedexNumber": 462,
          "imageUrl": "https://images.pokemontcg.io/dp1/8.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/dp1/8_hires.png",
          "types": [
              "Metal"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 2",
          "evolvesFrom": "Magneton",
          "ability": {
              "name": "Magnetize",
              "text": "If you have any Metal Energy attached to your Active Pokémon, the Retreat Cost for that Pokémon is 0.",
              "type": "Poké-Body"
          },
          "hp": "120",
          "retreatCost": [
              "Colorless",
              "Colorless",
              "Colorless",
              "Colorless"
          ],
          "convertedRetreatCost": 4,
          "number": "8",
          "artist": "Nakaoka",
          "rarity": "Rare Holo",
          "series": "Diamond & Pearl",
          "set": "Diamond & Pearl",
          "setCode": "dp1",
          "attacks": [
              {
                  "cost": [
                      "Metal",
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Metal Blast",
                  "text": "Does 50 damage plus 10 more damage for each Metal Energy attached to Magnezone.",
                  "damage": "50+",
                  "convertedEnergyCost": 3
              }
          ],
          "resistances": [
              {
                  "type": "Psychic",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Fire",
                  "value": "+30"
              }
          ]
      },
      {
          "id": "xy7-39",
          "name": "Quagsire",
          "nationalPokedexNumber": 195,
          "imageUrl": "https://images.pokemontcg.io/xy7/39.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xy7/39_hires.png",
          "types": [
              "Fighting"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 1",
          "evolvesFrom": "Wooper",
          "hp": "110",
          "retreatCost": [
              "Colorless",
              "Colorless",
              "Colorless"
          ],
          "convertedRetreatCost": 3,
          "number": "39",
          "artist": "Naoyo Kimura",
          "rarity": "Common",
          "series": "XY",
          "set": "Ancient Origins",
          "setCode": "xy7",
          "attacks": [
              {
                  "cost": [
                      "Water",
                      "Colorless"
                  ],
                  "name": "Wave Splash",
                  "text": "",
                  "damage": "30",
                  "convertedEnergyCost": 2
              },
              {
                  "cost": [
                      "Water",
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Landslide",
                  "text": "This attack's damage isn't affected by Resistance.",
                  "damage": "80",
                  "convertedEnergyCost": 3
              }
          ],
          "weaknesses": [
              {
                  "type": "Grass",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "det1-6",
          "name": "Arcanine",
          "nationalPokedexNumber": 59,
          "imageUrl": "https://images.pokemontcg.io/det1/6.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/det1/6_hires.png",
          "types": [
              "Fire"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 1",
          "evolvesFrom": "Growlithe",
          "ability": {
              "name": "Security Guard",
              "text": "As long as this Pokémon is your Active Pokémon, all of your Pokémon take 30 less damage from your opponent's attacks (after applying Weakness and Resistance).",
              "type": "Ability"
          },
          "hp": "120",
          "retreatCost": [
              "Colorless",
              "Colorless",
              "Colorless"
          ],
          "convertedRetreatCost": 3,
          "number": "6",
          "rarity": "Rare",
          "series": "Sun & Moon",
          "set": "Detective Pikachu",
          "setCode": "det1",
          "attacks": [
              {
                  "cost": [
                      "Fire",
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Sharp Fang",
                  "text": "",
                  "damage": "90",
                  "convertedEnergyCost": 3
              }
          ],
          "weaknesses": [
              {
                  "type": "Water",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "sm8-181",
          "name": "Lost Blender",
          "imageUrl": "https://images.pokemontcg.io/sm8/181.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/sm8/181_hires.png",
          "supertype": "Trainer",
          "subtype": "Item",
          "number": "181",
          "artist": "5ban Graphics",
          "rarity": "Uncommon",
          "series": "Sun & Moon",
          "set": "Lost Thunder",
          "setCode": "sm8",
          "text": [
              "Put 2 cards from your hand in the Lost Zone. If you do, draw a card."
          ]
      },
      {
          "id": "base1-46",
          "name": "Charmander",
          "nationalPokedexNumber": 4,
          "imageUrl": "https://images.pokemontcg.io/base1/46.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/base1/46_hires.png",
          "types": [
              "Fire"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "50",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "46",
          "artist": "Mitsuhiro Arita",
          "rarity": "Common",
          "series": "Base",
          "set": "Base",
          "setCode": "base1",
          "attacks": [
              {
                  "cost": [
                      "Colorless"
                  ],
                  "name": "Scratch",
                  "text": "",
                  "damage": "10",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Fire",
                      "Colorless"
                  ],
                  "name": "Ember",
                  "text": "Discard 1 Energy card attached to Charmander in order to use this attack.",
                  "damage": "30",
                  "convertedEnergyCost": 2
              }
          ],
          "weaknesses": [
              {
                  "type": "Water",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "xy7-76",
          "name": "Level Ball",
          "imageUrl": "https://images.pokemontcg.io/xy7/76.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xy7/76_hires.png",
          "supertype": "Trainer",
          "subtype": "Item",
          "number": "76",
          "artist": "Toyste Beach",
          "rarity": "Uncommon",
          "series": "XY",
          "set": "Ancient Origins",
          "setCode": "xy7",
          "text": [
              "Search your deck for a Pokémon with 90 HP or less, reveal it, and put it into your hand. Shuffle your deck afterward."
          ]
      },
      {
          "id": "col1-1",
          "name": "Clefable",
          "nationalPokedexNumber": 36,
          "imageUrl": "https://images.pokemontcg.io/col1/1.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/col1/1_hires.png",
          "types": [
              "Colorless"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 1",
          "evolvesFrom": "Clefairy",
          "hp": "80",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "1",
          "artist": "sui",
          "rarity": "Rare Holo",
          "series": "HeartGold & SoulSilver",
          "set": "Call of Legends",
          "setCode": "col1",
          "attacks": [
              {
                  "cost": [
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Fairy Power",
                  "text": "Return 1 of your Pokémon and all cards attached to it to your hand.",
                  "damage": "",
                  "convertedEnergyCost": 2
              },
              {
                  "cost": [
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Moon Impact",
                  "text": "",
                  "damage": "40",
                  "convertedEnergyCost": 2
              }
          ],
          "weaknesses": [
              {
                  "type": "Fighting",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "bw5-6",
          "name": "Leafeon",
          "nationalPokedexNumber": 470,
          "imageUrl": "https://images.pokemontcg.io/bw5/6.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/bw5/6_hires.png",
          "types": [
              "Grass"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 1",
          "evolvesFrom": "Eevee",
          "hp": "90",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "6",
          "artist": "Ryo Ueda",
          "rarity": "Rare",
          "series": "Black & White",
          "set": "Dark Explorers",
          "setCode": "bw5",
          "attacks": [
              {
                  "cost": [
                      "Colorless"
                  ],
                  "name": "Quick Attack",
                  "text": "Flip a coin. If heads, this attack does 30 more damage.",
                  "damage": "10+",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Grass",
                      "Colorless"
                  ],
                  "name": "Energy Assist",
                  "text": "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
                  "damage": "40",
                  "convertedEnergyCost": 2
              }
          ],
          "resistances": [
              {
                  "type": "Water",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Fire",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "dp1-9",
          "name": "Manaphy",
          "nationalPokedexNumber": 490,
          "imageUrl": "https://images.pokemontcg.io/dp1/9.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/dp1/9_hires.png",
          "types": [
              "Water"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "70",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "9",
          "artist": "Nakaoka",
          "rarity": "Rare Holo",
          "series": "Diamond & Pearl",
          "set": "Diamond & Pearl",
          "setCode": "dp1",
          "attacks": [
              {
                  "cost": [
                      "Colorless"
                  ],
                  "name": "Call for Family",
                  "text": "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
                  "damage": "",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Water",
                      "Water"
                  ],
                  "name": "Aqua Ring",
                  "text": "Switch Manaphy with 1 of your Benched Pokémon.",
                  "damage": "30",
                  "convertedEnergyCost": 2
              }
          ],
          "weaknesses": [
              {
                  "type": "Lightning",
                  "value": "+20"
              }
          ]
      },
      {
          "id": "bw5-8",
          "name": "Crustle",
          "nationalPokedexNumber": 558,
          "imageUrl": "https://images.pokemontcg.io/bw5/8.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/bw5/8_hires.png",
          "types": [
              "Grass"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 1",
          "evolvesFrom": "Dwebble",
          "hp": "110",
          "retreatCost": [
              "Colorless",
              "Colorless",
              "Colorless"
          ],
          "convertedRetreatCost": 3,
          "number": "8",
          "artist": "Ryo Ueda",
          "rarity": "Uncommon",
          "series": "Black & White",
          "set": "Dark Explorers",
          "setCode": "bw5",
          "attacks": [
              {
                  "cost": [
                      "Grass",
                      "Colorless"
                  ],
                  "name": "Cut",
                  "text": "",
                  "damage": "30",
                  "convertedEnergyCost": 2
              },
              {
                  "cost": [
                      "Grass",
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Heavy Bullet",
                  "text": "Flip a coin. If heads, this attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
                  "damage": "70",
                  "convertedEnergyCost": 3
              }
          ],
          "weaknesses": [
              {
                  "type": "Fire",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "hgss3-3",
          "name": "Forretress",
          "nationalPokedexNumber": 205,
          "imageUrl": "https://images.pokemontcg.io/hgss3/3.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/hgss3/3_hires.png",
          "types": [
              "Metal"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 1",
          "evolvesFrom": "Pineco",
          "hp": "90",
          "retreatCost": [
              "Colorless",
              "Colorless",
              "Colorless"
          ],
          "convertedRetreatCost": 3,
          "number": "3",
          "artist": "Kyoko Umemoto",
          "rarity": "Rare Holo",
          "series": "HeartGold & SoulSilver",
          "set": "HS—Undaunted",
          "setCode": "hgss3",
          "attacks": [
              {
                  "cost": [
                      "Metal",
                      "Colorless"
                  ],
                  "name": "Mirror Shot",
                  "text": "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
                  "damage": "30",
                  "convertedEnergyCost": 2
              },
              {
                  "cost": [
                      "Metal",
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Everyone Explode Now",
                  "text": "Does 30 damage times the number of Pineco and Forretress you have in play. This attack does 30 damage to each of your Pineco and Forretress in play.",
                  "damage": "30×",
                  "convertedEnergyCost": 3
              }
          ],
          "resistances": [
              {
                  "type": "Psychic",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Fire",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "xy7-74",
          "name": "Forest of Giant Plants",
          "imageUrl": "https://images.pokemontcg.io/xy7/74.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xy7/74_hires.png",
          "supertype": "Trainer",
          "subtype": "Stadium",
          "number": "74",
          "artist": "Ryo Ueda",
          "rarity": "Uncommon",
          "series": "XY",
          "set": "Ancient Origins",
          "setCode": "xy7",
          "text": [
              "Each player's Grass Pokémon can evolve during his or her first turn or the turn he or she plays those Pokémon."
          ]
      },
      {
          "id": "dp1-116",
          "name": "Warp Point",
          "imageUrl": "https://images.pokemontcg.io/dp1/116.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/dp1/116_hires.png",
          "supertype": "Trainer",
          "subtype": "Item",
          "hp": "None",
          "number": "116",
          "artist": "Keiji Kinebuchi",
          "rarity": "Uncommon",
          "series": "Diamond & Pearl",
          "set": "Diamond & Pearl",
          "setCode": "dp1",
          "text": [
              "Your opponent switches 1 of his or her Defending Pokémon with 1 of his or her Benched Pokémon, if any. You switch 1 of your Active Pokémon with 1 of your Benched Pokémon, if any."
          ]
      },
      {
          "id": "xy11-104",
          "name": "Pokémon Ranger",
          "imageUrl": "https://images.pokemontcg.io/xy11/104.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xy11/104_hires.png",
          "supertype": "Trainer",
          "subtype": "Supporter",
          "number": "104",
          "artist": "Yusuke Ohmura",
          "rarity": "Uncommon",
          "series": "XY",
          "set": "Steam Siege",
          "setCode": "xy11",
          "text": [
              "Remove all effects of attacks on each player and his or her Pokémon."
          ]
      },
      {
          "id": "col1-2",
          "name": "Deoxys",
          "nationalPokedexNumber": 386,
          "imageUrl": "https://images.pokemontcg.io/col1/2.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/col1/2_hires.png",
          "types": [
              "Psychic"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "80",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "2",
          "artist": "Ryo Ueda",
          "rarity": "Rare Holo",
          "series": "HeartGold & SoulSilver",
          "set": "Call of Legends",
          "setCode": "col1",
          "attacks": [
              {
                  "cost": [
                      "Psychic",
                      "Psychic",
                      "Psychic"
                  ],
                  "name": "Cell Storm",
                  "text": "Discard 2 Psychic Energy attached to Deoxys and remove 6 damage counters from Deoxys.",
                  "damage": "60",
                  "convertedEnergyCost": 3
              }
          ],
          "weaknesses": [
              {
                  "type": "Psychic",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "bw5-9",
          "name": "Karrablast",
          "nationalPokedexNumber": 588,
          "imageUrl": "https://images.pokemontcg.io/bw5/9.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/bw5/9_hires.png",
          "types": [
              "Grass"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "60",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "9",
          "artist": "Kagemaru Himeno",
          "rarity": "Common",
          "series": "Black & White",
          "set": "Dark Explorers",
          "setCode": "bw5",
          "attacks": [
              {
                  "cost": [
                      "Colorless"
                  ],
                  "name": "Beat",
                  "text": "",
                  "damage": "10",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Colorless",
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Reckless Charge",
                  "text": "This Pokémon does 10 damage to itself.",
                  "damage": "40",
                  "convertedEnergyCost": 3
              }
          ],
          "weaknesses": [
              {
                  "type": "Fire",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "hgss4-44",
          "name": "Marowak",
          "nationalPokedexNumber": 105,
          "imageUrl": "https://images.pokemontcg.io/hgss4/44.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/hgss4/44_hires.png",
          "types": [
              "Fighting"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 1",
          "evolvesFrom": "Cubone",
          "hp": "90",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "44",
          "artist": "kawayoo",
          "rarity": "Uncommon",
          "series": "HeartGold & SoulSilver",
          "set": "HS—Triumphant",
          "setCode": "hgss4",
          "attacks": [
              {
                  "cost": [
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Bonemerang",
                  "text": "Flip 2 coins. This attack does 60 damage times the number of heads.",
                  "damage": "60×",
                  "convertedEnergyCost": 2
              },
              {
                  "cost": [
                      "Fighting",
                      "Fighting"
                  ],
                  "name": "Bone Impact",
                  "text": "If there is any Stadium card in play, this attack does 20 damage plus 60 more damage. Discard that Stadium card.",
                  "damage": "20+",
                  "convertedEnergyCost": 2
              }
          ],
          "resistances": [
              {
                  "type": "Lightning",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Water",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "col1-4",
          "name": "Espeon",
          "nationalPokedexNumber": 196,
          "imageUrl": "https://images.pokemontcg.io/col1/4.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/col1/4_hires.png",
          "types": [
              "Psychic"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 1",
          "evolvesFrom": "Eevee",
          "hp": "90",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "4",
          "artist": "match",
          "rarity": "Rare Holo",
          "series": "HeartGold & SoulSilver",
          "set": "Call of Legends",
          "setCode": "col1",
          "attacks": [
              {
                  "cost": [
                      "Psychic"
                  ],
                  "name": "Solar Suggestion",
                  "text": "Move up to 4 damage counters from any of your Pokémon to any of your opponent's Pokémon in any way you like.",
                  "damage": "",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Psychic",
                      "Colorless"
                  ],
                  "name": "Psybeam",
                  "text": "Flip a coin. If heads, the Defending Pokémon is now Confused.",
                  "damage": "30",
                  "convertedEnergyCost": 2
              }
          ],
          "weaknesses": [
              {
                  "type": "Psychic",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "base1-47",
          "name": "Diglett",
          "nationalPokedexNumber": 50,
          "imageUrl": "https://images.pokemontcg.io/base1/47.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/base1/47_hires.png",
          "types": [
              "Fighting"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "30",
          "number": "47",
          "artist": "Keiji Kinebuchi",
          "rarity": "Common",
          "series": "Base",
          "set": "Base",
          "setCode": "base1",
          "attacks": [
              {
                  "cost": [
                      "Fighting"
                  ],
                  "name": "Dig",
                  "text": "",
                  "damage": "10",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Fighting",
                      "Fighting"
                  ],
                  "name": "Mud Slap",
                  "text": "",
                  "damage": "30",
                  "convertedEnergyCost": 2
              }
          ],
          "resistances": [
              {
                  "type": "Lightning",
                  "value": "-30"
              }
          ],
          "weaknesses": [
              {
                  "type": "Grass",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "base1-49",
          "name": "Drowzee",
          "nationalPokedexNumber": 96,
          "imageUrl": "https://images.pokemontcg.io/base1/49.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/base1/49_hires.png",
          "types": [
              "Psychic"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "50",
          "number": "49",
          "artist": "Ken Sugimori",
          "rarity": "Common",
          "series": "Base",
          "set": "Base",
          "setCode": "base1",
          "attacks": [
              {
                  "cost": [
                      "Colorless"
                  ],
                  "name": "Pound",
                  "text": "",
                  "damage": "10",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Psychic",
                      "Psychic"
                  ],
                  "name": "Confuse Ray",
                  "text": "Flip a coin. If heads, the Defending Pokémon is now Confused.",
                  "damage": "10",
                  "convertedEnergyCost": 2
              }
          ],
          "weaknesses": [
              {
                  "type": "Psychic",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "base1-51",
          "name": "Koffing",
          "nationalPokedexNumber": 109,
          "imageUrl": "https://images.pokemontcg.io/base1/51.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/base1/51_hires.png",
          "types": [
              "Grass"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "50",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "51",
          "artist": "Mitsuhiro Arita",
          "rarity": "Common",
          "series": "Base",
          "set": "Base",
          "setCode": "base1",
          "attacks": [
              {
                  "cost": [
                      "Grass",
                      "Grass"
                  ],
                  "name": "Foul Gas",
                  "text": "Flip a coin. If heads, the Defending Pokémon is now Poisoned; if tails, it is now Confused.",
                  "damage": "10",
                  "convertedEnergyCost": 2
              }
          ],
          "weaknesses": [
              {
                  "type": "Psychic",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "bw5-12",
          "name": "Flareon",
          "nationalPokedexNumber": 136,
          "imageUrl": "https://images.pokemontcg.io/bw5/12.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/bw5/12_hires.png",
          "types": [
              "Fire"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 1",
          "evolvesFrom": "Eevee",
          "hp": "90",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "12",
          "artist": "Suwama Chiaki",
          "rarity": "Uncommon",
          "series": "Black & White",
          "set": "Dark Explorers",
          "setCode": "bw5",
          "attacks": [
              {
                  "cost": [
                      "Colorless"
                  ],
                  "name": "Sand-Attack",
                  "text": "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
                  "damage": "20",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Fire",
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Fire Slash",
                  "text": "You may discard a Fire Energy attached to this Pokémon. If you do, this attack does 30 more damage.",
                  "damage": "60+",
                  "convertedEnergyCost": 3
              }
          ],
          "weaknesses": [
              {
                  "type": "Water",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "dp1-11",
          "name": "Palkia",
          "nationalPokedexNumber": 484,
          "imageUrl": "https://images.pokemontcg.io/dp1/11.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/dp1/11_hires.png",
          "types": [
              "Water"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "90",
          "retreatCost": [
              "Colorless",
              "Colorless"
          ],
          "convertedRetreatCost": 2,
          "number": "11",
          "artist": "Nakaoka",
          "rarity": "Rare Holo",
          "series": "Diamond & Pearl",
          "set": "Diamond & Pearl",
          "setCode": "dp1",
          "attacks": [
              {
                  "cost": [
                      "Water"
                  ],
                  "name": "Spacial Rend",
                  "text": "Search your deck for a Stadium card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. If there is any Stadium card in play, discard it.",
                  "damage": "10",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Water",
                      "Water",
                      "Colorless"
                  ],
                  "name": "Transback",
                  "text": "You may flip a coin. If heads, discard all Energy attached to Palkia and put the Defending Pokémon and all cards attached to it on top of your opponent's deck. Your opponent shuffles his or her deck afterward.",
                  "damage": "40",
                  "convertedEnergyCost": 3
              }
          ],
          "weaknesses": [
              {
                  "type": "Lightning",
                  "value": "+20"
              }
          ]
      },
      {
          "id": "ex16-41",
          "name": "Vigoroth",
          "nationalPokedexNumber": 288,
          "imageUrl": "https://images.pokemontcg.io/ex16/41.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/ex16/41_hires.png",
          "types": [
              "Colorless"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 1",
          "evolvesFrom": "Slakoth",
          "ability": {
              "name": "Strikes Back",
              "text": "If Vigoroth is your Active Pokémon and is damaged by an opponent's attack (even if Vigoroth is Knocked Out), put 1 damage counter on the Attacking Pokémon.",
              "type": "Poké-Body"
          },
          "hp": "70",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "41",
          "artist": "Hajime Kusajima",
          "rarity": "Uncommon",
          "series": "EX",
          "set": "Power Keepers",
          "setCode": "ex16",
          "attacks": [
              {
                  "cost": [
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Ambush",
                  "text": "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
                  "damage": "20+",
                  "convertedEnergyCost": 2
              }
          ],
          "weaknesses": [
              {
                  "type": "Fighting",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "det1-9",
          "name": "Greninja",
          "nationalPokedexNumber": 658,
          "imageUrl": "https://images.pokemontcg.io/det1/9.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/det1/9_hires.png",
          "types": [
              "Water"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 2",
          "evolvesFrom": "Frogadier",
          "ability": {
              "name": "Evasion Jutsu",
              "text": "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
              "type": "Ability"
          },
          "hp": "140",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "9",
          "rarity": "Rare Ultra",
          "series": "Sun & Moon",
          "set": "Detective Pikachu",
          "setCode": "det1",
          "attacks": [
              {
                  "cost": [
                      "Water",
                      "Water"
                  ],
                  "name": "Furious Shurikens",
                  "text": "This attack does 50 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
                  "damage": "",
                  "convertedEnergyCost": 2
              }
          ],
          "weaknesses": [
              {
                  "type": "Grass",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "col1-6",
          "name": "Groudon",
          "nationalPokedexNumber": 383,
          "imageUrl": "https://images.pokemontcg.io/col1/6.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/col1/6_hires.png",
          "types": [
              "Fighting"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "100",
          "retreatCost": [
              "Colorless",
              "Colorless",
              "Colorless",
              "Colorless"
          ],
          "convertedRetreatCost": 4,
          "number": "6",
          "artist": "Ryo Ueda",
          "rarity": "Rare Holo",
          "series": "HeartGold & SoulSilver",
          "set": "Call of Legends",
          "setCode": "col1",
          "attacks": [
              {
                  "cost": [
                      "Fighting",
                      "Fighting",
                      "Fighting",
                      "Fighting"
                  ],
                  "name": "Volcano Stomp",
                  "text": "Flip a coin. If heads, discard the top 4 cards of your opponent's deck. If tails, discard the top 4 cards of your deck.",
                  "damage": "80",
                  "convertedEnergyCost": 4
              }
          ],
          "weaknesses": [
              {
                  "type": "Grass",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "base5-77",
          "name": "Nightly Garbage Run",
          "imageUrl": "https://images.pokemontcg.io/base5/77.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/base5/77_hires.png",
          "supertype": "Trainer",
          "subtype": "",
          "number": "77",
          "artist": "Sumiyoshi Kizuki",
          "rarity": "Uncommon",
          "series": "Base",
          "set": "Team Rocket",
          "setCode": "base5",
          "text": [
              "Choose up to 3 Basic Pokémon cards, Evolution cards, and/or basic Energy cards from your discard pile. Show them to your opponent and shuffle them into your deck."
          ]
      },
      {
          "id": "base4-108",
          "name": "Super Energy Removal",
          "imageUrl": "https://images.pokemontcg.io/base4/108.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/base4/108_hires.png",
          "supertype": "Trainer",
          "subtype": "",
          "number": "108",
          "artist": "Keiji Kinebuchi",
          "rarity": "Rare",
          "series": "Base",
          "set": "Base Set 2",
          "setCode": "base4",
          "text": [
              "Discard 1 Energy card attached to 1 of your own Pokémon in order to choose 1 of your opponent's Pokémon and up to 2 Energy cards attached to it. Discard those energy cards."
          ]
      },
      {
          "id": "bw5-17",
          "name": "Blaziken",
          "nationalPokedexNumber": 257,
          "imageUrl": "https://images.pokemontcg.io/bw5/17.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/bw5/17_hires.png",
          "types": [
              "Fire"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 2",
          "evolvesFrom": "Combusken",
          "hp": "140",
          "retreatCost": [
              "Colorless",
              "Colorless"
          ],
          "convertedRetreatCost": 2,
          "number": "17",
          "artist": "TOKIYA",
          "rarity": "Rare Holo",
          "series": "Black & White",
          "set": "Dark Explorers",
          "setCode": "bw5",
          "attacks": [
              {
                  "cost": [
                      "Fire",
                      "Colorless"
                  ],
                  "name": "Blaze Kick",
                  "text": "Flip a coin. If heads, this attack does 30 more damage. If tails, the Defending Pokémon is now Burned.",
                  "damage": "40+",
                  "convertedEnergyCost": 2
              },
              {
                  "cost": [
                      "Fire",
                      "Fire",
                      "Colorless"
                  ],
                  "name": "Flamethrower",
                  "text": "Discard an Energy attached to this Pokémon.",
                  "damage": "130",
                  "convertedEnergyCost": 3
              }
          ],
          "weaknesses": [
              {
                  "type": "Water",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "dp1-12",
          "name": "Rhyperior",
          "nationalPokedexNumber": 464,
          "imageUrl": "https://images.pokemontcg.io/dp1/12.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/dp1/12_hires.png",
          "types": [
              "Fighting"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 2",
          "evolvesFrom": "Rhydon",
          "ability": {
              "name": "Earth Fissure",
              "text": "Once during your turn, when you play Rhyperior from your hand to evolve 1 of your Pokémon, you may discard the top 3 cards from your opponent's deck.",
              "type": "Poké-Power"
          },
          "hp": "140",
          "retreatCost": [
              "Colorless",
              "Colorless",
              "Colorless",
              "Colorless"
          ],
          "convertedRetreatCost": 4,
          "number": "12",
          "artist": "Nakaoka",
          "rarity": "Rare Holo",
          "series": "Diamond & Pearl",
          "set": "Diamond & Pearl",
          "setCode": "dp1",
          "attacks": [
              {
                  "cost": [
                      "Fighting",
                      "Fighting",
                      "Colorless"
                  ],
                  "name": "Rock Wrecker",
                  "text": "This attack's damage isn't affected by Weakness or Resistance. Rhyperior can't attack during your next turn.",
                  "damage": "80",
                  "convertedEnergyCost": 3
              }
          ],
          "resistances": [
              {
                  "type": "Lightning",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Water",
                  "value": "+30"
              }
          ]
      },
      {
          "id": "ex16-44",
          "name": "Baltoy",
          "nationalPokedexNumber": 343,
          "imageUrl": "https://images.pokemontcg.io/ex16/44.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/ex16/44_hires.png",
          "types": [
              "Psychic"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "50",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "44",
          "artist": "Mitsuhiro Arita",
          "rarity": "Common",
          "series": "EX",
          "set": "Power Keepers",
          "setCode": "ex16",
          "attacks": [
              {
                  "cost": [
                      "Psychic"
                  ],
                  "name": "Psybeam",
                  "text": "Flip a coin. If heads, the Defending Pokémon is now Confused.",
                  "damage": "10",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Spinning Attack",
                  "text": "",
                  "damage": "20",
                  "convertedEnergyCost": 2
              }
          ],
          "weaknesses": [
              {
                  "type": "Psychic",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "hgss3-4",
          "name": "Gliscor",
          "nationalPokedexNumber": 472,
          "imageUrl": "https://images.pokemontcg.io/hgss3/4.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/hgss3/4_hires.png",
          "types": [
              "Fighting"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 1",
          "evolvesFrom": "Gligar",
          "hp": "90",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "4",
          "artist": "Naoki Saito",
          "rarity": "Rare Holo",
          "series": "HeartGold & SoulSilver",
          "set": "HS—Undaunted",
          "setCode": "hgss3",
          "attacks": [
              {
                  "cost": [
                      "Fighting"
                  ],
                  "name": "Ninja Fang",
                  "text": "If, before Gliscor does damage, the Defending Pokémon has no damage counters on it and is then damaged by this attack (after applying Weakness and Resistance), the Defending Pokémon is now Paralyzed.",
                  "damage": "30",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Fighting",
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Poison Jab",
                  "text": "The Defending Pokémon is now Poisoned.",
                  "damage": "50",
                  "convertedEnergyCost": 3
              }
          ],
          "resistances": [
              {
                  "type": "Lightning",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Water",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "ex8-7",
          "name": "Dusclops",
          "nationalPokedexNumber": 356,
          "imageUrl": "https://images.pokemontcg.io/ex8/7.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/ex8/7_hires.png",
          "types": [
              "Psychic"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 1",
          "evolvesFrom": "Duskull",
          "hp": "70",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "7",
          "artist": "Tomoko Wakai",
          "rarity": "Rare Holo",
          "series": "EX",
          "set": "Deoxys",
          "setCode": "ex8",
          "attacks": [
              {
                  "cost": [
                      "Psychic"
                  ],
                  "name": "Psychic Removal",
                  "text": "Flip 2 coins. If both of them are heads, discard all Energy attached to the Defending Pokémon.",
                  "damage": "20",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Psychic",
                      "Psychic",
                      "Colorless"
                  ],
                  "name": "Powerful Hand",
                  "text": "Count the number of cards in your hand. Put that many damage counters on the Defending Pokémon. You can't put more than 7 damage counters in this way.",
                  "damage": "",
                  "convertedEnergyCost": 3
              }
          ],
          "resistances": [
              {
                  "type": "Fighting",
                  "value": "-30"
              }
          ],
          "weaknesses": [
              {
                  "type": "Darkness",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "det1-11",
          "name": "Mr. Mime",
          "nationalPokedexNumber": 122,
          "imageUrl": "https://images.pokemontcg.io/det1/11.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/det1/11_hires.png",
          "types": [
              "Psychic"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "evolvesFrom": "",
          "ability": {
              "name": "Pantomime",
              "text": "When you play this Pokémon from your hand onto your Bench during your turn, you may switch 1 of your face-down Prize cards with the top card of your deck.",
              "type": "Ability"
          },
          "hp": "80",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "11",
          "rarity": "Rare",
          "series": "Sun & Moon",
          "set": "Detective Pikachu",
          "setCode": "det1",
          "attacks": [
              {
                  "cost": [
                      "Psychic",
                      "Colorless"
                  ],
                  "name": "Juggling",
                  "text": "Flip 4 coins. This attack does 20 damage for each heads.",
                  "damage": "20x",
                  "convertedEnergyCost": 2
              }
          ],
          "weaknesses": [
              {
                  "type": "Psychic",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "ex16-46",
          "name": "Cacnea",
          "nationalPokedexNumber": 331,
          "imageUrl": "https://images.pokemontcg.io/ex16/46.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/ex16/46_hires.png",
          "types": [
              "Grass"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "50",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "46",
          "artist": "Hajime Kusajima",
          "rarity": "Common",
          "series": "EX",
          "set": "Power Keepers",
          "setCode": "ex16",
          "attacks": [
              {
                  "cost": [
                      "Colorless"
                  ],
                  "name": "Feint Attack",
                  "text": "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
                  "damage": "",
                  "convertedEnergyCost": 1
              }
          ],
          "weaknesses": [
              {
                  "type": "Fire",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "hgss3-9",
          "name": "Togekiss",
          "nationalPokedexNumber": 468,
          "imageUrl": "https://images.pokemontcg.io/hgss3/9.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/hgss3/9_hires.png",
          "types": [
              "Colorless"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 2",
          "evolvesFrom": "Togetic",
          "hp": "120",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "9",
          "artist": "Atsuko Nishida",
          "rarity": "Rare Holo",
          "series": "HeartGold & SoulSilver",
          "set": "HS—Undaunted",
          "setCode": "hgss3",
          "attacks": [
              {
                  "cost": [
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Blessed Wings",
                  "text": "Remove all damage counters from each of your Pokémon. Shuffle Togekiss and all cards attached to it back into your deck.",
                  "damage": "",
                  "convertedEnergyCost": 2
              },
              {
                  "cost": [
                      "Colorless",
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Air Cutter",
                  "text": "Flip a coin. If tails, this attack does nothing.",
                  "damage": "80",
                  "convertedEnergyCost": 3
              }
          ],
          "resistances": [
              {
                  "type": "Fighting",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Lightning",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "dp1-13",
          "name": "Roserade",
          "nationalPokedexNumber": 407,
          "imageUrl": "https://images.pokemontcg.io/dp1/13.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/dp1/13_hires.png",
          "types": [
              "Grass"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 1",
          "evolvesFrom": "Roselia",
          "hp": "90",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "13",
          "artist": "Nakaoka",
          "rarity": "Rare Holo",
          "series": "Diamond & Pearl",
          "set": "Diamond & Pearl",
          "setCode": "dp1",
          "attacks": [
              {
                  "cost": [
                      "Grass",
                      "Grass"
                  ],
                  "name": "Poison Sting",
                  "text": "The Defending Pokémon is now Poisoned.",
                  "damage": "30",
                  "convertedEnergyCost": 2
              },
              {
                  "cost": [
                      "Grass",
                      "Grass",
                      "Colorless"
                  ],
                  "name": "Spike Whip",
                  "text": "If Budew is anywhere under Roserade, choose 1 of your opponent's Benched Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
                  "damage": "50",
                  "convertedEnergyCost": 3
              }
          ],
          "weaknesses": [
              {
                  "type": "Fire",
                  "value": "+20"
              }
          ]
      },
      {
          "id": "dp1-15",
          "name": "Skuntank",
          "nationalPokedexNumber": 435,
          "imageUrl": "https://images.pokemontcg.io/dp1/15.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/dp1/15_hires.png",
          "types": [
              "Darkness"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 1",
          "evolvesFrom": "Stunky",
          "hp": "90",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "15",
          "artist": "Hiroaki Ito",
          "rarity": "Rare Holo",
          "series": "Diamond & Pearl",
          "set": "Diamond & Pearl",
          "setCode": "dp1",
          "attacks": [
              {
                  "cost": [
                      "Darkness",
                      "Darkness"
                  ],
                  "name": "Frustration",
                  "text": "Choose 1 of your opponent's Pokémon that doesn't have any damage counters on it. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
                  "damage": "",
                  "convertedEnergyCost": 2
              },
              {
                  "cost": [
                      "Darkness",
                      "Darkness",
                      "Colorless"
                  ],
                  "name": "Toxic Cloud",
                  "text": "Flip a coin. If heads, the Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
                  "damage": "30",
                  "convertedEnergyCost": 3
              }
          ],
          "resistances": [
              {
                  "type": "Psychic",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Fighting",
                  "value": "+20"
              }
          ]
      },
      {
          "id": "ex8-14",
          "name": "Shedinja",
          "nationalPokedexNumber": 292,
          "imageUrl": "https://images.pokemontcg.io/ex8/14.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/ex8/14_hires.png",
          "types": [
              "Psychic"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 1",
          "evolvesFrom": "Nincada",
          "ability": {
              "name": "Empty Shell",
              "text": "When Shedinja is Knocked Out, your opponent doesn't take any Prize cards.",
              "type": "Poké-Body"
          },
          "hp": "50",
          "number": "14",
          "artist": "Yukiko Baba",
          "rarity": "Rare Holo",
          "series": "EX",
          "set": "Deoxys",
          "setCode": "ex8",
          "attacks": [
              {
                  "cost": [
                      "Colorless"
                  ],
                  "name": "Extra Curse",
                  "text": "Put 2 damage counters on the Defending Pokémon. If the Defending Pokémon is Pokémon-ex, put 4 damage counters instead.",
                  "damage": "",
                  "convertedEnergyCost": 1
              }
          ]
      },
      {
          "id": "base4-117",
          "name": "Super Potion",
          "imageUrl": "https://images.pokemontcg.io/base4/117.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/base4/117_hires.png",
          "supertype": "Trainer",
          "subtype": "",
          "number": "117",
          "artist": "Keiji Kinebuchi",
          "rarity": "Uncommon",
          "series": "Base",
          "set": "Base Set 2",
          "setCode": "base4",
          "text": [
              "Discard 1 Energy card attached to 1 of your own Pokémon in order to remove up to 4 damage counters from that Pokémon."
          ]
      },
      {
          "id": "base4-121",
          "name": "Poké Ball",
          "imageUrl": "https://images.pokemontcg.io/base4/121.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/base4/121_hires.png",
          "supertype": "Trainer",
          "subtype": "",
          "number": "121",
          "artist": "Keiji Kinebuchi",
          "rarity": "Common",
          "series": "Base",
          "set": "Base Set 2",
          "setCode": "base4",
          "text": [
              "Flip a coin. If heads, you may search your deck for any Basic Pokémon or Evolution card. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward."
          ]
      },
      {
          "id": "hgss3-11",
          "name": "Dodrio",
          "nationalPokedexNumber": 85,
          "imageUrl": "https://images.pokemontcg.io/hgss3/11.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/hgss3/11_hires.png",
          "types": [
              "Colorless"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 1",
          "evolvesFrom": "Doduo",
          "ability": {
              "name": "Retreat Aid",
              "text": "As long as Dodrio is on your Bench, your Active Pokémon's Retreat Cost is ColorlessColorless less.",
              "type": "Poké-Body"
          },
          "hp": "80",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "11",
          "artist": "Yukiko Baba",
          "rarity": "Rare",
          "series": "HeartGold & SoulSilver",
          "set": "HS—Undaunted",
          "setCode": "hgss3",
          "attacks": [
              {
                  "cost": [
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Incessant Peck",
                  "text": "Flip a coin until you get tails. This attack does 20 damage plus 20 more damage for each heads.",
                  "damage": "20+",
                  "convertedEnergyCost": 2
              }
          ],
          "resistances": [
              {
                  "type": "Fighting",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Lightning",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "dp1-16",
          "name": "Staraptor",
          "nationalPokedexNumber": 398,
          "imageUrl": "https://images.pokemontcg.io/dp1/16.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/dp1/16_hires.png",
          "types": [
              "Colorless"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 2",
          "evolvesFrom": "Staravia",
          "hp": "100",
          "convertedRetreatCost": 0,
          "number": "16",
          "artist": "Masahiko Ishii",
          "rarity": "Rare Holo",
          "series": "Diamond & Pearl",
          "set": "Diamond & Pearl",
          "setCode": "dp1",
          "attacks": [
              {
                  "cost": [
                      "Colorless"
                  ],
                  "name": "Accelerative Dive",
                  "text": "Flip a coin. If tails, this attack does nothing. If heads, prevent all damage done to Staraptor by attacks (both yours and your opponent's) until the end of your next turn.",
                  "damage": "30",
                  "convertedEnergyCost": 1
              },
              {
                  "cost": [
                      "Colorless",
                      "Colorless",
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Brave Heart",
                  "text": "Flip a coin. If tails, Staraptor does 100 damage to itself.",
                  "damage": "100",
                  "convertedEnergyCost": 4
              }
          ],
          "resistances": [
              {
                  "type": "Fighting",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Lightning",
                  "value": "+30"
              }
          ]
      },
      {
          "id": "ex8-15",
          "name": "Slaking",
          "nationalPokedexNumber": 289,
          "imageUrl": "https://images.pokemontcg.io/ex8/15.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/ex8/15_hires.png",
          "types": [
              "Colorless"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 2",
          "evolvesFrom": "Vigoroth",
          "ability": {
              "name": "Lazy Aura",
              "text": "As long as Slaking is your Active Pokémon, any damage done by attacks from your opponent's Pokémon-ex is reduced by 30 (before applying Weakness and Resistance).",
              "type": "Poké-Body"
          },
          "hp": "120",
          "retreatCost": [
              "Colorless",
              "Colorless",
              "Colorless"
          ],
          "convertedRetreatCost": 3,
          "number": "15",
          "artist": "Mitsuhiro Arita",
          "rarity": "Rare Holo",
          "series": "EX",
          "set": "Deoxys",
          "setCode": "ex8",
          "attacks": [
              {
                  "cost": [
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Amnesia",
                  "text": "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
                  "damage": "20",
                  "convertedEnergyCost": 2
              },
              {
                  "cost": [
                      "Colorless",
                      "Colorless",
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Lazy Headbutt",
                  "text": "Slaking is now Asleep.",
                  "damage": "70",
                  "convertedEnergyCost": 4
              }
          ],
          "weaknesses": [
              {
                  "type": "Fighting",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "sm4-8",
          "name": "Shelmet",
          "nationalPokedexNumber": 616,
          "imageUrl": "https://images.pokemontcg.io/sm4/8.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/sm4/8_hires.png",
          "types": [
              "Grass"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "60",
          "retreatCost": [
              "Colorless",
              "Colorless",
              "Colorless"
          ],
          "convertedRetreatCost": 3,
          "number": "8",
          "artist": "OOYAMA",
          "rarity": "Common",
          "series": "Sun & Moon",
          "set": "Crimson Invasion",
          "setCode": "sm4",
          "attacks": [
              {
                  "cost": [
                      "Grass"
                  ],
                  "name": "Absorb",
                  "text": "Heal 10 damage from this Pokémon.",
                  "damage": "10",
                  "convertedEnergyCost": 1
              }
          ],
          "weaknesses": [
              {
                  "type": "Fire",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "xy11-46",
          "name": "Drifloon",
          "nationalPokedexNumber": 425,
          "imageUrl": "https://images.pokemontcg.io/xy11/46.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/xy11/46_hires.png",
          "types": [
              "Psychic"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "60",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "46",
          "artist": "kodama",
          "rarity": "Common",
          "series": "XY",
          "set": "Steam Siege",
          "setCode": "xy11",
          "attacks": [
              {
                  "cost": [
                      "Colorless"
                  ],
                  "name": "Transfer Pain",
                  "text": "Move 1 damage counter from 1 of your Pokémon to 1 of your opponent's Pokémon.",
                  "damage": "",
                  "convertedEnergyCost": 1
              }
          ],
          "resistances": [
              {
                  "type": "Fighting",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Darkness",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "det1-14",
          "name": "Jigglypuff",
          "nationalPokedexNumber": 39,
          "imageUrl": "https://images.pokemontcg.io/det1/14.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/det1/14_hires.png",
          "types": [
              "Fairy"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "evolvesFrom": "",
          "hp": "60",
          "retreatCost": [
              "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "14",
          "rarity": "Common",
          "series": "Sun & Moon",
          "set": "Detective Pikachu",
          "setCode": "det1",
          "attacks": [
              {
                  "cost": [
                      "Fairy"
                  ],
                  "name": "Healing Melody",
                  "text": "Heal 10 damage from each of your Pokémon.",
                  "damage": "",
                  "convertedEnergyCost": 1
              }
          ],
          "resistances": [
              {
                  "type": "Darkness",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Metal",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "hgss3-12",
          "name": "Drifblim",
          "nationalPokedexNumber": 426,
          "imageUrl": "https://images.pokemontcg.io/hgss3/12.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/hgss3/12_hires.png",
          "types": [
              "Psychic"
          ],
          "supertype": "Pokémon",
          "subtype": "Stage 1",
          "evolvesFrom": "Drifloon",
          "hp": "90",
          "convertedRetreatCost": 0,
          "number": "12",
          "artist": "Kagemaru Himeno",
          "rarity": "Rare",
          "series": "HeartGold & SoulSilver",
          "set": "HS—Undaunted",
          "setCode": "hgss3",
          "attacks": [
              {
                  "cost": [
                      "Psychic",
                      "Colorless"
                  ],
                  "name": "Balloon Tackle",
                  "text": "Drifblim does 20 damage to itself.",
                  "damage": "60",
                  "convertedEnergyCost": 2
              },
              {
                  "cost": [
                      "Colorless",
                      "Colorless",
                      "Colorless"
                  ],
                  "name": "Take Away",
                  "text": "Shuffle Drifblim and all cards attached to it back into your deck. Then, your opponent shuffles the Defending Pokémon and all cards attached to it into his or her deck. (You choose your new Active Pokémon first.)",
                  "damage": "",
                  "convertedEnergyCost": 3
              }
          ],
          "resistances": [
              {
                  "type": "Colorless",
                  "value": "-20"
              }
          ],
          "weaknesses": [
              {
                  "type": "Darkness",
                  "value": "×2"
              }
          ]
      },
      {
          "id": "gym1-105",
          "name": "Blaine's Last Resort",
          "imageUrl": "https://images.pokemontcg.io/gym1/105.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/gym1/105_hires.png",
          "supertype": "Trainer",
          "subtype": "",
          "number": "105",
          "artist": "Ken Sugimori",
          "rarity": "Uncommon",
          "series": "Gym",
          "set": "Gym Heroes",
          "setCode": "gym1",
          "text": [
              "You can't play this card if you have any cards in your hand other than Blaine's Last Resort. Show your hand to your opponent, then draw 5 cards."
          ]
      },
      {
          "id": "dp6-134",
          "name": "Snowpoint Temple",
          "imageUrl": "https://images.pokemontcg.io/dp6/134.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/dp6/134_hires.png",
          "supertype": "Trainer",
          "subtype": "Stadium",
          "number": "134",
          "artist": "Ryo Ueda",
          "rarity": "Uncommon",
          "series": "Diamond & Pearl",
          "set": "Legends Awakened",
          "setCode": "dp6",
          "text": [
              "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.",
              "Each Pokémon that isn't an Evolved Pokémon in play (both yours and your opponent's) gets +20 HP."
          ]
      },
      {
          "id": "dp6-135",
          "name": "Stark Mountain",
          "imageUrl": "https://images.pokemontcg.io/dp6/135.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/dp6/135_hires.png",
          "supertype": "Trainer",
          "subtype": "Stadium",
          "number": "135",
          "artist": "Ryo Ueda",
          "rarity": "Uncommon",
          "series": "Diamond & Pearl",
          "set": "Legends Awakened",
          "setCode": "dp6",
          "text": [
              "This card stays in play when you play it. Discard this card if another Stadium card comes into play. If another card with the same name is in play, you can't play this card.",
              "Once during each player's turn, that player may choose a Fire or Fighting Energy attached to 1 of his or her Pokémon and move that Energy to 1 of his or her Fire or Fighting Pokémon."
          ]
      }
  ]
}];