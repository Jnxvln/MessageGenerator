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

class MadLib {
    constructor (sentence) {
        this._rawSentence = sentence ? sentence : undefined
        this._parsedSentence = undefined
        this._pattern = /\[(.*?)\]/gi
        this._rawTags = []
        this._cleanTags = []
        this._values = []
    }

    // METHODS
    generateTags () {
        // Locate each tag in the `sentence`, store it in the `rawTags` array
        if (!this._rawSentence) {
            console.error(new Error('[generateTags]: Missing the raw sentence'))
            return new Error('[generateTags]: Missing the raw sentence')
        }

        let rawTag
        do {
            rawTag = this._pattern.exec(this._rawSentence)
            if (rawTag) {
                this._rawTags.push(rawTag)
            }
        } while (rawTag != null)

        // exec() actually returns an array whose second index is the actual tag (the words *between* the brackets)
        // Loop and save each clean tag to the cleanTags array
        this._cleanTags = this._rawTags.map(r => r[1])

        // Also, save the rawTags separately (used later)
        this._rawTags = this._rawTags.map(r => r[0])
    }

    generateValues () {
        if (!this._rawSentence) {
            console.error(new Error('[generateTags]: Missing the raw sentence'))
            return new Error('[generateValues]: Missing the raw sentence')
        }

        // Loop through the clean tags..
        for (let i=0; i<this._cleanTags.length; i++) {

            // console.log(`[generateValues]: DEBUG: cleanTags[${i}] = ${this._cleanTags[i]}`)
            switch (this._cleanTags[i]) {
        
                // Determine which category the tag is, then randomly select an item from its corresponding data array, store to `values` array 

                // #region THINGS
                case 'object':
                    this._values.push(objects[Math.floor(Math.random() * objects.length)])
                    break

                case 'object:plural':
                    // Add an 's' to the end
                    this._values.push(objects[Math.floor(Math.random() * objects.length)] + 's')
                    break

                case 'book':
                    this._values.push(books[Math.floor(Math.random() * books.length)])
                    break

                case 'furniture':
                    this._values.push(furniture[Math.floor(Math.random() * furniture.length)])
                    break
                // #endregion ===================================================================

                // #region CLOTHING
                case 'clothing:plural':
                    this._values.push(clothing[Math.floor(Math.random() * clothing.length)] + 's')
                    break
        
                case 'clothing':
                    this._values.push(clothing[Math.floor(Math.random() * clothing.length)])
                    break
                // #endregion
        
                // #region FOOD & DRINKS
                case 'food':
                    this._values.push(food[Math.floor(Math.random() * food.length)])
                    break
        
                case 'fruit':
                    this._values.push(fruit[Math.floor(Math.random() * fruit.length)])
                    break

                case 'nonalcoholicBeverage':
                    this._values.push(nonalcoholicBeverages[Math.floor(Math.random() * nonalcoholicBeverages.length)])
                    break

                case 'alcoholicBeverage':
                    this._values.push(alcoholicBeverages[Math.floor(Math.random() * alcoholicBeverages.length)])
                    break
                // #endregion

                // #region VERBS
                case 'verb':
                    this._values.push(verbs[Math.floor(Math.random() * verbs.length)].singular)
                    break

                case 'verb:singular':
                    this._values.push(verbs[Math.floor(Math.random() * verbs.length)].singular)
                    break
        
                case 'verb:plural':
                    this._values.push(verbs[Math.floor(Math.random() * verbs.length)].plural)
                    break

                case 'verb:ed':
                    this._values.push(verbs[Math.floor(Math.random() * verbs.length)].ed)
                    break

                case 'verb:ing':
                    this._values.push(verbs[Math.floor(Math.random() * verbs.length)].ing)
                    break
                // #endregion
        
                // #region LOCATIONS
                case 'store':
                    this._values.push(stores[Math.floor(Math.random() * stores.length)])
                    break
            
                case 'business':
                    this._values.push(businesses[Math.floor(Math.random() * businesses.length)])
                    break
        
                case 'publicSpace':
                    this._values.push(publicSpaces[Math.floor(Math.random() * publicSpaces.length)])
                    break
        
                case 'houseRoom':
                    this._values.push(houseRooms[Math.floor(Math.random() * houseRooms.length)])
                    break
                // #endregion
        
                // #region NAMES
                case 'firstName:male':
                    this._values.push(maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)])
                    break
        
                case 'firstName:female':
                    this._values.push(femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)])
                    break
        
                case 'lastName':
                    this._values.push(lastNames[Math.floor(Math.random() * lastNames.length)])
                    break
        
                // #endregion
                
                // #region NUMBERS (WORD FORM)
                case 'numberword:max3':
                    let firstThree = numberWordsMax20.slice(1, 4)
                    this._values.push(firstThree[Math.floor(Math.random() * firstThree.length)])
                    break

                case 'numberword:max5':
                    let firstFive = numberWordsMax20.slice(1, 6)
                    this._values.push(firstFive[Math.floor(Math.random() * firstFive.length)])
                    break

                case 'numberword:max10':
                    let firstTen = numberWordsMax20.slice(1, 11)
                    this._values.push(firstTen[Math.floor(Math.random() * firstTen.length)])
                    break

                case 'numberword:max15':
                    let firstFifteen = numberWordsMax20.slice(1, 11)
                    this._values.push(firstFifteen[Math.floor(Math.random() * firstFifteen.length)])
                    break
        
                case 'numberword:max20':
                    this._values.push(numberWordsMax20[Math.floor(Math.random() * numberWordsMax20.length)])
                    break
                // #endregion

                // #region BODY PARTS
                case 'bodyPart':
                    this._values.push(bodyParts[Math.floor(Math.random() * bodyParts.length)].singular)
                    break

                case 'bodyPart:singular':
                    this._values.push(bodyParts[Math.floor(Math.random() * bodyParts.length)].singular)
                    break

                case 'bodyPart:plural':
                    this._values.push(bodyParts[Math.floor(Math.random() * bodyParts.length)].plural)
                    break
                // #endregion
                
                // #region GRAMMAR
                case 'possessive':
                    this._values.push(possessives[Math.floor(Math.random() * possessives.length)])
                    break

                case 'adjective':
                    this._values.push(adjectives[Math.floor(Math.random() * adjectives.length)])
                    break
                // #endregion

                // #region MISCELLANEOUS
                case 'color':
                    this._values.push(colors[Math.floor(Math.random() * colors.length)])
                    break
                // #endregion

                default:
                    console.log('WARNING: case does not exist...')
                    break
            }
        }
    }

    chooseRandomSentence () {
        return this._rawSentence = sentences[Math.floor(Math.random() * sentences.length)]
    }

    parse() {
        // Replace each tag in `rawSentence` with corresponding value from `values` array

        let tempSentence = this._rawSentence

        for (let i=0; i<this._rawTags.length; i++) {
            tempSentence = tempSentence.replace(this._rawTags[i], this._values[i])
        }

        this._parsedSentence = tempSentence

        // Return the completed sentence
        return this._parsedSentence
    }

    random () {
        // Generate a random madlib (chooses a random sentence from sentences.js)
        this.chooseRandomSentence()
        this.generateTags()
        this.generateValues()
        this.parse()
        this.print()
    }

    print () {
        if (!this._parsedSentence) {
            console.error(new Error('[generateTags]: Missing the parsed sentence'))
            return new Error('[generateValues]: Missing the parsed sentence')
        }
        console.log(this._parsedSentence)
        return this._parsedSentence
    }

    // #region GETTERS
    get rawSentence () { return this._rawSentence }
    get parsedSentence () { return this._parsedSentence }
    get pattern () { return this._pattern }
    get rawTags () { return this._rawTags }
    get cleanTags () { return this._cleanTags }
    get values () { return this._values }
    // #endregion

    // #region SETTERS
    set rawSentence (sentence) {
        this._rawSentence = sentence
    }

    // set parsedSentence (sentence) {
    //     this._parsedSentence = sentence
    // }

    set pattern (pattern) {
        this._pattern = pattern
    }

    set rawTags (rawTagsArray) {
        this._rawTags = rawTagsArray
    }

    set cleanTags (cleanTagsArray) {
        this._cleanTags = cleanTagsArray
    }

    set values (valuesArray) {
        this._values = valuesArray
    }
    // #endregion
}

export default MadLib