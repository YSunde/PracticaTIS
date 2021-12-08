function calc1(form) {
    a = form.a.value/100;
    b = a*form.b.value;
    form.total1.value = b;
    }
function calc2(form) {
    a = form.c.value;
    b = form.d.value;
    c = a/b;
    d = c*100;
    form.total2.value = d;
    }

    function calc3(form) {
        a = Number(form.e.value);
        b = form.f.value/100;
        e = a*b;
        f = a+e;
    
        form.total3.value = f;
              }
    

function calc4(form) {
    a = Number(form.z.value);
    b = form.x.value/100;
    z = a*b;
    x = a-z;

    form.total4.value = x;
        }