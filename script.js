/*document.addEventListener('DOMContentLoaded', function() {
    
const first = document.querySelector('#first')
const second = document.querySelector('#last')
const email = document.querySelector('#email')
const pass = document.querySelector('#pass')

const inputs = [first, second, email, pass]

const firstErr = document.querySelector('#firsterr')
const secondErr = document.querySelector('#seconderr')
const emailErr = document.querySelector('#emailerr')
const passErr = document.querySelector('#paserr')

const errs = [firstErr, secondErr, emailErr, passErr]

for (let i = 0; i < 4; i++) {
  //this cancels custom validity if previously added
  inputs[i].addEventListener('input', () => {
    inputs[i].setCustomValidity('');
  })
}

document.getElementById('submit').addEventListener('click', () => {
  for (let i = 0; i < 4; i++) {
    if (!inputs[i].checkValidity()) {
      inputs[i].classList.add('input-error')
      errs[i].classList.add('err-msg-show')
      //this removes default validity to disable tooltip
      inputs[i].setCustomValidity(' ');

    } else {
      inputs[i].classList.remove('input-error')
      errs[i].classList.remove('err-msg-show')
    }
  }
}))
}
*/
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("submit").addEventListener('click', () => {
        const first = document.querySelector('#first').value;
        alert(first);
        if (first == "") {
            alert("first not empty");
            var  x = document.querySelector('#first');
            alert(x);
            //document.querySelector('#first').classList.add("input-error");
            //document.querySelector("#err-msg").textContent = "First Name cannot be empty";
          }
    })
})