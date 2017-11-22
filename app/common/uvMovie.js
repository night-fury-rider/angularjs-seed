(function () {
  'use strict';

  uvApp.directive('uvMovie', function() {
    return {
      restrict: 'E',    //  E for Element
      scope: {          //  Isolated Scope.
        name: '@title'  //  One way data binding. From Controller to Directive
      },
      template: '<span> {{ name }} </span>'
    };
  });

})();
