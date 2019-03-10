document.getElementById("test").innerHTML = 5 + 6;

if (localStorage && !localStorage.getItem('size')) {
    var i = 0;
    try {
        // Test up to 10 MB
        for (i = 250; i <= 10000; i += 250) {
            localStorage.setItem('test', new Array((i * 1024) + 1).join('a'));
        }
    } catch (e) {
        localStorage.removeItem('test');
        localStorage.setItem('size', i - 250);
    }
}
