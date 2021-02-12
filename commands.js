const command = {
    play: (link)=>{
        console.log(link)
        if(link == undefined){
            return 'No link, no music :cry:'
        }
        return 'The link is: ' + link
    },
    stop: 'command stop exec',
    skip: 'command skip exec'
}

const run = (el) => {

    let arg = el[0].toLowerCase()
    for (n in command) {

        if (command[arg]) {
            return command[arg](el[1])
        } else {
            return 'command not found ;('
        }
    }
};

module.exports = run;