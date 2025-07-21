# CSS Glossary for Beginners

Welcome to CSS! This glossary is designed for new students in the Parsons Data Viz Summer Workshop. CSS (Cascading Style Sheets) is the language used to style and visually organize web pages. With CSS, you control colors, fonts, spacing, layout, and much more.

# MSDV Meeting One Jul 17
## Intro + Week 1 overview
- Quick tip: easier to debug with the inspect element feature on the browser than changing your code and rendering it 
- Properly formatted HTML helps with SEO (search engine optimization)
- Responsive website adapts to the device used
- Asset folder includes videos/images and style sheets
- Style sheet (CSS) defines style and appearance of a website 
    - Kind of like universal variables
    - Sets the style for all HTML elements of type specified in style sheet
    - Link CSS style sheet to html file in head section
## Week 1 HW
- Document Object Model (DOM)
    - Structured representation of elements and their relationships in the document
    - Created by the browser from the HTML document - nested tree of HTML elements
    - Every content wrapped in HTML tag is a “DOM Object”/“Node”
- `<head>` hold invisible information for a document
- Event: any action/interatcion in a browser
    - Use JS to react to events (event handling)
- In short:
    - HTML for content
    - CSS for style
    - Javascript for interactivity
- HTML -> CSS -> JS
    - less fragile/powerful -> more fragile/powerful
    - tip: "keep it simple" do as much as you can/makes sense in HTML and then move up the chain
- headlines
    - standard for `<h1>` to be main headline (and only have one)
    - intentional headline hierachy/system is very very helpful
- italics/bold (different tags for different uses)
    - `<i>` visual only (for titles, etc)
    - `<em>` emphasis italics
    - rec: use for content without individual element
- lists
    - `<li>` list item are wrapped with `<ul>` unordered list `<ol>` ordered list 
    - `<dl>`definition list with `<dt>` term and `<dd>` descriptions
- quotes `<q>` quote `<blockquote>` block quote
- dates and times
    - give attribute `datetime="YYYY-MM-DD"` for computer, add whatever content you want in element tag `<time></time>`
- `<code>`
    - `&lt;` < `&gt;` > rendered by browser as symbol but no interpreted as code
- `<br>` line break
- `<pre>` text break? dunno the word

- Debugging
    - use the dang inspector (lets you see how the browser has built the DOM off of the code you have provided)
- Attributes
    
