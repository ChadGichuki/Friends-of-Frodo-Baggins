# Friends-of-Frodo-Baggins
A Lord Of The Rings Fanpage. 

This is a Single Page Application (SPA) where fans of the epic fantasy series by J.R.R. Tokien can find interesting facts on the movies, books and their favourite characters. Users can also add to the list of the fans' favourite quotes from the series. To enhance the user experience, visitors to the page get to enjoy the nostalgic and iconic song (Concerning Hobbits) from the 2nd Movie's soundtrack.

Vew the web page, hosted on Github pages [here.](https://chadgichuki.github.io/Friends-of-Frodo-Baggins/) 

However, please note that ES6 modules are subject to same-origin policy. You therefore need to run your script from a local server, opening the file directly with a browser will throw an error citing [CORS.](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

When running from a local server you should expect to see a page like this:

<img src="https://github.com/ChadGichuki/Friends-of-Frodo-Baggins/blob/main/media/landing-page.png" height="500">


## Getting Started
### Pre-requisites
The following should be installed to run the program locally: nodejs, npm

### Installation
- Fork and clone the repository.
```
git clone https://github.com/ChadGichuki/Friends-of-Frodo-Baggins.git   
```

- Cd into the project folder.
```
cd path/to/folder/Friends-of-Frodo-Baggins
```

- Open in a code editor.
```
code .
```

- Code away!

### Running the program.
NOTE: Opening the files directly on the browser will not work since the api key is in a file added to .gitignore. You will not be able to fetch data from the API.
To run the app locally, you may:
- Install a http server
```
npm install --global http-server
```
- While in the project folder /Friends-of-Frodo-Baggins run the command:
```
http-server
```
- Visit the address given on the terminal to view the webpage.

## API Key
You will need to have an API-key to make requests to the API used in this project. Just visit https://the-one-api.dev/ where all you need to do is sign up.

Once you have the key, add the following header to your requests:
```
headers: {
    Authorization: "Bearer api-key"
}
```

(Yes, data is returned in JSON format)

Store the api key in a separate module and import it into index.js. (You will also need to add the attribute type="module" on your script tag in index.html if not already added)

## Deployment
The app is not hosted elsewhere apart from Github pages.

## Licence
A copy of the General Public License v3.0 can be found [here.](LICENSE)

## Authors
Richard Gichuki. [Find me here.](https://github.com/ChadGichuki)

## Acknowledgements
Grace Umutesi - Technical Mentor, Moringa School, Fullstack Software Engineering Course, May to October 2022.


