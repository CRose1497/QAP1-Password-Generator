// Date: 2025-01-16
// Author: Christian Rose
// Description: A simple command-line password generator tool.

// Import required modules
const readline = require('readline');

// Function to display help message
function displayHelp() {
    console.log(`Password Generator Usage:

    --help          Show this help message
    --length <num>  Specify the length of the password (default: 8)
    --uppercase     Include uppercase letters
    --numbers       Include numbers
    --symbols       Include symbols

Examples:
    node app.js --length 12 --uppercase --numbers --symbols
    node app.js --length 10`);
}

// Function to build the character pool based on user options
function buildCharacterPool(options) {
    let characterPool = 'abcdefghijklmnopqrstuvwxyz'; // Default lowercase characters

    if (options.uppercase) {
        characterPool += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Add uppercase letters
    }
    if (options.numbers) {
        characterPool += '0123456789'; // Add numbers
    }
    if (options.symbols) {
        characterPool += '!@#$%^&*()_+-=[]{}|;:,.<>?'; // Add symbols
    }

    return characterPool;
}

// Function to generate a random password
function generatePassword(options) {
    const characterPool = buildCharacterPool(options); // Use the new function to build the character pool

    // Validate the character pool
    if (!characterPool) {
        console.error('Error: No character types selected. Please use --uppercase, --numbers, or --symbols.');
        process.exit(1);
    }

    // Generate the password
    let password = '';
    for (let i = 0; i < options.length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    return password;
}

// Function to parse command-line arguments
function parseArgs() {
    const args = process.argv.slice(2);
    const options = {
        length: 8, // Default length 
        uppercase: false,
        numbers: false,
        symbols: false,
    };

    // Loop through the arguments
    for (let i = 0; i < args.length; i++) {
        switch (args[i]) {
            case '--help':
                displayHelp();
                process.exit(0);

            case '--length':
                const length = parseInt(args[i + 1], 10);
                if (!isNaN(length) && length > 0) {
                    options.length = length;
                    i++; // Skip the next argument since it is the length
                } else {
                    console.error('Error: Invalid value for --length. Please provide a positive number.');
                    process.exit(1);
                }
                break;

            case '--uppercase':
                options.uppercase = true;
                break;

            case '--numbers':
                options.numbers = true;
                break;

            case '--symbols':
                options.symbols = true;
                break;

            default:
                console.error(`Error: Unknown argument ${args[i]}`);
                process.exit(1);
        }
    }

    return options;
}

// Main function to run the application
function main() {
    const options = parseArgs();
    const password = generatePassword(options);
    console.log(`Generated Password: ${password}`);
}

// Run the main function
main();
