### Transition
Als je de pagina op komt zal je zien dat de lijnen in animeren.

Dit wordt gedaan door de `stroke-dashoffset` te animeren. Om dit te doen moet je eerst kijken hoe lang de lijn is die je wilt animeren. Dit kan je doen met `getTotalLength`.

```javascript
const pathLength = path.node().getTotalLength()
```

Nu kan je de `stroke-dasharray` zetten (zijn 'lengte') die we dan de value `pathLength` geven.
Hiermee lijkt het alsof de lijn er niet is maar als je dan in de transitie de lijn op 0 zet verschijnt deze vanzelf.
