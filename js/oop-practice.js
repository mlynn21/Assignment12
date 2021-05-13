//STEP 1
// function Cat() {
//     console.log('A new cat has been created')
// }

//STEP 2
// const Dog = function() {
//     console.log('A new dog has been created')
// }


// //STEP 3
// class Animal {
//     message = function() {
//         console.log('The animal has been created.')
//     }
// }

// const animal1 = new Animal();
// animal1.message();


//STEP 4
// class Animal {
//     constructor (color) {
//         this.color = color;
//     }
    
//     message = function() {
//         console.log(`The ${this.color} animal has been created.`)
//     }
// }

// const animal1 = new Animal('red');
// animal1.message();

// STEP 5
// class Animal {
//     constructor (type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
    
//     message = function() {
//         console.log(`The animal is a ${this.type}. The breed is ${this.breed}, it's colored ${this.color}, and it's ${this.height} tall and ${this.length} long.`)
//     }
// }

// const animal1 = new Animal('cat', 'munchkin', 'tabby', '1 foot', '2 feet');
// animal1.message();

//STEP 6
// function Animal(type, breed, color, height, length) {
//         this.type = type;
//         this.breed = breed;
//         this.color = color;
//         this.height = height;
//         this.length = length;
//     }
// var anim = new Animal();
// for (var i in anim) {
//     console.log(i);      
// }

//STEP 7 
// function Animal(type, color) {
//         this.type = type;
//         this.color = color;

//         this.speak = function() {
//             if ( type === 'dog') {
//                 console.log(`The ${color} dog barked`)
//         } else if ( type === 'cat' ) {
//             console.log(`The ${color} cat meowed.`)
//         }

//     }
// }
// const animal1 = new Animal('cat', 'grey');
// animal1.speak();

//STEP 8
// function Animal(type) {
//         let _type = type;

//         let checkType = function() {
//             if ( type === 'dog') {
//                 let _type = 'dog'
//                 } else if ( type === 'cat' ) {
//                 let _type = 'cat'
//                 } 
//                 console.log(`The ${_type} has made a noise!`)
//         }
        
//         this.showType = function() {
//             checkType();
//         }
// }
// const animal1 = new Animal('dog');
// animal1.showType();

//STEP 9

// function findWords(paragraph) {

//         this.paragraph = paragraph
//             this.find = function() {  
                

//                 const regex = /ipsum/g;
//                 console.log(paragraph.search(regex));                      
                     
//         }
//     }
//     const find1 = new findWords('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque, nisl a lobortis tempor, sapien augue convallis neque, id maximus ligula tellus a tortor.');
//     find1.find();




