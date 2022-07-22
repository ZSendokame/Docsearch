let tokenList = document.querySelectorAll(".pl-en");
let libraryList = document.querySelectorAll(".pl-s1");

for(let tokenCount = 0; tokenCount < tokenList.length; tokenCount++){
    let token = tokenList[tokenCount];

    token.addEventListener("click", () => {
        window.open("https://docs.python.org/3/search.html?q=" + token.textContent);
    });
}

for(let libraryCount = 0; libraryCount < libraryList.length; libraryCount++){
    let library = libraryList[libraryCount];

    library.addEventListener("click", () => {
        window.open("https://pypi.org/project/" + library.textContent);
    });
}