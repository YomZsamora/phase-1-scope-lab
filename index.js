// Declared global scope variable
var customerName = 'bob';

// Function that accesses that global customerName variable, and uppercases it.
function upperCaseCustomerName() {
	customerName = customerName.toUpperCase();
}
