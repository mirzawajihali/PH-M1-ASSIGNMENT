# PH-M1-ASSIGNMENT

## 6. How does TypeScript help in improving code quality and project maintainability?

TypeScript is like a helper for JavaScript. It makes your code stronger and stops many mistakes before they happen. Here is why it's good:

### Finds Mistakes Early
JavaScript lets you do anything. I learned JavaScript after learning C++ and I really enjoyed the fact that I don't have to explicitly define every data's type and it lets me do a lot of things which i wasn't able to do there. I was feeling like if I ever make a programming language it will be like JavaScript. But sometimes that causes hidden bugs.  TypeScript checks your code while you write it. If something is wrong, it tells you right away—like a spell-check for coding. No more surprise errors later!

### Makes Code Clearer
When you use TypeScript, you have to define the data types (numbers, text, etc.) your code uses. This thing helps other contributers understand the code faster. New team members can read it easily, and changing things later is safer because TypeScript shows what will break and where you are doing the wrong step.

### Keeps Big Projects Clean
Big JavaScript projects can get messy and confusing because if I define something as a string at first and then I change it to number, I wont be notified because its acceptable in JavaScript. TypeScript gives rules so everyone writes code the same way.

Big companies like Tech Microsoft (the creator of TypeScript), Google, Slack, Airbnb, Asana, Adobe, Mozilla. use TypeScript because it saves time and stops bugs.

At first, it might feel hard, but when you will start the object oriented programming with Typescript you will going to enjoy it and you will love how it protects your code.

TypeScript isn't just about adding types—it's about writing more predictable, scalable, and maintainable code. It significantly boosts code quality and reduces technical debt over time.

TypeScript = fewer bugs + cleaner code. 🚀

## 3. Explain the difference between any, unknown, and never types in TypeScript.

### any type
The any type turns off TypeScript's type checking. It lets you assign any value without errors, but this can lead to mistakes. It's useful for quick fixes but should be avoided when possible.

Example:
```typescript
let x: any = "hello";
x = 42; // No error
x.toFixed(); // No error but might crash
```

### unknown type
The unknown type is safer than any. It accepts any value but forces you to check the type before using it. This helps catch errors early.

Example:
```typescript
let y: unknown = JSON.parse('{"age": 30}');
// y.age would error - must check type first
if (typeof y === "object" && y && "age" in y) {
  console.log(y.age); // Now safe to use
}
```

### never type
The never type represents things that should never happen. It's used for functions that always throw errors or to check all possible cases.

Examples:
```typescript
// Function that never returns
function crash(): never {
  throw new Error("Error!");
}

// Checking all possible cases
type Shape = "circle" | "square";
function getArea(shape: Shape): number {
  switch (shape) {
    case "circle": return 100;
    case "square": return 200;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
```

Remember:
- Use unknown instead of any for safer code
- never helps catch impossible cases
- Avoid any when you can