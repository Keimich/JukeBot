const ytdl = require('ytdl-core');
const queue = [];

const command = {
    play: (el, msg) => {

        let channel = el[2]
        channel.join()
            .then(connection => {
                connection.play('C:\Users\Jan Dibo\Downloads\saveiro_pega_no_breu.mp3')
            })
    },
    stop: 'Command stop exec',
    skip: 'Command skip exec'
}

const run = (el, msg) => {

    let arg = el[0].toLowerCase()
    for (n in command) {
        //console.log(el)
        if (command[arg] == undefined) {
            return msg.reply('Command not found :cry:')
        } else if (el[2] == null) {
            return msg.reply('Please enter the channel to listen to this music together :pleading_face:')
        } else {
            return command[arg](el, msg)
        }
    }
};

module.exports = run;