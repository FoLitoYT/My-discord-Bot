const { SlashCommandBuilder } = require('@discordjs/builders')
const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const { clientId, guildId, token } = require('./config.json')

const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('Pingueame el huevo izquierdo')
]
.map(command => command.toJSON())

const rest = new REST({version: '9'}).setToken(token)


async function createSlash() {
    try{
await rest.put(
    Routes.applicationGuildCommand(cliendId, guildId),
    { body: commands }
)

console.log('CONCHA FUNCIONO')
    } catch(e) {
        console.error(e)
    }
}

createSlash()