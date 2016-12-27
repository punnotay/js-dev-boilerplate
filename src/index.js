import './style.css';
import numeral from 'numeral';

const val = numeral(1000).format('$0,0.00');
//debugger;
console.log(`Course value costs ${val}!!`); // eslint-disable-line no-console
