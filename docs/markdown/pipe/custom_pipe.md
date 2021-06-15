<!-- .slide: class="transition-bg-grey-1 underline" -->

# Create your own pipes

##==##

<!-- .slide -->

# The different types of pipe <br>

-   Pure: the pipe is called only if the value on which it acts has changed (default mode) <br> <br>
-   Impure: the pipe is called at each change of detection whether the value on which it acts has changed or not

##==##

<!-- .slide -->

# How is a pipe made

-   <b> @Pipe </b> annotation which takes name property which will be called in the template <br> <br>
-   Of a class that is triggered by the <b> @Pipe </b> annotation <br> <br>
-   This class implements the <b> transform </b> method which takes a value and possibly an array of arguments as parameter <br> <br>
-   This <b> tranform </b> method performs transformations (or not) but always returns a new value <br> <br>
-   Remember to register your Pipe in the declaration table of your module (as a component)

##==##

<!-- .slide: class="with-code inconsolata" -->

# Let's materialize this by code

```typescript
import { Pipe } from '@angular/core';
@Pipe({
    name: 'mypipe',
})
export class MyPipe implements PipeTransform {
    transform(value: number, args: any[]) {
        return newValue;
    }
}
```

<!-- .element: class="big-code" -->
