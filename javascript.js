document.write("こんにちは。");
document.addEventListener('click', function() {
  
    console.log('クリックされました');
  
});

myButton.onclick = function() {
  setUserName();
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('あなたの好きな食べ物を教えてください');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'なにそれおいしいの？' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = '' + storedName;
}