<!-- .slide-->

# Simple configuration

-   <b> path: </b> the URL of the route (ex: / people /: id) <br> <br>
-   <b> component: </b> the component associated with this route (ex: PeopleComponent) <br> <br>
-   <b> redirectTo: </b> the URL fragment to redirect the current route to (ex: '/ home') <br> <br>
-   <b> pathMatch: </b> redirect strategy (full / prefix)
    -   full: attempt a recognition from the root of the route
    -   prefix: attempts a partial recognition of the route

##==##

<!-- .slide -->

# Advanced configuration (complete)

There are other configuration options, allowing for more advanced routing.
<br> <br>

-   <b> outlet: </b> the name of the location where the component should appear <br> <br>
-   <b> data: </b> data passed to the route via ActivatedRoute <br> <br>
-   <b> canActivate / canDeactivate: </b> allows to activate or not the route <br> <br>
-   <b> resolver: </b> fetch data before navigating to the route <br> <br>
-   <b> children: </b> an array of sub-routes definition

##==##

<!-- .slide: class="with-code inconsolata" -->

# An example of a route configuration

```typescript
const ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'people', component: PeopleComponent },
    { path: 'people/:id', component: PersonComponent },
    { path: '**', component: NotFoundComponent },
];
```

<!-- .element: class="big-code" -->

Notes:

-   Attention the order of declaration of the routes is important

##==##

<!-- .slide: class="with-code inconsolata" -->

# The navigation strategy

2 types of strategy <br> <br>

-   By 'Path', also named PathLocationStrategy (HTML5 mode and psuhState => Default) [ex: localhost:4200/people/1]: {useHash: false} <br> <br>
-   By 'Hash', also named HashLocationStrategy [ex: localhost/#/people/1]: {useHash: true} <br> <br>

```typescript
RouterModule.forRoot(routes, { useHash: true });
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="two-column-layout" -->

# Use navigation in Angular

##--##
![h-600](assets/images/school/navigation/navigation_routing_module.png)
##--##
![h-400](assets/images/school/navigation/navigation_root_module.png)
![h-400](assets/images/school/navigation/navigation_router_outlet.png)
