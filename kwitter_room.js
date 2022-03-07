
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBf-MpJ0kv3dmlTudBsYOD8TQ80iTbRoB0",
      authDomain: "kwitter-5b849.firebaseapp.com",
      databaseURL: "https://kwitter-5b849-default-rtdb.firebaseio.com",
      projectId: "kwitter-5b849",
      storageBucket: "kwitter-5b849.appspot.com",
      messagingSenderId: "138273395092",
      appId: "1:138273395092:web:ba0ca1f90f53b5b22e3f81"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("username");
document.getElementById("username").innerHTML="Welcome "+user_name+"!";

function addroom(){
room_name=document.getElementById("add_room").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room", room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("room name"+Room_names);
       row="<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room", name);
    window.location="kwitter_page.html";
}
function log_out(){
      localStorage.removeItem("username");
      localStorage.removeItem("room");
      window.location="index.html";
}
