const template = document.createElement('template')
template.innerHTML = `
<div id="card-preview" class="preview">
  <div id="card" class="card">
    <img id="img-card" class="card__image" />
    <div id="card-actions" class="card__actions">
      <div id="btn-card" class="card__btn">
        <button class="card__btn--card">
          <img src="../assets/play_circle.svg" />
        </button>
        <button class="card__btn--card">
          <img src="../assets/add_circle.svg" />
        </button>
        <button class="card__btn--card">
          <img src="../assets/thumb.svg" />
        </button>
        <button class="card__btn--card">
          <img src="../assets/thumb_down.svg" />
        </button>
        <button class="card__btn--card">
          <img src="../assets/remove.svg" />
        </button>
        <button class="card__btn--card">
          <img src="../assets/arrow_drop.svg" />
        </button>
      </div>
      <div class="card__text">
        <h3 id="card-title"></h3>
      </div>
      <div class="card__progress">
        <div class="card__bar">
          <div class="card__bar card__bar--color"></div>
        </div>
        <h3 class="card__text">7 de 21min</h3>
      </div>
    </div>
    <div id="bar-preview" class="card__progress card__progress--preview">
      <div class="card__bar">
        <div class="card__bar card__bar--color"></div>
      </div>
    </div>
  </div>
</div>
`
class preview extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})

    const importSass = document.createElement('style')
    importSass.innerHTML = `@import 'preview.css';`
    // SETUP
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.appendChild(importSass)
    // COMPONENT
    this.shadowRoot.getElementById('card-title').innerText = this.getAttribute('title')
    this.shadowRoot.querySelector('img').src = this.getAttribute('image')
    this.shadowRoot.querySelector('#img-card').src = this.getAttribute('image')
  }

  connectedCallback() {
    const styleSass = document.createElement('style')
    styleSass.innerHTML = `
    #bar-preview {
      display: none;
    }

    #img-card {
      width: 100%;
      max-height: 189px;
      cursor: pointer; 
    }

    #card-actions{
      display: block;
    }

    // #card-preview {
    //   transform: perspective(200px) translate3d(10px, 0, 30px) ;
    // }


    #card {
      width: 350px;
      height: 350px;
      background-color: #2e2d2d;
    };`

   const cardAction = this.shadowRoot.querySelector('#card')
   cardAction.addEventListener('mouseenter', function(event) {
     event.target.appendChild(styleSass)
   })

   cardAction.addEventListener('mouseleave', function(event) {
    event.target.removeChild(styleSass)
   })
  }

  disconectedCallback() {}
}

window.customElements.define('pre-view', preview)

// TODO mocar dados 
// TODO ver sobre classList