
const movies = [
  // { title: 'T1E2 - SOVA', image: './assets/sova.png' },
  { title: 'T1E2 - Avatar', image: './assets/avatar.png' },
  { title: 'T1E1 - Cavaleiros', image: './assets/cavaleiros.png' },
  { title: 'T1E2 - Cavaleiros', image: './assets/cavaleiros.png' },
  { title: 'T1E2 - Star Wars', image: './assets/starwars.png' }
]

class listView extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
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
        border: none;
        width: 60px;
        color: red;
        background: rgba(0,0,0, 0.4);
      }

      #left {
        position: fixed;
        top: 114px;
        height: 188px;
        left: 0px;
        border: none;
        width: 60px;
        color: red;
        background: rgba(0,0,0, 0.4);
      }

      #arrowleft {
        width: 70px;
        position: absolute;
        bottom: 36%;
        right: -6%;
        transform: rotate(-90deg);
      }

      #arrowright {
        width: 70px;
        position: absolute;
        bottom: 36%;
        right: -6%;
        transform: rotate(90deg);
      }
    `
    const listOrder = document.createElement('ul')
    const buttonLeft = document.createElement('button')
    const buttonRight = document.createElement('button')
    const arrowLeft = document.createElement('img')
    const arrowright = document.createElement('img')

    arrowLeft.srcset = './assets/arrow_drop.svg'
    arrowLeft.setAttribute('id', 'arrowleft')

    arrowright.srcset = './assets/arrow_drop.svg'
    arrowright.setAttribute('id', 'arrowright')

    listOrder.setAttribute('class', 'lista')
    listOrder.setAttribute('id', 'container')
    buttonLeft.setAttribute('id', 'left')
    buttonRight.setAttribute('id', 'Right')

    listOrder.innerHTML = list

    buttonRight.appendChild(arrowLeft)
    buttonLeft.appendChild(arrowright)

    this.shadowRoot.appendChild(listOrder)
    this.shadowRoot.appendChild(style)
    this.shadowRoot.appendChild(buttonLeft)
    this.shadowRoot.appendChild(buttonRight)
  }

  connectedCallback () {
    const lista = this.shadowRoot.getElementById('container')
    const scrollBtnRight = this.shadowRoot.getElementById('Right')
    scrollBtnRight.addEventListener('click', function (event) {
      event.target.onclick = function () {
        lista.scrollLeft += 320
      }
    })

    const scrollBtnLeft = this.shadowRoot.getElementById('left')
    scrollBtnLeft.addEventListener('click', function (event) {
      event.target.onclick = function () {
        lista.scrollLeft -= 400
      }
    })
  }

  disconectedCallback () {
    const scrollBtnLeft = this.shadowRoot.getElementById('left')
    scrollBtnLeft.removeEventListener()
  }
}

window.customElements.define('list-view', listView)
