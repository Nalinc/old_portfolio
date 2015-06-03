define(['app','custom','plugins'],function(app,custom,plugins){
//	var sCtrl=angular.module('skillCtrl',[]);

	app.controller("skillController",function($scope){
	 	
		// $("#circular-skills").skillChart()


				var timeline = jQuery("#timeline-carousel"),
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


/*  			require(["init"], function() {
        // do some stuff with these require()'d dependencies
        		if(!$("svg").height())
	        		o.init();
    		})*/
		

	});
});
