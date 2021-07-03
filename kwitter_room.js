var firebaseConfig = {
      apiKey: "AIzaSyDTd6E1yokeTY_exMFE8hr-NfHsH8QsaQU",
      authDomain: "numeric-oarlock-315115.firebaseapp.com",
      projectId: "numeric-oarlock-315115",
      storageBucket: "numeric-oarlock-315115.appspot.com",
      messagingSenderId: "608240830499",
      appId: "1:608240830499:web:6b092fb1315f733ff28996",
      measurementId: "G-F7JZBNJS30"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        
      //End code
      });});}
getData();
