console.log( document.title);


const text1 = document.querySelector("#nama");
const text2 = document.querySelector("#name");
const text3 = document.querySelector("#login");



const getDataAsync = async () => {
    let response = await fetch("https://api.github.com/users/anisetiani");
    let result = await response.json();

    const name = document.getElementById("name");
    const login = document.getElementById("login");
    const bio = document.getElementById("bio");
    
    console.log(result);
    name.innerHTML = result.name;
    login.innerHTML = result.login;
    bio.innerHTML = result.bio;
    


    document.getElementById("myBtn").addEventListener("click", function() {
        alert("Hallo Salam kenal yaa!! :)");
      });

    document.body.style.backgroundColor = "#A39999";
    document.getElementById("nama").style.color = "#443B3B";
    document.getElementById("nama").style.fontFamily = "monospace";
    document.getElementById("login").style.color = "#443B3B";
    document.getElementById("bio").style.color = "#443B3B";
    document.getElementById("name").style.color = "#443B3B";
    document.getElementById("name").style.fontFamily = "monospace";
    document.getElementById("bio").style.fontFamily = "monospace";
    document.getElementById("login").style.fontFamily = "monospace";

    var myName = "di atas ada data GitHub Ani";
    console.log(myName);

};
getDataAsync();