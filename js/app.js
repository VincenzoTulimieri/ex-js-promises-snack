function getPostTitle(id){
    return new Promise((resolve,reject)=>{
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(resolve => console.log(resolve.title))
            .catch(reject => console.error(reject))
    })
}

getPostTitle(1)