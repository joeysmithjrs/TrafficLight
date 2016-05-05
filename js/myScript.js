// JavaScript Document
$(document).ready(function() {

    $("#stop").hover(function(){
    	$("#red").css("background-color","red");
    });
	
     $("#stop").mouseout(function(){
		$("#red").css("background-color","darkred");
    });
    
	 $("#yield").hover(function(){
    	$("#yellow").css("background-color","yellow");
    });
     
	 $("#yield").mouseout(function(){
		$("#yellow").css("background-color","darkkhaki");
    });
     
	 $("#go").hover(function(){
    	$("#green").css("background-color","lime");
    });
     
	 $("#go").mouseout(function(){
		$("#green").css("background-color","forestgreen");
    }); 
});