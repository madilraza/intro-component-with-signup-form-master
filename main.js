document.addEventListener('invalid', (function(){
    return function(e) {
      e.preventDefault();
      var fname = document.getElementById("fname");            
      var email = document.getElementById("email");    
      var lname = document.getElementById("lname");
      var pass =  document.getElementById("pass");
      var x1 = document.getElementById("errorAlert1");
      var x2 = document.getElementById("errorAlert2");
      var x1 = document.getElementById("errorAlert3");
      var x2 = document.getElementById("errorAlert4");
      var x1 = document.getElementById("errorAlert5");
      color = "#ff0000";
      if(fname.value ==" "){
          x1.style.display = "block";
          fname.style.borderColor = color;
          return false;
      }   
      if(lname.value ==" "){
          x2.style.display = "block";
          lname.style.borderColor = color;
          return false;
      }  
      if(email.value ==" "){
          x3.style.display = "block";
          email.style.borderColor = color;
          return false;
      }  
      if (email.value.indexOf("@", 0) < 0)                 
      { 
          x4.style.display = "block";
          email.style.borderColor = color; 
          return false; 
      } 
      if (email.value.indexOf(".", 0) < 0)                 
      { 
          x4.style.display = "block";
          email.style.borderColor = color; 
          return false; 
      } 
      if(pass.value ==" "){
          x5.style.display = "block";
          pass.style.borderColor = color;
          return false;
      }  
    };
})(), true);