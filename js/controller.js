class time {

    constructor(){
        this._displayRelogio = document.querySelector("#display")
        this._displayData = document.querySelector("#data")
        this._displayHora = document.querySelector("#hora")
        this._time;
        this.inicializar()
        this.clickButtons()
    }

    inicializar(){
        
        this.intervalo()

        setInterval(()=>{

            this.intervalo()

        },1000)
    }

    intervalo(){
        this.displayData = this.time.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        })
        this.displayHora = this.time.toLocaleTimeString('pt-BR')
    }

    addEventListenerAll(elementos, eventos, fns){
        eventos.split(' ').forEach((evento)=>{
            elementos.addEventListener(evento, fns)
        })
    }

    clickButtons(){
        let bot = document.querySelectorAll('#tela > div')
        let link = document.querySelector('.link')
        bot.forEach((bott)=>{
            this.addEventListenerAll(bott,'mousemove mousedown', pointer =>{
                bott.style.cursor = 'pointer'
            })

        })
    }

    get displayRelogio(){
        return this._displayRelogio.innerHTML;
    }

    set displayRelogio(valor){
        this._displayRelogio.innerHTML = valor;
    }

    get displayData(){
        return this._displayData.innerHTML;
    }

    set displayData(valor){
        this._displayData.innerHTML = valor;
    }

    get displayHora(){
        return this._displayHora.innerHTML;
    }

    set displayHora(valor){
        this._displayHora.innerHTML = valor;
    }

    get time(){
        return new Date();
    }

    set time(valor){
        this._time.innerHTML = valor;
    }


}