myApp.controller("ContactController", Contacts);

function Contacts(){
	
	var vm = this;
	console.log(vm);
	vm.getFullName = function(){
		var fName = vm.firstName.length > 0 ? vm.firstName : "";
		var lName = vm.lastName.length > 0 ? vm.lastName : ""; 
		
		vm.fullName = fName + " " + lName;
	}

} 