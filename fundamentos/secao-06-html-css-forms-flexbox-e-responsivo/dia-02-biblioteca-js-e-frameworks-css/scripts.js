let button = document.getElementById('send-button');


function sendButton (event){
    event.preventDefault();
    console.log(event)
}

button.addEventListener('click', sendButton)