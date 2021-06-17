<!-- .slide: class="with-code inconsolata" -->

# What is a Service

-   An exported class
-   An <b> @Injectable </b> annotation

```typescript
@Injectable({
    providedIn: AppModule,
})
export class TodoService {
    constructor() {
        this.name = 'Hello';
    }

    getName() {
        return this.name;
    }
}
```

<!-- .element: class="big-code" -->

Notes:

-   Here we record directly in our AppModule module (think about the import otherwise there will be an error)
-   Angular 9 offers the providedIn: any which registers a service by lazy loader module (be careful in this case several instances)

##==##

<!-- .slide: class="two-column-layout" -->

# Use your service (overall)

##--##
![h-600](assets/images/school/providers/service.png)
##--##
![h-500](assets/images/school/providers/service_register.png)
![h-400 center](assets/images/school/providers/service_injection.png)

##==##

<!-- .slide: class="two-column-layout" -->

# Use your service locally

##--##

<!-- .slide: class="with-code inconsolata" -->

<br><br><br>

```typescript
@Injectable()
class TodoService {
    constructor() {}

    get Name(): string {
        return 'SFEIR';
    }
}
```

<!-- .element: class="big-code" -->

##--##

<!-- .slide: class="with-code inconsolata" -->

<br><br><br>

```typescript
@Component({
  ...
  providers: [TodoService]
})
export class AppComponent {
  constructor(private readonly todoService: TodoService) {
    console.info(todoService.name); // SFEIR
  }
}
```

<!-- .element: class="big-code" -->
