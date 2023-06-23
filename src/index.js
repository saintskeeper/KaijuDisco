const { LogLevel, SapphireClient } = require('@sapphire/framework');
const { prefix, discord_token } = require('./config.json');
const { GatewayIntentBits, Partials } = require('discord.js');

const client = new SapphireClient({
  defaultPrefix: prefix,
  regexPrefix: /^(hey +)?bot[,! ]/i,
  caseInsensitiveCommands: true,
  logger: {
    level: LogLevel.Debug
  },
  shards: 'auto',
  intents: [
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Channel],
  loadMessageCommandListeners: true
});
