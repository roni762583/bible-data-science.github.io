//document.getElementById("test").innerHTML = 5 + 6;
console.log("hello from test.js");
if (true) {//localStorage && !localStorage.getItem('size')) {
  console.log("testing local storage from test.js");
    var i = 0;
    try {
        // Test up to 10 MB
        for (i = 250; i <= 10000; i += 250) {
            localStorage.setItem('test', new Array((i * 1024) + 1).join('a'));
            console.log("reached "+String(i)+" MB of local storage");
        }
    } catch (e) {
        console.log("exception: "+String(e));
        localStorage.removeItem('test');
        localStorage.setItem('size', i - 250);
    }
}
