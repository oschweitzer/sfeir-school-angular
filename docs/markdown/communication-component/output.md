<!-- .slide: class="with-code inconsolata" -->

# Parent - child communication: @Ouput

-   In the child component

```typescript
import { Component, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'app-child',
})
export class ChildComponent {
    @Output() childEvent: EventEmitter<string>;
    constructor() {
        this.childEvent = new EventEmitter<string>();
    }
    raiseEvent() {
        this.childEvent.emit('event from child');
    }
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Parent - child communication: @Ouput

-   In the HTML template of the parent component <br> <br>

```html
<section><app-child (childEvent)="onChildEvent($event)"></app-child></section>
```

<!-- .element: class="big-code" -->
<br>

-   In the parent component <br> <br>

```typescript
onChildEvent(myPassVariable: string): void {
  console.info(myPassVariable); // event from child
}
```

<!-- .element: class="big-code" -->
