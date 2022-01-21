console.log("background is running");

chrome.browserAction.onClicked.addListener(buttonClicked)
function buttonClicked() {
     console.log("button clicked");
     chrome.tabs.getSelected(null, function (tab) {
          console.log(tab.url);
          let url = tab.url;
          let replaceWithGithubIO = url.replace("https://github.com/Amitpatil215", "https://amitpatil215.github.io");
          let omiitBlobMaster=replaceWithGithubIO.replace("/blob/master","");
          console.log(omiitBlobMaster);
          window.open(
               omiitBlobMaster, "_blank");
     });
}
// https:amitpatil215.github.io/interviewcake_educative_course/blob/master/Grokking%20the%20Coding%20Interview%20-%20Patterns%20for%20Coding%20Questions/1.%20Introduction/1%20Who%20should%20take%20this%20course.html
// https://github.com/Amitpatil215/interviewcake_educative_course/blob/master/Grokking%20the%20Coding%20Interview%20-%20Patterns%20for%20Coding%20Questions/1.%20Introduction/1%20Who%20should%20take%20this%20course.html
// let tabId = -1

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//      if (message && message.type == 'page') {
//           console.log("hello came from foreground")
//           let url = "url"
//           chrome.tabs.getSelected(null, function (tab) {
//                console.log(tab.url);
//                tabId = tab.id;
//                sendResponse(tab.url);
//           });
//           return true;
//      }
// });

// chrome.tabs.onUpdated.addListener(function (updatedTabId) {
//      if (tabId != -1 && tabId==updatedTabId) {
//           console.log("tab is updated")
//           chrome.runtime.reload();
//      }

// });

// chrome.runtime.reload();