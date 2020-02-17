document.write("こんにちは。");
document.addEventListener('click', function() {
  
    console.log('クリックされました');
  
});

var myButton = document.querySelector('button');
var myHeading = document.querySelector('b1');


function setUserName() {
  var myName = prompt('あなたの好きな食べ物を教えてください');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'おいしいの？' + myName;
}
          myButton.onclick = function() {
            setUserName();
          }


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent ;
}
elem.textContent = text



