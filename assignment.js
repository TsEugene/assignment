angular.module('app', ['ngMaterial', 'md.data.table'])

  .value('WORD_COUNT', 100)

  .service('tagService', function () {
    return {
      getTags: function () {
        return ['Laurent', 'Charlie', 'Elsa', 'Bob', 'Blandine', 'Raymond', 'Jade', 'Athanase', 'Antoine', 'Benjamin', 'Solenne', 'Alice', 'Boris', 'Cedric', 'Camille', 'Isabelle', 'Olivier', 'Nicolas', 'Amaury', 'Odile'];
      }
    };
  })

  .controller('MainCtrl', ['$scope', 'tagService', 'WORD_COUNT',
    function ($scope, tagService, WORD_COUNT) {
      var wordSize, word_list = tagService.getTags();
      var num1, num2, num3, num4, num5, num6, num7, num8, num9;

      $scope.selected = [];
      $scope.options = {
        boundaryLinks: true,
        rowSelection: true
      };
      $scope.words = [];
      $scope.orderByField = 'firstName';
      $scope.reverseSort = false;

      for (var i = 0; i < WORD_COUNT; i += 1) {
        num1 = Math.floor((Math.random() * 1000) + 1);
        num2 = Math.floor((Math.random() * 1000) + 1);
        num3 = Math.floor((Math.random() * 1000) + 1);
        num4 = Math.floor((Math.random() * 1000) + 1);
        num5 = Math.floor((Math.random() * 1000) + 1);
        num6 = Math.floor((Math.random() * 1000) + 1);
        num7 = Math.floor((Math.random() * 1000) + 1);
        num8 = Math.floor((Math.random() * 1000) + 1);
        num9 = Math.floor((Math.random() * 1000) + 1);
        $scope.words.push({
          name: word_list[Math.floor((Math.random() * 10) + 1)],
          number1: num1,
          number2: num2,
          number3: num3,
          number4: num4,
          number5: num5,
          number6: num6,
          number7: num7,
          number8: num8,
          number9: num9
        });
      }
    }
  ]);
