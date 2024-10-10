const a = document.querySelector(".input");
const b = document.querySelector(".submit");
var apply = document.querySelector(".apply");
var arr = []; 
const c = a.value;
b.addEventListener('click', function() {
    const c = a.value;
    if (c <= 9) {
        let boxes = '';
        for (let i = 0; i < c; i++) {
            var rn = Math.floor(Math.random()*10);
            boxes += `<div class="box boxy${i}">${rn}</div>`;
        }

        document.querySelector(".area1").innerHTML = boxes;
        a.value = "";

        // Call the swap function
        var hissab = [];

        for(var f = 0; f<c; f++){
            hissab.push(0);
        }

        var arr = [];
        for(var i =0; i<c; i++){
            arr.push(i);
        }

        apply.addEventListener("click", () => {
        var box = document.querySelectorAll(".box");
        var k = 0;
        for (var t = 0; t < c; t++) {
            for (var y = 0; y < c - 1; y++) {  // Changed y < c to y < c - 1
                var q = arr[y];
                var u = arr[y + 1];
                if (box[q].textContent > box[u].textContent) {
                    var m = hissab[q] + 81;
                    var n = hissab[u] - 82;
                    swap(box[q], box[u], k, m, n);
                    
                    hissab[q] = m;
                    hissab[u] = n;
                    var temp = arr[y];
                    arr[y] = arr[y + 1];
                    arr[y + 1] = temp;
                    k++;
                }
            }
        }

        setTimeout(() => {
            location.reload();
        }, k * 1400 + 1400); 

    }
);


    } else {
        alert("Please Place Boxes Less Than 10 for Good Experience!")
    }


});



function swap(a, b, k, m, u) {    
    gsap.to(a, {
        delay: k,
        x: m,
        duration:1
    })

    gsap.to(b, {
        delay : k,
        x: u, 
        duration:1
    })
}
