<!-- .slide: class="exercice" -->

# Exercise 11 : output

## Exercise

-   Add an event (click) on the delete button of the CardComponent
-   The click must trigger the event (personDelete)
-   The PeopleComponent parent component must delete the person during the event (personDelete)
-   The HomeComponent parent component must randomly select another person from the event (personDelete)
    Notes:
-   The API to use to delete a person is: http://localhost:9000/api/peoples/:id, this api returns an updated person list
-   Remember to pass the person when you emit the personDelete event: this.personDelete.emit (person);

##==##

<!-- .slide: class="exercice full-center" -->

# Exercise 11 : output

## Solution

<b>steps/11-output-solution</b>
