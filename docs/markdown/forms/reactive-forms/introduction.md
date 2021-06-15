<!-- .slide: class="transition-bg-grey-1 underline" -->

# Reactive forms

##==##

<!-- .slide: class="with-code inconsolata" -->

# The Reactive Forms Foundation

To create forms with Reactive Forms, it is necessary to import the <b> ReactiveFormsModule </b> module also coming from the <b> @angular/forms </b> package
<br><br>

```typescript
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule],
    declarations: [],
    providers: [],
    bootstrap: [],
})
export class AppModule {}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="two-column-layout" -->

# Global syntax in Reactive forms

##--##

<!-- .slide: class="with-code inconsolata" -->

<br><br>

```html
<form [formGroup]="editForm">
    <input type="text" formControlName="firstname" />
    <div [hidden]="!editForm.controls.firstname.valid">Firstname est d'un format invalid</div>
    <button type="submit" [disabled]="!editForm.valid">Modifier</button>
</form>
```

<!-- .element: class="big-code" -->

##--##

<!-- .slide: class="with-code inconsolata" -->

<br><br>

```typescript
import { Validators, FormControl, FormGroup } from '@angular/forms';
@Component({...})
export class FormComponent {
  editForm: FormGroup;
   constructor() {
    this.editForm = new FormGroup({
        firstname: new FormControl('',
          [Validators.required, Validators.minLength(2)]
        )
    });
   }
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Syntax in the template

-   Reference to the form template via <b> formGroup </b>
-   Mapping of controls via <b> formControlName </b> <br> <br>

```html
<form [formGroup]="editForm">
    <input type="text" formControlName="firstname" />
    <div [hidden]="!editForm.controls.firstname.valid">Firstname est d'un format invalid</div>
    <button type="submit" [disabled]="!editForm.valid">Modifier</button>
</form>
```

<!-- .element: class="big-code" -->

Notes:

-   formGroup declares as for the template driven form a reference on the editForm model
-   formControlName: performs the binding of a control found in the model

##==##

<!-- .slide: class="with-code inconsolata" -->

# Group the fields in the template

-   Group the fields in a sub-object using <b> FormGroupName </b> <br> <br>

```html
<form [formGroup]="editForm" (ngSumit)="submitEditForm(editForm.value)">
    <div formGroupName="address">
        <input formControlName="zipCode" type="text" />
        <input formControlName="country" type="text" />
    </div>
</form>
```

<!-- .element: class="big-code" -->

Notes:

-   ngSubmit allows to submit the form when pressing enter
-   editForm.value returns an object of this format: {address: {zipCode: 57000, country: FRANCE}}

##==##

<!-- .slide: class="with-code inconsolata" -->

# The syntax in the class

```typescript
import { Validators, FormControl, FormGroup } from '@angular/forms';
@Component({...})
export class FormComponent {
  editForm: FormGroup;
   constructor() {
    this.editForm = new FormGroup({
        firstname: new FormControl('', [Validators.required, Validators.minLength(2)])
    })
   }
}
```

<!-- .element: class="big-code" -->

Notes:

-   firstname is of type AbstractControl, if you want to update its value during a certain event such as the click of a button, there is the patchValue method
-   boost: Make getters that return the AbstractControl. It will lighten your template => this.editForm.get ('firstname')
