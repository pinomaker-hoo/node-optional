# node-optional

The `Optional` class is a utility that helps you handle values that may or may not be present. It provides a safer alternative to `null` checks and improves code readability.

NPM : https://www.npmjs.com/package/node-optional

## Features

- **of**: Creates an `Optional` instance with a value or `null`.
- **isPresent**: Checks if a value is present.
- **isOptional**: Checks if the value is `null`.
- **get**: Retrieves the value if present, throws an error otherwise.
- **orElseThrow**: Returns the value if present, or throws a custom exception with a message.

## Installation

Install the package via npm:

```bash
npm install optional-class
```

## Usage

Here’s how to use the `Optional` class in your TypeScript project:

```ts
import Optional from "optional-class";

// Creating an Optional with a value
const optionalValue = Optional.of("Hello, World!");

if (optionalValue.isPresent()) {
  console.log(optionalValue.get()); // Output: Hello, World!
}

// Creating an Optional with a null value
const emptyValue = Optional.of(null);

console.log(emptyValue.isOptional()); // Output: true

// Handling a non-present value with a custom exception
try {
  emptyValue.orElseThrow(Error, "No value present!");
} catch (e) {
  console.error(e.message); // Output: No value present!
}
```

### API

#### `static of<T>(value: T | null): Optional<T>`

Creates an `Optional` instance with the provided value. If `null` is passed, the `Optional` will represent an empty value.

#### `isPresent(): boolean`

Returns `true` if the `Optional` contains a value, otherwise `false`.

#### `isOptional(): boolean`

Returns `true` if the `Optional` is empty (i.e., the value is `null`).

#### `get(): T`

Returns the contained value if present. Throws an error if the value is `null`.

#### `orElseThrow<E extends Error>(exception: new (...args: any[]) => E, message: string): T`

Returns the value if present. If the value is `null`, throws the specified exception with the provided message.

## License

This project is licensed under the MIT License.
