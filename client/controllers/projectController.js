define([''],function(){
	var proCtrl=angular.module('projectCtrl',[]);

	proCtrl.controller("projectController",function($scope){


		$scope.$on('$viewContentLoaded', function(){	
/*			$("#filter-port").isotope({filter: "*"});

			$("#filter-nav").find("a").on("click touchstart", function(e) {
				var $t = $(this),
					selector = $t.data("filter");
				// Don't proceed if already selected
				if($t.parent().hasClass("filter-current"))
					return false;

				$("#filter-nav").find(".filter-current").removeClass("filter-current");
				$t.parent().addClass("filter-current");
				$("#filter-port").isotope({filter: selector});

				e.stopPropagation();
				e.preventDefault(); 
			});	*/		


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

});
