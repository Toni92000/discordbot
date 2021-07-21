const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function() {

    bot.user.setActivity('Mai je t\'aime').catch(console.error)

})


bot.on('message', function(message){
    if(message.content === '?mai') {
        message.channel.send('Toni aime mai')
    }
})

bot.on('message', function(message){
    if(message.content === '?toni') {
        message.channel.send('Mai aime toni')
    }
})

bot.on('message', function(message){
    if(message.content === '?juin') {
        message.channel.send('Rayane t\'aime')
    }
})

bot.on('message', function(message){
    if(message.content === '?rayane') {
        message.channel.send('Personne t\'aimes')
    }
})

bot.on('message', function(message){
    if(message.content === '?sequo') {
        message.channel.send('Tout le monde t\'aime')
    }
})

bot.on('message', function(message){
    if(message.content === '?hagrud') {
        message.channel.send('Yassin le crack')
    }
})

bot.on('message', function(message){
    if(message.content === '?kiro') {
        message.channel.send('Mai t\'aime (pas moi)')
    }
})

bot.on('message', function(message){
    if(message.content === '?rin') {
        message.channel.send('Pédophile va')
    }
})

bot.on('message', message => {

    if (!message.guild) return;

    if (message.content.startsWith('??ban')) {

        const user = message.mentions.users.first();

        if (user) {

            const member = message.guild.members.resolve(user);

            if (member) {

                member
                    .ban({
                        reason: 'fdp',
                    })
                    .then(() => {

                        message.channel.send(`Cheh t\'es ban ${user.tag}`);
                    })
                    .catch(err => {

                        message.channel.send('Je ne peux pas bannir cet utilisateur');

                        console.error(err);
                    });
            } else {

                message.channel.send("Cet utilisateur n\'est pas dans le serveur");
            }
        } else {

            message.channel.send("Tu n\'as pas mentionné l\'utilisateur à bannir !");
        }
    }
})

bot.login(process.env.TOKEN)