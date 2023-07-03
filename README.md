# useShallow Hook

<br />

## Shallow routing

Shallow routing allows you to change the URL without running data fetching methods again.

> for example when you want to do filtering with input that changes the url on each type `/blog?search=shallow`

<br />

## The Problem

If you used Next Js before you might noticed that in Next 12 there was a shallow routing functionality, but in the latest version (Next 13) shallow routing is no longer there.

<br />

## The Solution

The `useShallow React Hook` is providing a workaround for that same functionality for both vanilla React and Next Js.

<br />

## Installation

Install using npm : <br />

```ts
npm install use-shallow
```

And then import useShallow : <br />

```ts
import useShallow from "use-shallow";
```

<br />

## NOTE _!important_

Adding a state is required even if it's not used in the component.

This state causes the component to re-render so it recognizes the updated url.

<br />

## Usage

Its used like any other React hook

```ts
const [queries, push] = useShallow();
```

- `queries` is of type `URLSearchParams`
  and it holds the search parameters of the url
  <br />
  <br />
  To get the value of search in a url `/blog?search=whatever`
  <br />

  you can use

  ```ts
  queries.get("search");
  ```

  Well, you can use whatever props and methods are available in the `URLSearchParams` object.

  <br />
  <br />

- `push` is a function that allows you to change the url
  <br />
  <br />
  It takes one parameter which is the desired url you wanna route to.
  <br />
  <br />
  Example:
  ```ts
  push(`/blog?q=${searchQuery}`);
  ```

<br />
<br />

### NOTE _!important_

In some cases (based on your usage) you may find that `queries` are getting the previous and not the current query.

<br />

For example if your url has `?query=React`, but `queries` gets `Reac` instead of `React`.

<br />

For solving this issue, you may consider adding an extra state that causes re-render to get the current (latest) query.
