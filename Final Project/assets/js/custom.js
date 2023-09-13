let login=false;

var imageData=[ "badminton1.jfif","badminton2.jfif","badminton3.jfif","badminton4.jfif","badminton5.jfif","badminton6.jfif","badminton7.jfif",
"chess1.jfif","chess2.jfif","chess3.jfif","chess4.jfif","chess5.jfif","chess6.jfif","chess7.jfif","temis1.jfif","temis2.jfif" ,
"temis3.jfif","temis4.jfif","temis5.jfif","temis6.jfif","temis7.jfif","table1.jfif","table2.jfif","table3.jfif","table4.jfif","table5.jfif",
"table6.jfif","table7.jfif","football1.jfif","football1.jfif","football2.jfif","football3.jfif","football4.jfif","football5.jfif","football6.jfif",
"football7.jfif"];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

shuffle(imageData);
        
function validateLogin()
{
  var loginid=document.getElementById("username").value;
  var password=document.getElementById("userpassword").value;
  if(loginid.toLowerCase()=="simran@proj.ca" && password=="123")
  {
     login=true;
     console.log("logged in!")  
     $("#exampleModalCenter").modal("hide")
     document.getElementById("btn_login").innerHTML="Hi, User"

  }
  else
  login=false
  updateGallery('all')
}


function updateGallery(typeofImage)
{
  var elementBox=document.getElementById("gallery-box")
  elementBox.innerHTML=""
  if(typeofImage=='input')
  {
    typeofImage=document.getElementById("inputvalue").value
  }
  if(login==false)
  {
    elementBox.innerHTML="</br></br></br></br></br>Please Login to see the gallery !";
  }
  else{
    for(let i=0;i<imageData.length;i++)
    {
      if(typeofImage==='all')
      {
        let element=document.createElement("div")
      element.setAttribute("class","isotope-item")
      let figure=document.createElement("figure")
      figure.setAttribute("class","snip1321")
      let img=document.createElement("img")
      img.setAttribute("src","assets/images/gallery/"+imageData[i])
      element.appendChild(figure)
      element.appendChild(img)
      elementBox.appendChild(element)
      }
      else
      {
        var image_name=imageData[i];
        if(image_name.includes(typeofImage))
         {
          let element=document.createElement("div")
      element.setAttribute("class","isotope-item")
      let figure=document.createElement("figure")
      figure.setAttribute("class","snip1321")
      let img=document.createElement("img")
      img.setAttribute("src","assets/images/gallery/"+imageData[i])
      element.appendChild(figure)
      element.appendChild(img)
      elementBox.appendChild(element)
         }
      }
    }
  }
}
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function submitdata()
{
  var datatosubmmit={
  "name":document.getElementById('name').value,
  "email":document.getElementById('email').value,
 "age": document.getElementById('age').value,
  "subject":document.getElementById('subject').value,
  "message":document.getElementById('message').value
}
if(validateEmail(datatosubmmit.email))
  {
    console.log(datatosubmmit)
  }
  else{
    console.log("Email is invalid")
  }

}
updateGallery('all')

