require('dotenv').config()

function getRandomGreeting() {
    const greetings = ["Hello!", "Howdy!", "Hey there!", "Hey, you!", "Hi!"];
    return greetings[Math.floor(Math.random() * greetings.length)];
}

function getRandomLove() {
    const love = ["I love you, too!", "Love means nothing to bots.", "Uhm, okay.", "Aw, shucks!", "Thanks!", "I love me, too!"]
    return love[Math.floor(Math.random() * love.length)];
}

function getRandomYW() {
    const yw = ["You're welcome!", "No problem!", "Of course!", "No need to thank me.", "No, thank YOU!"]
    return yw[Math.floor(Math.random() * yw.length)];
}

module.exports = function(client) {
client.on('messageCreate', (msg) => {
    if (msg.author.bot) {
        return;
    }

    if (['hello', 'hey', 'howdy', 'hey there', 'hi', 'sherri'].includes(msg.content.toLowerCase())) {
        console.log('Received: ' + msg.content);

        const randomGreeting = getRandomGreeting();

        msg.reply(randomGreeting)
           .then(sent => console.log('Sent: ' + sent.content));
    };

    if (['i love you', 'i love you!', 'i love you.', 'i love you-', 'iloveyou'].includes(msg.content.toLowerCase())) {
        console.log('Received: ' + msg.content);

        const randomLove = getRandomLove();

         msg.reply(randomLove)
            .then(sent => console.log('Sent: ' + sent.content));
 
    };

    if (['thanks', 'thank you', 'oh, thanks!', 'oh, thanks', 'thank', 'ty', 'ty!'].includes(msg.content.toLowerCase())) {
        console.log('Recieved: ' + msg.content);

        const randomYW = getRandomYW();

            msg.reply(randomYW)
                .then(sent => {console.log('Sent: ' + sent.content);});
        }
    });
};