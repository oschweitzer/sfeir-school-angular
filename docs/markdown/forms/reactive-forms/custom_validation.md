<!-- .slide: class="transition-bg-grey-2 underline"" -->

# Custom validation with Reactive Forms

##==##

<!-- .slide: class="with-code inconsolata" -->

# Create your own validators

-   a custom validator is a simple <b> function </b>
-   If the validation is good: returns <b> null </b>
-   If the validation is not correct: returns an object of this form <b> {errorName: true} </b>
    <br><br>

```typescript
import { FormControl, ValidationErrors } from '@angular/forms';
export abstract class CustomValidators {
    protected constructor() {}

    static CustomEmailValidator(c: FormControl): ValidationErrors | null {
        return c.value.indexOf('@') !== -1 ? null : { email: true };
    }
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Utiliser son validateur

-   Is done when creating the control <br> <br>

```typescript
import { CustomValidators } from './validators';
this.formModel = new FormGroup({
    email: new FormControl('', CustomValidators.CustomEmailValidator),
    // or
    email: new FormControl('', Validators.compose([Validators.required, CustomValidators.CustomEmailValidator])),
});
```

<!-- .element: class="big-code" -->
