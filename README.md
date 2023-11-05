
# AutoPass

AutoPass is a Chrome extension designed to simplify the login process for college websites by automatically filling in login credentials. This extension was created with the intention of helping busy students save time and effort by eliminating the need to manually enter login information every time they visit a college website.
Thanks to @Siddhesh Patil for fixing the loop issue


## Installation

You can install Autopass from the [Chrome Web Store](https://chrome.google.com/webstore/detail/autopass/gnlbghgnncejhnpcjhfdodhenjpmbenb). Alternatively, you can install it manually by following these steps I suggest installing manually as you'll have more control on extension in case of errors:

1.  Download the code from the [GitHub repository](https://github.com/your-username/autopass).
2.  Unzip the downloaded file to a convenient location.
3.  Open Chrome and go to `chrome://extensions`.
4.  Turn on developer mode by clicking the toggle switch in the top-right corner of the page.
5.  Click the "Load unpacked" button in the top-left corner of the page.
6.  Select the unzipped folder and click "OK".
7.  Autopass should now be installed and ready to use.

## Usage

Once installed, the AutoPass extension will prompt you to enter your login credentials for each website that you visit. If you have already saved login information for a particular website, the extension will automatically fill in the required fields and log you in.

The AutoPass extension is designed to simplify the login process for students, allowing them to focus on more important tasks such as studying or completing assignments.
## Known Issues

#### Looping on Vierp Website

If you are experiencing continuous looping on the Vierp website, it may be due to slow internet connections. To fix this, add a delay in the `content.js` file within the `vierp` function. Look for any numbers and change them to 1000 or 1500, depending on your connection speed.

#### Issues with Web Store Installation

If you are experiencing issues with installing the extension from the web store, try uninstalling and reinstalling it.

#### Issues with Popup Submission

If you have already submitted all the details in the popup when installing the extension but are unable to submit, close the popup and refresh the Vierp page. The popup will reappear, and you can enter the details again.

#### Other Issues

If you experience any other errors or issues not listed here, please contact the developer or raise an issue in the Issues tab.
## Uninstallation

To uninstall the AutoPass extension, follow these steps:

1.  Open your Chrome or Brave browser and navigate to `chrome://extensions`.
2.  Find the AutoPass extension and click on "remove" on the extension card.
3.  Click "confirm" to complete the uninstallation process.

## Disclaimer

Please note that the AutoPass extension was created solely for educational purposes and should not be used to breach website security or violate any terms of service. The creator of this extension will not be held responsible for any misuse of the extension.

## Contributions

Contributions to the AutoPass project are welcome and greatly appreciated. If you are interested in contributing to the project, please refer to the [CONTRIBUTING.md](https://github.com/kuldeepaher01/AutoPass-extension/blob/main/CONTRIBUTING.md) file for more information.

## License

The AutoPass extension is licensed under the MIT License. For more information, please refer to the [LICENSE.txt](https://github.com/kuldeepaher01/AutoPass-extension/blob/main/LICENSE.txt) file.

Thank you for using AutoPass!
