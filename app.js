//*********************************************retriving data************************** */

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAKJL5fMCc4a3nMo49p6ZiEv8Q2ninIWE8",
  authDomain: "guru-a83c4.firebaseapp.com",
  projectId: "guru-a83c4",
  storageBucket: "guru-a83c4.appspot.com",
  messagingSenderId: "1039103547874",
  appId: "1:1039103547874:web:344e3953aef65772bbc1bb",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

var bkarray = [];

db.collection("bookdatabase")
  .get()
  .then((data) => {
    data.docs.forEach((doc) => {
      console.log(doc.data());
    });
  });

//*********************************uploading to database ************************** */
//introducing submitbutn
const submitbtn = document.querySelector("#submitbtn");

//username password hard code validation

submitbtn.addEventListener("click", function () {
  if (
    document.getElementById("username").value == "bookadmin" &&
    document.getElementById("password").value == "pwdadmin"
  ) {
    var emptbk = document.getElementById("book_name").value;
    var emtauth = document.getElementById("author").value;
    var emtpr = document.getElementById("price").value;
    var emtisbn = document.getElementById("isbn").value;
    if (!emptbk && !emtauth && !emtpr && !emtisbn) {
      alert("Please fill required fields");
      return false;
    } else {
      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyAKJL5fMCc4a3nMo49p6ZiEv8Q2ninIWE8",
        authDomain: "guru-a83c4.firebaseapp.com",
        projectId: "guru-a83c4",
        storageBucket: "guru-a83c4.appspot.com",
        messagingSenderId: "1039103547874",
        appId: "1:1039103547874:web:344e3953aef65772bbc1bb",
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      var firestore = firebase.firestore();
      //start grabing our dom elements

      //introducing form input to variable

      let bookname = document.querySelector("#book_name");
      let bookauthor = document.querySelector("#author");
      let bookprice = document.querySelector("#price");
      let bookisbn = document.querySelector("#isbn");

      //inrtoducing firebase db to variable
      const db = firestore.collection("bookdatabase");

      //buttn event

      //new variable to each input items
      let booknameinput = bookname.value;
      let bookauthorinput = bookauthor.value;
      let bookpriceinput = bookprice.value;
      let bookisbninput = bookisbn.value;

      //access the database

      db.doc()
        .set({
          book_name: booknameinput,
          book_author: bookauthorinput,
          book_price: bookpriceinput,
          book_isbn: bookisbninput,
        })
        //check if value went to db
        .then(function () {
          console.log("book details saved successfully");
          alert("New book added");
        })
        .catch(function (error) {
          console.log(error);
        });
      return true;
    }
  } else {
    alert("The username or Password you entered is incorrect");
  }
});
