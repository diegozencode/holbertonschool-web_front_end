function setCookies() {
  // get input values
  let name = document.getElementById("firstname").value;
  let email = document.getElementById("email").value;
  // set cookie values
  document.cookie = "firstname=" + name;
  document.cookie = "email=" + email;
}

function showCookies() {
  // Create DOM p element
  const paragraph = document.createElement('p');
  // set Cookies: and value
  paragraph.innerHTML = "Cookies: " + document.cookie;
// append the p at the bottom of the page
  document.body.appendChild(paragraph);
}