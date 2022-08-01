# MadLibGenerator

## WELCOME
Thanks for checking out my MadLib Generator! Please note that this generator is a fairly simple way to create MadLibs, there are *many* ways, please feel free to fork and experiment!

**WARNING: Recommended for age 18+, the generator randomly chooses verbs, nouns, etc. and can occasionally produce obscene sentences.**

This project is my solution for Codecademy.com's Module #9, "Mixed Messages", in the Backend-Engineer Career Path.

---

## INSTALLATION
You will need the following resources to run this project: 

REQUIREMENTS:
| Resource | Purpose | My Choice |
| -------- | --------- | --------- |
| Git/GitHub | Clone or download project files | --- |
| [NodeJS](https://nodejs.org/) | Run javascript files in the terminal | My version is 16.16.0 |
| Terminal | Navigate file structure and run project | [GitBash](https://git-scm.com/downloads) |
| Code Editor | Read & edit the code | [Visual Studio Code](https://code.visualstudio.com/)

---
Download
- Using Git via terminal command: `git clone https://github.com/Jnxvln/MessageGenerator.git`
- Manually: Download and extract the ZIP file from this repo [https://github.com/Jnxvln/MessageGenerator](https://github.com/Jnxvln/MessageGenerator)

---

## RUNNING THE PROGRAM
Once installed, use your terminal to navigate to the project directory.

Run `node index.js` in the terminal to run this program (using `random()` by default)

Read the developer notes in `index.js`, there are two ways to run the program, with `random()` being the default. You can optionally pass in your own `rawSentence` and use `execute()` to run the program. Examples of both are included in `index.js`.

I've copied and pasted them here for reference:

```
// UNCOMMENT ONE OF THE FOLLOWING AND RUN THE PROGRAM: 

// ===== QUICK START =====
const madlib = new MadLib()
madlib.random()               // Outputs random madlib to console


// ===== CUSTOM MADLIB =====
// const rawSentence = "It's just a typical manic Monday at the office; [firstName:male] somehow stapled his [bodyPart], \
// [firstName:female]'s hair got caught in the [furniture], and [firstName:female] got fired for [verb:ing] her TPS report"

// const madlib = new MadLib(rawSentence)
// madlib.execute()
```

---
<br/>

# HOW IT WORKS
To start off, take a look at the first sentence in `data/sentences.js`: 

```
"[firstName:male] went to the local [business] and bought [numberword:max5] [nounConcrete:plural] which he put in his [furniture]",
```

For the purposes of this program, I call each bracketed text a `tag`. These tags are eventually replaced with a random value based on its category.

---
<br/>
To view all the data catagories, take a look at `data/data.js`.

While there, find an array called `maleFirstNames`:

```
const maleFirstNames = [
  'Alfred',
  'Al',
  'Alan',
  'Allen',
  'Andy',
  ...
  ...
]
```

Back to our example sentence above, `[firstName:male]` eventually gets replaced with a random name from this array.
<br/><br/>
### But how does the program know which data array to pull from?
<br/>

Good question, open `MadLib.js` and examine the madness. **(Answered in step #2 below)**

---

*Use code folding to collapse/expand segments of code, since this file is quite long. I'll eventually modularize certain aspects of this class into separate files.*

---

`MadLib.js` class file contains all the properties and methods used to generate random MadLibs.

In the constructor, there is a property called `rawSentence` which will be the raw sentence containing one or more tags. You can optionally pass in your own rawSentence, or a random one is chosen from `data/sentences.js` if you don't.

## Step 1: generateTags()
This method uses a regular expression to locate tags in `this._rawSentence` and save them to an array called `rawTags`, which is also a property of this class.

We also save "clean" tags (tags without the brackets, so just the words) to a property array called `cleanTags`.

Once we have a list of `rawTags` and `cleanTags` we are ready to start replacing these tags with actual values. This moves us to step 2: `generateValues`

## Step 2: generateValues()
In this method, we loop through our list of `cleanTags`, and for each one we run a switch statement to determine which data array to choose from. (Note the `data` constant at the top of MadLib.js which imports each array (category) from `data/data.js`)

Find a case called `firstName:male`. You'll see that we push a random male first name to the `values` array. In fact,
in each case of the switch statement we push a random value from the appropriate data array.

Basically the parser replaces `[firstName:male]` with a random male first name from the `maleFirstNames` data array in `data/data.js`.

```
case 'firstName:male':
  this._values.push(maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)])
  break
```

--- 

NOTICE: Pay close attention to the naming of each case in the switch statement to its associated data array. In most cases, the switch statement is singular but the name of the data array is often plural.

---

## Step 3: parse()
In the parse method, we loop through all of the `rawTags` and replace each occurrence of it in the `rawSentence` with the same index in `cleanTags`. This effectively parses our MadLib sentence!

## Step 4: print()
The last step is to print the parsed sentenc to the screen.

---

## Other Methods
There are a few other methods we haven't addressed yet. 

`chooseRandomSentence`: This method does exactly what it says, it picks a random sentence from `data/sentences.js` and sets it as the `rawSentence` property on the class, ready for parsing.

`random`: This method executes `chooseRandomSentence` and `execute` methods, in that order. It essentially runs the program with a random sentence.

`execute`: This method is used to execute the program with a user-defined `rawSentence`, passed in as an argument to the MadLib constructor.