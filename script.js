// Get necessary HTML elements
const commandInput = document.getElementById('command-input');
const terminalOutput = document.getElementById('terminal-output');

// Handle command input
commandInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        const command = commandInput.value;
        processCommand(command);
    }
});

// Display output in the terminal
function displayOutput(text) {
    const output = document.createElement('p');
    output.classList.add('output');
    output.innerHTML = text;

    const cursor = document.createElement('span');
    cursor.classList.add('cursor');
    output.appendChild(cursor);

    terminalOutput.appendChild(output);
}

// Process terminal command
function processCommand(command) {
    // while (terminalOutput.firstChild) {
    //     terminalOutput.removeChild(terminalOutput.firstChild);
    // }
    // const output = document.createElement('p');
    // output.classList.add('output');

    // switch (command) {
    //     case 'help':
    //         output.textContent = 'Available commands: about, projects, contact';
    //         break;
    //     case 'about':
    //         output.textContent = 'I am Computer Engineer love to code in python on linux platforms';
    //         break;
    //     case 'projects':
    //         output.textContent = 'Sorry to say I cannot share python scripts because of promices made to clients But be sure you will get Best.';
    //         break;
    //     case 'contact':
    //         output.textContent = 'You can reach me at hadibuxmahessar@gmail.com';
    //         break;
    //     default:
    //         output.textContent = `Command '${command}' not found. Type 'help' for available commands.`;
    //         break;
    // }

    // terminalOutput.appendChild(output);
    // commandInput.value = '';
    while (terminalOutput.firstChild) {
        terminalOutput.removeChild(terminalOutput.firstChild);
    }

    switch (command) {
        case 'help':
            displayOutput('Available commands: about, projects, contact');
            break;
        case 'about':
            displayOutput('⚙️ A Computer Engineer who love to code in python on linux platforms ');
            break;
        case 'projects':
            displayOutput('⚠️ Sorry to say I cannot share python scripts because of promises made to clients. But be sure you will get the best ');
            break;
        case 'contact':
            displayOutput('✉️ You can reach me at hadibuxmahessar@gmail.com ');
            break;
        default:
            displayOutput(`❌ Command '${command}' not found. Type 'help' for available commands.`);
            break;
    }

    commandInput.value = '';
}
