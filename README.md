# BioHub

This is just another frontend to the features provided by ZenHub for GitHub. It aims to be more neatly arranged and fixes some non-available features.

## Getting Started

If you just want to deploy this to your server, download the [latest release](https://github.com/biolauri/bioHub/releases) (the *biohub.tar.gz* file) and jump to [Deploy to server](#deploy-to-server).

Otherwise, clone this repository and run `npm install` within it. Make sure to have [node.js and npm installed](https://nodejs.org/en/download/) (at least versions 6.9.x and npm 3.x.x).

### Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Useing in productíon

### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Deploy to server

TODO: Explain the deployment process.

## Running the tests

### Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io). It defaults to Chrome as the tests run much faster. If you need another browser, adjust the corresponding package.json script.

### Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Contributing

Just [open an issue](https://github.com/biolauri/bioHub/issues/new) or fork the repository and make a pull request. It's so darn easy. ;-)

## Versioning

This project tries to follow [SemVer](http://semver.org) for versioning. For the versions available, see the [releases on this repository](https://github.com/biolauri/bioHub/releases). For the time being, you also find the changelog here (and only here).

## Built With/Using

* [Angular](https://angular.io)
* [Node.js](https://nodejs.org)
* [ZenHub API](https://github.com/ZenHubIO/API)
* [GitHub Api](https://developer.github.com/)

## Authors

* Laurens von Assel ([http://biolauri.de](biolauri.de))

See also the list of [contributors](https://github.com/biolauri/bioHub/graphs/contributors) who participated in this project.

## License / Copyright

This project is licensed under the GPL v3. See the [LICENSE file](./LICENSE) for details.

We are not affiliated with GitHub, ZenHub or any other companies mentioned in the descriptopns of this project. All other trademarks and copyrights are property of their respective owners.
