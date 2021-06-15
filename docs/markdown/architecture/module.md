<!-- .slide: class="transition-bg-grey-1 underline" -->

# Module

##==##

<!-- .slide-->

# Module: generalities<br>

-   Allows to group functionalities <br> <br>
-   At least one module per application (mandatory without this module, the app does not start) <br> <br>
-   Can be loaded asynchronously (lazy loading) <br> <br>
-   Different types of module (Root Module, Navigation Module, Feature Module, Shared Module, Core Module ...)
    Notes:
-   Root Module, generally contains the other modules of the application
-   Feature Module, there is one for each feature (ex: user functionality => update, creation ...)
-   Shared Module, there are also several, one for the whole application and sometimes one in the features modules
-   Core Module, there is one which contains the core of your application (footer, header, loader)
-   Attention the services do not put in the shareds modules !!!!

##==##

<!-- .slide: class="with-code" -->

# Module: his writing

Like the component, the module is written using a class and an annotation
<br><br>

```typescript
@NgModule({
  imports: [BrowserModule, ...],
  declaration: [AppComponent, ...],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
```

<!-- .element: class="big-code" -->
