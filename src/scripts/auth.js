auth.languageCode = "pt-BR";
// Função que trata a submissão do formulário de autenticação
form.onsubmit = function (event) {
  event.preventDefault();
  show(loading);
  if (btnLogin.innerHTML == "Acessar") {
    auth
      .signInWithEmailAndPassword(form.email.value, form.password.value)
      .then(function (user) {
        window.location.href = "../../salas.html";
        console.log(user);
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    /*criação de usuários*/
    show(loading);
    auth
      .createUserWithEmailAndPassword(form.email.value, form.password.value)
      .then((user) => {
        if (user) {
          window.location.href = "../../salas.html";
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        hide(loading);
      });
  }
};

/*================================================== */
// função que observa usuários autenticados ou não
auth.onAuthStateChanged(function (user) {
  userImage.src = user.photoURL
    ? user.photoURL
    : "../../assets/img/unknownUser.png";
  // console.log(u)
  if (user) {
    let userId = auth.currentUser.uid;

    sendMessage.onsubmit = function (event) {
      event.preventDefault();
      if (cText.value != "") {
        speaker = {
          id: userId,
          photo: user.photoURL,
          name: user.displayName,
          email: user.email,
          voice: [cText.value],
          created: firebase.firestore.FieldValue.serverTimestamp(),
        };

        dbSala1.add(speaker).then(() => {
          
        });
      } else {
        return;
      }

      cText.value = "";
      

    };
    // console.log(userId)
    dbSala1
      .orderBy("created", "desc")
      .limit(50)
      .onSnapshot((dataSnapshot) => {
        showUserMessage(dataSnapshot, user);
      });
    fileImg.onchange = function (e) {
      let arquive = e.target.files[0];
      if (arquive) {
        if (arquive.type.includes("image")) {
          let userId = auth.currentUser.uid;
          let imgName = database.ref().push().key + "-" + arquive.name; //nome da imagem
          let imgPath = `usersImage/${userId}/${imgName}`; //caminho da imagem
          storageRef
            .ref(imgPath)
            .put(arquive) //aqui manda a foto pro storage
            .then((e) => {
              e.ref.getDownloadURL().then((downloadURL) => {
                updatePic(user, downloadURL);
              });
            });
        }
      }
      fileImg.value = "";
    };
  } else {
    return;
    // window.location.href = '../../index.html'
  }
});

// atualizar nome de usuário logado com email apenas
function updateUserName() {
  let user = auth.currentUser;
  let name = prompt("Digite o nome", user.displayName);
  if (name && name != "") {
    userName.innerHTML = user.displayName
    user.updateProfile({
        displayName: name,
      }).then((e) => {
      }).catch((error) => {
        console.log(error);
      });
  } else {
    alert("Nome não informado");
  }
  userName.innerHTML = user.displayName

}

function updatePic(user, downloadURL) {
  user.updateProfile({
    photoURL: downloadURL,
  });
  setTimeout(location.reload(), 200);
}

/*================================================== */
// função para deslogar o usuário
function signOut() {
  auth
    .signOut()
    .then(function () {
      window.location.href = "../../salas.html";
    })
    .catch(function (error) {
      console.log(error);
    });
}

//=================backup===============================
// auth.languageCode = "pt-BR";
// // Função que trata a submissão do formulário de autenticação
// form.onsubmit = function (event) {
//   event.preventDefault();
//   show(loading);
//   if (btnLogin.innerHTML == "Acessar") {
//     auth
//       .signInWithEmailAndPassword(form.email.value, form.password.value)
//       .then(function (user) {
//         window.location.href = "../../salas.html";
//         console.log(user);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   } else {
//     /*criação de usuários*/
//     show(loading);
//     auth
//       .createUserWithEmailAndPassword(form.email.value, form.password.value)
//       .then((user) => {
//         if (user) {
//           window.location.href = "../../salas.html";
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//       .finally(() => {
//         hide(loading);
//       });
//   }
// };

// /*================================================== */
// // função que observa usuários autenticados ou não
// auth.onAuthStateChanged(function (user) {
//   userImage.src = user.photoURL ? user.photoURL : '../../assets/img/unknownUser.png'
// // console.log(u)
// if(user) {  let userId = auth.currentUser.uid;

//   sendMessage.onsubmit = function (event) {
//     event.preventDefault();
//     if (cText.value != "") {
//       // let userId = auth.currentUser.uid;
//       speaker = {
//         id: userId,
//         photo: '',
//         name: user.displayName,
//         email: user.email,
//         voice: [cText.value],
//         created: firebase.firestore.FieldValue.serverTimestamp(),
//       };

//       dbSala1.add(speaker).then(() => {chat.scrollIntoView({ behavior: "smooth" });});
//     } else {
//       return;
//     }

//     cText.value = "";
//   };
//   // console.log(userId)
//   dbSala1
//     .orderBy("created", "asc")
//     .limit(50)
//     .onSnapshot((dataSnapshot) => {
//       showUserMessage(dataSnapshot, user);
//     });
//   fileImg.onchange = function (e) {
//     let arquive = e.target.files[0];
//     if (arquive) {
//       if (arquive.type.includes("image")) {
//         let userId = auth.currentUser.uid;
//         let imgName = database.ref().push().key + "-" + arquive.name; //nome da imagem
//         let imgPath = `usersImage/${userId}/${imgName}`; //caminho da imagem
//         storageRef.ref(imgPath).put(arquive) //aqui manda a foto pro storage
//         .then((e)=>{
//           e.ref.getDownloadURL().then((downloadURL) => {
//             updatePic(user, downloadURL)

//           })
//         })
//       }
//     }
//     fileImg.value = ''
//   };} else{
//     return
//     // window.location.href = '../../index.html'

//   }
// });

// // atualizar nome de usuário logado com email apenas
// function updateUserName() {
//   let user = auth.currentUser;
//   let name = prompt("Digite o nome", user.email);
//   if  (name && name != "") {
//     user.updateProfile({
//         displayName: name,
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   } else {
//     alert("Nome não informado");
//   }
// }

// function updatePic(user, downloadURL) {

//   user.updateProfile({
//     photoURL: downloadURL,
//   })

// }

// /*================================================== */
// // função para deslogar o usuário
// function signOut() {
//   auth.signOut().then(function(){
//     window.location.href = '../../index.html'
//   }).catch(function (error) {
//     console.log(error);
//   });
// }
