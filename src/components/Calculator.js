import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = { total: '0', next: '', operation: '' };
  }

  operationsHandler(name) {
    const object = this.state;
    const result = calculate(this.state, name);
    this.setState({ ...object, ...result });
  }

  render() {
    const object = this.state;
    return (
      <div className="grid-container">
        <div className="span-4">
          {object.total}
          {object.operation}
          {object.next}
        </div>
        <button type="button" onClick={() => this.operationsHandler('AC')}>
          AC
        </button>
        <button type="button" onClick={() => this.operationsHandler('+/-')}>
          +/-
        </button>
        <button type="button" onClick={() => this.operationsHandler('%')}>
          %
        </button>
        <button type="button" className="operation" onClick={() => this.operationsHandler('÷')}>
          ÷
        </button>
        <button type="button" onClick={() => this.operationsHandler('7')}>
          7
        </button>
        <button type="button" onClick={() => this.operationsHandler('8')}>
          8
        </button>
        <button type="button" onClick={() => this.operationsHandler('9')}>
          9
        </button>
        <button type="button" className="operation" onClick={() => this.operationsHandler('x')}>
          x
        </button>
        <button type="button" onClick={() => this.operationsHandler('4')}>
          4
        </button>
        <button type="button" onClick={() => this.operationsHandler('5')}>
          5
        </button>
        <button type="button" onClick={() => this.operationsHandler('6')}>
          6
        </button>
        <button type="button" className="operation" onClick={() => this.operationsHandler('-')}>
          -
        </button>
        <button type="button" onClick={() => this.operationsHandler('1')}>
          1
        </button>
        <button type="button" onClick={() => this.operationsHandler('2')}>
          2
        </button>
        <button type="button" onClick={() => this.operationsHandler('3')}>
          3
        </button>
        <button type="button" className="operation" onClick={() => this.operationsHandler('+')}>
          +
        </button>
        <button type="button" className="span-2" onClick={() => this.operationsHandler('0')}>
          0
        </button>
        <button type="button" onClick={() => this.operationsHandler('.')}>
          .
        </button>
        <button type="button" className="operation" onClick={() => this.operationsHandler('=')}>
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
