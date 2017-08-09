import angular from 'angular';

// import './bower_components/bootstrap/dist/css/bootstrap.css';
import './styles/style.scss';

import Components from './components';
import AppComponent from './App.component';

console.log(Components)

angular.module('phonecatApp',[]).directive('app', AppComponent);

