function myFunction() {
  let message;

  let username = prompt("Hello new user, what is you name?");
  let place = prompt("Where are you from?");
  let sport = prompt("What sport do you follow?");
  let team = prompt("What is your favourite team?");

  message =
    "Hi " +
    username +
    " from " +
    place +
    ", I'm sorry to tell you that " +
    team +
    " are a rubbish " +
    sport +
    " team! Unlucky!";

  document.getElementById("demo").innerHTML = message;
}
console.log("This is the user's name = " + username);
console.log("And this is where " + username + " is from = " + place);
console.log(username + " is a fan of the following sport = " + sport);
console.log("And their favourite team is = " + team);
