async function fetchUserData(id) {
  try {
    const userResp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await userResp.json()
    const postsResp = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
    const post = await postsResp.json()
    
    let comments ;
    let photos
    const allPhotos = []
    for(let each of post) {
        const commentsResp = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${each.id}`)
        const res = await commentsResp.json()
        comments = res
    }
    const albumResponse = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
    const album = await albumResponse.json();
    for(let alb of album){
        const photoResponse = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${alb.id}`)
         photos = await photoResponse.json()
        allPhotos.push(photos)
    }
    
    console.log({
        user:user.name,
        email:user.email,
        post:post,
        comments,
        album,
        photos
    })
  } catch (error) {
    console.log(error)
  }
}
fetchUserData(1)