const Discord = require('discord.js')
require('dotenv').config()
const config = require('./config.json')
const i18n = require('i18n')

const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS]})

client.once('ready', () => {
    console.log('ready')
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return

    const { commandName } = interaction

    if (commandName == 'ping') {
        await interaction.reply('Pong!')
    }
})

client.login(process.env.token)
//client.login(config.token)
