if (window.location.href === "https://learner.vierp.in/") {
	vierp();
} else if (
	window.location.href === "https://classroom.volp.in/" ||
	window.location.href === "https://classroom.volp.in/login"
) {
	volp();
}

function vierp() {
	document.addEventListener("readystatechange", function () {
		if (document.readyState === "complete") {
			chrome.storage.sync.get(
				["username_vierp", "password_vierp", "username_volp", "password_volp"],
				function (data) {
					if (data.username_vierp && data.password_vierp) {
						console.log("waiting...");
						setTimeout(function () {
							console.log("logging");
							autoLogin(data.username_vierp, data.password_vierp);
						}, 800);
					}
				},
			);

			function autoLogin(username, password) {
				const usernameInput = document.getElementById("input-28");
				usernameInput.value = username;
				const signinButton = document.querySelector(
					"#signinusername > center > button",
				);
				const inputEvent = new Event("input", { bubbles: true });
				usernameInput.dispatchEvent(inputEvent);
				signinButton.click();
				console.log("usr_set");

				let passwordIntervalId = null;
				function checkPasswordInput() {
					const passwordInput = document.getElementById("input-34");
					if (passwordInput) {
						clearInterval(passwordIntervalId);
						passwordInput.value = password;
						console.log("pass_val_set");
						const signinButton = document.querySelector(
							"#signinpassword > center:nth-child(3) > button",
						);
						passwordInput.dispatchEvent(new Event("input", { bubbles: true }));
						signinButton.click();
						console.log("clicking");

						setTimeout(checkUrl, 800);
					}
				}
				passwordIntervalId = setInterval(checkPasswordInput, 800);

				function checkUrl() {
					if (window.location.href === "https://learner.vierp.in/") {
						location.reload();
					} else {
						setTimeout(checkUrl, 200);
					}
				}
			}
		}
	});
}
function volp() {
	chrome.storage.sync.get(
		["username_vierp", "password_vierp", "username_volp", "password_volp"],
		function (data) {
			if (data.username_volp && data.password_volp) {
				console.log("logging");
				autoLogin(data.username_volp, data.password_volp);
			}
		},
	);

	function autoLogin(username, password) {
		const usernameInput = document.getElementById("input-8");
		const passwordInput = document.getElementById("input-12");
		const signinButton = document.querySelector(
			"#app > div > div > div.center1.col-sm-6.col-12 > div > center:nth-child(4) > div > button",
		);
		usernameInput.value = username;
		passwordInput.value = password;
		const inputEvent = new Event("input", { bubbles: true });
		usernameInput.dispatchEvent(inputEvent);
		passwordInput.dispatchEvent(new Event("input", { bubbles: true }));
		signinButton.click();

		function checkUrl() {
			if (
				window.location.href === "https://classroom.volp.in/" ||
				window.location.href === "https://classroom.volp.in/login"
			) {
				location.reload();
			} else {
				setTimeout(checkUrl, 100);
			}
		}
		setTimeout(checkUrl, 500);
	}
}
