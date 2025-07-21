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

<br></br>

- Debugging
    - use the dang inspector (lets you see how the browser has built the DOM off of the code you have provided)
- Attributes
    - class
    - id (much more specific, not used as much as classes)
    - lang for language
    - dir for reading direction
    - other attributes "do things"
- Aria Role (accessibility) 
- HTML Character entity
    - typing characters not to be interpreted by whatever reads the html
    - i.e. you want to display an ampersand instead of telling the browser "this is the start of a tag"
    - `&nbsp;` is a non-breaking space (line break will not happen between these two characters/words)

<br></br>

- Links
    - `<a>` element can be wrapped around any content. Use href attribute to point to specific link
        - https;// or http:// is neccesary for href attribute link
        - "s" is secure - better and safer to use
    - absolute path vs relative path
        - use relative paths for internal nav
        - adding `..` to beginning of path reverses the reading direction (i.e. start at named file and go up) relative from the file the path is written
    - index.html: HTML file that goes into the folder containing content
        - put all your html for a specific page into an index.html file under a descriptively named fodler 
- Navigation
    - `<nav>` defines navigation links
    
<br></br>

- Images
    - `<img>` attributes:
        - src
        - width and height
        - alt (alt text)
            - can leave blank alt text for images that don't need to be read aloud (i.e. logos)
    - Image file formats
        - goal: high quality, smallest size
        - GIF:
            - good at compressing large areas of color
            - can do multiple images
        - SVG
            - Vector file (good for logos)
            - good for scalable images
        - JPG
            - good for digital photos (make sure it is properly sized)
        - PNG
            - images that need transparency 
- Reponsive Images
    - give several file types of image, browser can decide which to load based on user's computer/monitor/network speed
    - `<img>` srcset= "list of alternative resolutions" 
        - and resolution (2x, 3x, etc of default height/width) after each file
        -   height/width stays fixed
        - or file pixel width (i.e. 480w, 960w)
            - fast, assumes you need image to be 100% of layout width
    - sizes attribute
        - lists which size image to use at specific widths
- Reponsive Picutres
    - more control over how image is presented on dif devices
    - wrap `<img>` with `<picture>` element
        - give alternative images with `<source>` elements 
    - a lot of this is handled by software
- Figure and Figcaption
    - `<figcaption>` for figure caption
    - ^ above and image are wrapped in `<fig>` element

<br></br>

- Media
    - `<audio>` 
        - attribute "controls" tells browser to give default audio controls 
        - loop
        - autoplay
    - `<video>`
        - many types of video encoding codecs (all use lots of compression)
        - more complicated than audio/images to provide several resolutions (you usually use a video hosting service embedd)
    - subtitles and captions
        - src= .vtt file  in `<track>` element
    - iframes for embedding videos 
        - important to consider security for iframes
- Language
    - can set in `<html>` tag (wraps the entire content)
    - lang language 
    -dir reading direction 
    - character set (most use UTFT-8 (Unicode))
        - set in head element `<meta>`
- `<div>` and `<span>`
    - ways to wrap/group element or mark a phrase
    - `<span>` is inline
    - use when there's not another appropriate element

<br></br>

Putting it all together
- HTML
    - user requests HTML file, browser fetches HTML file and executes instructions
    - all other content files are requested by the browser as it reads the HTML file top to bottom
    - Key parts:
        - doctype 
        - HTML element ("everything in this is HTML")
            - declare language and direction
        - head
            - all invisible metadata
            - `<title>` element for 
            - `<description>` description of site that ends up in search engine results
            - `<link>` links to other assets we want to load (rel (type)and href)
            - `<script>` for loading JS
        - body
            - all content
            - Overall structure:
                - `<main>` once per webpage. This is the main content
                - `<header>` or `<footer>` for headers or footers in article
                    - footer doesn't have to go on the bottom. semantic meaning more important than location
                - `<article>` unit of content
                - `<section>` for sections of content
                - `<aside>` for side content

