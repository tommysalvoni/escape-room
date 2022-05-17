function openNav() {
  let x=document.getElementById("mySidebar").style.width
  if(x!="250px"){
    document.getElementById("mySidebar").style.width = "250px";    
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("titolo").style.marginRight = "250px";
  }else{
 closeNav();
  }
  
  }
  

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("titolo").style.marginRight = "0px";
  }