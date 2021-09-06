function Show() {
    var outerVar = "Im a outer function"
    document.write(outerVar + " <br/>");


    function innerFunction() {
        var innerVar = "Im a Inner function";
        document.write(outerVar);
    }
    return innerFunction();
}
Show();


