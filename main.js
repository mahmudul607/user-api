document.getElementById("load-user").addEventListener('click', function(){
   const countText = document.getElementById("user-count").value;
   const count = parseFloat(countText);
   fetch('https://jsonplaceholder.typicode.com/users/')
.then(res => res.json())
.then(data => {
   data = data.slice(0, count);
   const usersContainer = document.getElementById("users");
   usersContainer.innerHTML = '';
   for (let i = 0; i < data.length; i++) {
      const user = data[i];
      const p = document.createElement('p');
      p.innerHTML = `
      <p class="user">Name: <strong>${user.name}</strong>  <button onclick="getUserDetail(${user.id})">Get Details -${user.id}</button></p>`;
      usersContainer.appendChild(p);
      
   }
})
})


function getUserDetail(userId){
   fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
   .then(res => res.json())
   .then(data => {
      console.log(data);
      const details = document.getElementById("user-details");
      details.innerHTML = `
      <h1>Name: ${data.name}</h1>
      <h2>Email: ${data.email}</h2>
      <h3>Phone: ${data.phone}</h3>

      `;
   })
}