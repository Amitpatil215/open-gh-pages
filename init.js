(function () {
    function fnAddButtons() {
        var btn = document.createElement("input");
        btn.value = "github.io Preview";
        btn.id = "search-mm-btn";
        btn.type = "submit";
        var c = document.querySelector(".Box-header.js-blob-header.py-2.pr-2.d-flex.flex-shrink-0.flex-md-row.flex-items-center");
        if (c != null) {
            c.appendChild(btn);

        }
    }
    // #repo-content-pjax-container > div > div.Box.mt-3.position-relative > div.
    function fnDefineEvents() {
        document
            .getElementById("search-mm-btn")
            .addEventListener("click", function (event) {
                fnSearch(event.target.value.split(" ")[1]);
            });
    }
    function fnSearch(str) {
        // document.querySelector(".gLFyf.gsfi").value = str;
        console.log("Function called");
        chrome.runtime.sendMessage({
            type: 'page',
            // request: request
        }, function (data) {
            // Received message from background, pass to page
            console.log(data);
        });
    }

    // fnAddButtons();
    // fnDefineEvents();
})();
