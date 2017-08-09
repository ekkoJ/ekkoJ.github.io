import template from './App.template.html';
import controller from './App.controller';

const AppComponent = () => ({
    template,
    restrict: 'E',
    controller,
    controllerAs: 'data',
});

export default AppComponent;
