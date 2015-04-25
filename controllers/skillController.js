define(['custom','plugins'],function(){
	var sCtrl=angular.module('skillCtrl',[]);

	sCtrl.controller("skillController",function($scope){
	 	$scope.$on('$viewContentLoaded', function(){
		// $("#circular-skills").skillChart()


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


  			require(["init"], function() {
        // do some stuff with these require()'d dependencies
        		if(!$("svg").height())
	        		o.init();
    		})
		});

	});
});
