const movies = [
  { title: 'T1E2 - SOVA', image: './assets/sova.png'},
  { title: 'T1E2 - Avatar', image: './assets/avatar.png'},
  { title: 'T1E1 - Cavaleiros', image: './assets/cavaleiros.png'},
  { title: 'T1E2 - Cavaleiros', image: './assets/cavaleiros.png'},
  { title: 'T1E3 - Cavaleiros', image: './assets/cavaleiros.png'},
  { title: 'T1E4 - Cavaleiros', image: './assets/cavaleiros.png'},
  { title: 'T1E2 - Star Wars', image: './assets/starwars.png'}
]

class listView extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})

    let list = ''

    movies.forEach(component)

    function component (model) {
      list += `
        <li>
          <pre-view title="${model.title}" image="${model.image}"></pre-view>
        </li>
      `
    }

    const style = document.createElement('style')
    style.innerText = `
    .lista {
      display: flex;
      min-height: 250px;
      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap;
      scroll-behavior: smooth;
      // margin-right: 47px;
      
    }

    ::-webkit-scrollbar { 
      display: none; 
    }

    #Right {
      position: fixed;
      top: 114px;
      height: 188px;
      right: 0px;
    }

    #left {
      position: fixed;
      top: 114px;
      height: 188px;
      left: 0px;
    }

    `
    this.shadowRoot.appendChild(style)
    const listOrder =  document.createElement('ul')
    listOrder.setAttribute('class', 'lista')
    listOrder.innerHTML = list
    listOrder.setAttribute('id', 'container')
    this.shadowRoot.appendChild(listOrder)

    const buttonLeft = document.createElement('button')
    buttonLeft.innerText = 'Left'
    buttonLeft.setAttribute('id', 'left')
    this.shadowRoot.appendChild(buttonLeft)
    
    const buttonRight = document.createElement('button')
    buttonRight.innerText = 'Right'
    buttonRight.setAttribute('id', 'Right')
    this.shadowRoot.appendChild(buttonRight)

  }
  
  connectedCallback() {
    const lista = this.shadowRoot.getElementById('container')
    const scrollBtnRight = this.shadowRoot.getElementById('Right')
    scrollBtnRight.addEventListener('click', function(event) {
      event.target.onclick = function () {
        lista.scrollLeft += 320
      }
    })

    const scrollBtnLeft = this.shadowRoot.getElementById('left')
    scrollBtnLeft.addEventListener('click', function(event) {
      event.target.onclick = function () {
        lista.scrollLeft -= 400
      }
    })
  }

  disconectedCallback() {}
}

window.customElements.define('list-view', listView)