# MEMO

## this

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

## MVC

MVC (Model-View-Controller) is a pattern in software design commonly used to implement user interfaces, data, and controlling logic.

![Model View Controller example, mdn](https://developer.mozilla.org/en-US/docs/Glossary/MVC/model-view-controller-light-blue.png)
![MVC, wiki](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/MVC-Process.svg/200px-MVC-Process.svg.png)

## MVVM

Model–view–viewmodel (MVVM) is an architectural pattern in computer software that facilitates the separation of the development of the graphical user interface (GUI; the view)—be it via a markup language or GUI code—from the development of the business logic or back-end logic (the model) such that the view is not dependent upon any specific model platform.

![MV, wiki](https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/MVVMPattern.png/500px-MVVMPattern.png)

## Proxy

The **Proxy** object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object.

## Set

The **Set** object lets you store unique values of any type, whether primitive values or object references.

# ref

- [Working with object, mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects#objects_and_properties)
- [Classes, mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#description)
- [this, mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [Model-view-controller, wiki](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
- [MVC, mdn](https://developer.mozilla.org/en-US/docs/Glossary/MVC)
- [Model-view-viewmodel](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel)
- [Proxy, mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
- [Vite Proxy 설정하는 법, velog](https://velog.io/@zerone/Vite-Proxy-%EC%84%A4%EC%A0%95%ED%95%98%EB%8A%94-%EB%B2%95)
- [Set, mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#description)
