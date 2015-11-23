angular.module('Booya')

.controller('MainCtrl', function($scope, $http, Items) {
   /** 
   we are tying this to the interface (initially) by adding 
   ng-controller to the <main> element
   **/
    
    console.log('MainCtrl is initialized');
    
    $scope.allData;
    
    //$http({method:'GET', url:'data/list.json'})
    Items.getAll()
    .then(function(response){
    //worked
        $scope.allData = response.data;
        
    }, function(response){
    //failed
    });
});