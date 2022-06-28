function createNewPost(){
const title = document.getElementById('title').value;
const article = document.getElementById('article').value;

const data = { title:title, article:article };

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  document.getElementById('result').innerHTML = `New post ${title}`;
})
.catch((error) => {
  console.error('Error:', error);
  document.getElementById('result').innerHTML = `Error`;
});}

document.getElementById('btn').addEventListener('click', createNewPost);