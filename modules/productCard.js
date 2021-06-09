import { slider } from '../plugins/slider.js'

let getTemplate = function(data){

    let sizes = data.sizes.map(item => `<li data-type="size">${item}</li>`).join('')

    return ` 
        <div class="product__slider__wrapper" data-slider="${data.id}">

        </div>
        <div class="product__content">
            <h4 class="product__title">${data.name}</h4>
            <span class="product__model">${data.model}</span>
            <span class="product__describe">${data.describe}</span>
            <ul class="product__sizes" data-type="sizes">
                ${sizes}
            </ul>
            <span class="product__price">${data.price}$ </span>
        </div>`
}

export class productCard {
    constructor(target, data){
        this.data = data 
        this.target = document.querySelector(target)

        this.product = document.createElement('div')

        this.#renderHTML()
        this.#setup()
    }

    state = {
        selectedSize: '',
    }

    #renderHTML(){
        let template = getTemplate(this.data)

        this.product.classList.add('product')
        this.product.id = `product-${this.data.id}`
        this.product.insertAdjacentHTML('afterbegin', template)

        this.target.prepend(this.product)

        let sliderWrapper = this.product.querySelector('.product__slider__wrapper')

        new slider(this.data.images, sliderWrapper)
    }

    select(e){ 
        let sizes = this.product.querySelectorAll('[data-type="size"]')

        if(e.target.dataset.type === 'size'){
            sizes.forEach(item => item.classList = '')
            e.target.classList.add('selected')

            this.state.selectedSize = e.target.textContent
        }
    }

    #setup(){
        let handler = this.select.bind(this)
        this.product.querySelector('[data-type="sizes"]').addEventListener('click', handler)
    }

}

