<!-- .slide: class="with-code inconsolata" -->

# Validation with Template driven form

-   The validation is done using the classic html attributes of validations: <br> <br> - required - minLength - maxLength - pattern - ...
    <br><br>

Ok but if a field is required according to another?

<!-- .element: class="important" -->
<br>
Well we use the property linked to the attribute
<br>

```html
<input type="text" name="lastname" [(ngModel)]="person.lastname" [required]="person.firstname" />
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide -->

# The different states of a control <br>

-   <b> control.pristine </b>: the user has not interacted with the control
-   <b> control.dirty </b>: the user has already interacted with the control
-   <b> control.valid </b>: the control is valid
-   <b> control.invalid </b>: the control is not valid
-   <b> control.touched </b>: the control has lost focus
-   <b> control.untouched </b>: the control has not yet lost focus

##==##

<!-- .slide-->

# The different classes available for the <br> style

-   .ng-valid / .ng-invalid <br><br>
-   .ng-pristine / .ng-dirty<br><br>
-   .ng-pristine / .ng-dirty<br><br>
-   .ng-touched / .ng-untouched

##==##

<!-- .slide: class="with-code inconsolata" -->

# Manage errors <br>

```html
<input type="text" name="user" ngModel #userRef="ngModel" required />
<div [hidden]="!userRef.errors?.required">
    <span class="help-block">This field is required</span>
</div>
```

<!-- .element: class="big-code" -->
