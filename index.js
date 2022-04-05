const list = document.querySelector('ul');

var navn = prompt('skriv inn navnet ditt her:');
var etternavn = prompt('skriv inn etternavn her:');
localStorage.setItem(navn, etternavn);

let hentNavn = localStorage.getItem(etternavn);

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log({key, value})
};

alert('Vi ønsker deg alt godt ' + navn + ' ' + etternavn);

document.getElementById("test").innerHTML = navn + ' ' + etternavn;
