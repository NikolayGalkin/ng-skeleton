import template from './menu-template.html';

export default () => {
  return {
    template,
    // controller: controller,
    restrict: 'E',
    replace: true
    // controllerAs: 'vm',
    // bindToController: true
  };
};
