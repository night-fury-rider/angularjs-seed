(function () {
    'use strict';
    uvApp.controller('HomeCtrl', [  '$scope', 'HomeService',
        function ( $scope, HomeService) {

            /**
             * @description name of the author
             * @type {String}
             */
            $scope.author = "Yuvraj Patil"; 


            /**
             * @description list of favorite movies
             * @type {Array} 
             */
            $scope.movies = []; 

            
            /**
            * @description Function to show favorite movies of Yuvraj Patil
            */
            $scope.showFavoriteMovies = function () {  
                

                  HomeService.getFavoriteMovies().then(function (data) {
                     $scope.movies = data; 
                  });
            }; 
        }]);
})();