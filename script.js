window.addEventListener('DOMContentLoaded', function (){
    let register = this.document.getElementById('register');
    let container = this.document.getElementById('container');
    

    register.addEventListener('click',function(){
        container.innerHTML +=`<form action="">
        <label for="">Last-name :</label>
        <input type="text" id="name">
        <label for="">First-name :</label>
        <input type="text" id="first_name">
        <label for="">Adresse Mail :</label>
        <input type="email" id="mail">
        <button id="return_register">Sign Up</button>
    </form>`
    
    let name = document.getElementById('name');
    let first_name = document.getElementById('first_name');
    let return_register = document.getElementById('return_register');
    let mail = document.getElementById('mail');

    return_register.addEventListener('click',function(){
       alert(` 
        Last-name : ${name.value}
        First-name : ${first_name.value}
        Adresse mail : ${mail.value}
        `)
    })

    })

})