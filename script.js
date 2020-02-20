
 openNav = () => {
  document.getElementById("mobile_menu").style.width = "100%";;
  }

  closeNav = () =>{
    document.getElementById("mobile_menu").style.width = "0";
  }



function openPage(pageName) {
  let i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(pageName).style.display = "block";
  closeNav();
}

function openLink(link){
  let i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(link).style.display = "block";
}


// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
