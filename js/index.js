var notification_count=0;

$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
		createMessage();
	});
	
	$('#dialogButton').on('click', function() {
		createDialog();
	});


	$('#notificationButton').on('click', function() {
		createNotification();
	});
	
	$('#reminderButton').on('click', function() {
		createReminder();
	});


});



function createMessage(){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    /*new Toast({content: 'Your toast is ready.', duration: 1500}); 	
	new Toast({content: 'Your toast isn\'t ready.', duration: 1500}); 	
	new Toast({content: 'Your toast is burnt.', duration: 1500}); 	*/
	new Toast({content: 'Your toast is bread.', duration: 1500}); 	
}
        	

function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
    	'Are you hungry?',  // message
        dialogDismissed,         // callback
        'Hunger games.',            // title
        ['I\'m starving!', 'Meh']                  // buttons
    );

}
        	
        	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) new Toast({content: "Go get food, you love food!", duration: 1500});
   	else 
	{
	if(buttonIndex==2) new Toast({content: 'Get back to work you slacker!', duration: 1500});
	createNotification();
	}

}

   
   
function createNotification() {
        		
	//
    //generate a time to post notification
    //
    var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + 30000); //delayed time  - add 1 second
    			
    //
    //setup notification
    //
	window.plugin.notification.local.add({ 
    	id: 		1,
        title: 		"Hey you",
        message: 	"Are you hungry?",
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
    
}

function createReminder() {
        		
	//
    //generate a time to post notification
    //
    var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + 20000); //delayed time  - add 1 second
    			
    //
    //setup notification
    //
	window.plugin.notification.local.add({ 
    	id: 		1,
        title: 		"Finished food?",
        message: 	"Get back to work.",
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
    
}