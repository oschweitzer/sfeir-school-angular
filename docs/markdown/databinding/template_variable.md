<!-- .slide: class="with-code inconsolata" -->

# Template variables

-   Variables: a value (let)

```html
<movie-details *ngFor="let movie of movies"></movie-details>
```

<!-- .element: class="big-code" -->

-   References:
    -   Element (# our ref-XXX)
    -   available in all template and component (@ViewChild ('reference', {static: false}) <br>

```html
<input #phone type="text" /> <button type="button" (click)="call(phone.value)">Click</button>
<input ref-fax type="text" /> <button type="button" (click)="fax(fax.value)">Click</button>
```

<!-- .element: class="big-code" -->
