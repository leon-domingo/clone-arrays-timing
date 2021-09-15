### Experiments to find out how much time different approaches of array copying take

- Array.concat
- Array.from
- Array.map
- Array.filter

By far, the best method to copy an array is **Array.from**, followed closely by **Array.concat**. The other two (**Array.map**, **Array.filter**) are not good; they weren't created for this.

_300K elements_
_10K times_

```
Array.concat - 5.752s
Array.from - 5.531s
Array.map - 24.401s
Array.filter - 34.805s
```
