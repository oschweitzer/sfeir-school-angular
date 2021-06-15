<!-- .slide: class="transition-bg-grey-1 underline" -->

# Template Driven Form

##==##

<!-- .slide: class="with-code inconsolata" -->

# The Template driven Form Foundation

To create forms with the template driven forms, it is necessary to import the <b> FormsModule </b> module from the <b> @angular/forms </b> package <br> <br>

```typescript
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [],
    providers: [],
    bootstrap: [],
})
export class AppModule {}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# The syntax in the template driven forms

-   <b> #authenticationForm = "ngForm" </b>: We declare a reference on a form taking as value the ngForm directive <br> <br>
-   <b> authentication.value </b> allows you to retrieve in JSON object format all the values ​​of the form fields <br> <br>

```html
<form #f="ngForm" (ngSubmit)="onSubmit(f.value)"></form>
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# The binding in the template driven form

-   Two compulsory components:
    -   **ngModel**: the binding of a control
    -   **name**: associate a name to the control of the field

<br><br>

-   **Exemple 1**: binding View -> Model

```html
<input type="text" name="title" ngModel />
```

<!-- .element: class="big-code" -->

-   **Exemple 2**: binding Model -> View

```html
<input type="text" name="title" [ngModel]="person.name" />
```

<!-- .element: class="big-code" -->

-   **Exemple 3**: binding bidirectionnel

```html
<input [(ngModel)]="postalCode" name="postalCode" type="text" />
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Group fields in a sub-object

<b>ngModelGroup</b> groups controls in a sub-object<br><br>

```html
<p ngModelGroup="address"><input ngModel name="city" /></p>
<p ngModelGroup="address"><input ngModel name="postalCode" /></p>
```

<!-- .element: class="big-code" -->
