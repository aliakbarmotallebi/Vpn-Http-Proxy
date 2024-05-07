let openerPopupId;
chrome.action.onClicked.addListener(function (tab) {
  console.log("action onClicked");
  let customWidth = 1000;
  let customHeight = 1000;
  let iTop = 200;
  let iLeft = 600;

  let url = chrome.runtime.getURL("popup.html");
  if (openerPopupId > 0) {
    chrome.windows.get(openerPopupId, {}, function (win) {
      if (win) {
        console.log("update window");
        chrome.windows.update(win.id, {
          focused: true,
        });
      } else {
        chrome.windows.create({
          url: url,
          width: customWidth,
          type: "popup",
          left: iLeft,
          top: iTop,
        });
      }
    });
  } else {
    chrome.windows.create({
      url: url,
      type: "popup",
      width: customWidth,
      left: iLeft,
      top: iTop,
    });
  }
});
