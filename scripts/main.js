angular.module('app', [])
.controller('listCtrl', function($scope){
    var lists = this;
    
   lists.list = [{listItem:'Item 1', delStatus:false},
                  {listItem:'Item 2', delStatus:false}];
    
    lists.noOfitems = lists.list.length;
    
    lists.deleteListItem = function(item){
        var index = lists.list.indexOf(item);
        if(index >= 0){
            lists.list.splice(index,1);
            --lists.noOfitems;
        }
    }
    
    lists.addListItem = function(inputVal){        
        var obj = { listItem: inputVal, delStatus: false};
        lists.list.splice(0,0,obj)
        ++lists.noOfitems;
        $scope.newListItem = "";
    }
    
    
});