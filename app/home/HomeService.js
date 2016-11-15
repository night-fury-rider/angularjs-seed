(function () {
    'use strict';
    uvApp.factory('HomeService',
        [ '$http', '$q',
            function ($http, $q) {

                /**
                 * @description Function to get favorite movies of Yuvraj Patil 
                 * @return {Array} List of favorite movies of Yuvraj Patil 
                 * TODO: Integrate mockable web service.
                 */
                function getFavoriteMovies() { 
                     var request = $http({
                        method: 'GET',
                        url: 'http://demo8344494.mockable.io/getFavoriteMovies'
                    });

                     return request.then(function (response) {
                        return response.data;
                    }); 
                     
                }                  
 
                // Public API.
                return ({
                    getFavoriteMovies: getFavoriteMovies
                });
            }]);
})();