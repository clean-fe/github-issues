# MEMO

### this

The value of this depends on in which context it appears: function, class, or global.

<!-- - Function context :
  Inside a function, the value of this depends on how the function is called.
- Callbacks :
  When a function is passed as a callback, the value of this depends on how the callback is called, which is determined by the implementor of the API.
- Arrow functions :
  In arrow functions, this retains the value of the enclosing lexical context's this. In other words, when evaluating an arrow function's body, the language does not create a new this binding. -->

- **Constructors** :
  When a function is used as a constructor (with the new keyword), its this is bound to the new object being constructed, no matter which object the constructor function is accessed on. The value of this becomes the value of the **new** expression unless the constructor returns another non–primitive value.

  " **Class context** :
  A class can be split into two contexts: static and instance. Constructors, methods, and instance field initializers (public or private) belong to the instance context. "

<!-- - super :
  When a function is invoked in the super.method() form, the this inside the method function is the same value as the this value around the super.method() call, and is generally not equal to the object that super refers to. -->

- **this with a getter or setter** :
  this in getters and setters is based on which object the property is accessed on, not which object the property is defined on. A function used as getter or setter has its this bound to the object from which the property is being set or gotten.

# ref

- [Working with object, mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects#objects_and_properties)
- [Classes, mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#description)
- [this, mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
