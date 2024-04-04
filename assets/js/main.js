// Get the input field and list
var input = document.getElementById('searchright');
var ul = document.getElementById('list');
var li = ul.getElementsByTagName('h5');

// Add event listener to input field
input.addEventListener('input', function() {
  var filter = input.value.toUpperCase(); // Convert input to uppercase for case-insensitive matching
  // Loop through all list items, and hide those who don't match the search query
  for (var i = 0; i < h5.length; i++) {
    var textValue = h5[i].textContent || h5[i].innerText;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      h5[i].style.display = '';
    } else {
      h5[i].style.display = 'none';
    }
  }
});

function submitForm() {
  var formData = new FormData(document.getElementById("contactForm"));
  
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "your-server-script-url.php", true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
              document.getElementById("response").innerHTML = xhr.responseText;
          } else {
              document.getElementById("response").innerHTML = "Error: " + xhr.status;
          }
      }
  };
  xhr.send(formData);
}
