# Generics and Promise

### Introduction
In typescript, we can use generics to make function with dynamic types. depending on the function argumentit type will change to that argument. Thus we dont need to implement same function for every type. We can create reusable function in which arguments are generic.
It is specially useful when handling async promise response.

### Detailed Body

a generic function accepts a `Type` value and return the same type 

```ts
function func<T>(value: T): T {
    return value
}

const number = func(10) // return type number
const message = func("hello") // return type string
```

---

It is specially useful for complex type or interface such as  `User` object 


```ts
interface APIResponse<T> {
    data: T,
    statusCode: number,
    message: string,
    ok: boolean
}

interface User {
    id: number,
    name: string,
    email: string
}

type userResponse = APIResponse<User>
```

---


For promises we can expect a specific resolve such as `User`

```ts
interface User {
    id: number,
    name: string,
    email: string
}

const getUser = async(): Promise<User> => {
    const res = await fetch("/api/user");
    const json = await res.json();
    return json;
}
```

Now typescript knows getUser() resolves a promise to get a user. after `await` the result is treated as `User`. we can do this for any `Promise<T>` where `T` can be anything


### Conclusion

Generics provide useful reusable type safe functionalities. `Promise<T>` describes the type of data that is resolved asynchronously. Thus is allows typescript to know type information from an api request
