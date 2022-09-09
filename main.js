const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}
function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin"&& password=="admin")
    {
        alert("login succesfully");
        window.open("admin.html");
        exit();   
    }
    else if(username=="teacher"&& password=="teacher"){
    window.open("teacher.html");
    exit();
    }
    else
    {
        alert("login failed");
    }
}

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
