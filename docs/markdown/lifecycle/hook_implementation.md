<!-- .slide: class="with-code inconsolata" -->

# Lifecycle implementation

```typescript
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'sfeir-user',
    templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
    ngOnInit(): void {
        console.info('sfeir-user', 'init');
    }
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide -->

# The different lifecycle

-   <b> ngOnChanges (): </b> responds whenever the input properties change
-   <b> ngOnInit (): </b> initializes the component / directive after its creation (1 time)
-   <b> ngDoCheck (): </b> allows you to act on the detection of modifications
-   <b> ngAfterContentInit (): </b> responds after initializing the content of the component (1 time)
-   <b> ngAfterContentChecked (): </b> responds after Angular checks the content of the component
-   <b> ngAfterViewInit (): </b> responds after initialization of the component view (1 time)
-   <b> ngAfterViewChecked (): </b> responds after Angular checks the contents of the view
-   <b> ngOnDestroy (): </b> allows cleaning before the destruction of the component (1 time)
