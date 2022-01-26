var template = document.createElement('template');

template.innerHTML = `
<style>
    #counter{
        display: flex;
        padding: 5px;
        background-color: deepskyblue;
        border-radius: 8px;
    }
    #counter > button{
        background-color: antiquewhite;
        border: none;
        width:80px;
        height:50px;
        border-radius: 8px;
        font-size: large;
    }
    #counter > div{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        
    }
    #bar{
        width: 10px;
        height:10px;
        background-color: green;
        transition: width .5s;
    }
    #reset{
        align-self: flex-end;
    }
</style>

<div id="counter"> 
<button" id='d_but'>-</button>
<div id='c_num'>0</div>
<button id='i_but'> +</button>
<button id='reset'>RESET</button>
</div>
<div id="bar"></div>
`;



class TheCounter extends HTMLElement {
    constructor(){
        super();
        this.num = 1;
        this.attachShadow({mode:"open"})
    }
    connectedCallback(){
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        this.shadowRoot.getElementById("#d_but").onclick = this.dec
        this.shadowRoot.getElementByIdr("#i_but").onclick = this.inc
    }

    dec(){
        this.num = this.num -1;
        this.shadowRoot.getElementById("#c_num").innterText = this.num
    }
    inc(){
        this.num = this.num +1;
        this.shadowRoot.getElementById("#c_num").innterText = this.num
    }
}

customElements.define("the-counter", TheCounter)