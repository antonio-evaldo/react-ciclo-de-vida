# React: Ciclo de vida

## Module 1

* Different ways of exporting SVGs
* Passing functions as properties to other components
* Revising `state` and `bind`
* What is and what is for the SVGR tool

## Module 2

* What is the `Fragment` component

To return more than one JSX element directly to a Component, and not enclosure them in a container element for stylization, we may use the `Fragment` component, as below:

```js
  return (
    <React.Fragment>
      <p>Hello World!</p>
      <CustomElement />
    </React.Fragment>
  )
```

Or more concisely:

```js
  return (
    <>
      <p>Hello World!</p>
      <CustomElement />
    </>
  )
```

* What's the difference between *stateless* and *stateful* components
* How to decide where to put the information

Sometimes when we have a `state` information, we may want to *show* or *access* it in a component and *modify* it in another component. For that, we have to declare the `state` in a component parent to both or more components.

* How the JS *spread operator* works
* Passing more functions as properties and managing the `state`

## Module 3

* How to add *options* in menu dynamically
* We made a reflection on the project design
* We changed a category representation
* Separation between data and visualization and what are tha advantages of this approach
* Problems with project rendering and optimization.