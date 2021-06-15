<!-- .slide: class="with-code inconsolata" -->

# Use in component

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'sfeir-foo',
  templateUrl: './foo.component.html'
})
export class FooComponent implements OnInit {
  constructor(private readonly route: ActivatedRoute, private readonly router: Router ) { }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
    let id = params['id'];
    });
  }
  go(): void {
    this.router.navigate(['/people/']);
  }
```

<!-- .element: class="medium-code" -->

Notes:

-   The navigate method returns a promise
-   We don't have to use the router params property, there is also the paramsMap props

##==##

<!-- .slide: class="with-code inconsolata" -->

# Use in template <br>

```html
<a class="btn btn-info" routerLink="/people">Movies List</a>
<a class="btn btn-info" [routerLink]="['/people']">Movies List</a>
<a class="btn btn-info" [routerLink]="['/people/edit/', person.id]">Edit</a>
```

<!-- .element: class="big-code" -->
