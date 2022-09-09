import fetch from "node-fetch";
//import fetch from './node_modules';

// const logPost = (postID) => {
//   fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`).then(response => response.json()).then(json => console.log(`${json.title}`))
// }
// logPost(3)
// const logPost = (postID) => {
//   fetch(`https://jsonplaceholder.typicode.com/users`).then(response => response.json()).then(json => console.log(json))
// }
// logPost(3)
// 1 . Write a function, `logPost`, that takes a post `id` and logs the post to the console in the following format:
// ```
//   Title: qui est esse
//   Post: est rerum tempore...
//   ```
// const logPost = (postID) => {
//   fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`).then(response => response.json()).then(json => {
//     console.log(`Title: ${json.title}`)
//     console.log(`Post: ${json.body}`)
//   })
// }
// logPost(3)

// 2. Write a function, `logUsers`, that logs all the names of the 10 users to the console. (Just their first and last name)

// const logUsers = (postID) => {
//   fetch(`https://jsonplaceholder.typicode.com/users`).then(response => response.json()).then(json => {
//     json.forEach(element => {
//       console.log(element.name)
//     });
//   })
// }
// logUsers(3)

// 3. Write a function, `getBizUsers`, that logs an array of users that have email addresses that end in ".biz".

// const getBizUsers = (postID) => {
//   fetch(`https://jsonplaceholder.typicode.com/users`).then(response => response.json()).then(json => {
//     json.forEach(element => {
//       if (element.email.endsWith('.biz'))
//         console.log(element.email)
//       });
//   })
// }
// getBizUsers(3)

// 4. Write a function, `longestPost`, that logs the longest post to the console.

// const longestPost = (postID) => {
//   var post;
//   let longest = 0;
//   fetch(`https://jsonplaceholder.typicode.com/posts`).then(response => response.json()).then(json => {
//     json.forEach(element => {
//       if (element.body.length > longest) {
//         post = element.body;
//         longest = element.body.length;
//       }
//     });
//     console.log(post)
//   })
// }
// longestPost(3)

// 5. This database has 200 `todos`.Write a function called `getCompletedTasks` that logs an array of all of the completed tasks.

// const todos = (postID) => {
//   var post;
//   let longest = 0;
//   fetch(`https://jsonplaceholder.typicode.com/todos`).then(response => response.json()).then(json => {
//     let array = []
//     json.forEach(element => {if (element.completed) array.push(element.title) } );
//     console.log(array)
//   })
// }
// todos(3)

// 6. Write a function, `displayPhotos`, that displays a grid of 9 photos in the browser.

// const displayPhotos = () => {
//   let table = document.createElement('table')
//   document.body.appendChild(table)
//   fetch(`https://jsonplaceholder.typicode.com/photos`).then(response => response.json()).then(json => {

//     let count = 0
//     for (let i = 0; i < 3; i++){
//     let tablerow = document.createElement('tr')
//       for (let i = 0; i < 3; i++) {
//         let tableData = document.createElement('td');
//         let newImage = document.createElement('img')
//         newImage.src = json[count].url
//         tablerow.appendChild(tableData)
//         tableData.appendChild(newImage)
//         count++
//       }
//       table.appendChild(tablerow)
//     }
//     document.body.appendChild(table)
//   })
// }
// displayPhotos()

// 7. ** Challenge **: Write a function, `findClosest`, that logs the user that is geographically closest to where you are currently sitting.

// 8. ** CHALLENGE Challenge **: Modify `findClosest` so that it takes a city as an argument and logs the user that is closest to that city.

// 9. Write a function, `numOfLongPosts`, that logs the number of posts that are longer than 20 words.

// const numOfLongPosts = () => {
//   fetch(`https://jsonplaceholder.typicode.com/posts`).then(response => response.json()).then(json => {
//     json.forEach(element => {
//       if (element.body.split(' ').length > 20) {
//         console.log(element.body, element.body.split(' ').length)
//       }
//     });
//   })
// }
// numOfLongPosts()

// 10. Write a function, `getUserFromPost`.This function takes post title as a parameter and logs the user who created that post.

const getUserFromPost = () => {
  fetch(`https://jsonplaceholder.typicode.com/posts`).then(response => response.json()).then(json => {
    json.forEach(element => {
      fetch(`https://jsonplaceholder.typicode.com/users`).then(response => response.json()).then(user => {
        for (let i = 0; i < user.length; i++) {
          if (user[i].id === element.userId) {
            console.log(user[i].name)
          }
        }
      })
    });
  })
}
getUserFromPost()