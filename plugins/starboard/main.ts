import { clientConfig } from "../../client"
import { GatewayIntentBits, Partials, IntentsBitField } from "discord.js"


// Check partials
if (!clientConfig().partials?.includes(Partials.Channel)) throw new Error("You must enable the Channel partial to use this plugin !")
if (!clientConfig().partials?.includes(Partials.Message)) throw new Error("You must enable the Message partial to use this plugin !")
if (!clientConfig().partials?.includes(Partials.Reaction)) throw new Error("You must enable the Reaction partial to use this plugin !")

// Check intents
if (! new IntentsBitField(clientConfig().intents).has(GatewayIntentBits.GuildMessages)) throw new Error("You must enable the GuildMessages intent to use this plugin !")
if (! new IntentsBitField(clientConfig().intents).has(GatewayIntentBits.MessageContent)) throw new Error("You must enable the MessageContent intent to use this plugin !")
if (! new IntentsBitField(clientConfig().intents).has(GatewayIntentBits.GuildMessageReactions)) throw new Error("You must enable the GuildMessageReactions intent to use this plugin !")
