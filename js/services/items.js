angular.module('Booya')
.factory('Items', function ItemsFactory($http){
    
    
    return{
        getAll: function(){
               return $http({method:'GET', url:'data/list.json'});
        },
        getOne: function(id){
               return $http({method:'GET', url:'data/list.json'});
        }
        
    }
});