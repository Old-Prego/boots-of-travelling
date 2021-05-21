# TODOs 5/20/21

- Choice Logic (Priority 1)
  - When a choice is clicked,
    - Populate screen with matching result
    - If choice clicked matches the room's fight choice,
      - go to fight logic referencing the room's enemy
    - If choice clicked matches the room's "nextRoom" choice,
      - Pop up "next room" button or something
      - If "next room" button is clicked, populate next room referencing id
    - If choice clicked matches the room's "itemChoice",
      - add room's item to player character's inventory
    - After choice logic is finished, disable that choice so they can't click it again and return to other choices

- Fight Logic
  - Give player choice between different stats to use
    - Strength
    - Dexterity
    - Intelligence
    - Defense
  - Based on choice,
    - Take player_character stat (of chosen stat to use) and add any item stats that apply
    - If player stat + item stat > enemy stat
      - Player victory
      - Go back to choices
    - Else
      - Game Over screen

- Character Select
  - Display characters and stats
  - When character is selected, 
    - Update save data for user with the chosen character
    - Populate first room on screen

- Save Logic
  - Whenever a user/player progresses to the next room,
    - Update save data with new room ID
  - Whenever a user/player picks up an item,
    - Update save data with new item ID
  - Whenever a user/player starts a new run by choosing a character
    - Update save data with player_character ID
