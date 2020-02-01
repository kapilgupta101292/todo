This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React Fundamentals

**&& Operator** - If the value on the Left is a boolean it will return the value on right as it is if the Left side is true otherwise false

```js
let showSomething = true;
showSomething && "Test String"; // Test String

let showSomething = false;
showSomething && "Test String"; // false
```

**Redirecting** - this.props.history.push("/welcome");
and to take the parameter use the follwing
this.props.match.params.name

**Link v/s ahref** - when we use a then the entire page is refereshed, but we don't want to do that, hence we use the Link which refreshes only the component

```js
<Link to="/abcd">here</Link>
```
