# MSDV Meeting Three July 30

## Week 3; Updating and Interacting, Fetching and Transforming Data with D3
## also JS interactivity/implementing JS to websites

# JS Interactivity Demo
- Refresher on what the DOM is
- document "node"
    - refers to every element in the document
    - can be used to create variables from chunks of HTML by querying specific elements or IDS
        - .querySelector
        - .getElementByID
- .addEventListener(event, function to run)
    - looks for webpage events
    - runs the specified function

# D3 Introduction
- Bespoke data vis library for custom and interactive visualizations 
- lots of examples on the D3 website https://d3js.org/
- add and modify SVG (scalable vector graphics) elements in HTML file using JS
- data binding
    - bind or connect data to SVGs 

- Adding libraries to HTML document:
    - `<script src="https://d3js.org/d3.v7.min.js"></script>`
        - note: loading a minimal version of D3 (only loading features we care about)
    - basically loading a JS document

# D3 Key Concepts:
- Selections
    - d3.select for selecting specific elements
- Method Chaining
    - chain methods using . dots 
        - each method performs an action on the selection
        - can chain methods in the next line for readability
- .attr for changing HTML attributes
- .style for setting CSS styles

- arrow function => (javascript idea)
    - different way of representing a function, used for small functions
    - input => (whatever you want to do to the input)
    - if you have more than one element (d,i):
        - first value represents data, second represents index 


- SVG is basic founation for all D3 graphics
    - "scalable vector graphics"
    - SVG is a graphical element that contains other graphical items
    - d3 adds graphical elements and binds data to it

- D3 Selections (how to select elements using D3)
    - `select("str") `
    - `selectAll("str")`
    - STR is any CSS selector (class, ID, etc)
- Modifying attributes throught CSS
    - `.style()` for all CSS styles
    - `.classed()` - toggles classes on or off
    - `.attr()`
    - `.property()`
- Binding data
    - `.data()` joins data to element
    - can also pass data to function ("callback" in JS)
        - more generally, callback is a function passed as an argument to another function
- sub-selections
    - create HTML elements based on data using d3 as opposed to writing them out in HTML doc
    - .enter() and .exit()
        - select some HTML element and then "enter" it
- Events
    - `on(EVT)` event handler
    - modify properties of element targeted by event with `this` keyword

- Anonymous functions aka arrow functions
    - see notes above 
    - =>
    - cleaner syntax, use for single use functions on objects
    - especially useful for functions with only a return statement
    - used a lot in d3 where you recieve an object/data and do a transformation on it 
    - normal functions can be defined in later lines when they are called
        - functions defined in a variable (like arrow functions are) will not be run
        - this is called function hoisting

- general note: unclear to me why linkedin instructor defines function in variable or as an out and out function

- D3 Handling Data
    - has built in methods for common data file types
    - CSV: comma separated value file
        - .csv() to fetch a CSV file
        - .get() gets the data, can contain functions
        - .row() optional, runs a transformation on each data point
    - TSV (tab separated value) 
        - handlers are the same as CSV
    - DSV ( pipe delimited file)
        - tell d3 what symbol is delimiting data:
            - var psv = d3.dscFormat("|")
        - can use .get()
        - .parse()
        - manually transform rows using a for loop
    - JSON
        - very good at hiearchical data
        - .json to load file
        - index with .children within []
    - XML (Extensible Markup Language)
        - looks like an HTML document
        - .xml() to load file
    - avoid using .txt file
        - d3 imports txt file as strings
        - check the video. this is pretty specific. a lot of effort best avoided
    - html
        - d3 allows you to download webpages or parts of them
        - can scrape data hosted on webpages
        - d3.html("url").get(function(error,data){})

- d3.group and d3.rollup
    - d3.group 
    - d3.rollup allows you to make a transformation on dataset
        - cleans up array -i.e. you only want a number and not the whole array
        - helpful for only keeping data we find valuable/reducing the size of dataset

- Array Prototypes
    - when array is 
    - following functions iterate over items in the array
        - following are higher order functions (i.e. take another function as arugment)
    - .map()
        - used to pass a function over all items in an array
        - returns finalized array
    - .forEach
        - similar to map but does not return finalized array
    - .filter()
        - pass function with if statement to filter things you want in your dataset
    - .sort()
        - can compare items in array to following items
    - .reduce
        - compares item with previous and transforms based on user supplied function
        - ex: sums all values in array into single number
        - flattening an array and doing some arithmetic

- Homework review
    - `<input>` element handles events
        - specify type = 
    - event.preventDefault() is good practice to add
        - stops browser default event from happening when action occurs, tells browser to instead use user provided command (i.e. what we write in our handler function)
    - every HTML element has a "node" (which technically is the contents of HTML itself)
        - .node() gets you the HTML element

    - javascript Map
        - similar to object which has structure 'key': 'value
        - for map, 'key' doesn't need to be string
        - also you get more commands/transformations