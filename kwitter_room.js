const firebaseConfig = {
    apiKey: "AIzaSyBYp8IZffq_aaXeTmT-7ZMwyDstPp_S9lI",
    authDomain: "kwitterprojeto.firebaseapp.com",
    databaseURL: "https://kwitterprojeto-default-rtdb.firebaseio.com",
    projectId: "kwitterprojeto",
    storageBucket: "kwitterprojeto.appspot.com",
    messagingSenderId: "2834779696",
    appId: "1:2834779696:web:a17e123c9715d01979e7f5",
    measurementId: "G-QQRE7KV3HY"
  };
  
// Inicializar Firebase
firebase.initializeApp(firebaseConfig)

user_name = localStorage.getItem("userName")

document.getElementById("username").innerHTML = "Bem-vindo(a)" + user_name + "!"






function addRoom()
{
  room_name = document.getElementById("roomname").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionando nome da sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page_html"
  
}



function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Nome da Sala - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
});
});

}

getData()


//função que redireciona o usuário para a sala escolhida 

function redirectToRoomName(name)
{
  console.log(name)
  localStorage.setItem("room_name", name)
  window.location = "kwitter_page.html"
}

function logout(){
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location = "index.html"
} 
