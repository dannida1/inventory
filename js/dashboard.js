function getForm() {
    let form = document.getElementsByTagName('form');
    let output = document.querySelector('pre');
    for (var i of form[0]) {
        console.log(i[1]);
    }
}

let upload = document.querySelector('#submit');
upload.addEventListener('click', getForm);