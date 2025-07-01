// Snack 1
function getPostTitle(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(post => resolve(post.title))
            .catch(error => reject(error))
    })
}

getPostTitle(1)
    .then(title => console.log(title))
    .catch(error => console.error(error))

// Snack 2

function lanciaDado() {
    return new Promise((resolve, reject) => {
        console.log('sto lanciando il dado...')
        setTimeout(() => {
            const percentage = Math.round(Math.random() * 100)
            const randomNumber = Math.round((Math.random() * 5) + 1)
            if (percentage <= 20) {
                reject('Il dado si è incastrato')
            } else {
                resolve(console.log(randomNumber))
            }
        }, 3000)
    })
}

lanciaDado()