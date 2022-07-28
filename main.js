/* main.js */
// import data from './data/data.js'
// import sentences from './data/sentences.js'

// const { objects,
//     clothing,
//     food,
//     fruit,
//     verbs,
//     houseRooms,
//     stores,
//     books,
//     businesses,
//     publicSpaces,
//     maleFirstNames,
//     femaleFirstNames,
//     lastNames,
//     colors,
//     numberWordsMax20,
//     adjectives,
//     furniture,
//     bodyParts,
//     nonalcoholicBeverages,
//     alcoholicBeverages,
//     possessives } = data;


// function parseSentence (sentence) {

//     // IMPORTANT: The bracketed words from `sentence` will be referred to as 'tags'
//     // (i.e  "Lori found an [object] in the desk", where [object] is the 'tag'

//     // Regex pattern used to find tags
//     const pattern = /\[(.*?)\]/gi

//     // Locate each tag in the `sentence`, store it in the `rawTags` array
//     let rawTags = []
//     let rawTag
//     do {
//         rawTag = pattern.exec(sentence)
//         if (rawTag) {
//             rawTags.push(rawTag)
//         }
//     } while (rawTag != null)

//     // exec() actually returns an array whose second index is the actual tag (the words *between* the brackets)
//     // Loop and save each clean tag to the cleanTags array
//     const cleanTags = rawTags.map(r => r[1])

//     // Also, save the rawTags separately (used later)
//     rawTags = rawTags.map(r => r[0])

//     // Loop through the clean tags..
//     let values = []
//     for (let i=0; i<cleanTags.length; i++) {
//         switch (cleanTags[i]) {
    
//             // Determine which category the tag is, then randomly select an item from its corresponding data array, store to `values` array 

//             // #region THINGS
//             case 'object':
//                 values.push(objects[Math.floor(Math.random() * objects.length)])
//                 break

//             case 'object:plural':
//                 // Add an 's' to the end
//                 values.push(objects[Math.floor(Math.random() * objects.length)] + 's')
//                 break

//             case 'book':
//                 values.push(books[Math.floor(Math.random() * books.length)])
//                 break

//             case 'furniture':
//                 values.push(furniture[Math.floor(Math.random() * furniture.length)])
//                 break
//             // #endregion ===================================================================

//             // #region CLOTHING
//             case 'clothing:plural':
//                 values.push(clothing[Math.floor(Math.random() * clothing.length)] + 's')
//                 break
    
//             case 'clothing':
//                 values.push(clothing[Math.floor(Math.random() * clothing.length)])
//                 break
//             // #endregion
    
//             // #region FOOD & DRINKS
//             case 'food':
//                 values.push(food[Math.floor(Math.random() * food.length)])
//                 break
    
//             case 'fruit':
//                 values.push(fruit[Math.floor(Math.random() * fruit.length)])
//                 break

//             case 'nonalcoholicBeverage':
//                 values.push(nonalcoholicBeverages[Math.floor(Math.random() * nonalcoholicBeverages.length)])
//                 break

//             case 'alcoholicBeverage':
//                 values.push(alcoholicBeverages[Math.floor(Math.random() * alcoholicBeverages.length)])
//                 break
//             // #endregion

//             // #region VERBS
//             case 'verb':
//                 values.push(verbs[Math.floor(Math.random() * verbs.length)].singular)
//                 break

//             case 'verb:singular':
//                 values.push(verbs[Math.floor(Math.random() * verbs.length)].singular)
//                 break
    
//             case 'verb:plural':
//                 values.push(verbs[Math.floor(Math.random() * verbs.length)].plural)
//                 break

//             case 'verb:ed':
//                 values.push(verbs[Math.floor(Math.random() * verbs.length)].ed)
//                 break

//             case 'verb:ing':
//                 values.push(verbs[Math.floor(Math.random() * verbs.length)].ing)
//                 break
//             // #endregion
    
//             // #region LOCATIONS
//             case 'store':
//                 values.push(stores[Math.floor(Math.random() * stores.length)])
//                 break
        
//             case 'business':
//                 values.push(businesses[Math.floor(Math.random() * businesses.length)])
//                 break
    
//             case 'publicSpace':
//                 values.push(publicSpaces[Math.floor(Math.random() * publicSpaces.length)])
//                 break
    
//             case 'houseRoom':
//                 values.push(houseRooms[Math.floor(Math.random() * houseRooms.length)])
//                 break
//             // #endregion
    
//             // #region NAMES
//             case 'firstName:male':
//                 values.push(maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)])
//                 break
    
//             case 'firstName:female':
//                 values.push(femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)])
//                 break
    
//             case 'lastName':
//                 values.push(lastNames[Math.floor(Math.random() * lastNames.length)])
//                 break
    
//             // #endregion
            
//             // #region NUMBERS (WORD FORM)
//             case 'numberword:max3':
//                 let firstThree = numberWordsMax20.slice(1, 4)
//                 values.push(firstThree[Math.floor(Math.random() * firstThree.length)])
//                 break

//             case 'numberword:max5':
//                 let firstFive = numberWordsMax20.slice(1, 6)
//                 values.push(firstFive[Math.floor(Math.random() * firstFive.length)])
//                 break

//             case 'numberword:max10':
//                 let firstTen = numberWordsMax20.slice(1, 11)
//                 values.push(firstTen[Math.floor(Math.random() * firstTen.length)])
//                 break

//             case 'numberword:max15':
//                 let firstFifteen = numberWordsMax20.slice(1, 11)
//                 values.push(firstFifteen[Math.floor(Math.random() * firstFifteen.length)])
//                 break
    
//             case 'numberword:max20':
//                 values.push(numberWordsMax20[Math.floor(Math.random() * numberWordsMax20.length)])
//                 break
//             // #endregion

//             // #region BODY PARTS
//             case 'bodyPart':
//                 values.push(bodyParts[Math.floor(Math.random() * bodyParts.length)].singular)
//                 break

//             case 'bodyPart:singular':
//                 values.push(bodyParts[Math.floor(Math.random() * bodyParts.length)].singular)
//                 break

//             case 'bodyPart:plural':
//                 values.push(bodyParts[Math.floor(Math.random() * bodyParts.length)].plural)
//                 break
//             // #endregion
            
//             // #region GRAMMAR
//             case 'possessive':
//                 values.push(possessives[Math.floor(Math.random() * possessives.length)])
//                 break

//             case 'adjective':
//                 values.push(adjectives[Math.floor(Math.random() * adjectives.length)])
//                 break
//             // #endregion

//             // #region MISCELLANEOUS
//             case 'color':
//                 values.push(colors[Math.floor(Math.random() * colors.length)])
//                 break
//             // #endregion

//             default:
//                 console.log('WARNING: case does not exist...')
//                 break
//         }
//     }

//     // Replace each tag in `sentence` with corresponding value from `values` array
//     for (let i=0; i<rawTags.length; i++) {
//         sentence = sentence.replace(rawTags[i], values[i])
//     }

//     // Return the completed sentence
//     return sentence

// }

// // #region RUN THE PROGRAM ==============================================================================

// const sentence1 = sentences[0];

// console.log(parseSentence(sentence1))

// // #endregion ===========================================================================================


import MadLib from './MadLib.js'

const madlib = new MadLib()
madlib.random()