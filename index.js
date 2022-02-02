// Declared global scope variable
var customerName = 'bob';

// Function that accesses that global customerName variable, and uppercases it.
function upperCaseCustomerName() {
	customerName = customerName.toUpperCase();
}

// Function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
	bestCustomer = 'not bob';
}
