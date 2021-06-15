<!-- .slide-->

# Attribute vs Properties

-   Attributes are <b> HTML </b>, properties are <b> DOM </b> <br>
    -   strict mapping (id)
    -   attribute without properties (colspan)
    -   property without attribute (text-content)
    -   the 2 but ... <br> <br>
-   The attribute is used to initialize properties most of the time <br> <br>
-   There are attributes without values ​​(eg: disabled on a button) <br> <br>
-   an attribute: a string of characters
    ##==##

<!-- .slide: class="with-code inconsolata" -->

# Angular and properties

-   A world without attributes <br> <br>
-   With the binding, we only work on the properties <br> <br>

```html
<button type="submit" [disabled]="form.invalid">Submit</button>
```

<!-- .element: class="big-code" -->

<br><br>

-   Allows you to pass objects

##==##

<!-- .slide: class="with-code inconsolata" -->

# What if I want to act on an attribute?

Some elements do not have to have the property (svg, colspan)
<br>

-   You can target an attribute by preceding its name with <b> attr </b>

```html
<td [attr.colspan]="1+1">a cell!!</td>
```

<!-- .element: class="big-code" -->

-   For classes, we precede the name of the class by: <b> class </b>

```html
<div [class.isSpecial]="isSpecial">special class</div>
```

<!-- .element: class="big-code" -->

-   For the style, we precede the name of the property by style

```html
<div [style.color]="isSpecial ? 'red' : 'green'">Special class</div>
```

<!-- .element: class="big-code" -->
