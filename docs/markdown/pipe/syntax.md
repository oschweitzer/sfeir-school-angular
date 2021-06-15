<!-- .slide: class="with-code inconsolata" -->

# Syntax

-   Following an interpolation expression

```html
<span> {{ expression | filter1 }}</span>
```

<!-- .element: class="big-code" -->
<br>

-   We can chain the pipes

```html
<span> {{ expression | filter1 | filter2 }}</span>
```

<!-- .element: class="big-code" -->
<br>

-   You can pass parameters to pipes

```html
<span>{{ expression | filter1:param1:param2 }}</span>
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Pipe currency syntax

```typescript
this.amount = 1234.56;
```

<!-- .element: class="big-code" -->

```html
<span>{{ amount }}</span>
<!-- 1234.56 -->
<span> {{ amount | currency }}</span>
<!-- USD1,234.56 -->
<span>{{ amount | currency:"USD$" }}</span>
<!-- USD$1,234.56 -->
```

<!-- .element: class="big-code" -->

Notes:

-   https://angular.io/api/common/CurrencyPipe

##==##

<!-- .slide: class="with-code inconsolata" -->

# Syntax of the date pipe

-   Formats a date according to a certain format and according to a locale

```html
{{ myDate | date:format }}
```

<!-- .element: class="big-code" -->

<br><br>

-   This filter accepts a format (string) as an argument
