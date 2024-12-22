const { readFile, writeFile } = require('fs') // this only takes out those two modules from fs

// This allows multiple users to do the task without it taking a long time or making the app going down
// This is better and more efficient

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return;
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
        const second = result

        writeFile('./content/result-async.txt', `Result: ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
        })
    })
})