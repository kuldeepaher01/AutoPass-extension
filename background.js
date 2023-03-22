chrome.runtime.onInstalled.addListener(function () {
	chrome.storage.sync.get(
		["username_vierp", "password_vierp", "username_volp", "password_volp"],
		function (data) {
			if (
				(!data.username_vierp || !data.password_vierp) &&
				(!data.username_volp || !data.password_volp)
			) {
				console.log("Prompt user for username and password");
				chrome.windows.create(
					{
						url: chrome.runtime.getURL("popup.html"),
						type: "popup",
						width: 720,
						height: 680,
					},
					function (popupWindow) {
						chrome.runtime.onMessage.addListener(function (
							message,
							sender,
							sendResponse,
						) {
							if (message.type === "credentials") {
								chrome.storage.sync.set(
									{
										username_vierp: message.username_vierp,
										password_vierp: message.password_vierp,
										username_volp: message.username_volp,
										password_volp: message.password_volp,
									},
									function () {
										console.log("Credentials saved");
									},
								);
								chrome.windows.remove(popupWindow.id);
							}
						});
					},
				);
			}
		},
	);
});
