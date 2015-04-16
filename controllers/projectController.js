define([''],function(){
	var proCtrl=angular.module('projectCtrl',[]);

	proCtrl.controller("projectController",function($scope){


		$scope.$on('$viewContentLoaded', function(){	
			$("#filter-port").isotope({filter: "*"});

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
			});			
		});

	});

});
