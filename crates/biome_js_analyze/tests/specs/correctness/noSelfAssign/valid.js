/* should not generate diagnostics */
var a = a;
let a = a;
const a = a;
a = b;
a += a;
a = +a;
a = [a];
a &= a;
a |= a;
[a, b] = [b, a];
[a = 1] = [a];
[x, a] = [...x, a];
a.c = b.c;
a.b.c = a.Z.c;
a[b] = a[c];
a[3] = a[4];
a.b().c = a.b().c;



// issue #322
document
	.querySelector(`[data-field-id="customModel-container"]`)
	.querySelector('input').value = document
	.querySelector(`[data-field-id="${modelField.id}-field"]`)
	.querySelector('input').value;
lorem.getConfig("foo", "bar").value = document.getConfig("foo", "bar").value
