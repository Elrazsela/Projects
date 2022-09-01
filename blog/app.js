function getAllPosts(){
fetch('https://jsonplaceholder.typicode.com/posts')

.then(response => response.json())
.then(json => {
  console.log(json);

    let html = '';
    json.forEach(post => {
        html +=`
                    <tr class="table">
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.body}</td>
                <td>${post.userId}</td>
            </tr>`
    });
document.getElementById('getAllPostsTable').innerHTML = html;
})
.catch((error) => {
  console.error('Error:', error);
  document.getElementById('result').innerHTML = `Error`;
});}

document.getElementById('getAllPostsBtn').addEventListener('click', getAllPosts);

// Get post by ID

function getPost(){
  const id = document.getElementById('get-post-by-id').value;

  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(response => response.json())
  .then(json =>{
    console.log(json);
     const html = `<tr>
                        <td>${json.id}</td>
                        <td>${json.title}</td>
                        <td>${json.body}</td>
                        <td>${json.userId}</td>
                    </tr>`;
    document.getElementById('postByIdTable').innerHTML = html;   
  })
  .catch((error) => {
            throw Error(error);
        });
}
document.getElementById('getPostByIdBtn').addEventListener('click', getPost);

// New Post
function createNewPost() {
    const addTitleValue = document.getElementById('add-post-title').value;
    const addBodyValue = document.getElementById('add-post-article').value;

    const data = {
        title: addTitleValue,
        body: addBodyValue
    };

    fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        .then(res => res.json())
        .then(json => {
            console.log(json);
            let html = '';

            html += `<tr>
                        <td>${json.id}</td>
                        <td>${json.title}</td>
                        <td>${json.body}</td>
                    </tr>`;
            document.getElementById('newPostTableId').innerHTML = html;
        })
        .catch((error) => {
            throw Error(error);
        });
}
document.getElementById('addNewPostBtn').addEventListener('click', createNewPost);

//update Post
function updatePost(){
  const title = document.getElementById('change-post-details').value;
  const id = document.getElementById('change-post-details-text').value;
const data = {title:title
    };

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PATCH',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        .then(res => res.json())
        .then(json => {
            console.log(json);
            
            let html = `<tr>
                        <td>${json.id}</td>
                        <td>${json.title}</td>
                        <td>${json.body}</td>
                    </tr>`;
            document.getElementById('changePostDetailsTable').innerHTML = html;
        })
        .catch((error) => {
            throw Error(error);
        });
}
document.getElementById('changePostDetailsBtn').addEventListener('click', updatePost);

//delete Post


function deletePost(){
  const id = document.getElementById('get-post-by-id-delete').value;
console.log(id);
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    method:'DELETE',
    headers:{
      'content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(json =>{
    console.log(json);
     const html = `<tr>
                        <td>Post Was Deleted</td>
                    </tr>`;
    document.getElementById('delete-notification-div').innerHTML = html;   
  })
  .catch((error) => {
            throw Error(error);
        });
}
document.getElementById('deletePostBtn').addEventListener('click', deletePost);