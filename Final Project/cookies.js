function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/";

    alert("Clicking OK , you accept use of cookies");

}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i=0; i<ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0)==' '){
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
         return c.substring(name.length, c.length);
        }
    }
    return "";
}
/*
function checkCookie() {
    //let user = getcookie("username");
    if (user != ""){
        alert("welcome again " + user);

    }else {
        user = prompt("Please enter your name:","");
        if (user != "" && user != null){
            setCookie("username", user,260);
        }
    }
    const user = document.getElementById('Welcome');
    user.InnerHTML = "Welcome" + getCookie() + "!";
}*/

