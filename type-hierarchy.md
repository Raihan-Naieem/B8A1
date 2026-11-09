
# Type Hierarchy

### Introduction

any, unknown, never is used to differentiate between types, understanding their relation with each other is very important for writing secure code.

### Detailed Body

the behavior of `any` is just like the default behavior of javascript type coercion. Typescript doesnt know its type. So any method on variable of `any` type is accepted. Thus typescript cannot find the error. the error will be found on after programs run. which defeats the point of typescript

```ts
const value: any = 12;
value.push('F') // value not an array
value[key] // value not an object 
value.toUpper() // value not a string

```

in above code typescript cannot find any error.

`unknown` is preferred over `any` in this case. if we don't know the type of the data, (eg: api request)
it, `unknown` means, a type we don't know yet, we have to narrow it down

```ts
const value: unknown = "hello world"; // type unknown
if (typeof value === 'string') {
    console.log(value.toUpperCase()) // type string
}

```

never represents value that cannot exist. it is usually appears on function that always throws error, never finishing

```ts
function error(message: string): never {
    throw new Error(message)
}

```

thus from type hierarchy standpoint `unknown -> any -> never`

### Conclusion

for values that is uncertain use `unknown`, use `any` when migrating from javascript to typescript otherwise not, use never for values that is impossible or function that will never return. although you usually don't have to deal with `never`
