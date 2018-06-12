//Js Revealing module pattern
var core = function($) {

    var init = function() {
    	//List functions here
        sampleFunction();
    };

    /* 
        Sample function
    */
    var sampleFunction = function () {
       
        
    }; 

    return {
    	init: init
    };

} (jQuery);

jQuery(function() { 
	core.init(); 
});
