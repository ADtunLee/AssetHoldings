export const AddScriptTag = (listScript, element) => {
    if (!Array.isArray(listScript)) { return false }
    else {
        listScript.forEach((value) => {
            var script = document.createElement("script");
            script.src = value
            script.async = true
            element.appendChild(script);
        });
    }
    return true;
}
