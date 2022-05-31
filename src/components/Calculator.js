import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

function Calculator() {
  const output = { total: '0', next: '', operation: '' };
  const [obj, setObj] = useState(output);

  function operationsHandler(name) {
    const result = calculate(obj, name);
    setObj({ ...obj, ...result });
  }

  return (
    <div className="layout">
      <div className="cal-title">
        <h2>Let&apos;s do some math!</h2>
      </div>
      <div className="grid-container">
        <div className="span-4">
          {obj.total}
          {obj.operation}
          {obj.next}
        </div>
        <button type="button" onClick={() => operationsHandler('AC')}>
          AC
        </button>
        <button type="button" onClick={() => operationsHandler('+/-')}>
          +/-
        </button>
        <button type="button" onClick={() => operationsHandler('%')}>
          %
        </button>
        <button type="button" className="operation" onClick={() => operationsHandler('÷')}>
          ÷
        </button>
        <button type="button" onClick={() => operationsHandler('7')}>
          7
        </button>
        <button type="button" onClick={() => operationsHandler('8')}>
          8
        </button>
        <button type="button" onClick={() => operationsHandler('9')}>
          9
        </button>
        <button type="button" className="operation" onClick={() => operationsHandler('x')}>
          x
        </button>
        <button type="button" onClick={() => operationsHandler('4')}>
          4
        </button>
        <button type="button" onClick={() => operationsHandler('5')}>
          5
        </button>
        <button type="button" onClick={() => operationsHandler('6')}>
          6
        </button>
        <button type="button" className="operation" onClick={() => operationsHandler('-')}>
          -
        </button>
        <button type="button" onClick={() => operationsHandler('1')}>
          1
        </button>
        <button type="button" onClick={() => operationsHandler('2')}>
          2
        </button>
        <button type="button" onClick={() => operationsHandler('3')}>
          3
        </button>
        <button type="button" className="operation" onClick={() => operationsHandler('+')}>
          +
        </button>
        <button type="button" className="span-2" onClick={() => operationsHandler('0')}>
          0
        </button>
        <button type="button" onClick={() => operationsHandler('.')}>
          .
        </button>
        <button type="button" className="operation" onClick={() => operationsHandler('=')}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
