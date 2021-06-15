<!-- .slide: class="transition-bg-grey-1 underline" -->

# Bootstraping

##==##

<!-- .slide: class="with-code inconsolata" -->

# Bootstraping: main.ts

In an Angular application, the **main.ts** file is loaded first
<br><br>

```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="two-column-layout" -->

# Bootstraping in its entirety

##--##
<br><br><br>

```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
platformBrowserDynamic().bootstrapModule(AppModule);
```

<!-- .element: class="big-code" -->

##--##
<br><br><br>

```typescript
@NgModule({
    imports: [BrowserModule],
    declaration: [AppComponent],
    exports: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
```

<!-- .element: class="big-code" -->

<br><br>

```html
<sfeir-app></sfeir-app>
```

<!-- .element: class="big-code" -->
