const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const FirstName = document.getElementById('FirstName');
const LastName = document.getElementById('LastName');
const PhoneNumber = document.getElementById('PhoneNumber');
const Email = document.getElementById('Email');
const password = document.getElementById('Password');
var count = 0;
validateFirstName = function () {
	console.log(`called validate name ${FirstName.value}`);
	try {
		const read = /[A-Z][a-z]{3,}/;
		// let result = text.match(read);
		const resultFristName = read.exec(FirstName.value);
		if (resultFristName) {
			console.log("valid");
			count++;
		}
		else {
			console.log("Invalid");
		}
	}
	catch (e) {
		console.log(e);
	}
}
//to validate last name//
validateLastName = function () {
	try {
		const read = /[A-Z][a-z]{3,}/;
		const resultLastName = read.exec(LastName.value);
		if (resultLastName) {
			console.log("valid");
			count++;
		}
		else {
			console.log("Invalid");
		}
	}
	catch (e) {
		console.log(e);
	}
}
//to validate email
validateEmail = function () {
	try {
		const read = /^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*[@][0-9A-Za-z]+([.][a-zA-Z]{2,4})*$/;
		const resultEmail = read.exec(Email.value);
		if (resultEmail) {
			console.log("valid");
			count++;
		}
		else {
			console.log("Invalid");
		}
	}
	catch (e) {
		console.log(e);
	}
}
//to cvalidate mobile number//
validateMobileNumber = function () {
	try {
		const read = /^[0-9]{2}[ ][0-9]{10}$/;
		const resultPhoneNumber = read.exec(PhoneNumber.value);
		if (resultPhoneNumber) {
			count++;
			console.log("valid");
		}
		else {
			console.log("Invalid");
		}
	}
	catch (e) {
		console.log(e);
	}
}
//check password with Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character//
validatePassword = function () {
	try {
		const read = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
		// let result = text.match(read);
		const resultPassword = read.exec(password.value);
		// this.validateMatching(result);
		// alert(result);
		if (resultPassword) {
			console.log("valid");
			count++;
		}
		else {
			console.log("Invalid");
		}
	}
	catch (e) {
		console.log(e);
	}
}



// module.exports = new Registration();

if (form) {
	form.addEventListener('submit', (e) => {
		let messages = [] 
		if (FirstName.value == '' || FirstName.value == null) {
			messages.push('FirstName is required');
		}
		if (LastName.value == '' || LastName.value == null) {
			messages.push('LastName is required');
		}
		if (Email.value == '' || Email.value == null) {
			messages.push('LastName is required');
		}
		if (password.value.length <= 8) {
			messages.push('Password must be longer than 8 characters');
		}
		if (PhoneNumber.value.length < 13) {
			messages.push('Phone number should be 12 digit');
		}
		if (count < 5) {
			messages.push('Enter valid input');
		}
		if (messages.length > 0) {
			e.preventDefault()
			errorElement.innerText = messages.join('\n')
		}
	})
}

if( resultFristName == true && resultLastName == true && resultEmail == true && resultPhoneNumber == true && resultPassword == true){
	document.getElementById("button").window.open("C:\Users\KIIT\Videos\web\EmployeeManagementSystem\Html\dashboard.html");
}