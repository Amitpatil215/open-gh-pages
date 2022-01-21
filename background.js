console.log("background is running");

chrome.browserAction.onClicked.addListener(buttonClicked)
function buttonClicked() {
     console.log("button clicked");
     chrome.tabs.getSelected(null, function (tab) {
          console.log(tab.url);
          let url = tab.url;
          let splittedArray=url.split("/");
          const githubUsername=splittedArray[3];
          const branch=splittedArray[6];
          console.log(githubUsername);
          console.log(branch);
          let replaceWithGithubIO = url.replace(`https://github.com/${githubUsername}`, `https://${githubUsername}.github.io`);
          let omiitBlobMaster=replaceWithGithubIO.replace(`/blob/${branch}`,"");
          console.log(omiitBlobMaster);
          window.open(
               omiitBlobMaster, "_blank");
     });
}

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