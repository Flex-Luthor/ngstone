import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.scss']
})
export class CardSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cards: any[] = [
  {
    "cardId": "NEW1_010",
    "name": "Al'Akir the Windlord",
    "cardSet": "Classic",
    "type": "Minion",
    "rarity": "Legendary",
    "cost": 8,
    "attack": 3,
    "health": 5,
    "text": "<b>Windfury, Charge, Divine Shield, Taunt</b>",
    "flavor": "He is the weakest of the four Elemental Lords.  And the other three don't let him forget it.",
    "artist": "Raymond Swanland",
    "collectible": true,
    "elite": true,
    "race": "Elemental",
    "playerClass": "Shaman",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/NEW1_010.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/NEW1_010_premium.gif",
    "locale": "enUS",
    "mechanics": [
      {
        "name": "Charge"
      },
      {
        "name": "Divine Shield"
      },
      {
        "name": "Windfury"
      },
      {
        "name": "Taunt"
      }
    ]
  },
  {
    "cardId": "EX1_414",
    "name": "Grommash Hellscream",
    "cardSet": "Classic",
    "type": "Minion",
    "faction": "Neutral",
    "rarity": "Legendary",
    "cost": 8,
    "attack": 4,
    "health": 9,
    "text": "<b>Charge</b>\\n<b>Enrage:</b> +6 Attack",
    "flavor": "Grommash drank the tainted blood of Mannoroth, dooming the orcs to green skin and red eyes!  Maybe not his best decision.",
    "artist": "Glenn Rane",
    "collectible": true,
    "elite": true,
    "playerClass": "Warrior",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_414.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_414_premium.gif",
    "locale": "enUS",
    "mechanics": [
      {
        "name": "Charge"
      },
      {
        "name": "Enrage"
      }
    ]
  },
  {
    "cardId": "NEW1_038",
    "name": "Gruul",
    "cardSet": "Classic",
    "type": "Minion",
    "rarity": "Legendary",
    "cost": 8,
    "attack": 7,
    "health": 7,
    "text": "At the end of each turn, gain +1/+1 .",
    "flavor": "He's Gruul \"the Dragonkiller\".  He just wanted to cuddle them… he never meant to… ",
    "artist": "Kev Walker",
    "collectible": true,
    "elite": true,
    "playerClass": "Neutral",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/NEW1_038.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/NEW1_038_premium.gif",
    "locale": "enUS"
  },
  {
    "cardId": "EX1_354",
    "name": "Lay on Hands",
    "cardSet": "Classic",
    "type": "Spell",
    "faction": "Neutral",
    "rarity": "Epic",
    "cost": 8,
    "text": "Restore #8 Health. Draw_3 cards.",
    "flavor": "A grammatically awkward life saver.",
    "artist": "Raymond Swanland",
    "collectible": true,
    "playerClass": "Paladin",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_354.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_354_premium.gif",
    "locale": "enUS"
  },
  {
    "cardId": "EX1_383",
    "name": "Tirion Fordring",
    "cardSet": "Classic",
    "type": "Minion",
    "faction": "Neutral",
    "rarity": "Legendary",
    "cost": 8,
    "attack": 6,
    "health": 6,
    "text": "<b>Divine Shield</b>. <b>Taunt</b>. <b>Deathrattle:</b> Equip a 5/3_Ashbringer.",
    "flavor": "If you haven't heard the Tirion Fordring theme song, it's because it doesn't exist.",
    "artist": "Brom",
    "collectible": true,
    "elite": true,
    "playerClass": "Paladin",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_383.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_383_premium.gif",
    "locale": "enUS",
    "mechanics": [
      {
        "name": "Divine Shield"
      },
      {
        "name": "Taunt"
      },
      {
        "name": "Deathrattle"
      }
    ]
  },
  {
    "cardId": "EX1_312",
    "name": "Twisting Nether",
    "cardSet": "Classic",
    "type": "Spell",
    "faction": "Neutral",
    "rarity": "Epic",
    "cost": 8,
    "text": "Destroy all minions.",
    "flavor": "The Twisting Nether is a formless place of magic and illusion and destroyed minions.",
    "artist": "Dave Allsop",
    "collectible": true,
    "playerClass": "Warlock",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_312.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_312_premium.gif",
    "locale": "enUS"
  }
]

}
