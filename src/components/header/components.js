import template from './header-template.html';
import controller from './controllers';

export default () => {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    controllerAs: 'vm',
    scope: {
      menu: '='
    },
    bindToController: true
  };
};
