import _ from 'lodash';
import $ from 'jquery';

const element = document.createElement('div');
element.innerText = _.join(['as', 'mallgod'], '***');
$('#root').append(element);
