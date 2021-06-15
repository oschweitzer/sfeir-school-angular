<!-- .slide: class="exercice" -->

# Exercise 17: form

## Exercice<br>

-   The PeopleComponent component has just been completed
    -   showDialog (): displays a modal dialog
    -   hideDialog (): allows you to hide this modal <br> <br>
-   The PeopleComponent component template has been completed
    -   a button to add a person, displays the modal
    -   HTML of the modal

##==##

<!-- .slide: class="exercice" -->

# Exercise 17: form

## Exercise<br>

-   Using the CLI, create in the shared folder, the FormComponent component
-   Copy the contents of the files of the static folder
-   Integrate FormComponent in AddDialogComponent
-   Make the form template driven form
-   Make FormComponent communicate with AddDialogComponent using the cancel and personAdd events

##==##

<!-- .slide: class="sfeir-bg-pink exercice" -->

# Exercise 17 : form

## Exercise

<br>

-   When the event cancel, the dialog closes
-   During the personAdd event, the dialog closes by sending the person to the PeopleComponent component
-   If when closing the PeopleComponent modal receives a person, implement a method that adds a contact
    Notes:
-   api to use: POST http://localhost:9000/api/peoples returns the person created
    ##==##

<!-- .slide: class="full-center exercice" -->

# Exercise 17 : form

## Solution

<b>steps/17-form-solution</b>
