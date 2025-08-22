function verificar(){
const usuario= document.getElementById("login").value;
const senha= document.getElementById("senha").value;
const título = document.getElementById("título");
const usuarios =[
    {login:"Maria Alice",senha:"1234" },
    {login:"Daniel", senha:"567"},
    {login:"Laís", senha:"890"}];
    let encontrado = false;
    for(i=0; i< usuarios.length; i++){
        if(usuario == usuarios[i].login && senha == usuarios[i].senha){
            encontrado =true;
            título.innerHTML="Seja bem-vindo a página "  + usuarios[i].login + "!";
window.location.href="https://prozeducacao.com.br/"

            
        }
    }
    if(!encontrado){
    título.innerHTML="Erro usuário não encontrado =( ";
    }



setTimeout(() => {
    título.innerHTML="Login SC";
},5000);
document.getElementById("login").value = "";
document.getElementById("senha").value = "";
}
