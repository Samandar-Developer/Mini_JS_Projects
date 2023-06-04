document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zipcode").addEventListener("blur", validateZipcode);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);

function validateName(){
  const name = document.getElementById("name");
  const re = /^[a-zA-Z]{3,30}( [a-zA-Z]{3,30})?$/;
  if(!re.test(name.value)){
    name.classList.add("is-invalid");
  }else{
    name.classList.remove("is-invalid");    
  }
}

function validateZipcode(){
  const zipcode = document.getElementById("zipcode");
  //const re = /^[0-9]{5}(-[0-9]{4})?&/; US zipcode version
  const re = /^[0-9]{6}$/;
  if(!re.test(zipcode.value)){
    zipcode.classList.add("is-invalid");
  }else{
    zipcode.classList.remove("is-invalid");    
  }
}

function validateEmail(){
  const email = document.getElementById("email");
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,6})$/;
  if(!re.test(email.value)){
    email.classList.add("is-invalid");
  }else{
    email.classList.remove("is-invalid");    
  }
}

function validatePhone(){
  const phone = document.getElementById("phone");
  //US phone number version
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  //Uzbek phone number version `NOT COMPLITE`
  //const re = /^+\d{3}(?\d{2})?[ ]?\d{3}[ ]?\d{2}[ ]?\d{2}$/;
  if(!re.test(phone.value)){
    phone.classList.add("is-invalid");
  }else{
    phone.classList.remove("is-invalid");    
  }
}
