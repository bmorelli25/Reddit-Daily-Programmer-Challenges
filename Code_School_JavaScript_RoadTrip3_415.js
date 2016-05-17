/*
****************************************
http://javascript-roadtrip-part3.codeschool.com/levels/4/challenges/15
****************************************
Relieved of Duty!
****************************************
Vehicle objects now contain objects that represent ranger-devs. We want to keep track of which ranger-devs are assigned to patrol duty on specific vehicles. The vehicle3 object is provided in the challenge editor as an example.

We need to get the offDuty rangers out of the vehicle while holding on to their objects for further use, as well as renumbering the rangers who should remain onDuty in the vehicle.

1) Build a relieveDuty function that accepts a vehicle object and a day of the week as parameters.

2) Use a for loop along with the numRangers property to search through all of the ranger objects contained within the vehicle object.

3) Sort all ranger objects into offDuty and onDuty arrays based on their dayOff property. The offDuty array will be returned from the function. The onDuty array will contain remaining rangers that need to be renumbered.

4) Adjust the numRangers property by subtracting the number of offDuty rangers.

5) Shift all rangers from the onDuty array back to the vehicle object. Their property names should be rebuilt with ranger numbers starting from 1, and their original order maintained.

6) Lastly, call the relieveDuty function and pass in vehicle3 and "Friday". The resulting array of objects should be stored in a variable called offToday.
****************************************
*/

//STARTER OBJECT
var vehicle3 = {
  type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
  ranger1: {name: "Gregg Pollack", skillz: "Lasering", dayOff: "Friday"},
  ranger2: {name: "Bijan Boustani", skillz: "Working", dayOff: "Saturday"},
  ranger3: {name: "Ashley Smith", skillz: "Torpedoing", dayOff: "Friday"},
  ranger4: {name: "Mark Krupinski", skillz: "Sniping", dayOff: "Wednesday"},
  numRangers: 4
};

//SOLVE CODE
function relieveDuty(vehicle, day) {
  //create two arrays
  var offDuty = [];
  var onDuty = [];
  //loop through our vehicle and move rangers to correct arrays
  for (var i = 1; i <= vehicle.numRangers; i++) {
    //check if today is their day off
    if (vehicle["ranger"+i].dayOff == day) {
      //offduty today. Push to offDuty Array
      offDuty.push(vehicle["ranger"+i]);
    } else {
      //onduty today. Push to onDuty Array
      onDuty.push(vehicle["ranger"+i]);
    }
    //delete from the vehicle array regardless
    delete vehicle["ranger"+i];
  }
  //adjust numRangers to be correct after the above changes
  vehicle.numRangers -= offDuty.length;
  //loop through our onDuty Array and move each array into the vehicle object
  for (var j = 1; j <= vehicle.numRangers; j++) {
    vehicle["ranger"+j] = onDuty.shift();
  }
  //return our offDuty array
  return offDuty;
}
//assign the workers who are off Friday in V3 to "offToday"
var offToday = relieveDuty(vehicle3, "Friday");
