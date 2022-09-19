function showUserMessage(dataSnapshot, user) {
  // chat.scrollIntoView({ behavior: "smooth" });
  let display = "";
  dataSnapshot.forEach(function (mssg) {
    let msg1 = mssg.data();
    let data = msg1.voice;
    let id = msg1.id;
    // console.log(id)
    
    // scrolling(id);
    let pic = msg1.photo ? msg1.photo : "../../assets/img/unknownUser.png";

    let displaychat = `
    <div class="" id="${id}">
      <p class="text-center>
        <span class="mr-2" id="">
          <p class="mb-1 ">
          ${user.displayName ? user.displayName : "User"} <br>
            ${data}
        </span>
        <img src="${pic}" alt="userimage">
      </p>
    </div>
  
    `;
    display += displaychat;
  });

  chat.innerHTML = display;
}
/*

*/

//=================backup================
// function showUserMessage(dataSnapshot, user) {
//   let display = "";
//   dataSnapshot.forEach(function (mssg) {
//     let msg1 = mssg.data();
//     let data = msg1.voice;

//     let displaychat = `
//     <div class="">
//     <p class="text-center">
//       <span class="mr-2" id="">
//         <p class="mb-1 ">
//         ${user.displayName ? user.displayName : "User"} <br>
//         <img src="${user.photoURL}" alt="userimage">

//       </span>${data}</p>
//   </div>

//     `;
//     display += displaychat;
//   });

//   chat.innerHTML = display;
// }

// // coias a fazer
// /*

// */
