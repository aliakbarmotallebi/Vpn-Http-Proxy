let openerPopupId;
chrome.action.onClicked.addListener(function (tab) {
  console.log("action onClicked");
  let customWidth = 456;
  let customHeight = 540;
  let iTop = 200;
  let iLeft = 600;

  let url = chrome.runtime.getURL("popup.html");
  if (openerPopupId > 0) {
    chrome.windows.get(openerPopupId, {}, function (win) {
      if (win) {
        // 更新窗口
        console.log("update window");
        chrome.windows.update(win.id, {
          focused: true,
        });
      } else {
        chrome.windows.create({
          url: url,
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
      left: iLeft,
      top: iTop,
    });
  }
});
