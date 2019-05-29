// import { logoutMessage } from "./logout";
// logoutMessage();

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    document.getElementById('quickstart-sign-in').disabled = false;
    // [END_EXCLUDE]
  });