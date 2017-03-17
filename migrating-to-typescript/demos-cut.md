
# Demos (Cut)

## Refining Type Information - Part 2

* Show that we add a d.ts file to add type information
* This allows us to provide typings without having to change our JS implementation

```
```

Go back to our existing code and convert a file (with JSDoc comments)
	Show that we can no longer pass an unexpected type
	Show that we can no longer mistype an item name
	Show that type information in JSDoc comments is used by the TS compiler
		We don't need to add additional type annotations to parameters

What if we wanted to leave a data structure as a constructor function???
	Show how we can add a d.ts file to provide the necessary type information for the TS compiler

Show that TS won't know what jQuery is
	Consider showing how to use `declare var $: any` earlier to eliminate this error
	Install the typings for jQuery
		From the command line???
		Using VS tooling???
		Process
			npm init (to add package.json file)
			npm install @types/jquery --save-dev
		Explain the difference between runtime and development dependencies

## Weeding Out Errors

### Module imports and exports

### Declaration Files

* Global and module "escape hatches"
* Downloading and installing declaration files

### Arguments Object

* Function overloads

```
function sum() {
  let values = [];

  if (arguments.length === 2 && Array.isArray(arguments[1])) {
    values = values.concat(arguments[1]);
  } else {
    let argumentsArray = Array.prototype.slice.call(arguments);
    values = values.concat(argumentsArray.slice(1));
  }

  let result = values.reduce((acc, val) => {
    return acc + val;
  }, 0);

  arguments[0](result);
}

sum((x) => console.log(x));
sum((x) => console.log(x), 1, 2, 3, 4);
sum((x) => console.log(x), [1, 2, 3, 4]);
```

### Sequentially Added Properties

### Constructor Functions

* Not allowing implicit `any` on `this`

## Stricter Checks
