//Assignment # 2

// let personName: string = "Eric";
// console.log(`Hello ${personName}, would you like to learn some Python today?`);


//Assignment# 3

// let Name: string = "Type Script";


// console.log("lowercase:", Name.toLowerCase());


// console.log("Uppercase:", Name.toUpperCase());

// console.log("Titlecase:", Name.replace(/\b\w/g,c=> c. toUpperCase()));




//Assignment # 4

// let quote: string ="A person who never made a mistake never tried anything new.";
// let author: string = "Albert Einstein";
// console.log(`${author} once said, "${quote}"`);


//Assignment # 5

// let famousPerson: string = "Albert Einstein";
// let massege: string = `${famousPerson} once said, "${quote}"`;
// console.log(massege);



//Assignment # 6

// let person: string = "\t\n Hurmat Ayub \n\t";
// console.log("With White Space:", person);
// console.log("strippting:", person.trim()); 


//Assignment # 7 - 8

// console.log(5 + 3);
// console.log(10 - 2);
// console.log(2 * 4);
// console.log(16 / 2);


//Assignment # 9

// let fav_num: number = 9;
// console.log(`my favourite number is ${fav_num}.`);

//Assigment # 10

//I love Type Script
//I love Java Script

//Assignment # 11

// let names: string [] = ["Hurmat", "Madiha", "Rimsha", "Abrish", "Zulekha Noor", "Kaneez Fatima"];
// console.log(names)
// console.log(names[0])
// console.log(names[1])
// console.log(names[2])
// console.log(names[3])
// console.log(names[4])
// console.log(names[5])


//Assignment # 12


// let friend_Names: string [] = ["Hurmat", "Madiha", "Rimsha", "Abrish", "Zulekha Noor", "Kaneez Fatima"];
// let massage: string = " is awesome"
// console.log(friend_Names[0] + massage)
// console.log(friend_Names[1] + massage)
// console.log(friend_Names[2] + massage)
// console.log(friend_Names[3] + massage)
// console.log(friend_Names[4] + massage)
// console.log(friend_Names[5] + massage)


// Assignment # 13

// let transportation: string [] = ["Audi", "Bmw", "Toyota", "Lexus", "Jaguar"]
// transportation.map((items) => console.log(`I would like to own a ${items}`));

// Assignment # 14

// let guest: string [] = ["Samina", "Rukhsana", "Nasima"];
// guest.map((items) => (console.log(`Dear ${items}, you are invited to the dinner`)));


// Assigmnent # 15
// part:1

// let guest: string [] = ["Samina", "Rukhsana", "Nasima"];
// let notAttend: string = "Nasima"
// console.log(notAttend + ' ' + "can not coming for dinner");

// part:2

// let guest: string [] = ["Samina", "Rukhsana", "Nasima"];
// let notAttend: string = "Nasima"
// console.log(notAttend + ' ' + "can not coming for dinner");
// let newGuest: string = "Saira"
// guest [guest.indexOf(notAttend)] = newGuest;
// console.log(guest)

// part:3

// let guest: string [] = ["Samina", "Rukhsana", "Nasima"];
// let notAttend: string = "Nasima"
// console.log(notAttend + ' ' + "can not coming for dinner");
// let newGuest: string = "Saira"
// guest [guest.indexOf(notAttend)] = newGuest;
// guest.map((items) =>
// console.log(`Dear ${items}, you are invited to the diner.`)
// );


// Assignment # 16


// part:1
// let guest: string [] = ["Samina", "Rukhsana", "Saira"];
// let notAttend: string = "Saira"
// let newGuest: string = "Mariyam"

// guest [guest.indexOf(notAttend)] = newGuest;
// console.log(guest)

// guest.map((items) => 

// console.log(`Dear ${items}, I found a biggest table for dinner.`));

// part:2

// let guest: string [] = ["Samina", "Rukhsana", "Saira"];
// let notAttend: string = "Saira"
// let newGuest: string = "Mariyam"

// guest [guest.indexOf(notAttend)] = newGuest;
// console.log(guest)

// let newMember: string = "Iqra"
// guest.unshift(newMember);
// console.log(guest);

// part:3

// let guest: string [] = ["Samina", "Rukhsana", "Saira"];
// let notAttend: string = "Saira"
// let newGuest: string = "Mariyam"

// guest [guest.indexOf(notAttend)] = newGuest;
// console.log(guest)

// let newMember: string = "Iqra"
// guest.unshift(newMember);
// console.log(guest);

// let mid_guest: string = "Zainab"
// let middle = guest.length/3
// guest.splice(middle,0,mid_guest)
// console.log(guest)

// part:4

// let guest: string [] = ["Samina", "Rukhsana", "Saira"];
// let notAttend: string = "Saira"
// let newGuest: string = "Mariyam"

// guest [guest.indexOf(notAttend)] = newGuest;
// console.log(guest)

// let newMember: string = "Iqra"
// guest.unshift(newMember);
// console.log(guest);

// let mid_guest: string = "Zainab"
// let middle = guest.length/3
// guest.splice(middle,0,mid_guest)
// console.log(guest)

// guest.push("Amina")
// console.log(guest)

// part:5

// let guest: string [] = ["Samina", "Rukhsana", "Saira"];
// let notAttend: string = "Saira"
// let newGuest: string = "Mariyam"

// guest [guest.indexOf(notAttend)] = newGuest;
// console.log(guest)

// let newMember: string = "Iqra"
// guest.unshift(newMember);
// console.log(guest);

// let mid_guest: string = "Zainab"
// let middle = guest.length/3
// guest.splice(middle,0,mid_guest)
// console.log(guest)

// guest.push("Amina")
// console.log(guest)

// guest.map((items) => 
// console.log(`Dear ${items}, you are invited in this group dinner.`));

// Assignment # 17

//part:1

// let guest: string[] = ["Bisma", "Nimra", "Ayesha", "Aniaka", "Kaneez"];
// console.log("Due to limited space, only two people can be invited to dinner.");

// part:2

// let guest: string[] = ["Bisma", "Nimra", "Ayesha", "Aniaka", "Kaneez"];
// while(guest.length > 2) {
//     const removeguest = guest.pop();
// console.log(`SORRY! ${removeguest}, you are no longer invited to dinner.`)};

// part:3


// let guest: string[] = ["Bisma", "Nimra", "Ayesha", "Aniaka", "Kaneez"];
// while(guest.length > 2) {
//         const removeguest = guest.pop();
//     console.log(`SORRY! ${removeguest}, you are no longer invited to dinner.`)};
// guest.forEach((guest) => {
//     console.log(`Dear ${guest}, you are still invited for dinner.`);
// });

// Assignment # 18

// let places: string[] = ["Italy", "Suadia Arabia", "Dubai", "England", "Qatar"];

// console.log("Original Order:", places);

// console.log("Alphabetical Order:",[...places].sort());

// console.log("Again Original Order:", places);

// console.log("Reverse Alphabetical Order:",[...places].sort().reverse());

// console.log("Again Reverse Alphabetical Order:", places);

// places.reverse();
// console.log("Reversed Order:", places);

// places.reverse();
// console.log("Again Original Order:", places);

// places.sort();
// console.log("In Alphabetical Order:", places);

// places.sort((a, b) => b.localeCompare(a));
// console.log("Reverse Alpabetical Order:", places);



//  Assignment # 19

// let guests: string[] = ["Samina", "Rukhsana", "Nasima"];
// console.log(`I am inviting ${guests.length} people to dinner.`);


//  Assignment # 20

// let rivers: string[] = ["indus", "Ravi", "Chanab", "Sutlaj", "Jhelum", "Dasht"]
// console.log("List of rivers:")
// console.log(rivers)

//  Assignment # 21

// let Employee: {name: string, Department: string, Salary: number, Phone_no: number} = {name: "Hurmat.M.Ayub", Department: "IT", Salary: 15000, Phone_no: 123456789}
// console.log(Employee)

//  Assignment # 22

// const subject: string [] = ["English", "Urdu", "Maths", "Science", "SocialScience", "Islamiat", "Ethics", "Drawing"]
// // console.log(subject{8}) Error ine
// console.log(subject)

//  Assignment # 23

// let car: string = 'subaru';

// // Test:1
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru');

// // Test:2
// console.log("Is car != 'toyota'? I predict True.");
// console.log(car != 'toyota');

// // Test:3
// console.log("Is car.toLowerCase() == 'subaru'? I predict False.");
// console.log(car.toLowerCase() == 'subaru');

// // Test:4
// console.log("Is car != 'subaru'? I predict False.");
// console.log(car != 'subaru');

// // Test:5
// console.log("Is car.length == 6? I predict True.");
// console.log(car.length == 6);

// // Test:6
// console.log("Is car.length != 5? I predict True.");
// console.log(car.length != 5);

// // Test:7
// console.log("Does car start with 'sub'? I predict True.");
// console.log(car.startsWith('sub'));

// // Test:8
// console.log("Does car contain 'aru'? I predict True.");
// console.log(car.includes('aru'));

// // Test:9
// console.log("Is car === undefined? I predict False.");
// console.log(car === undefined);

// // Test:10
// console.log("Is car !== null? I predict True.");
// console.log(car !== null);

// Assignment # 24


// let Name: string = "Zara";
// console.log("Is name == 'Zara'? I predict True.");
// console.log(Name == "Zara");

// console.log("Is name != 'Bisma'? I predict True.");
// console.log(Name != "Bisma");

// //lower case function
// let lower: string = "Anila";
// console.log("Is lower.toLowerCase() == 'Anila'? I predict True.");
// console.log(lower.toLowerCase() == "Anila");

// // Numerical tests
// let num: number = 10;
// console.log("Is num == 10? I predict True.");
// console.log(num == 10);

// console.log("Is num != 5? I predict True.");
// console.log(num != 5);

// console.log("Is num > 5? I predict True.");
// console.log(num > 5);

// console.log("Is num < 15? I predict True.");
// console.log(num < 15);

// console.log("Is num >= 10? I predict True.");
// console.log(num >= 10);

// console.log("Is num <= 10? I predict True.");
// console.log(num <= 10);

// //"and" and "or" operators
// let x: number = 8;
// let y: number = 12;
// console.log("Is x > 5 and y < 15? I predict True.");
// console.log(x > 5 && y < 15);

// console.log("Is x < 5 or y > 15? I predict False.");
// console.log(x < 5 || y > 15);

// // Test whether an item is in an array
// let fruits: string[] = ['apple', 'banana', 'orange'];
// console.log("Is 'banana' in fruits? I predict True.");
// console.log(fruits.includes('banana'));

// // Test whether an item is not in an array
// console.log("Is 'grape' not in fruits? I predict True.");
// console.log(!fruits.includes('grape'));

// Assignment # 25

// version:1
// let alien_color: string = "green";

// if (alien_color === "green") {
//     console.log("Congratulations! You just earned 5 points.");
// }

// // version:2
// let alienColor: string = "red";

// if (alienColor === "green") {
//     console.log("Congratulations! You just earned 5 points.")};

//  Assigment # 26

// version:1
// let alienColor: string = "green";

// if (alienColor === "green") {
//     console.log("Congratulations! You just earned 5 points for shooting the green alien.");
// } else {
//     console.log("Congratulations! You just earned 10 points for shooting the alien.");
// }

// // version:2
// let alien_color: string = "red";

// if (alien_color === "green") {
//     console.log("Congratulations! You just earned 5 points for shooting the green alien.");
// } else {
//     console.log("Congratulations! You just earned 10 points for shooting the alien.");
// }

//  Assignment # 27

// version:1
// let alienColor: string = "green";

// if (alienColor === "green") {
//     console.log("Congratulations! You just earned 5 points for shooting the green alien.");
// } else if (alienColor === "yellow") {
//     console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
// } else if (alienColor === "red") {
//     console.log("Congratulations! You just earned 15 points for shooting the red alien.");
// }

// // versio:2
// let alien_color: string = "yellow";

// if (alien_color === "green") {
//     console.log("Congratulations! You just earned 5 points for shooting the green alien.");
// } else if (alien_color === "yellow") {
//     console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
// } else if (alien_color === "red") {
//     console.log("Congratulations! You just earned 15 points for shooting the red alien.");
// }

// // version:3
// let aliencolor: string = "red";

// if (aliencolor === "green") {
//     console.log("Congratulations! You just earned 5 points for shooting the green alien.");
// } else if (aliencolor === "yellow") {
//     console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
// } else if (aliencolor === "red") {
//     console.log("Congratulations! You just earned 15 points for shooting the red alien.");
// }


// Assignment #28

// let age: number = 30;

// if (age < 2) {
//     console.log("The person is a baby.");
// } else if (age >= 2 && age < 4) {
//     console.log("The person is a toddler.");
// } else if (age >= 4 && age < 13) {
//     console.log("The person is a kid.");
// } else if (age >= 13 && age < 20) {
//     console.log("The person is a teenager.");
// } else if (age >= 20 && age < 65) {
//     console.log("The person is an adult.");
// } else {
//     console.log("The person is an elder.");
// }

// Assignmet #29

// let favorite_fruits: string[] = ["Apple", "Banana", "Orange"];

// if (favorite_fruits.includes("apples")) {
//     console.log("You really like apples!");
// }

// if (favorite_fruits.includes("bananas")) {
//     console.log("You really like bananas!");
// }

// if (favorite_fruits.includes("oranges")) {
//     console.log("You really like orange!");
// }

// if (favorite_fruits.includes("mango")) {
//     console.log("You really like mango!");
// } else {
//     console.log("You don't seem to like mango.");
// }

// if (favorite_fruits.includes("grapes")) {
//     console.log("You really like grapes!");
// } else {
//     console.log("You don't seem to like grapes.");
// }

//  Assignment # 30

// let usernames: string[] = ["Admin", "Fatima", "Ayesha", "Noor", "Misbah"];

// for (let username of usernames) {
//     if (username === "Admin") {
//         console.log("Hello admin, would you like to see a status report?");
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// }

// Assignment # 31

// let usernames: string[] = [];

// if (usernames.length === 0) {
//     console.log("We need to find some users!");
// } else {
//     for (let username of usernames) {
//         if (username === 'admin') {
//             console.log("Hello admin, would you like to see a status report?");
//         } else {
//             console.log(`Hello ${username}, thank you for logging in again.`);
//         }
//     }
// }

//  Assignment # 32

// let current_users: string[] = [ "John", "Fatima", "Ayesha", "Noor", "Misbah"];
// let new_users: string[] = ['john', "Zara", "Hina", "Marium", "Mahnoor"];

// for (let new_user of new_users) {
//     let usernameTaken: boolean = false;
//     for (let current_user of current_users) {
//         if (new_user.toLowerCase() === current_user.toLowerCase()) {
//             usernameTaken = true;
//             break;
//         }
//     }
//     if (usernameTaken) {
//         console.log(`Sorry, ${new_user} is already taken. Please enter a new username.`);
//     } else {
//         console.log(`Congratulations! ${new_user} is available.`);
//     }
// }

// Assignmnet # 33

// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let number of numbers) {
//     let ordinalEnding: string;
    
//     if (number === 1) {
//         ordinalEnding = "st";
//     } else if (number === 2) {
//         ordinalEnding = "nd";
//     } else if (number === 3) {
//         ordinalEnding = "rd";
//     } else {
//         ordinalEnding = "th";
//     }
    
//     console.log(`${number}${ordinalEnding}`);
// }

// Assignment # 34

// let favorite_pizzas: string[] = ["Veggie", "Fajita", "BBQ Chicken"];

// for (let pizza of favorite_pizzas) {
//     console.log(`I like ${pizza} pizza.`);
// }

// console.log("I really love pizza!");

//  Assignment # 35

// let animals: string[] = ["Dog", "Lion", "Mouse"];

// console.log("Names of the animals:");
// for (let animal of animals) {
//     console.log(animal);
// }


// console.log("\nStatements about each animal:");
// for (let animal of animals) {
//     switch (animal) {
//         case "dog":
//             console.log("A dog would make a great pet.");
//             break;
//         case "Lion":
//             console.log("Lions has always been considered as the symbol of power.");
//             break;
//         case "mouse":
//             console.log("A mouse is a small rodent.");
//             break;
//         default:
//             console.log("This animal is not recognized.");
//     }
// }


// console.log("\nAny of these animals would make a great pet!");

//  Assignment # 36

// function makeShirt(size: string, message: string): void {
//     console.log(`A ${size}-sized shirt is: "${message}".`);
// }


// makeShirt("small", "Amazing");

//  Assignment # 37

// function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
//     console.log(`On the ${size}-sized shirt "${message}"is printed.`);
// }


// make_shirt();


// make_shirt("medium");


// make_shirt("small", "I love JavaScript");

//  Assignment # 38

// function describe_city(city: string, country: string = 'Unknown'): void {
//     console.log(`${city} is in ${country}.`);
// }

// describe_city("Karachi", "Pakistan");
// describe_city("Dehli", "India");
// describe_city("London");

//  Assignment #39

// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
// }

// console.log(city_country("Karachi", "Pakistan"));
// console.log(city_country("Dehli", "India"));
// console.log(city_country("London", "England"));

//  Assigmnent # 40

// function make_album(artist: string, title: string, tracks?: number): Record<string, any> {
//     let album: Record<string, any> = {
//         "artist": artist,
//         "title": title
//     };

//     if (tracks !== undefined) {
//         album["tracks"] = tracks;
//     }

//     return album;
// }


// console.log(make_album("Artist1", "Album1"));
// console.log(make_album("Artist2", "Album2", 10)); 
// console.log(make_album("Artist3", "Album3"));

// Assignment # 41

// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }


// let magician_names: string[] = ["Harry Houdini", "David Blaine", "Doug Henning", "Dai Vernon"];


// show_magicians(magician_names);

//  Assignment # 42

// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }

// function make_great(magicians: string[]): void {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = "the Great " + magicians[i];
//     }
// }


// let magician_names: string[] = ["Harry Houdini", "David Blaine", "Doug Henning", "Dai Vernon"];

// make_great(magician_names);

// show_magicians(magician_names);

// Assignment # 43

// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }

// function make_great(magicians: string[]): string[] {
//     let great_magicians: string[] = [];
//     for (let magician of magicians) {
//         great_magicians.push("the Great " + magician);
//     }
//     return great_magicians;
// }

// let magician_names: string[] = ["Harry Houdini", "David Blaine", "Doug Henning", "Dai Vernon"];

// let great_magician_names: string[] = make_great([...magician_names]);

// console.log("Original names:");
// show_magicians(magician_names);

// console.log("\nModified names:");
// show_magicians(great_magician_names);

//  Assignment # 44

// function makeSandwich(...items: string[]): void {
//     console.log("Sandwich order summary:");
//     if (items.length === 0) {
//         console.log("No items selected for the sandwich.");
//     } else {
//         console.log("Items:");
//         for (let item of items) {
//             console.log(`- ${item}`);
//         }
//     }
//     console.log();
// }

// makeSandwich("Vaggies", "Cheese", "Grilled meat");
// makeSandwich("Chiken", "Latuce");
// makeSandwich("Butter", "Ketchup");

//  Assignment # 45

// function createCar(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { [key: string]: any } {
//     let car: { [key: string]: any } = {
//         "manufacturer": manufacturer,
//         "model": model
//     };


//     for (let option of options) {
//         for (let key in option) {
//             car[key] = option[key];
//         }
//     }

//     return car;
// }

// let carInfo = createCar('Toyota', 'Camry', { "color": "blue" }, { "year": 2022 });

// console.log(carInfo);




























