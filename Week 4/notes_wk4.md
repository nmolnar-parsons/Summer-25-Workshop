# MSDV Meeting Three July 30

## Week 4: Line Charts and Bar Charts


- for barchart, add mousin and mouseout animation for color 

# Notes from videos
- SVG Graphics
    - much more flexible than HTML shapes
    - stylable with CSS and scriptable with JS
    - easy to make
    - Primitives (simple shapes in programming language)
        - `<svg>` tag
            - rect, circle, line, text, polyline
            - g tag for grouping
                - you will see `('g')` as an argument for functions/commands which creates a group
            - style declarations
            - `xlink:href` lets you create instance of element
    - how to do in D3:
        - create element and target it with D3
    - .call() will not interrupt further commands down the line
        - can use it for styling or grouping
        - takes a function as an argument
- Thinking about the DOM is key!
    - all D3 selecting and appending is based on the structure of the DOM. if something doesn't make sense, think about the DOM
- Enter and Exit
    - Enter selection
        - any leftover data or missing elements go here
        - .enter().append()
            - appends to items in the Enter selection
    - Exit selection
        - any unused elements go here
        - exit.remove()
            - clears exit
- if you can style it in CSS you can select it in D3