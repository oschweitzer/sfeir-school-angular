<!-- .slide -->

# The methods of the HttpClient service

HttpClient provides you with the following methods: <br> <br>

-   this.http.get (url, options) <br> <br>
-   this.http.post (url, data, options) <br> <br>
-   this.http.put (url, data, options) <br> <br>
-   this.http.delete (url, options) <br> <br>

##==##

<!-- .slide: class="with-code inconsolata" -->

# Sending data with POST and PUT

-   The data format must be in JSON format <br> <br>
-   the third argument is reserved for headers <br> <br>

```typescript
http.post(url, datas, { headers: new HttpHeaders().set('Authorization', 'my-auth-token') });
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Trigger and type of feedback

-   Each method returns an observable <br> <br>
-   The request to the server is sent only if we subscribe to this obervable <br> <br>

```typescript
this.http.get(url, options).subscribe((datas) => {
    console.info(datas);
});
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# Manage your feedback

-   By default the response is in JSON format <br> <br>
-   To have it in text type, in the options {responseType: text} <br> <br>

```typescript
this.http.get(url, options).subscribe((datas) => {
    console.info(datas);
});
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code inconsolata" -->

# What if I want to access my full answer <br>

```typescript
this.http.get(url, { observe: 'response' }).subscribe((response: HttpResponse) => {
    const { headers, body }: HttpResponse = response;
    console.info(headers.get('X-Custom-Header'));
    console.info(body.subField);
});
```

<!-- .element: class="big-code" -->
