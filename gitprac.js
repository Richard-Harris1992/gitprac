// Objects
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.

// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
let user = {
    name: 'Richard',
    email: 'Richard@Gmail.com',
    age: 30,
    purchased: []
}

// B. Update the user
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
console.log(user);

const updateEmail = (obj, newEmail) => {
   obj.email = newEmail; //If there is no email prop, this will create one, else it will update
}
updateEmail(user,'richard.harris89@gmail.com');

const itsYourBirthday = (obj) => { 
   if (Object.hasOwn(obj, 'age')) {
    obj.age++;
   }
}
itsYourBirthday(user);

console.log(user);

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).

const updateLocation = (obj, location) => {
    obj.location = location;
}
updateLocation(user, 'Dallas, TX');
console.log(user);

// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// Console.log just the "Merino jodhpurs" from the purchasedarray.
const addPurchase = (obj, itemPurchased) => {
    obj.purchased.push(itemPurchased);
}
addPurchase(user, 'carbohydrates');
console.log(user);

addPurchase(user, 'peace of mind');
addPurchase(user, 'Merino jodhpurs');
console.log(user);
console.log(user.purchased[user.purchased.indexOf('Merino jodhpurs')]);

// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
// If we want to give our user a friendwith a nameand age, we could write:

user.friendWith = {
    name: 'Chase',
    age: 31
};
console.log(user);