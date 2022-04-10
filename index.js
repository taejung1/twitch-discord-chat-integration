const { token, twitch_channel, max, activity, twitch_username, twitch_token, discord_channel } = require('./config.json')
const { Client } = require('client.js');
const tmi = require('tmi.js');

const options = {
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: twitch_username,
		password: twitch_token
	},
	channels: [twitch_channel]
}


const twitch = new tmi.Client(options);

const client = new Client({ intents: 32767 })

twitch.connect().catch(console.error);

client.once('ready', () => {
	client.user.setActivity(activity, { type: "PLAYING" })
	console.log(`Logged In As ${client.user.tag} | 해당봇을 라이선스가 포함되어있습니다`)
	console.log(`오류문의 : 태정#7777 | Node.js 버전 : ${process.version} ( 16이상이여야지 문제없이 작동됩니다 )`);
})

twitch.on('message', (channel, userstate, message, self) => {
	if (self) return;
	client.channels.fetch(discord_channel).then(channel => channel.send(userstate.username + ': ' + message));
});

client.on('messageCreate', async message => {
	if (message.author.bot) return;
	if (message.channel.id !== discord_channel) return;
	if (message.content.length > max) {
		message.react("❌");
		return;
	}
	twitch.say(twitch_channel, message.author.username + ':' + message.content);
});

client.login(token); 