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