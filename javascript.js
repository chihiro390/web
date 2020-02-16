document.write("こんにちは。");
document.addEventListener('click', function() {
  
    console.log('クリックされました');
  
});

<<<<<<< HEAD
=======
document.getElementById("button").onclick = function() {
  // ここに#buttonをクリックしたら発生させる処理を記述する
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

>>>>>>> c4d8879d454a40569f7b899cd0fbbd3133495422
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
<<<<<<< HEAD

myButton.onclick = function() {
  setUserName();
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

=======
>>>>>>> c4d8879d454a40569f7b899cd0fbbd3133495422
