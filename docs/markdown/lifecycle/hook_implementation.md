<!-- .slide: class="sfeir-basic-slide with-code" -->
# Implémentation d'un lifecycle
<br><br>
```typescript
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'sfeir-user',
  templateUrl: './user.component.html'  
})
export class UserComponent implements OnInit {
  ngOnInit(): void {
    console.info('sfeir-user', 'init');  
  }  
}
```
<!-- .element: class="big-code" -->


##==##

<!-- .slide: class="sfeir-basic-slide" -->
# Les différents lifecycle

<div class="flex-row">

<table style="font-size: 0.7em !important">
    <thead>
    <tr>
        <th><strong>Hook</strong></th>
        <th><strong>Description</strong></th>
    </tr>
    </thead>
    <tr>
        <td><strong>ngOnChange()</strong></td>
        <td>
            <p>répond à chaque fois que les propriétés en entrée changent</p>
        </td>
    </tr>
    <tr>
        <td><strong>ngOnInit()</strong></td>
        <td>
            <p>initialise le composant/la directive après sa création (1 fois)</p>
        </td>
    </tr>
    <tr>
        <td><strong>ngDoCheck()</strong></td>
        <td>
            <p>permet d’agir sur la détection des modifications</p>
        </td>
    </tr>
    <tr>
        <td><strong>ngAfterContentInit()</strong></td>
        <td>
            <p>répond après l’initialisation du contenu du composant (1 fois)</p>
        </td>
    </tr>
    <tr>
        <td><strong>ngAfterContentChecked()</strong></td>
        <td>
            <p>répond après que Angular est vérifier le contenu du composant</p>
        </td>
    </tr>
    <tr>
        <td><strong>ngAfterViewInit()</strong></td>
        <td>
            <p>répond après l’initialisation de la vue du composant (1 fois)</p>
        </td>
    </tr>
    <tr>
        <td><strong>ngAfterViewChecked()</strong></td>
        <td>
            <p>répond après que Angular est vérifier le contenu de la vue</p>
        </td>
    </tr>
    <tr>
        <td><strong>ngOnDestroy()</strong></td>
        <td>
            <p>permet de faire du nettoyage avant destruction du composant (1 fois)</p>
        </td>
    </tr>

</table>
<img alt="h-300" src="assets/images/school/hook/hooks-in-sequence.png" />
</div>


