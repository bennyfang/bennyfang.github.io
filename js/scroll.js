/* This script show and hide tabs on click */

$(document).ready(function(){
    // initialize the first tab as active
    var currTabElement = $("#sidebar nav li").children()[0];
        
   	// set onclick function to show and hide tabs
    $("#sidebar nav a").click(function(evn){
    	// stop default event
        evn.preventDefault();
        // reset main content position to top
   		$('#main').scrollTop(0);
        // get the href of the current and clicked tab and show/hide if it is different from current tab   
        var currTab = $(currTabElement).attr('href'); 
        var clickedTab = $(this).attr('href');       
        // compare
        if (clickedTab != currTab) {
        		// remove active tab and hide its content
        		$(currTabElement).removeClass('active');
            	$(currTab).hide();
        		
        		// set clicked tab as active and show its content
        		$(this).addClass('active');
            	$(clickedTab).show();
            	
            	// set current tab to this new one
            	currTabElement = this;
            	
        }
    });
});

