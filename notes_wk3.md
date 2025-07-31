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