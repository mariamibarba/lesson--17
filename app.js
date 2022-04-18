
// const myButton = document.querySelector('#my-button');
// if(myButton){
//   myButton.addEventListener('click', e => {
//     myButton.remove();
    
//     console.log('MyButton clicked');
//   });
// }



// const myImg = document.createElement('img')
// if (myImg){
//     myImg.setAttribute('src', 'https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg');

// }

// document.body.appendChild(myImg);



// const users = [
//     {
//       first_name: "John",
//       last_name: "Doe",
//       avatar: " https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
//     },
//     {
      
//         first_name: "John",
//         last_name: "Doe",
//         avatar: " https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
//     },
//     {
     
//         first_name: "John",
//         last_name: "Doe",
//         avatar: " https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
//     },
//     {
      
//         first_name: "John",
//         last_name: "Doe",
//         avatar: " https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"
//     },
//   ];

// function renderUsers () {
//     const userListContainer = document.querySelector('#user-list');
  

//     const userNodeString = users.map(user => {
//         return `<div class="user-item">
//         <span><img src="${user.avatar}" /></span> 
//         <span class="namespan" >${user.first_name} ${user.last_name}</span> 
//         <button class="remove-button"> remove </button>
//         <button class="info-button"> info </button> 
        
//         </div>`
         
          
//     });

//     userListContainer.innerHTML = userNodeString.join('');
//     console.log(userNodeString)


    
//     const removeButton = document.querySelector('.remove-button');
//     if(removeButton){
//           removeButton.addEventListener('click', e => {
//             console.log('Button clicked')
//           });
//         }
        
// }


// renderUsers ()