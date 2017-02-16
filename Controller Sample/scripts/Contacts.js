myApp.controller("ContactController", Contacts);

function Contacts($scope){
	var contactModel = $scope;
	
	contactModel.getFullName = function(){
		var fName = contactModel.firstName.length > 0 ? contactModel.firstName : "";
		var lName = contactModel.lastName.length > 0 ? contactModel.lastName : ""; 
		
		contactModel.fullName = fName + " " + lName;
	}

} 