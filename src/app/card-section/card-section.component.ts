import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.scss']
})
export class CardSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // https://api.hearthstonejson.com/v1/18336/enUS/cards.json

  cards: any[] = [
  {
    "cardId": "EX1_067",
    "dbfId": "281",
    "name": "Argent Commander",
    "cardSet": "Classic",
    "type": "Minion",
    "faction": "Neutral",
    "rarity": "Rare",
    "cost": 6,
    "attack": 4,
    "health": 2,
    "text": "<b>Charge</b>\\n<b>Divine Shield</b>",
    "flavor": "The Argent Dawn stands vigilant against the Scourge, as well as people who cut in line at coffee shops.",
    "artist": "James Ryman",
    "collectible": true,
    "playerClass": "Neutral",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_067.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_067_premium.gif",
    "locale": "enUS",
    "mechanics": [
      {
        "name": "Charge"
      },
      {
        "name": "Divine Shield"
      }
    ]
  },
  {
    "cardId": "EX1_384",
    "dbfId": "1174",
    "name": "Avenging Wrath",
    "cardSet": "Classic",
    "type": "Spell",
    "faction": "Neutral",
    "rarity": "Epic",
    "cost": 6,
    "text": "Deal $8 damage randomly split among all enemies.",
    "flavor": "Wham! Wham! Wham! Wham! Wham! Wham! Wham! Wham!",
    "artist": "Alex Garner",
    "collectible": true,
    "playerClass": "Paladin",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_384.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_384_premium.gif",
    "locale": "enUS",
    "mechanics": [
      {
        "name": "ImmuneToSpellpower"
      }
    ]
  },
  {
    "cardId": "CS2_028",
    "dbfId": "457",
    "name": "Blizzard",
    "cardSet": "Classic",
    "type": "Spell",
    "faction": "Neutral",
    "rarity": "Rare",
    "cost": 6,
    "text": "Deal $2 damage to all enemy minions and <b>Freeze</b> them.",
    "flavor": "This spell can be very Entertaining.",
    "artist": "Chris Seaman",
    "collectible": true,
    "playerClass": "Mage",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/CS2_028.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/CS2_028_premium.gif",
    "locale": "enUS",
    "mechanics": [
      {
        "name": "Freeze"
      }
    ]
  },
  {
    "cardId": "EX1_091",
    "dbfId": "272",
    "name": "Cabal Shadow Priest",
    "cardSet": "Classic",
    "type": "Minion",
    "faction": "Neutral",
    "rarity": "Epic",
    "cost": 6,
    "attack": 4,
    "health": 5,
    "text": "<b>Battlecry:</b> Take control of an enemy minion that has 2 or less Attack.",
    "flavor": "You never know who may be secretly working for the Cabal....",
    "artist": "Chippy",
    "collectible": true,
    "playerClass": "Priest",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_091.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_091_premium.gif",
    "locale": "enUS",
    "mechanics": [
      {
        "name": "Battlecry"
      }
    ]
  },
  {
    "cardId": "EX1_110",
    "dbfId": "420",
    "name": "Cairne Bloodhoof",
    "cardSet": "Classic",
    "type": "Minion",
    "faction": "Alliance",
    "rarity": "Legendary",
    "cost": 6,
    "attack": 4,
    "health": 5,
    "text": "<b>Deathrattle:</b> Summon a 4/5 Baine Bloodhoof.",
    "flavor": "Cairne was killed by Garrosh, so... don't put this guy in a Warrior deck.  It's pretty insensitive.",
    "artist": "Wayne Reynolds",
    "collectible": true,
    "elite": true,
    "playerClass": "Neutral",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_110.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_110_premium.gif",
    "locale": "enUS",
    "mechanics": [
      {
        "name": "Deathrattle"
      }
    ]
  },
  {
    "cardId": "EX1_283",
    "dbfId": "512",
    "name": "Frost Elemental",
    "cardSet": "Classic",
    "type": "Minion",
    "faction": "Neutral",
    "rarity": "Common",
    "cost": 6,
    "attack": 5,
    "health": 5,
    "text": "<b>Battlecry:</b> <b>Freeze</b> a_character.",
    "flavor": "When a Water elemental and an Ice elemental love each other VERY much...",
    "artist": "Dan Scott",
    "collectible": true,
    "race": "Elemental",
    "playerClass": "Neutral",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_283.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_283_premium.gif",
    "locale": "enUS",
    "mechanics": [
      {
        "name": "Battlecry"
      },
      {
        "name": "Freeze"
      }
    ]
  },
  {
    "cardId": "EX1_095",
    "dbfId": "932",
    "name": "Gadgetzan Auctioneer",
    "cardSet": "Classic",
    "type": "Minion",
    "faction": "Neutral",
    "rarity": "Rare",
    "cost": 6,
    "attack": 4,
    "health": 4,
    "text": "Whenever you cast a spell, draw a card.",
    "flavor": "He used to run the black market auction house, but there was just too much violence and he had to move.",
    "artist": "Matt Dixon",
    "collectible": true,
    "playerClass": "Neutral",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_095.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_095_premium.gif",
    "locale": "enUS"
  },
  {
    "cardId": "NEW1_040",
    "dbfId": "640",
    "name": "Hogger",
    "cardSet": "Classic",
    "type": "Minion",
    "rarity": "Legendary",
    "cost": 6,
    "attack": 4,
    "health": 4,
    "text": "At the end of your turn, summon a 2/2 Gnoll with_<b>Taunt</b>.",
    "flavor": "Hogger is super powerful. If you kill him, it's because he <i>let</i> you.",
    "artist": "Laurel D. Austin",
    "collectible": true,
    "elite": true,
    "playerClass": "Neutral",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/NEW1_040.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/NEW1_040_premium.gif",
    "locale": "enUS",
    "mechanics": [
      {
        "name": "Taunt"
      }
    ]
  },
  {
    "cardId": "EX1_624",
    "dbfId": "1365",
    "name": "Holy Fire",
    "cardSet": "Classic",
    "type": "Spell",
    "rarity": "Rare",
    "cost": 6,
    "text": "Deal $5 damage. Restore #5 Health to your hero.",
    "flavor": "Often followed by Holy Smokes!",
    "artist": "Miguel Coimbra",
    "collectible": true,
    "playerClass": "Priest",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_624.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_624_premium.gif",
    "locale": "enUS"
  },
  {
    "cardId": "EX1_614",
    "dbfId": "556",
    "name": "Illidan Stormrage",
    "cardSet": "Classic",
    "type": "Minion",
    "faction": "Neutral",
    "rarity": "Legendary",
    "cost": 6,
    "attack": 7,
    "health": 5,
    "text": "Whenever you play a card, summon a 2/1 Flame of_Azzinoth.",
    "flavor": "Illidan's brother, Malfurion, imprisoned him beneath Hyjal for 10,000 years.  Stormrages are not good at letting go of grudges.",
    "artist": "Alex Horley Orlandelli",
    "collectible": true,
    "elite": true,
    "race": "Demon",
    "playerClass": "Neutral",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_614.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_614_premium.gif",
    "locale": "enUS"
  },
  {
    "cardId": "EX1_tk34",
    "dbfId": "1143",
    "name": "Infernal",
    "cardSet": "Classic",
    "type": "Minion",
    "faction": "Neutral",
    "rarity": "Common",
    "cost": 6,
    "attack": 6,
    "health": 6,
    "race": "Demon",
    "playerClass": "Warlock",
    "img": "http://wow.zamimg.com/images/hearthstone/cards/enus/original/EX1_tk34.png",
    "imgGold": "http://wow.zamimg.com/images/hearthstone/cards/enus/animated/EX1_tk34_premium.gif",
    "locale": "enUS"
  },
  {
    "cardId": "NEW1_005",
    "dbfId": "287",
    "name": "Kidnapper",
    "cardSet": "Classic",
    "type": "Minion",
    "rarity": "Epic",
    "cost": 6,
    "attack": 5,
    "health": 3,
    "text": "<b>Combo:</b> Return a minion to_its owner's hand.",
    "flavor": "He just wants people to see his vacation photos.",
    "artist": "Dave Allsop",
    "collectible": true,
    "playerClass": "Rogue",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/NEW1_005.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/NEW1_005_premium.gif",
    "locale": "enUS",
    "mechanics": [
      {
        "name": "Combo"
      }
    ]
  },
  {
    "cardId": "EX1_583",
    "dbfId": "424",
    "name": "Priestess of Elune",
    "cardSet": "Classic",
    "type": "Minion",
    "faction": "Neutral",
    "rarity": "Common",
    "cost": 6,
    "attack": 5,
    "health": 4,
    "text": "<b>Battlecry:</b> Restore 4 Health to your hero.",
    "flavor": "If she threatens to \"moon\" you, it's not what you think.",
    "artist": "Dan Scott",
    "collectible": true,
    "playerClass": "Neutral",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_583.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_583_premium.gif",
    "locale": "enUS",
    "mechanics": [
      {
        "name": "Battlecry"
      }
    ]
  },
  {
    "cardId": "EX1_534",
    "dbfId": "1261",
    "name": "Savannah Highmane",
    "cardSet": "Classic",
    "type": "Minion",
    "rarity": "Rare",
    "cost": 6,
    "attack": 6,
    "health": 5,
    "text": "<b>Deathrattle:</b> Summon two 2/2 Hyenas.",
    "flavor": "In the jungle, the mighty jungle, the lion gets slowly consumed by hyenas.",
    "artist": "Milivoj Ceran",
    "collectible": true,
    "race": "Beast",
    "playerClass": "Hunter",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_534.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_534_premium.gif",
    "locale": "enUS",
    "mechanics": [
      {
        "name": "Deathrattle"
      }
    ]
  },
  {
    "cardId": "EX1_309",
    "dbfId": "1100",
    "name": "Siphon Soul",
    "cardSet": "Classic",
    "type": "Spell",
    "faction": "Neutral",
    "rarity": "Rare",
    "cost": 6,
    "text": "Destroy a minion. Restore #3 Health to_your hero.",
    "flavor": "You probably should avoid siphoning your own soul.  You might create some kind of weird infinite loop.",
    "artist": "Tyler Walpole",
    "collectible": true,
    "playerClass": "Warlock",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_309.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_309_premium.gif",
    "locale": "enUS"
  },
  {
    "cardId": "EX1_032",
    "dbfId": "759",
    "name": "Sunwalker",
    "cardSet": "Classic",
    "type": "Minion",
    "faction": "Alliance",
    "rarity": "Rare",
    "cost": 6,
    "attack": 4,
    "health": 5,
    "text": "<b>Taunt</b>\\n<b>Divine Shield</b>",
    "flavor": "She doesn’t ACTUALLY walk on the Sun.  It's just a name.  Don’t worry!",
    "artist": "Andrea Uderzo",
    "collectible": true,
    "playerClass": "Neutral",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_032.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_032_premium.gif",
    "locale": "enUS",
    "mechanics": [
      {
        "name": "Taunt"
      },
      {
        "name": "Divine Shield"
      }
    ]
  },
  {
    "cardId": "EX1_623",
    "dbfId": "1364",
    "name": "Temple Enforcer",
    "cardSet": "Classic",
    "type": "Minion",
    "rarity": "Common",
    "cost": 6,
    "attack": 6,
    "health": 6,
    "text": "<b>Battlecry:</b> Give a friendly minion +3 Health.",
    "flavor": "He also moonlights Thursday nights as a bouncer at the Pig and Whistle Tavern.",
    "artist": "Daren Bader",
    "collectible": true,
    "playerClass": "Priest",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_623.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_623_premium.gif",
    "locale": "enUS",
    "mechanics": [
      {
        "name": "Battlecry"
      }
    ]
  },
  {
    "cardId": "EX1_577",
    "dbfId": "962",
    "name": "The Beast",
    "cardSet": "Classic",
    "type": "Minion",
    "faction": "Neutral",
    "rarity": "Legendary",
    "cost": 6,
    "attack": 9,
    "health": 7,
    "text": "<b>Deathrattle:</b> Summon a 3/3 Finkle Einhorn for your opponent.",
    "flavor": "He lives in Blackrock Mountain.  He eats Gnomes.  That's pretty much it.",
    "artist": "Glenn Rane",
    "collectible": true,
    "elite": true,
    "race": "Beast",
    "playerClass": "Neutral",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_577.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_577_premium.gif",
    "locale": "enUS",
    "mechanics": [
      {
        "name": "Deathrattle"
      }
    ]
  },
  {
    "cardId": "EX1_002",
    "dbfId": "1656",
    "name": "The Black Knight",
    "cardSet": "Classic",
    "type": "Minion",
    "rarity": "Legendary",
    "cost": 6,
    "attack": 4,
    "health": 5,
    "text": "<b>Battlecry:</b> Destroy an enemy minion with <b>Taunt</b>.",
    "flavor": "He was sent by the Lich King to disrupt the Argent Tournament.   We can pretty much mark that a failure.",
    "artist": "Alex Horley Orlandelli",
    "collectible": true,
    "elite": true,
    "playerClass": "Neutral",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_002.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_002_premium.gif",
    "locale": "enUS",
    "mechanics": [
      {
        "name": "Taunt"
      },
      {
        "name": "Battlecry"
      }
    ]
  },
  {
    "cardId": "EX1_033",
    "dbfId": "567",
    "name": "Windfury Harpy",
    "cardSet": "Classic",
    "type": "Minion",
    "faction": "Alliance",
    "rarity": "Common",
    "cost": 6,
    "attack": 4,
    "health": 5,
    "text": "<b>Windfury</b>",
    "flavor": "Harpies are not pleasant sounding.  That's the nicest I can put it.",
    "artist": "Luke Mancini",
    "collectible": true,
    "playerClass": "Neutral",
    "img": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/EX1_033.png",
    "imgGold": "http://media.services.zam.com/v1/media/byName/hs/cards/enus/animated/EX1_033_premium.gif",
    "locale": "enUS",
    "mechanics": [
      {
        "name": "Windfury"
      }
    ]
  }
]

}
