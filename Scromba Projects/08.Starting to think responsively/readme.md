### Starting to think resposnively

## Introduction
Building websites used to be simple. We had a single design, we made the site look exactly like that design, and we are done.

Now we must make a design and have it work on every device, a watch screen to a 80" TV.

Now we have the fundamentals down, it's time to get into the responsive frame of mind.

We'll work our way up from getting a design to simply work on a single screen size to being able to get it to work on any device.

## Thinking responsively isn't easy, especially at first.

We'll work our way up, exploring the do's and dont's and how to plan things to make your life easier in the long run.

## What is covered in this module 
    1.  How to approach a layout?
    2. CSS Units(absolute, relative and percentage)
    3. Flexbox basics(our layout tool)
    4. Media query basics (Adapting to different screen sizes)

## CSS Units    

CSS  units come in a few different flavors:
    1. Absolute units
    2. Relative units
    3. Percentage

Absolute units are the easiest to understand:
    1. Pixels(px)
    2. pt,cm,mm,in etc


Percentages are mainly used for widths, and are pretty to understand
    1. Relative to their parent(except on height, where things get weird).

## There are two types of relative units:
    1. Relative to font size: em and rem (and many other less common ones)
    2. Relative to the viewport(browser's window): we'll get to this later : vw, vh,vmin,vmax
Even though it sounds complicated, once you play around with them a little it isn't too bad.

## CSS Units - Relative units

The em and rem are considered relative, because they are relative to the font-size of other elements.
    1. em are relative to their parent's font size.
    2. Font-size is an inherited property, so if you don't declare it anywhere, it's getting it from the body(or the default, which is normally 16px)
    Eg: 1em = 100% of the parent's font size

## CSS Units - The problem with em

em units are very convinient for some things, but when we ise them for the font size of an element though, it can create a cascading effect.

The rem unit is short for Root Em

That means it's always relative to the "root" of our document.

The root of an HTML page is always the html element.


## How to decide which unit to use?

Pixels used to cause a lot of problems, as they were a fixed unit (one dot on the screen)

Now, it follows the reference pixel.

## General Thumb Rule

    1. Font-size = rem
    2. Padding and Margin = em
    3. Widths = em or percentage