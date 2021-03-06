var module = angular.module('octopus-library');

module.factory('searchCriteria', function() {
  return {
    create: function(max) {
      var result = {
        text: '',
        maxResults: max
      };

      result.filter = function(item){
        if (result.text.length === 0) {
          return true;
        }

        var lc = result.text.toLowerCase();
        return item.Name.toLowerCase().indexOf(lc) !== -1 ||
          item.Description.toLowerCase().indexOf(lc) !== -1;
      };

      return result;
    }
  };
});
