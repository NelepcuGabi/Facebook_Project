var database = [
    {
        username: "andrei",
        password:"222"

    }
];
var newsfeed = [

    {
        username:"cristy",
        timeline:"ma iubeste femeile"
    },
    {
        username:"vali",
        timeline:"ba ce bun sunt la lol"
    }
];



var usernamePrompt=prompt("baga aci username:");
var passwordPrompt=prompt("hai baga si parola:");

function signIn(user,pass){
    if(user===database[0].username && pass===database[0].password){
        alert("bravo boss tu esti");
        console.log(newsfeed);
    }
    else{
        alert("boss mai incearca");
    }
}
signIn(usernamePrompt,passwordPrompt)