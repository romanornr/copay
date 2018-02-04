'use strict';

angular.module('copayApp.controllers').controller('shapeshiftDetailsController', function($scope, shapeshiftService, externalLinkService) {

  $scope.remove = function() {
    shapeshiftService.saveShapeshift($scope.ss, {
      remove: true
    }, function(err) {
      $scope.cancel();
    });
  };

  $scope.cancel = function() {
    $scope.shapeshiftDetailsModal.hide();
  };

  $scope.openTransaction = function(id) {
    var url;
    if ($scope.ss['outgoingType'].toUpperCase() == 'BTC') {
      url = "https://explorer.viacoin.org/tx/" + id;
    } else if ($scope.ss['outgoingType'].toUpperCase() == 'BCH') {
      url = "https://bch-explorer.viacoin.org/tx/" + id;
    } else {
      return;
    }
    externalLinkService.open(url);
  };

});
