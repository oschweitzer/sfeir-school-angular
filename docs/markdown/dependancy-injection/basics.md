<!-- .slide: class="with-code inconsolata" -->

# Principle: Dependency injection

-   Development pattern for a class <b> to be provided </b> with other classes or objects (called dependencies) <b> externally </b> rather than instantiating them by itself.
    <br> </br>

```typescript
class Car {
    constructor() {
        this.engine = new Engine();
        this.tires = Tires.getInstance();
        this.doors = app.get('doors');
    }
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Injection in Angular (typescript)

-   In Angular, dependencies declared in a specific class are made available during <b> instantiation </b> that class. <br> </br>

```typescript
import { EngineService, TiresService, DoorsService } from './shared';
 @Component({...})
 class Car {
   constructor(
       public engine: EngineService,
       public tires: TiresService,
       public doors: DoorsService
   ) {}
}
```

<!-- .element: class="big-code" -->
