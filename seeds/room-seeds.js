const { Room } = require('../models');

const roomData = [
    {
        name: 'The Shop',
        description: 'This shop is a mess! There are smashed windows, wooden shelves thrown to the floor, and mundane supplies strewn about. To the left, a wooden counter runs the length of the room with a lockbox seated on top. Behind the counter is a closed wooden door. What do you do?',
        choice1: 'Investigate the window',
        choice2: 'Investigate the door',
        choice3: 'Look for valuables',
        choice4: 'Check the lock box',
        result1: 'The windows have been smashed in, but it looks like the glass shards have mostly ended up outside of the shop. Maybe somebody broke the window from the inside?',
        result2: 'The door seems to have been forced open, but it is closed. You enter the next room and see a small living quarters for the shopkeep',
        result3: 'With a quick search around the room, you do not find much of value other than a small obsidian orb which turns out to be an arcane focus for wielding magic! (Obsidian Orb added to Inventory, +1 to Intelligence)',
        result4: 'The lock box is fully intact and still locked. It does not seem like anyone tried to break into it'
    },
    {
        name: "Shopkeeper's Living Quarters",
        description: ''
    }
]