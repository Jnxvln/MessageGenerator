/* main.js */
import MadLib from './MadLib.js'

/*
    ============================================================================
    MADLIB GENERATOR
    
    BACK-END ENGINEER CAREER PATH
    CODECADEMY PRO (https://www.codecademy.com)
    MODULE #9: "Mixed Messages" (Portfolio Project)
    
    DATE: Thursday, July 28th, 2022
    AUTHOR: Justin Cox (@Jnxvln GITHUB)
    ============================================================================

    ~~ WELCOME! ~~
    Thanks for checking out my MadLib generator! 
    To get started, try out the QUICK START below.

    The majority of the code lives in the MadLib.js class file.
    Data is located in data/data.js and data/sentences.js.

    For more detailed information, view the readme file here:
    https://github.com/Jnxvln/MessageGenerator#readme

    Please note this is a simple implementation of a MadLib generator and could
    obviously be made a lot better. Feel free to fork and experiment!

    FOR EXTRA FUN:
    * Try adding your own sentence templates in data/sentences.js
      (must be used with madlib.random())

    *  And add some of your own things in data/data.js

    ~Enjoy!

    ============================================================================
*/

// TO GET STARTED: UNCOMMENT ONE OF THE FOLLOWING: 


// ===== QUICK START =====
// const madlib = new MadLib()
// madlib.random()               // Outputs random madlib to console


// ===== CUSTOM MADLIB =====
// const rawSentence = "It's just a typical manic Monday at the office; [firstName:male] somehow stapled his [bodyPart], \
// [firstName:female]'s hair got caught in the [furniture], and [firstName:female] got fired for [verb:ing] her TPS report"


const rawSentence = '[firstName:female] threw a [nounConcrete] at her brother because he kept putting [nounConcrete:plural] in her hair'
const madlib = new MadLib(rawSentence)
madlib.execute()