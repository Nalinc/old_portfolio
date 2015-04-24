define([''],function(){
	var sCtrl=angular.module('skillCtrl',[]);

	sCtrl.controller("skillController",function($scope){
	 	$scope.$on('$viewContentLoaded', function(){
		// $("#circular-skills").skillChart()

  			require(["init"], function() {
        // do some stuff with these require()'d dependencies
        		if(!$("svg").height())
	        		o.init();
    		})
		});

		$('ul#filter a').click(function() {
			    $(this).css('outline','none');
			    $('ul#filter .current').removeClass('current');
			    $(this).parent().addClass('current');
			    
			    var filterVal = $(this).text().toLowerCase().replace(' ','-');
			        
			    if(filterVal == 'all') {
			      $('ul#portfolio li.hidden').fadeIn('slow').removeClass('hidden');
			    } else {
			      $('ul#portfolio li').each(function() {
			        if(!$(this).hasClass(filterVal)) {
			          $(this).fadeOut('normal').addClass('hidden');
			        } else {
			          $(this).fadeIn('slow').removeClass('hidden');
			        }
			      });
			    }
			    
	    	return false;
  		});
	});
});
