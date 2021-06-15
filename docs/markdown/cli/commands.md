<!-- .slide: class="with-code inconsolata" -->

# Command: Create a project

```sh
ng new my-awesome-app
```

<!-- .element: class="big-code" -->

<br><br>

-   Initializes an entire project, ready to go into production <br> <br>
-   Initialize a GIT repo, with a first commit (option that can be disabled) <br> <br>
-   Install dependencies (you can choose between npm and yarn as package manager) <br> <br>

Notes:

-   This command has many more options such as the choice of the style extension (scc, css, sass, ...). You can also choose whether or not you want to install a routing
    ##==##

<!-- .slide: class="with-code inconsolata" -->

# Command: Create component

```sh
ng generate component user
```

<!-- .element: class="big-code" -->
<br>

-   This command generates the following files:<br><br>
    -   src/app/user/user.component.ts<br><br>
    -   src/app/user/user.component.html<br><br>
    -   src/app/user/user.component.css<br><br>
    -   src/app/user/user.component.spec.ts<br><br>

Notes:

-   the extension of the style depends on the choice you made when initializing your project
-   You can skip the creation of the test file if when you initialize your project the skip test option has been disabled
-   there is a faster command with aliases: ng g component user
-   Be careful if the module option is not specified, the component will be imported into the root module

##==##

<!-- .slide: class="with-code inconsolata" -->

# Command: Create a service

```sh
ng generate service user
```

<!-- .element: class="big-code" -->

<br>

-   This command generates the following files:<br><br>
-   src/app/user.service.ts<br><br>
-   src/app/user.service.spec.ts<br><br>

Notes:

-   Let's imagine that we type the command ng generate service shared / user, the cli will create the same files as before but in the shared folder
-   There is a shortcut for this command n g service user

##==##

<!-- .slide: class="full-center"  -->

# What else can we generate?

![h-800](assets/images/school/cli/generate_helper.png)
