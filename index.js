//This bot was built on Node.JS 12 (discord.js)
//This bot was created by: Hyperz#0001

const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const ws = require('ws');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


//Here is where you can set the bots status!
client.on('ready', () => {
    client.user.setActivity("Your Effort!", {
        type: "WATCHING",
        url: "https://discord.sleekdesigns.xyz"
      });
      console.log(`${client.user.tag} is now online!`);
})

//Basic commands are listed here
client.on('message', message => {
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Pong!');
	} else if (command === 'beep') {
		message.channel.send('Boop!');
    }
});

//Knock Knock jokes are here...
var jokes = [
    { name: 'Dozen', answer: 'anybody want to let me in?' },
    { name: 'Avenue', answer: 'knocked on this door before?' },
    { name: 'Ice Cream', answer: 'if you don\'t let me in!' },
    { name: 'Adore', answer: 'is between us. Open up!' },
    { name: 'Lettuce', answer: 'in. Its cold out here!' },
    { name: 'Bed', answer: 'you can not guess who I am.' },
    { name: 'Al', answer: 'give you a kiss if you open the door.' },
    { name: 'Olive', answer: 'you!' },
    { name: 'Abby', answer: 'birthday to you!' },
    { name: 'Rufus', answer: 'the most important part of your house.' },
    { name: 'Cheese', answer: 'a cute girl.' },
    { name: 'Wanda', answer: 'hang out with me right now?' },
    { name: 'Ho-ho.', answer: 'You know, your Santa impression could use a little work.' },
    { name: 'Mary and Abbey.', answer: 'Mary Christmas and Abbey New Year!' },
    { name: 'Carmen', answer: 'let me in already!' },
    { name: 'Ya', answer: 'I’m excited to see you too!' },
    { name: 'Scold', answer: 'outside—let me in!' },
    { name: 'Robin', answer: 'you! Hand over your cash!' },
    { name: 'Irish', answer: 'you a Merry Christmas!' },
    { name: 'Otto', answer: 'know whats taking you so long!' },
    { name: 'Needle', answer: 'little help gettin in the door.' },
    { name: 'Luke', answer: 'through the keyhole to see!' },
    { name: 'Justin', answer: 'the neighborhood and thought Id come over.' },
    { name: 'Europe', answer: 'No, you are a poo' },
    { name: 'To', answer: 'To Whom.' },
    { name: 'Etch', answer: 'Bless You!' },
    { name: 'Mikey', answer: 'doesnt fit through this keyhole' }
]

//choosing a random joke from the array

var knock = function() {
    var joke = jokes[Math.floor(Math.random() * jokes.length)]
    return formatJoke(joke)
}

function formatJoke(joke) {
    return [
        'Knock, knock.',
        'Who’s there?',
        joke.name + '.',
        joke.name + ' who?',
        joke.name + ' ' + joke.answer
    ].join('\n')
}

client.on('message', (message) => {
    if (message.content.includes(`${prefix}knock`)) {
        const msg = message.content.split(' ');

            message.reply(knock());
       
    }
});

//Uncomment this section (remove the "//" in the beginning of the code line) to auto log messages sent in servers.
//client.on('message', (message) => {
//    if (message.author.bot) return;
//    console.log(`[${message.author.tag}]: ${message.content}`);
//})

//Commenting this section OR changing anything in it is a dick move...
client.on('message', (message) => {
    if (message.content === 'whats teamwork') {
        message.channel.send('Teamwork is a Discord bot built by <@704094587836301392>, It is a __public__ & open source bot you can find on github here: **https://github.com/Itz-Hyperz/TeamworkBot**')
    }
    else if (message.content === 'whats teamwork?') {
        message.channel.send('Teamwork is a Discord bot built by <@704094587836301392>, It is a __public__ & open source bot you can find on github here: **https://github.com/Itz-Hyperz/TeamworkBot**')
    }
    else if (message.content === 'Whats Teamwork') {
        message.channel.send('Teamwork is a Discord bot built by <@704094587836301392>, It is a __public__ & open source bot you can find on github here: **https://github.com/Itz-Hyperz/TeamworkBot**')
    }
    else if (message.content === 'Whats Teamwork?') {
        message.channel.send('Teamwork is a Discord bot built by <@704094587836301392>, It is a __public__ & open source bot you can find on github here: **https://github.com/Itz-Hyperz/TeamworkBot**')
    }
    else if (message.content === 'TWAUTHOR') {
        message.channel.send('Hello, I was created by: <@704094587836301392>')
    }
    else if (message.content === (`${prefix}help`)) { 
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#ededed')
	.setTitle('Teamwork Bot')
	.setURL('http://discord.sleekdesigns.xyz')
	.setAuthor('Hyperz#0001', 'https://avatars0.githubusercontent.com/u/69090660?s=460&u=4392a8ba9b79aa071e79b932f9974b570d83e5ad&v=4', 'https://discord.gg/d5Wbegw')
	.setDescription('An open source Discord bot!')
	.setThumbnail('https://i.imgur.com/I514AGj.png')
	.addFields(
		{ name: 'My Commands:', value: 'Knock, Help, Ping, Beep' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Knock', value: 'Picks from a list of jokes and responds with one!', inline: false },
		{ name: 'Beep', value: 'Will respond with boop!', inline: false },
	)
	.addField('Ping', 'Will respond with pong!', false)
	.setImage('https://i.imgur.com/I514AGj.png')
	.setTimestamp()
    .setFooter('Be the better you', 'https://i.imgur.com/I514AGj.png')
    
    message.channel.send(exampleEmbed);
    }
});

client.login(token);