if(localStorage.getItem("small-sidebar") === "yes"){
    sidarId.classList.add("small-sidebar");
  }
  else{
    sidarId.classList.remove("small-sidebar");
  }
   const toggelsidebar = () => {
  // console.log("ee");
  // ajouter class="sidebar"
    // sidarId.classList.add("small-sidebar");
  
  if(localStorage.getItem("small-sidebar") === "yes"){
    localStorage.setItem("small-sidebar","no");
    sidarId.classList.remove("small-sidebar");
   }
  
  else {
    localStorage.setItem("small-sidebar","yes");
    sidarId.classList.add("small-sidebar");
   }
  }
   // channge toogle class="sidebar"
  //   sidarId.classList. toggle ("small-sidebar")
   