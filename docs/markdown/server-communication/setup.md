<!-- .slide: class="with-code inconsolata" -->

# HttpClientModule

-   Angular brings its own HTTP client needed for server communications
-   The module is called <b> HttpClientModule </b>
-   HttpClientModule comes from the <b> @angular/common/http </b> package
    <br> <br>

```typescript
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [..., HttpClientModule]
})
export class AppModule { }
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide -->

# Injection into a Component

-   To use a service in a component, it is necessary to inject it. <br>
-   Let's inject the HttpClient service provided by the HttpClientModule

![h-600](assets/images/school/serveur-communication/injection.png)
![h-500](assets/images/school/serveur-communication/injection_astuce.png)
