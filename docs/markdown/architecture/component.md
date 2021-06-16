<!-- .slide: class="transition-bg-grey-1 underline" -->

# Component

##==##

<!-- .slide -->

# Component

Component is composed of three basic concepts.
<br><br>

![center h-600](assets/images/school/architecture/components.png)

##==##

<!-- .slide: class="with-code inconsolata" -->

# Component: logic

The logic of the component uses the syntax of the class ES2015
<br><br>

```typescript
export class AppComponent {
    name: string;
    constructor() {
        this.name = 'Angular';
    }
}
```

<!-- .element: class="big-code" -->
<br>

##==##

<!-- .slide: class="with-code inconsolata" -->

# The component: display

The display of the component in the page is due to the markup rule
<br><br>

```typescript
@Component({
  selector: 'sfeir-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
```

<!-- .element: class="big-code" -->
<br>

```html
<sfeir-app></sfeir-app>
```

<!-- .element: class="big-code" -->
<br>
Notes:
- An annotation of type @Component can be applied to any class. Without this class, the build and layout affect an error

##==##

<!-- .slide: class="with-code inconsolata" -->

# The component: totality

The writing of a component in its totality is beyond that
<br><br>

```typescript
@Component({
    selector: 'sfeir-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    name: string;
    constructor() {
        this.name = 'Angular';
    }
}
```

<!-- .element: class="big-code" -->
