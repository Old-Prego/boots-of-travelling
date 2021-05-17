# TODO List

## Config
- Connection stuff with sequelize

## Controllers



## Views / Screens
- Login
- Create Account
- Character Selection
- Adventure choice
- Continue (For when they log in)
- Introduction/Information
- Game Over (Win / Lose)


## Features
- Inventory / Items


## Models
- Player Characters
  - ID
  - Name
  - Attack (Description)
  - Defense
  - Strength
  - Intelligence
  - Dexterity
  - XP
- User
  - ID
  - Email
  - Hashed Password
  - Save Data ID
- Save Data
  - ID
  - Player Character ID
  - Defense
  - Strength
  - Intelligence
  - Dexterity
  - XP
  - Current Room ID
  - Items (IDs)
- Enemies
  - ID
  - Name
  - Attack (Description)
  - Defense
  - Strength
  - Intelligence
  - Dexterity
- Items
  - ID
  - Name
  - Description
  - Defense Boost
  - Strength Boost
  - Intelligence Boost
  - Dexterity Boost
- Rooms
  - ID
  - Name
  - Description
  - Choices
    - Option 1
    - Option 2
    - Option 3
    - Option 4
  - Outcomes
    - 1
    - 2
    - 3
    - 4
