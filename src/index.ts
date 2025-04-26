class Optional<T> {
  private value: T | null;

  private constructor(value: T | null) {
    this.value = value;
  }

  static of<T>(value: T | null): Optional<T> {
    return new Optional(value);
  }

  isPresent(): boolean {
    return this.value !== null;
  }

  isOptional(): boolean {
    return this.value === null;
  }

  get(): T {
    if (this.value === null) {
      throw new Error("Value is not present");
    }
    return this.value;
  }

  orElseThrow<E extends Error>(
    exception: new (...args: any[]) => E,
    message: string,
    errorCode?: number | string
  ): T {
    if (this.value === null) {
      throw new exception(message, errorCode);
    }
    return this.value;
  }
}

export default Optional;
