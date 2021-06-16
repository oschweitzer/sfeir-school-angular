<!-- .slide" -->

# Two types of components

-   <b> Directive </b> allows to enrich an HTML element <br> <br>
-   <b> Component </b> is a directive with a view and CSS styles
##==##
<!-- .slide: class="two-column-layout" -->

# Angular: a component tree

##--##
<br><br>

-   Children are added to the parent if they appear in its template <br> <br>
-   A component must be declared in a module

    ##--##
    <br><br>

![h-400](assets/images/school/components/component_tree.png)

##==##

<!-- .slide: class="with-code inconsolata" -->

# The @Component annotation

Identity card of a component <br>

-   selector
-   template and templateUrl
-   providers
-   viewEncapsulation
-   ChangeDetection <br> <br>

```typescript
@Component({
  selector: 'sfeir-app',
  templateUrl: './home.component.html'
  ...
})
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Nesting of components

When a parent component wants to use child components <br>

-   child components must all be referenced
-   child components must be declared in the "declarations" of <b> @NgModule () </b> <br> <br>

```typescript
import { HomeComponent } from './app/home';
import { FooDirective } from './app/shared/foo.directive';

@NgModule({
    declarations: [HomeComponent, FooDirective],
})
export class AppModule {}
```

<!-- .element: class="big-code" -->
