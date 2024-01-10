import { LightningElement } from 'lwc';

export default class Calculadora extends LightningElement {
    number1;
    number2;
    total;
    operacao;
    hasTotal;

    connectedCallback() {
        this.total = "O resultado da soma é " + 0;
        this.hasTotal = false;
    }

    handleChangeNumber1(event) {
        this.number1 = event.target.value
    }

    handleChangeNumber2(event) {
        this.number2 = event.target.value
    }

    sum() {
        this.total = "O resultado da soma é " + Number(this.number1) + Number(this.number2)
        this.hasTotal = true
    }

    minus() {
        this.total = "O resultado da subtração é " + Number(this.number1) - Number(this.number2)
        this.hasTotal = true
    }

    multipliedBy() {
        this.total = "O resultado da multiplicação é " + Number(this.number1) * Number(this.number2)
        this.hasTotal = true
    }

    dividedBy() {
        if(!this.number2) this.total = "impossível dividir por 0!"
        this.total = "O resultado da divisao é " + Number(this.number1) / Number(this.number2)
        this.hasTotal = true
    }

    reset() {
        this.total = 0;
        this.hasTotal = false
    }
}