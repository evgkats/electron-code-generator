// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
var input = document.querySelectorAll('.num-input').forEach(input => {
	input.addEventListener('keyup', function (event) {
          if (event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57) {
            this.value = this.value.replace(/\D/g, "");
          }
        });
});
        
document.getElementById('form').addEventListener('submit', e => {
			// display the hidden code field
            let newCodeElement = document.getElementById("new-code-container");
  			newCodeElement.classList.remove("invisible");

  			//TODO: Generate code
  			let newCode = '1234-1234-1234-1234'

  			// show the generated code int the new-code span
  			let s= document.getElementById('new-code');
  			s.innerHTML = newCode;
            e.preventDefault();
        });