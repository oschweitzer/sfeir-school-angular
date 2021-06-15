<!-- .slide-->

# Principle of DI in Angular

-   The <b> 3 main concepts </b> <br> <br>
    -   The Injector <br> <br>
    -   The DI Token (DI: Dependency Injection) <br> <br>
    -   The Provider <br> <br>

##==##

<!-- .slide-->

# Principle of DI in Angular

![center h-600](assets/images/school/dependancy-injection/di_working.png)

##==##

<!-- .slide-->

# The Injector

-   Responsibility: <br> <br> - <b> Create instances </b> of dependencies. (with the help of <b> Providers </b>) <br> <br> - Keep instances of dependencies in your <b> "cache" </b> <br> <br> - <b> Make available </b> dependencies to the classes that request them.
    ##==##

<!-- .slide-->

# The Injector

-   You don't have to create an injector yourself <br> <br>
-   There are <b> 2 injector hierarchies </b> in your application: <br> <br>
    -   the <b> ModuleInjector </b>: implicitly created for each module + 1 injector called "root" <br> <br>
    -   the <b> ElementInjector </b>: implicitly created for each element of the DOM (component) <br> <br>
-   Each Injector contains (or not) a singleton of a dependency, and can inject this instance into several components or services.

##==##

<!-- .slide-->

# The DI Token

-   Responsibility: <br> <br>
    -   Allows <b> to identify </b> a dependency. (KEY) <br> <br>
    -   When requesting a dependency injection, the injector will search using the token if a dependency is available and if it can create it. (<KEY/VALUE>)

##==##

# The Provider

-   Responsibility: <br> <br>
    -   Allows you to define <b> how </b> to obtain a dependency associated with a DI Token. <br> <br>
    -   a provider is defined for <b> a </b> injector and it will be used by the latter to create dependencies.

##==##

<!-- .slide -->

# How to configure these 3 concepts

-   Injector & Provider: <br> <br>
    -   <b> providedIn </b> property of the <b> @Injectable </b> annotation <br> <br>
    -   <b> providers: [] </b> property of the <b> @NgModule, @Component, @Directive, @Pipe </b> annotations <br> <br>
-   Token: <br> <br>
    -   implicit (most of the time) <br> <br>
    -   or via the <b> @Inject </b> annotation <br> <br>
        ##==##

<!-- slide: class="two-column-layout"-->

## Types of Injector: ModuleInjector

<!-- .slide: class="with-code inconsolata" -->

```typescript
@NgModule({
  imports: [
    ...
  ],
  declarations: [PeopleAppComponent],
  providers: [ItemService],
  bootstrap: [PeopleAppComponent]
})
export class ItemModule {}
```

<!-- .element: class="medium-code"-->

```typescript
import { Injectable } from '@angular/core';
@Injectable()
export class ItemService {
    name = 'telephone';
}
```

<!-- .element: class="medium-code"-->

##--##

<!-- .slide: class="with-code inconsolata" -->

```typescript
@NgModule({
  imports: [
    ...
  ],
  declarations: [PeopleAppComponent],
  bootstrap: [PeopleAppComponent]
})
export class ItemModule {}
```

<!-- .element: class="medium-code"-->

```typescript
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: ItemModule, // <--provides this service in the ItemModule ModuleInjector
})
export class ItemService {
    name = 'telephone';
}
```

<!-- .element: class="medium-code"-->

##==##

<!-- .slide: class="with-code inconsolata" -->

## Types of Injector: ModuleInjector

-   There is for each application a ModuleInjector called <b> 'root' </b> at the top of the hierarchy
    <br> <br>

```typescript
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root', // <--provides this service in the root ModuleInjector
})
export class ItemService {
    name = 'telephone';
}
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="two-column-layout"-->

# Hierarchy Injection

##--##

<br>

![center h-500](assets/images/school/dependancy-injection/DI-module.png)

##--##

<!-- .slide: class="with-code inconsolata" -->

<br>

```typescript
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: ItemModule, // <--provides this service in the ItemModule ModuleInjector
})
export class ItemService {
    name = 'telephone';
}
```

<!-- .element: class="medium-code" -->

##==##

<!-- .slide: class="two-column-layout"-->

# Hierarchy Injection

##--##

<br>

![center h-500](assets/images/school/dependancy-injection/DI-parent.png)

##--##

<!-- .slide: class="with-code inconsolata" -->

<br>

```typescript
@Component({
  selector: 'parent',
  templateUrl: 'parent.component.html',
  styleUrls: ['parent.component.css']
  providers: [SimpleService]
})
export class ParentComponent { ... }
```

<!-- .element: class="medium-code" -->

##==##

<!-- .slide: class="two-column-layout"-->

# Hierarchy Injection

##--##

<br>

![center h-500](assets/images/school/dependancy-injection/DI-root.png)

##--##

<!-- .slide: class="with-code inconsolata" -->

<br>

```typescript
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root', // <--provides this service in the root ModuleInjector
})
export class ItemService {
    name = 'telephone';
}
```

<!-- .element: class="medium-code" -->

##==##

<!-- .slide -->

# Zoom on provider = []

-   Make the link between <b> InjectionToken </b> (token) and a <b> Factory </b> <br> <br>
-   Allows to decouple the dependency and its implementation <br> <br>
-   API to bind a single value
    -   Make token aliases
    -   Create synchronous factories or not (toFactory, toAsyncFactory)

##==##

<!-- .slide: class="with-code inconsolata" -->

# Zoom on provider = []

-   This expression is a shortcut:

```typescript
providers: [MyService];
```

<!-- .element: class="big-code" -->

-   it amounts to writing:

```typescript
providers: [{ provide: MyService, useClass: MyService }];
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide -->

# The different types of resolution

<br><br>

<!-- .element: class="big-code" -->

-   Value <br> <br>
-   Alternative class <br> <br>
-   Classes aliased <br> <br>
-   Factory
