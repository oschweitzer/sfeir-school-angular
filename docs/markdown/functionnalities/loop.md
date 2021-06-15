<!-- .slide: class="with-code inconsolata" -->

# The iteration with the \*ngFor directive

-   Iterates through a collection and generates one template per element <br> <br>
-   <b> index, odd, event, last </b> to use as aliases in variables <br> <br>

```html
<ul>
    <li *ngFor="let fruit of fruits; let i=index">{{ i }} : {{ fruit.name }}</li>
</ul>
```

<!-- .element: class="big-code" -->
