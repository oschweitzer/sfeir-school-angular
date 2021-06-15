<!-- .slide: class="with-code inconsolata" -->

# The \*ngFor directive (callback)

-   Iterates through a collection and generates one template per element <br> <br>
-   <b> index, odd, event, last </b> to use as aliases in variables <br> <br>

```html
<ul>
    <li *ngFor="let fruit of fruits; let i=index">{{ i }} : {{ fruit.name }}</li>
</ul>
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# The \*ngIf directive

-   Changes the structure of the DOM conditionally (appears or not in the DOM) <br> <br>

```html
<div *ngIf="errorCount > 0" class="error">{{ errorCount }} errors detected</div>
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# The \*ngSwitch directive

-   Change the structure of the DOM conditionally (like a switch case) <br> <br>

```html
<div [ngSwitch]="display">
    <p *ngSwitchCase="list">...</p>
    <p *ngSwitchCase="whenExpression1">...</p>
    <p *ngSwitchDefault>...</p>
</div>
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# But what are these stars

-   It materializes the structural directives (like NgIf NgFor and NgSwith)
-   Syntactic sugar
-   Indicates that we are using the 'ng-tempate' tag
-   Be careful not to forget the [] if you use the <br> <br> templates

```html
<div *ngIf="errorCount > 0">toto</div>
<!-- same as -->
<ng-template [ngIf]="errorCount > 0">
    <div>toto</div>
</ng-template>
```

<!-- .element: class="big-code" -->

Notes:

-   Live demonstration of the creation of a simple case structural directive: display or hide a password at the click of a button
