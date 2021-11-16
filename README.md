# English for kids

**English for kids** - an application for learning English words for kids.

### THE TASK: [https://github.com/rolling-scopes-school/tasks/blob/master/tasks/rslang/english-for-kids-translated.md](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/rslang/english-for-kids-translated.md)

### DEPLOYED SOLUTION: [https://rs-efk.netlify.app/](https://rs-efk.netlify.app/)

`Done 16.11.2021 (deadline 16.11.2021)`

`To install this application on your machine, just switch branch to 'dev' and run {npm update} and then {npm start}`

![efk](https://user-images.githubusercontent.com/6954538/142050656-d8a6e9d0-a3cc-426b-8bc5-a0359376e36e.png)



## Application Structure:
1. Main page
2. Category Page
3. Statistics Page

## Description of Pages
1. The Main Page of the Application
- there are links to the pages with categories of words on the main page of the application
- the minimum number of categories is eight
- each link contains a thematic image and a category name
- links are duplicated in the animated sidebar menu, which appears and disappears by clicking the icon in the upper left corner of the page
- on the main page and category pages of the application, there is a Train / Play switch button

2. Category Page
- category page includes category name and word cards related to category theme
- the minimum number of word cards in each category is eight
- each card has a thematic picture and an English word
- when you click on the card, you will hear the pronunciation of the word in English
- each card has a button on the right bottom corner. When you click on the button, the card flips over. The back side of the card has a translation of the word. Clicking on the back side of the card does not trigger any events like the pronunciation of the word.
- a card is rotated back to the front side when the mouse cursor moves beyond the borders of the card

3. Statistics Page
- the page description is located in the evaluation criteria (Hacker scope)


## Evaluation criteria:
**The maximum score for the task: 200 points**

### SELF-CHECK:

### Basic scope +50/+80

- **Layout, design, UI of the main page of the application: (+10)**
  - [x] all elements specified in the task are present on both the mobile and desktop versions
  - [x] all described application design requirements are met

- **Layout, design, UI of the interactive menu: (+10)**
   - [x] all described application design requirements are met
  - [x] menu links are functional and lead to corresponding categories page of words
  - [x] active link is styled differently
  - [x] the interactive menu is present on all pages of the application
  - [x] smooth animation of the interactive menu
  - [ ] the menu is closed by clicking on the cross icon, by clicking on the link in the menu, by clicking anywhere in the application, except the menu itself

- **Layout, design, UI of categories page: (+10)**
  - [x] all the elements specified in the task are present on both mobile and desktop versions
  - [x] all described application design requirements are met

- **Training Mode: (+20)**
  - [x] when you click on the card, the word is pronounced in English: (+10)
  - [x] each card has a button on the right bottom corner. When you click on that button the card flips over. The back side of the card has a translation of the word. A card is rotated back to the front side when the mouse cursor moves beyond the borders of the card: (+10)

- **Code quality requirements are met (+30)** 
  - [x] code duplication is kept to minimum: (+10)
  - [x] js-code is divided into modules: (+10)
  - [x] webpack, eslint, eslint-config-airbnb-base and babel are used: (+10)

### Advanced scope +80

- **Game Mode: (+80)**
  - [ ] the game mode is activated by toggling the Train/Play switch button. Features described above for the training mode are disabled for the game mode. The button that flips the card and the text on the card are both hidden. The "Start game" button is displayed. Card size does not change. Only the image remains on the card, which occupies the card's entire area (if this does not contradict your design): (+10)
  - [ ] after clicking on the "Start game" button, the random word from those on the page is pronounced. For each page, and for each game, random words are generated anew: (+10)
  - [ ] after the first click on the "Start game" button, the button changes to the "Repeat" icon. When you click on the "Repeat" button, the word is pronounced again: (+10)
  - [ ] the sound signal "error" is played if the user clicks on the wrong active card: (+10)
  - [ ] the sound signal “correct” is played if the user clicks on the correct active card. After that, a new random word from those that have not yet been guessed is pronounced: (+10)
  - [ ] a card with correctly guessed word becomes inactive, and its style is changed. Clicks on inactive cards are not accompanied by any sound effects, and they do not affect the game score: (+10)
  - [ ] after the start of the game, each click on the active card is displayed in the form of stars (or other symbols). The correct answer is displayed with one colored star and the wrong answer is displayed with a different colored star. If there are too many stars and there is no space, the previous stars are hidden, and the new ones are added: (+10)
  - [ ] when the game is over: (+10)
    - if all words are guessed correctly, the “success” signal is played, cards with words are removed, and a joyful emoticon (or another picture) is displayed on the page
    - if there were errors while guessing the words, the “failure” signal is played, cards with words are removed, and a sad emoticon (or other picture) with the number of mistakes is displayed on the page.
    - afterward, the application automatically redirects to the main page with a list of categories

### Hacker scope +40

- **Statistics Page: (+40)**
  - [x]  statistics page contains a list of all categories, all words in each category, and a translation of each word. The minimum width at which statistics page is displayed correctly is 320 px. The presence of a scrollbar in a table with statistics is not considered to be an error: (+10)
  - [ ] statistics are displayed next to each word - how many times a card with a given word was clicked in training mode, how many times this word was guessed in game mode, how many mistakes were made, the percentage of correct answers for each word in game mode. After restarting the application, statistics are saved: (+10)
  - [ ] it is possible to sort the data alphabetically, for numerical data ​​- by their value. Sorting can occur in ascending and descending order and should cover the entire data range: (+10)
  - [ ] there are "Repeat difficult words" and "Reset" buttons on the statistics page. The "Reset" button resets statistics. Clicking on the "Repeat difficult words" button opens a page similar to the category page with most frequent words guessed wrong. The page "Repeat difficult words" can have from zero to eight words, depending on how many words were guessed wrong in play mode. After clicking on the "Reset" button, the number of words on the "Repeat difficult words" page is set to zero: (+10)
  - [x] additional functionality outside of the scope of the task is implemented. This part is not evaluated, but if you can do better, then why not.

## Penalty Points
- [ ] less than eight categories, less than eight words in each category, data for the last two categories is copied from the demo, and not prepared independently: -10 points
- [ ]  requirements for a pull request, repository, and commit names are not met: -10 points (evaluated by mentors only)
- [ ] source code requirements are not met: -10 points or more (evaluated by mentors only)


### MY ESTIMATED RESULT OF MY PROJECT: 110
