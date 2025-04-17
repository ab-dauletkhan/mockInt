import { Bot } from 'https://deno.land/x/grammy@v1.36.0/mod.ts'
import 'jsr:@std/dotenv/load'
import { MESSAGES } from './constants.ts'

// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new Bot(Deno.env.get('BOT_TOKEN') as string)

// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.

// Handle the commands
bot.command(
	'start',
	(ctx) => ctx.reply(MESSAGES.START(ctx.from?.username || 'Jacob')),
)

bot.command(
	'help',
	(ctx) => ctx.reply(MESSAGES.HELP),
)

bot.command(
	'setHoursForTomorrow',
	(ctx) => ctx.reply('for now empty'),
)

bot.command(
	'chooseFromSlots',
	(ctx) => ctx.reply('for now empty'),
)

bot.command(
	'myInterview',
	(ctx) => ctx.reply('for now empty'),
)

// Handle other messages.
bot.on('message', (ctx) => ctx.reply(MESSAGES.NO_PLAIN_MESSAGE))

// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.
// Start the bot.
bot.start()
