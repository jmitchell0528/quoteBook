angular.module('userQuotes').controller("MainController", function ($scope, mainService) {
    $scope.newQuote = {text: "", author: ""}
    $scope.quotes = mainService.getQuotes();

    $scope.addQuote = function() {
      mainService.addQuote($scope.newQuote);
      $scope.newQuote.text = "";
      $scope.newQuote.author = "";
    }

    $scope.removeQuote = function(index) {
      mainService.removeQuote(index);
    }
  }
  )
