import _ from 'lodash';
import $ from 'jquery';
import { ui } from './jquery.ui';
ui();

const element = document.createElement('div');
element.innerText = _.join(['as', 'mallgod'], '***');
$('#root').append(element);
