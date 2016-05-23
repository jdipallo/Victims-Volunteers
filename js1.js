// Victims & Volunteers

function Victim(name, phone, address) {
    this.name = name;
    this.phone = phone;
    this.address = address;
}

function Volunteer(name, phone, address) {
    this.name = name;
    this.phone = phone;
    this.address = address;
}

var victims = [];
var volunteers = [];

var doneEntering = false;
var name;
var phone;
var address;
var addMore;

do {
    name = prompt("Victim name please: ");
    phone = prompt("Phone number: ");
    address = prompt("Address: ");
    
    victims.push(new Victim(name, phone, address));
    
    name = prompt("Volunteer name please: ");
    phone = prompt("Phone number: ");
    address = prompt("Address: ");
    
    volunteers.push(new Victim(name, phone, address));
    
    var yesOrNo = false;
    do {
        addMore = prompt("Enter More (yes or no)? ");
        
        if (addMore.toUpperCase() === 'NO') {
            yesOrNo = true;
            doneEntering = true;
        }
        else if (addMore.toUpperCase() === "YES") {
            yesOrNo = true;
        }
    } while (!yesOrNo)
} while (!doneEntering)

var totalVictims = victims.length;
var totalVolunteers = volunteers.length;

// loop through the Victims & Volunteers, poppping up an alert of 
// all necessary data
var listOfVictims;
var listOfVolunteers;

for (var cnt = 0; cnt < totalVictims; cnt++) {
    listOfVictims += victims[cnt].name + "\n" + victims[cnt].phone + "\n" + victims[cnt].address + "\n\n";
    listOfVolunteers += volunteers[cnt].name + "\n" + volunteers[cnt].phone + "\n" + volunteers[cnt].address + "\n\n";
}

alert("Total Victims: " + totalVictims + "\nTotal Volunteers: " + totalVolunteers
        + "\n\n----------- Victims -------------------\n" 
        + listOfVictims
        + "\n---------- Volunteers --------------------\n" 
        + listOfVolunteers);