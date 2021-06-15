<!-- .slide: class="transition-bg-grey-1 underline" -->

# Create your own directives

##==##

<!-- .slide: class="sfeir-basic-slide" -->

# A few reminders on the directives

![h-300 center](assets/images/school/directive/directive_schema.png) <br>

-   structural directives: modifies the DOM <br>
-   attribute directives: modify the appearance or behavior of an element <br>
-   component: directive with a view <br>

##==##

<!-- .slide: class="with-code inconsolata" -->

# Definition of a directive

```typescript
import { Directive } from '@angular/core';

@Directive({ ... })
export class MyDirective {}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide -->

# How to invoke a directive?

-   <b> element-name </b>: to restrict to an element <br> <br>
-   <b> [attribute] </b>: to restrict to one attribute <br> <br>
-   <b> .class </b>: to restrict to a class <br> <br>
-   <b> [attribute = value] </b>: to restrict to an attribute with a certain value <br> <br>
-   <b>: not (sub_selector) </b>: if the element does not match the sub-selector

##==##

<!-- .slide -->

# Some examples will be more meaningful

![h-400](assets/images/school/directive/attribut_directive.png)
![h-400](assets/images/school/directive/element_attibute_directive.png)
![h-400](assets/images/school/directive/css_direcitive.png)

##==##

<!-- .slide: class="with-code inconsolata" -->

# How to pass props to my directive

-   List inputs using the <b> @Input() </b> annotation
-   These inputs can be aliased
-   <b> Exactly as for components </b> <br> <br>

```typescript
import { Directive, Input } from '@angular/core';
@Directive({
    selector: '[foobar]',
})
export class MyDirective {
    constuctor() {}
    myProp: string;
    @Input('alias') myProp2: string;
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# How to interact with DOM elements

-   ElementRef (injectable) allows you to directly retrieve the element on which the directive acts
-   Renderer2 (injectable) allows to interact with the DOM <br> <br>

```typescript
import { Directive, ElementRef, Renderer2 } from '@angular/core';
@Directive({
    selector: '[foobar]',
})
export class MyDirective {
    constructor(private readonly element: ElementRef, private readonly renderer: Renderer2) {}
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide -->

# Interaction with the DOM

-   Prefer the use of Renderer instead of ElementRef <br> <br>
-   No direct dependency on the DOM <br> <br>
-   Allows you to run the application in other environments (EDGE, Firefox)

##==##

<!-- .slide: class="sfeir-basic-slide" -->

# Interaction with the DOM: Practices

<div class="container-practice border-red">
    <div class="icon-satisfaction">X</div>
    <div class="code">document.querySelector('#someId').innerHTML = 'X';</div>
</div>
<br><br>
<div class="container-practice border-orange">
    <div class="icon-satisfaction">:/</div>
    <div class="code">this.element.nativeElement.style.color = 'orange';<br>this.element.nativeElement.innerHTML = ':/';</div>
</div>
<br><br>
<div class="container-practice border-green">
    <div class="icon-satisfaction">:)</div>
    <div class="code">this.renderer.setStyle(this.element.nativeElement, 'color', '#0f0');<br>this.renderer.setProperty(this.element.nativeElement, 'innerHTML', ':)');</div>
</div>

##==##

<!-- .slide: class="with-code inconsolata" -->

# The events

-   <b> @Hostlistener() </b> to listen to events on the host element
-   <b> @Output() </b> to propagate events
-   <b> Exactly as for components </b>

```typescript
@Directive({})
export class MyDirective {
    @Output() somethingChange$: EventEmitter<any>;

    constructor() {
        this.somethingChange$ = new EventEmitter();
    }

    @HostListener('click', '$event') onClick($event) {
        this.somethingChange$.emit({ $event, data });
    }
}
```

<!-- .element: class="medium-code" -->
