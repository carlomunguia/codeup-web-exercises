const wait = new Promise((resolve, reject) => {
    function waitTime() {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    }
});

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


let headers = {'Authorization': `token $(GITHUB_TOKEN)}`;

fetch('https://api.github.com/users/danielfryar')
    .then((data) => {
        console.log(data);
        return data.json();
    })
    .then(data) => {
    console.log(data);
}


        .then((data) => {
            return fetch(data.events.url), {headers: headers}
        }
}