import '../assets/avatar_01.png'
import '../assets/avatar_02.png'
import '../assets/avatar_03.png'


const users = [ 
  { label: 'Gabriela', img: 'assets/avatar_01.png', value: 1},
  { label: 'Jennifer', img: 'assets/avatar_02.png', value: 2},
  { label: 'Lucas', img: 'assets/avatar_03.png', pageRef: 'dashboard' , value: 3},
]

let userList = document.getElementById('users')

let label = ''
users.forEach(userImages)

function userImages (imgSrc) {
  let img = document.createElement('img');

  img.src = imgSrc.img
  label += '<li class="profile__user"><img src="' + imgSrc.img + '"><div><a href="' + imgSrc.pageRef +'.html" >' + imgSrc.label + '</a></div></li>'
  userList.innerHTML = label
}
