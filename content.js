function locationHashChanged() {
	// console.log("You're visiting a cool feature!", location.hash);
}

window.onhashchange = locationHashChanged;

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
						// console.log("waiting...");
						setTimeout(function () {
							// console.log("logging");
							autoLogin(data.username_vierp, data.password_vierp);
						}, 800);
					}
				},
			);

			function autoLogin(username, password) {
				const MAX_RETRIES = 5;
				let retryCount = 0;

				const attemptLogin = () => {
					try {
						const usernameInput = document.getElementById("input-0");
						usernameInput.value = username;

						const inputEvent = new Event("input", { bubbles: true });
						usernameInput.dispatchEvent(inputEvent);
						// console.log("usr_set");

						let passwordIntervalId = null;
						function checkPasswordInput() {
							const passwordInput = document.getElementById("input-2");
							if (passwordInput) {
								clearInterval(passwordIntervalId);
								passwordInput.value = password;
								// console.log("pass_val_set");
								const signinButton = document.querySelector(
									"#signin > div.v-row.v-row--no-gutters.justify-center > div:nth-child(1) > div.v-row.v-row--no-gutters.justify-center > button",
								);
								passwordInput.dispatchEvent(
									new Event("input", { bubbles: true }),
								);
								signinButton.click();
								console.log("Autopass has logged you in");
								//this checks if the url has changed to the dashboard usefull when you are logged out by vierps timeout
								setTimeout(checkUrl, 2000);
							}
						}
						passwordIntervalId = setInterval(checkPasswordInput, 200);

						function checkUrl() {
							if (window.location.href === "https://learner.vierp.in/") {
								// vierp();
								location.reload();
							} else {
								//if the url has not changed then the either website reloded before pressing signin or password is wrong we increase the delay
								setTimeout(checkUrl, 6000);
							}
						}
					} catch (err) {
						console.error(err);
						if (retryCount < MAX_RETRIES) {
							retryCount++;
							console.log(`Retrying...attempt ${retryCount}`);
							setTimeout(() => {
								attemptLogin();
							}, 1000);
						} else {
							console.error(`Max retries exceeded (${MAX_RETRIES})`);
						}
					}
				};

				attemptLogin();
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
		console.log("Autopass has logged you in");

		function checkUrl() {
			if (
				window.location.href === "https://classroom.volp.in/" ||
				window.location.href === "https://classroom.volp.in/login"
			) {
				location.reload();
			} else {
				setTimeout(checkUrl, 6000);
			}
		}
		setTimeout(checkUrl, 2000);
	}
}
