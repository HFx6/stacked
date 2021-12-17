// import { useEffect } from 'react'


var FILE_KEY = 'csvData';

var reader = new window.FileReader();
reader.onload = handleFileRead;

function readFile(event) {;
    var file = event.target.files[0];
    reader.readAsText(file); 
}

function handleFileRead(event) {
    var save = JSON.parse(event.target.result);
    console.log(save);
    window.localStorage.setItem(FILE_KEY, JSON.stringify(save));
    console.log(JSON.parse(localStorage.getItem(FILE_KEY)));
}
export { readFile }