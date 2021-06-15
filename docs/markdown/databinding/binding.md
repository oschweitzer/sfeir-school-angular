<!-- .slide -->

# The different types of binding

<table>
    <thead>
        <tr>
            <td>Direction</td>
            <td>Syntax</td>
            <td>Type</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Unidirectional: model to view</td>
            <td>
                <p>{{ expression }}</p>
                <p>[targetFooBar] = expression</p>
                <p>bindTargetFooBar = expression</p>
            </td>
            <td>
                <p>Interpolation</p>
                <p>Properties</p>
                <p>Class</p>
                <p>Attribute</p>
                <p>Style</p>
            </td>
        </tr>       
    </tbody>
</table>

##==##

<!-- .slide -->

# Les différents types de binding

<table>
    <thead>
        <tr>
            <td>Direction</td>
            <td>Syntax</td>
            <td>Type</td>
        </tr>
    </thead>
    <tbody>        
        <tr>
            <td>Unidirectional: view to model</td>
            <td>
                <p>(targetFooBar) = expression</p>
                <p>onTargetFooBar = expression</p>
            </td>
            <td>Events</td>
        </tr>
        <tr>
            <td>Bidirectional</td>
            <td>
                <p>[(targetFooBar)] = expression</p>
                <p>bindonTargetFooBar = expression</p>
            </td>
            <td>Bidirectional</td>
        </tr>
    </tbody>
</table>

##==##

<!-- .slide: class="with-code inconsolata" -->

# Interpolation and expression

## Interpolation:

```html
<div>Hello {{ name }}</div>
<img src="{{ myUrl }}" />
```

<!-- .element: class="medium-code" -->

## Expression:

-   In the context of the component
-   Javascript but !!
    -   no assignment (except for events like the click on a button)
    -   no access to global variables (window, document, ...)
    -   For logical operators, everything is evaluated
    -   No new, ++, --

##==##

<!-- .slide: class="two-column-layout" -->

# Property binding

##--##
<br><br>

<table>
    <thead>
        <tr>
            <td>Type</td>
            <td>Target</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Property</td>
            <td>
                <p> Element attribute </p>
                <p> Component attribute </p>
                <p> Directive attribute </p>
            </td>
        </tr>
    </tbody>
</table>

![center h-400](assets/images/school/databinding/properties_binding.png)

##--##

<!-- .slide: class="with-code inconsolata" -->

<br><br>

-   Canonical form: bindCapitalAttr (ex: bindDisabled) <br> <br>
-   Constant

```html
<show-title [title]="'My title'"></show-title> <show-title title="My title"></show-title>
```

<!-- .element: class="medium-code" -->

##==##

<!-- .slide: class="two-column-layout" -->

# Event Binding

##--##
<br><br>

<table>
    <thead>
        <tr>
            <td>Type</td>
            <td>Target</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Event</td>
            <td>
                <p> Element Event </p>
                <p> Component event </p>
                <p> Directive event </p>
            </td>
        </tr>
    </tbody>
</table>

![center h-400](assets/images/school/databinding/event_binding.png)

##--##
<br><br>

-   Canonical form: onCapitalAttr (ex: onClick)
-   Reference to the event using \$event

##==##

<!-- .slide: class="two-column-layout" -->

# 2 way binding

##--##
<br><br>

<table>
    <thead>
        <tr>
            <td>Type</td>
            <td>Target</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>bidirectional</td>
            <td>
                <p> Properties </p>
                <p> Directive event </p>
            </td>
        </tr>
    </tbody>
</table>

![center h-300](assets/images/school/databinding/two_way_binding.png)

##--##

<!-- .slide: class="with-code inconsolata" -->

<br><br>

-   Equivalent to

```html
<input [ngModel]="firstname" (ngModelChange)="firstname = $event" />
```

<!-- .element: class="big-code" -->
<br>

-   <bg>ngModel</bg> comes from the library <strong>@angular/forms</strong>
