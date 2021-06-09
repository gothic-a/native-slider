
let getTemplate = function(src){

    let thumbs = src.map((item, index) => {
        return `<li class="slider__thumb" data-type="thumb" data-id="${index+1}"> 
                    <img src="${item}" alt=""  data-type="thumb" data-id="${index+1}">
                </li>`
    }).join('')

    let view = src.map((item, index) => {
        return ` <img class="slider__view__img" src="${item}" alt="" data-type="full" data-id="${index+1}">`
    }).join('')
    
    return `
        <span class="slider__close" data-type="close">x</span>
        <ul class="slider__thumbs">
            ${thumbs}
        </ul>
        <div class="slider__view__container">
            <div class="slider__view">
                <div class="slider__stage">
                    ${view}
                </div>
            </div>
        </div>
    `
}

export class slider{
    constructor(src = [], target){
        this.src = src

        this.target = target
        this.slider = document.createElement('div')

        this.currentImgId = 1
        this.full = false 

        this.#renderSlider()
        this.#setup()
    }

    #renderSlider(){
        this.slider.classList.add('slider')
        this.slider.innerHTML = getTemplate(this.src)

        this.target.append(this.slider)
    }

    setOffset(id){
        this.currentImgId = id
        let width = this.slider.querySelector('.slider__view').offsetWidth
        let offset = -((id * width) - width) + 'px'
        this.slider.querySelector('.slider__stage').style.transform = `translateX(${offset})`
    }

    clickHandler(e){
        let type = e.target.dataset.type

        if(type === 'thumb'){
            let id = +e.target.dataset.id
            this.setOffset(id)
        } else if(type === 'full'){
            this.toggleFull('full')
        } else if(type === 'close'){
            this.toggleFull('close')
        }
    }

    toggleFull(type){
        let stage = this.slider.querySelector('.slider__stage')

        let keyHandler = this.debounce(this.keyHandler.bind(this), 400)

        if(type === 'close'){
            this.full = false 

            document.onkeydown = ""
            this.slider.classList.remove('full')
            document.querySelector('body').style.overflow = 'auto'
        } else if(type === 'full'){
            this.full = true

            this.slider.classList.add('full')
            document.onkeydown = keyHandler
            document.querySelector('body').style.overflow = 'hidden'
        }

        stage.classList.add('nontransition')
        this.setOffset(this.currentImgId)
        stage.classList.remove('nontransition')
    }

    debounce(func, ms){
        let prevCall = 0
        return function(...args){
            if(new Date - prevCall > ms){
                prevCall = new Date
                return func(...args)
            }
        }
    }

    keyHandler(e){
        if(e.key === 'ArrowLeft'){
            let id = this.currentImgId <= 1 ? +this.src.length : +(this.currentImgId - 1) 
            this.setOffset(id)
        } else if(e.key === 'ArrowRight'){
            let id = this.currentImgId < +this.src.length ? +(this.currentImgId + 1) : 1 
            this.setOffset(id)
        }
    }

    #setup(){
        let clickHandler = this.clickHandler.bind(this)
        this.slider.addEventListener('click', clickHandler)
    }
}