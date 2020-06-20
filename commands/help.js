const menu = {
    main: `weather [command] <option>
            
            today ............. show weather for today
            tomorrow ...........show weather for tomorrow
            version ........... show version of app
            help ...............show help menu for command`,

    today: `
            weather today <options>
            
            eg weather today --location, -1 ... to pass location variables
    `,

    tomorrow: `
            weather tomorrow <options>
            
            e.g weather tommorow --location, -1 ... to pass location variables 
    `

}

module.exports = (args) => { 
    const optionalCommand = (args._[0] === "help")?args._[1]:args._[0];

    console.log(menu[optionalCommand] || menu.main)
}