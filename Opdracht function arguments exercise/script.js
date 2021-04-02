// Single argument

const paintWalls = function (color) {
    // Do something'
    console.log("The wall has been painted: " + color);
}

// const colorOfChoice = 'yellow';

paintWalls('yellow');
paintWalls('green');
paintWalls(); // This says 'undefined'

// Multiple arguments
const paintSpecificWalls = function (color, wallDirection) {
    // Do something'
    console.log("The " + wallDirection + " wall has been painted: " + color);
}

paintSpecificWalls('red', 'north');