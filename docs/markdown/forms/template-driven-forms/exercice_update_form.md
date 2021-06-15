<!-- .slide: class="exercice" -->

# Exercise 18: form-b

## Exercise<br>

-   Using the CLI, create an UpdateComponant component
-   Make this component accessible via the url: / edit /: id (modify the definition of the routes)
-   Retrieve the id parameter from the url (ActivatedRoute)
-   Using this id retrieve the person's details
    Notes:
-   api to call: GET/api/peoples/:id

##==##

<!-- .slide: class="exercice" -->

# Exercise 18 : form-b

## Exercise<br>

-   Use FormComponent in UpdateComponent
-   Add a person property to the FormComponent
-   Modify the binding to make it bidirectional
-   Change the title of the form, "Modification" if the person is not null
-   Modify the person during the personAdd event
    Notes:
-   api to call: PUT/api/peoples/:id
-   In a real project, it is still not recommended to use the same form for creation and modification

##==##

<!-- .slide: class="exercice full-center" -->

# Exercise 18 : form-b

## Solution

<b>steps/18-form-b-solution</b>
