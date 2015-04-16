define(function(){
	var appCtrl=angular.module('homeCtrl',[]);

	appCtrl.controller("homeController",function($scope){


		$scope.$on('$viewContentLoaded', function(){
				var timeline = $("#timeline-carousel"),
					timelineOpts = {
					slideSpeed: 200,
					paginationSpeed: 200,
					rewindSpeed: 800,
					// singleItem: true,
					items : 3,
					itemsDesktop: [1170, 3],
					itemsMobile: [480, 1],
					autoPlay: true,
					pagination: false, // disable default pagination
					// responsive: true
				};
			timeline.owlCarousel(timelineOpts);

		});

	});

});
