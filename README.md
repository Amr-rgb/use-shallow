# useShallow Hook

<br />

## shallow routing

Shallow routing allows you to change the URL without running data fetching methods again.

for example when you want to do filtering with input that changes the url on each type `/blog?search=shallow`

<br />

## Installation

install using npm : <br />

```ts
npm install use-shallow
```

and then import useShallow : <br />

```ts
import useShallow from "use-shallow";
```

<br />

## usage

its used like any other React hook

```ts
const [queries, push] = useShallow();
```

- `queries` is of type `URLSearchParams`
  and it holds the search parameters of the url
  <br />
  <br />
  to get the value of search in a url `/blog?search=whatever`
  <br />

  you can use

  ```ts
  queries.get("search");
  ```

  <br />
  <br />
  well, you can use whatever props and methods are available in the `URLSearchParams` object.

  <br />

- `push` is a function that allows you to change the url
  <br />
  <br />
  it takes one parameter which is the desired url you wanna route to.
  <br />
  <br />
  example:
  ```ts
  push(`/blog?q=${searchQuery}`);
  ```

<br />
<br />

### NOTE _!important_

in some cases you may need to create an unused state that changes with every change in the query to make the component rerender in order to get the current query value.

```tsx
// just to re-render
const [, setUnusedState] = useState<any>("");
useEffect(() => {
  setUnusedState(queries.get("q"));
}, [InputValue]);
```
