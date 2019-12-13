'use strict';


const locationPropsList = document.getElementById("location");

for (let prop in location){

    if(typeof location[prop] === "string"){
       const listItem = document.createElement('li');
        listItem.innerText = `${prop} = "${location[prop]}"`;
       locationPropsList.appendChild(listItem);
    }

}

const reloadButton = document.getElementById('reload');

reloadButton.addEventListener('click', function () {
location.reload();
});

//=============================================================


/*
const authorizedUser = {
    fullName: "Name Surname",
    email: "test@gmail.com",
};

const inputName = document.querySelector('input[name="name"]');
const inputSurname = document.querySelector('input[name="surname"]');
const inputEmail = document.querySelector('input[name="email"]');
const inputButton = document.querySelector('input#loginButton');

const Obj = {
    name: inputName.value,
    surname: inputSurname.value,
    email: inputEmail.value,

};

localStorage.setItem("authorized_User", JSON.stringify(Obj));

const getAuthorizedUser = JSON.parse(localStorage.getItem("authorized_User"));*/
//22222222222222222222222222222222222222nd
//||
//\/
/*
const AUTHORIZED_USER = "AUTHORIZED_USER";

function User(name,surname,email) {
    this.name = name;
    this.surname = surname;
    this.email = email;
}

const inputName = document.querySelector('input[name="name"]');
const inputSurname = document.querySelector('input[name="surname"]');
const inputEmail = document.querySelector('input[name="email"]');
const loginButton = document.querySelector('input#loginButton');

loginButton.onclick = function (e) {
    const user = new User(inputName.value, inputSurname.value, inputEmail.value);
    sessionStorage.setItem(AUTHORIZED_USER, JSON.stringify(user));
};
*/
