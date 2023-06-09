import Post from './Post.js';
import Useris from './Useris.js';

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {
//     // console.log(data);
//     data.forEach(user => {
//       document.querySelector('#test').innerHTML += `<h1>${user.name}</h1>`
//     })
//   })
//   .catch(err => {
//     console.log(err.message);
//   })
//   .finally(() => {
//     // console.log('end');
//   })

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => res.json())
//   .then(posts => {
//     const allPosts = document.querySelector('#allPosts');
//     posts.forEach(post => {
//       // console.log(post);
//       const newPost = new Post(post);
//       allPosts.appendChild(newPost);
//     });
//   });

// fetch('https://randomuser.me/api/')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data.results[0]);
//   })
document.querySelector('.newCard').addEventListener('click', e => {
fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(card => {
    const result = card.results
    result.forEach(card => {
      const newUseris = new Useris(card)
      document.querySelector('#allPosts').innerHTML=''
      document.querySelector('#allPosts').appendChild(newUseris)
    });
  });
})