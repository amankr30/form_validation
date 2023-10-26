let title=document.querySelector("#title")
let namefield=document.querySelector("#namefield")
let signupBtn=document.querySelector("#signupBtn")
let signinBtn=document.querySelector("#signinBtn")



signinBtn.onclick=function(){
    namefield.style.maxHeight="0"
    title.innerHTML="Sign In"
    signupBtn.classList.add("signIn")
    signinBtn.classList.remove("signIn")
    
}
signupBtn.onclick=function(){
    namefield.style.maxHeight="60px"
    title.innerHTML="Sign Up"
    signupBtn.classList.remove("signIn")
    signinBtn.classList.add("signIn")
    
}