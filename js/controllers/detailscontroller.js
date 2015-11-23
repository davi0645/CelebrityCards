angular.module('Booya')

.controller('DetailsCtrl', function($scope, $routeParams, Items) {
   /** 
   we are tying this to the interface (initially) by adding 
   ng-controller to the <main> element
   **/
    $scope.itemID = $routeParams.itemID;
    $scope.item = {}
    console.log('DetailsCtrl is initialized');
    
    Items.getOne($scope.itemID)
    .then(function(response){
    //worked
        var items = response.data.items;
        items.forEach(function(i) {
            if (i.id == $scope.itemID) {
                $scope.item = i;
            }
        });
        
    }, function(response){
    //failed
    });
});