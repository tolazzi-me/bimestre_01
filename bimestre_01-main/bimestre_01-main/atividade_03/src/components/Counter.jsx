import React from 'react';
export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            countStep: 1
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        let value = Number(event.target.value);
        if (!isNaN(value)) {
            this.setState({ countStep: value });
        } else {
            alert('Número inválido');
        }
    }
    render() {
        return (
            <div>
                <h1>Contou {this.state.count} vezes</h1>
                <label htmlFor="input-step" className='input-step-l'>
                    Número de Passos
                    <input id='input-step' type="text" value={this.state.countStep} onChange={this.handleChange} />
                </label>
                <br />
                <button className='btn' onClick={() => this.setState({ count: this.state.count + this.state.countStep })}>
                    Adicionar
                </button>
                <button className='btn' onClick={() => this.setState({ count: this.state.count - this.state.countStep })}>
                    Diminuir
                </button>
                <button className='btn' onClick={() => this.setState({ count: 0 })}>
                    Resetar
                </button>
            </div>
        );
    }
}