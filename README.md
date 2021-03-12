

# Strygwyr
[![npm](https://img.shields.io/npm/v/strygwyr.svg)](https://www.npmjs.com/package/strygwyr)
[![npm](https://img.shields.io/npm/dt/strygwyr.svg?maxAge=3600)](https://www.npmjs.com/package/strygwyr)
[![CodeFactor](https://www.codefactor.io/repository/github/sinkaroid/strygwyr/badge)](https://www.codefactor.io/repository/github/sinkaroid/strygwyr)  

Quick Dota 2 heroes wrapper.  
maintainable according liquipedia.
Mostly heroes but items and other things will added later.  
this modules using latest `localized_name` implementation,  
so if u type eg: `balanar`, `Outworld Devourer` and other aliases its will throw an error.
thats why [typings](#Typings) will help you out!


## Typings
typings file will help you and will be working to improve it.  
This allows editors like VSC to use intellisense/autocomplete to suggest functions and help out with parameters and to see what you'll be receiving as a result of function calls. 
Some heroes name eg: Nature's Prophet and Anti-Mage are replaced with underscore. see our [methodTable](#method)
## Installation

```
npm i strygwyr
```

--- 

## Herostats
This will return latest Hero status
```js
const wrapper = require("strygwyr");
const gwyr = new wrapper();

gwyr.stats.Phantom_Assassin().then((stry) => {
  console.log(stry.data);
});
```  

-------
        Base HP Regen => 0.25
        Base Mana Regen => 0
        Sight Range => 1800 / 800
        Attack Range => 150
        Missile Speed => Instant
        Attack Duration => 0.3 + 0.7
        Cast Duration => 0.3 + 0.5
        Base Attack Speed => 100
        Base Attack Time => 1.7
        Base Magic Resist => 25%
        Turn Rate => 0.6
  

## Herochanges
This will return latest Hero changes
```js
const wrapper = require("strygwyr");
const gwyr = new wrapper();

gwyr.changes.Phantom_Assassin().then((stry) => {
  console.log(stry.data);
});
```  

-------
        7.27b
        -  Base damage increased by 3
        -  Blur scepter cooldown reduced from 12 to 10
        -  Level 10 Talent changed from +12 Damage to -1s Stifling Dagger Cooldown
        -  Level 15 Talent changed from +25% Cleave to +350 Phantom Strike Cast Range
        -  Level 20 Talent increased from +30% Blur Evasion to +35%


## Herotalent
This will return latest Hero talents
```js
const wrapper = require("strygwyr");
const gwyr = new wrapper();

gwyr.talent.Phantom_Assassin().then((stry) => {
  console.log(stry.data);
});
```  

------

    Triple Strike Stifling Dagger ❮➖ ( 25 ) ➖❯ +100% Coup de Grace Critical Damage
    +35% Blur Evasion ❮➖ ( 20 ) ➖❯ -3 Armor Corruption
    +350 Phantom Strike Cast Range ❮➖ ( 15 ) ➖❯ 12% Lifesteal
    -1s Stifling Dagger Cooldown ❮➖ ( 10 ) ➖❯ +175 Health


## Await/Async example
```js
const wrapper = require("strygwyr");
const gwyr = new wrapper();

async function test() {
  console.log(await gwyr.stats.Phantom_Assassin());
}

test();
```
## Method
| Method                  | Description |
| ----------------------- | ----------- |
| `Anti_Mage()`           | Promise     |
| `Axe()`                 | Promise     |
| `Bane()`                | Promise     |
| `Bloodseeker()`         | Promise     |
| `Crystal_Maiden()`      | Promise     |
| `Drow_Ranger()`         | Promise     |
| `Earthshaker()`         | Promise     |
| `Juggernaut()`          | Promise     |
| `Mirana()`              | Promise     |
| `Morphling()`           | Promise     |
| `Shadow_Fiend()`        | Promise     |
| `Phantom_Lancer()`      | Promise     |
| `Puck()`                | Promise     |
| `Pudge()`               | Promise     |
| `Razor()`               | Promise     |
| `Sand_King()`           | Promise     |
| `Storm_Spirit()`        | Promise     |
| `Sven()`                | Promise     |
| `Tiny()`                | Promise     |
| `Vengeful_Spirit()`     | Promise     |
| `Windranger()`          | Promise     |
| `Zeus()`                | Promise     |
| `Kunkka()`              | Promise     |
| `Lina()`                | Promise     |
| `Lion()`                | Promise     |
| `Shadow_Shaman()`       | Promise     |
| `Slardar()`             | Promise     |
| `Tidehunter()`          | Promise     |
| `Witch_Doctor()`        | Promise     |
| `Lich()`                | Promise     |
| `Riki()`                | Promise     |
| `Enigma()`              | Promise     |
| `Tinker()`              | Promise     |
| `Sniper()`              | Promise     |
| `Necrophos()`           | Promise     |
| `Warlock()`             | Promise     |
| `Beastmaster()`         | Promise     |
| `Queen_of_Pain()`       | Promise     |
| `Venomancer()`          | Promise     |
| `Faceless_Void()`       | Promise     |
| `Wraith_King()`         | Promise     |
| `Death_Prophet()`       | Promise     |
| `Phantom_Assassin()`    | Promise     |
| `Pugna()`               | Promise     |
| `Templar_Assassin()`    | Promise     |
| `Viper()`               | Promise     |
| `Luna()`                | Promise     |
| `Dragon_Knight()`       | Promise     |
| `Dazzle()`              | Promise     |
| `Clockwerk()`           | Promise     |
| `Leshrac()`             | Promise     |
| `Natures_Prophet()`     | Promise     |
| `Lifestealer()`         | Promise     |
| `Dark_Seer()`           | Promise     |
| `Clinkz()`              | Promise     |
| `Omniknight()`          | Promise     |
| `Enchantress()`         | Promise     |
| `Huskar()`              | Promise     |
| `Night_Stalker()`       | Promise     |
| `Broodmother()`         | Promise     |
| `Bounty_Hunter()`       | Promise     |
| `Weaver()`              | Promise     |
| `Jakiro()`              | Promise     |
| `Batrider()`            | Promise     |
| `Chen()`                | Promise     |
| `Spectre()`             | Promise     |
| `Ancient_Apparition()`  | Promise     |
| `Doom()`                | Promise     |
| `Ursa()`                | Promise     |
| `Spirit_Breaker()`      | Promise     |
| `Gyrocopter()`          | Promise     |
| `Alchemist()`           | Promise     |
| `Invoker()`             | Promise     |
| `Silencer()`            | Promise     |
| `Outworld_Destroyer()`  | Promise     |
| `Lycan()`               | Promise     |
| `Brewmaster()`          | Promise     |
| `Shadow_Demon()`        | Promise     |
| `Lone_Druid()`          | Promise     |
| `Chaos_Knight()`        | Promise     |
| `Meepo()`               | Promise     |
| `Treant_Protector()`    | Promise     |
| `Ogre_Magi()`           | Promise     |
| `Undying()`             | Promise     |
| `Rubick()`              | Promise     |
| `Disruptor()`           | Promise     |
| `Nyx_Assassin()`        | Promise     |
| `Naga_Siren()`          | Promise     |
| `Keeper_of_the_Light()` | Promise     |
| `Io()`                  | Promise     |
| `Visage()`              | Promise     |
| `Slark()`               | Promise     |
| `Medusa()`              | Promise     |
| `Troll_Warlord()`       | Promise     |
| `Centaur_Warrunner()`   | Promise     |
| `Magnus()`              | Promise     |
| `Timbersaw()`           | Promise     |
| `Bristleback()`         | Promise     |
| `Tusk()`                | Promise     |
| `Skywrath_Mage()`       | Promise     |
| `Abaddon()`             | Promise     |
| `Elder_Titan()`         | Promise     |
| `Legion_Commander()`    | Promise     |
| `Techies()`             | Promise     |
| `Ember_Spirit()`        | Promise     |
| `Earth_Spirit()`        | Promise     |
| `Underlord()`           | Promise     |
| `Terrorblade()`         | Promise     |
| `Phoenix()`             | Promise     |
| `Oracle()`              | Promise     |
| `Winter_Wyvern()`       | Promise     |
| `Arc_Warden()`          | Promise     |
| `Monkey_King()`         | Promise     |
| `Dark_Willow()`         | Promise     |
| `Pangolier()`           | Promise     |
| `Grimstroke()`          | Promise     |
| `Hoodwink()`            | Promise     |
| `Void_Spirit()`         | Promise     |
| `Snapfire()`            | Promise     |
| `Mars()`                | Promise     |

### further:
- [Liquipedia DotA wiki](https://liquipedia.net/dota2/Main_Page)  
- [The OpenDota Project](https://github.com/odota)