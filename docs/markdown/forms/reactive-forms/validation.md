<!-- .slide: class="with-code inconsolata" -->

# Validation with reactive forms

```html
<form [formGroup]="editForm">
    <div>
        <input formControlName="firstname" />
        <div [hidden]="!editForm.controls.firstname.errors?.required">
            <span class="help-block">This field is required</span>
        </div>
    </div>
</form>
```

<!-- .element: class="big-code" -->
