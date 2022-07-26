/* main.js */
import data from './data/data.js'
import sentences from './data/sentences.js'

const { objects,
    clothing,
    food,
    fruit,
    verbs,
    houseRooms,
    stores,
    books,
    businesses,
    publicSpaces,
    maleFirstNames,
    femaleFirstNames,
    lastNames,
    colors,
    numberWordsMax20,
    adjectives,
    furniture,
    bodyParts,
    nonalcoholicBeverages,
    alcoholicBeverages,
    possessives } = data;


function parseSentence (sentence) {
    const pattern = /\[(.*?)\]/gi

    // const regex = new RegExp(pattern, 'g')

    let rawTags = []
    let rawTag
    do {
        rawTag = pattern.exec(sentence)
        if (rawTag) {
            rawTags.push(rawTag)
        }
    } while (rawTag != null)

    // console.log('RAW TAGS: ')
    // console.log(rawTags)

    const cleanTags = rawTags.map(r => r[1])
    rawTags = rawTags.map(r => r[0])

    // console.log('CLEAN TAGS: ')
    // console.log(cleanTags)

    // let randomMaleName = maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)]
    // console.log('Random Male Name: ' + randomMaleName)

    let values = []

    for (let i=0; i<cleanTags.length; i++) {
        switch (cleanTags[i]) {
    
            case 'object':
                values.push(objects[Math.floor(Math.random() * objects.length)])
                break

            case 'object:plural':
                let obj = objects[Math.floor(Math.random() * objects.length)]
                obj += 's'
                values.push(obj)
                break

            case 'clothing:plural':
                values.push(clothing[Math.floor(Math.random() * clothing.length)] + 's')
                break
    
            case 'clothing':
                values.push(clothing[Math.floor(Math.random() * clothing.length)])
                break
    
            case 'food':
                values.push(food[Math.floor(Math.random() * food.length)])
                break
    
            case 'fruit':
                values.push(fruit[Math.floor(Math.random() * fruit.length)])
                break

            case 'verb':
                values.push(verbs[Math.floor(Math.random() * verbs.length)].singular)
                break

            case 'verb:singular':
                values.push(verbs[Math.floor(Math.random() * verbs.length)].singular)
                break
    
            case 'verb:ed':
                values.push(verbs[Math.floor(Math.random() * verbs.length)].ed)
                break

            case 'verb:plural':
                values.push(verbs[Math.floor(Math.random() * verbs.length)].plural)
                break

            case 'verb:ing':
                values.push(verbs[Math.floor(Math.random() * verbs.length)].ing)
                break
    
            case 'houseRoom':
                values.push(houseRooms[Math.floor(Math.random() * houseRooms.length)])
                break
    
            case 'store':
                values.push(stores[Math.floor(Math.random() * stores.length)])
                break
    
            case 'book':
                values.push(books[Math.floor(Math.random() * books.length)])
                break
    
            case 'business':
                values.push(businesses[Math.floor(Math.random() * businesses.length)])
                break
    
            case 'publicSpace':
                values.push(publicSpaces[Math.floor(Math.random() * publicSpaces.length)])
                break
    
            case 'houseRoom':
                values.push(houseRooms[Math.floor(Math.random() * houseRooms.length)])
                break
    
            case 'firstName:male':
                values.push(maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)])
                break
    
            case 'firstName:female':
                values.push(femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)])
                break
    
            case 'lastName':
                values.push(lastNames[Math.floor(Math.random() * lastNames.length)])
                break
    
            case 'color':
                values.push(colors[Math.floor(Math.random() * colors.length)])
                break

            case 'numberword:max5':
                let firstFive = numberWordsMax20.slice(1, 6)
                values.push(firstFive[Math.floor(Math.random() * firstFive.length)])
                break
    
            case 'numberword:max20':
                values.push(numberWordsMax20[Math.floor(Math.random() * numberWordsMax20.length)])
                break
    
            case 'possessive':
                values.push(possessives[Math.floor(Math.random() * possessives.length)])
                break

            case 'adjective':
                values.push(adjectives[Math.floor(Math.random() * adjectives.length)])
                break
            
            case 'furniture':
                values.push(furniture[Math.floor(Math.random() * furniture.length)])
                break

            case 'bodyPart':
                values.push(bodyParts[Math.floor(Math.random() * bodyParts.length)].singular)
                break

            case 'bodyPart:singular':
                values.push(bodyParts[Math.floor(Math.random() * bodyParts.length)].singular)
                break

            case 'bodyPart:plural':
                values.push(bodyParts[Math.floor(Math.random() * bodyParts.length)].plural)
                break

            case 'nonalcoholicBeverage':
                values.push(nonalcoholicBeverages[Math.floor(Math.random() * nonalcoholicBeverages.length)])
                break

            case 'alcoholicBeverage':
                values.push(alcoholicBeverages[Math.floor(Math.random() * alcoholicBeverages.length)])
                break

            default:
                console.log('WARNING: case does not exist...')
                break
        }
    }

    // console.log('VALUES: ')
    // console.log(values)

    // console.log('RAW TAGS: ')
    // console.log(rawTags)

    // console.log('SENTENCE: ')
    // console.log(`${sentence}\n`)

    // console.log(sentence.replace(rawTags[0], values[0]))


    for (let i=0; i<rawTags.length; i++) {
        sentence = sentence.replace(rawTags[i], values[i])
    }

    return sentence

}

const sentence1 = sentences[0];
// console.log(sentence1 + '\n');

console.log(parseSentence(sentence1))