document.write("こんにちは。");
document.addEventListener('click', function() {
  
    console.log('クリックされました');
  
});

var myButton = document.querySelector('button');
var myHeading = document.createElement('p');


function setUserName() {
  var myName = prompt('あなたの好きな食べ物を教えてください');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'おいしいの？';
  document.body.appendChild(myHeading);
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

for(let i = 0; i < myHeading.length ; i++) {
  myHeading[i].addEventListener('click', createParagraph);
}

