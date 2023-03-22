document.addEventListener("DOMContentLoaded", function () {
	// Get the quote element and set a random quote
	const quote = document.getElementById("quote");
	const quotes = [
		"Congratulations, you've just taken your first step towards automation - we promise to make life easier for you, one click at a time. Don't worry, your job is still safe... for now.",
		"Welcome to the Matrix... we mean VIT Pune! Just kidding, or are we? Use this form to login to the college websites automatically and unlock the secrets of the universe... or just your course materials, whatever works for you.",
		"The first rule of AutoPass is... you do not talk about your password.",
		"AutoPass is not just an extension, it's a way of life. Embrace the automation, let go of the manual logins, and join the revolution.",
		"You are not your password. You are not the sum of your login credentials. You are the all-singing, all-dancing engineering student, and AutoPass is your ticket to freedom.",
		"AutoPass gives you the power to reject manual logins, to reject the idea that you have to remember all your passwords. You can choose a different way, a better way.",
		,
		"We know you'd rather be doing anything else than manually logging into college websites, and we're here to help. With AutoPass, you can finally focus on what's important, like procrastinating on your assignments.",
		"Tired of remembering your login credentials? Us too. That's why we created AutoPass - because who has time for memory when you're an engineering student? Use it wisely .",
		"Welcome to the future, where everything is automated and nothing hurts... except your grades. But don't worry, AutoPass can't help with that (yet).",
		"Think of AutoPass as your personal login butler, always ready to serve and never complaining about the lack of tips. Just sit back, relax, and let the automation do the work. Unless your internet connection is slow, in which case, good luck.",
		"We may not have control over our grades or attendance, but with AutoPass, we can at least control our login experience. That's something, right?",
		"Logging in VOLP and VIERP is like running a marathon. With AutoPass, you can just sit back and relax.",
	];
	const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	quote.innerHTML = randomQuote;

	// Listen for form submission and send credentials to background script
	const credentialsForm = document.getElementById("credentialsForm");
	credentialsForm.addEventListener("submit", function (event) {
		event.preventDefault();
		const usernameVierp = document.getElementById("vierpUsername").value;
		const passwordVierp = document.getElementById("vierpPassword").value;
		const usernameVolp = document.getElementById("volpUsername").value;
		const passwordVolp = document.getElementById("volpPassword").value;
		chrome.runtime.sendMessage({
			type: "credentials",
			username_vierp: usernameVierp,
			password_vierp: passwordVierp,
			username_volp: usernameVolp,
			password_volp: passwordVolp,
		});
	});
});
