import data from './data/data.js'
import sentences from './data/sentences.js'

const { 
    nounsConcrete,
    nounsAbstract,
    clothing,
    food,
    fruit,
    verbs,
    houseRooms,
    bookTitles,
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
    animals,
    emotions,
    medicines,
    possessives 
} = data;

class MadLib {
    constructor (sentence) {
        this._rawSentence = sentence ? sentence : undefined     // The sentence template with 'tags'
        this._parsedSentence = undefined                        // The final, parsed sentence
        this._pattern = /\[(.*?)\]/gi                           // The regex pattern used to locate 'tags'
        this._rawTags = []                                      // List of unparsed 'tags' (i.e: [bookTitle])
        this._cleanTags = []                                    // List of 'cleaned' tags (i.e: bookTitle)
        this._values = []                                       // List of values to replace rawTags
    }

    // #region METHODS
    
    // STEP 1
    generateTags () {
        // SUMMARY: Generate an array of tags from `rawSentence`

        // Return error if `rawSentence` doesn't exist
        if (!this._rawSentence) {
            console.error(new Error('[generateTags]: Missing the raw sentence'))
            return new Error('[generateTags]: Missing the raw sentence')
        }

        // Scan sentence for tags according to regex pattern  (this._pattern)
        // Copy each tag from `rawSentence` to the `rawTags` array
        let rawTag
        do {
            rawTag = this._pattern.exec(this._rawSentence)
            if (rawTag) {
                this._rawTags.push(rawTag)
            }
        } while (rawTag != null)

        // .exec() actually returns an array whose second index is the actual tag (text *between* the brackets)
        // Loop through and save each "clean" tag to the cleanTags array
        this._cleanTags = this._rawTags.map(r => r[1])

        // Also, save the rawTags separately (used in the `parse` method)
        this._rawTags = this._rawTags.map(r => r[0])
    }

    // STEP 2
    generateValues () {
        // SUMMARY: For each cleanTag, choose a random item from its corresponding category in `data` (imported from data.js)
        if (!this._rawSentence) {
            console.error(new Error('[generateTags]: Missing the raw sentence'))
            return new Error('[generateValues]: Missing the raw sentence')
        }

        // Loop through cleanTags..
        for (let i=0; i<this._cleanTags.length; i++) {

            switch (this._cleanTags[i]) {
        
                /* Determine which category the tag is, then choose random item from 
                corresponding data array, store to `values` array */

                // #region NOUNS (CONCRETE & ABSTRACT)
                case 'nounConcrete':
                    this._values.push(nounsConcrete[Math.floor(Math.random() * nounsConcrete.length)].singular)
                    break

                case 'nounConcrete:singular':
                    this._values.push(nounsConcrete[Math.floor(Math.random() * nounsConcrete.length)].singular)
                    break

                case 'nounConcrete:plural':
                    this._values.push(nounsConcrete[Math.floor(Math.random() * nounsConcrete.length)].plural)
                    break

                case 'nounAbstract':
                    this._values.push(nounsAbstract[Math.floor(Math.random() * nounsAbstract.length)].singular)
                    break

                case 'nounAbstract:singular':
                    this._values.push(nounsAbstract[Math.floor(Math.random() * nounsAbstract.length)].singular)
                    break

                case 'nounAbstract:plural':
                    this._values.push(nounsAbstract[Math.floor(Math.random() * nounsAbstract.length)].plural)
                    break

                case 'bookTitle':
                    this._values.push(bookTitles[Math.floor(Math.random() * bookTitles.length)])
                    break
                    
                // #endregion ===================================================================
                
                // #region FURNITURE
                case 'furniture':
                    this._values.push(furniture[Math.floor(Math.random() * furniture.length)])
                    break
                // #endregion

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

                // #region ANIMALS
                case 'animal':
                    this._values.push(animals[Math.floor(Math.random() * animals.length)].singular)
                    break

                case 'animal:singular':
                    this._values.push(animals[Math.floor(Math.random() * animals.length)].singular)
                    break

                case 'animal:plural':
                    this._values.push(animals[Math.floor(Math.random() * animals.length)].plural)
                    break
                // #endregion
        
                // #region LOCATIONS            
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
        
                // #region EMOTIONS
                case 'emotion':
                    this._values.push(emotions[Math.floor(Math.random() * emotions.length)])
                    break
                // #endregion

                // #region MEDICINES
                case 'medicine':
                    this._values.push(medicines[Math.floor(Math.random() * medicines.length)])
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

                case 'noun':
                    this._values.push(nounsAbstract[Math.floor(Math.random() * nounsAbstract.length)].singular)
                    break

                case 'noun:singular':
                    this._values.push(nounsAbstract[Math.floor(Math.random() * nounsAbstract.length)].singular)
                    break

                case 'noun:plural':
                    this._values.push(nounsAbstract[Math.floor(Math.random() * nounsAbstract.length)].plural)
                    break
                // #endregion

                // #region MISCELLANEOUS
                case 'color':
                    this._values.push(colors[Math.floor(Math.random() * colors.length)])
                    break
                // #endregion

                default:
                    // TODO: Handle more elegantly
                    console.log(`WARNING: ${this._cleanTags[i]} does not exist...`)
                    break
            }
        }
    }

    // STEP 3
    parse() {
        // SUMMARY: Replace each tag in `rawSentence` with corresponding value from `values` array
        let tempSentence = this._rawSentence

        for (let i=0; i<this._rawTags.length; i++) {
            tempSentence = tempSentence.replace(this._rawTags[i], this._values[i])
        }

        this._parsedSentence = tempSentence
        return this._parsedSentence
    }

    // STEP 4
    print () {
        // SUMMARY: Print the parsed sentence to the console

        if (!this._parsedSentence) {
            console.error(new Error('[generateTags]: Missing the parsed sentence'))
            return new Error('[generateValues]: Missing the parsed sentence')
        }
        console.log(this._parsedSentence)
    }

    chooseRandomSentence () {
        // SUMMARY: Choose a random sentence from `sentences.js`
        return this._rawSentence = sentences[Math.floor(Math.random() * sentences.length)]
    }

    random () {
        // SUMMARY: Generate a random madlib (chooses a random sentence from sentences.js), then parse and print
        this.chooseRandomSentence()
        this.execute()
    }

    execute () {
        // SUMMARY: Generate tags, values, parse the rawSentence and print the result
        if (!this._rawSentence) {
            console.error(new Error('[execute()]: Missing the raw sentence'))
            return new Error('[execute()]: Missing the raw sentence')
        }

        this.generateTags()
        this.generateValues()
        this.parse()
        this.print()
    }
    // #endregion

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