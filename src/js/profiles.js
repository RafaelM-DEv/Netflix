const users = [ 
  { label: 'Gabriela', img: 'assets/avatar_01.png', value: 1},
  { label: 'Jennifer', img: 'assets/avatar_02.png', value: 2},
  { label: 'Lucas', img: 'assets/avatar_03.png', pageRef: 'dashboard' , value: 3},
]

class viewProfile extends HTMLElement {
  constructor() {
      super()

      let label = ''
      users.forEach(userImages)

      function userImages (imgSrc) {
        label += '<li class="profile__user"><img src="' + imgSrc.img + '"><div><a href="' + imgSrc.pageRef +'.html" >' + imgSrc.label + '</a></div></li>'
      }

      this.innerHTML = label

      // this.appendChild(userList)

  }
}

window.customElements.define('view-profile', viewProfile)

// TODO criar um comopnente 