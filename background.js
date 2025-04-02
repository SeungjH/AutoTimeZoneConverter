chrome.runtime.onInstalled.addListener(() => {
    console.log("installed");
  });
  
  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  });


깃 연결하다가 못함 내일 하도록

