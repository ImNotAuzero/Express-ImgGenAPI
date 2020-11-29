/* jshint esversion: 9 */

const BaseApp = require("./BaseApp");

class App extends BaseApp {
  constructor(launch) {
    super();

    this.launch = launch;
    this.exec();
  }

  async exec() {

    // Middleware
    this.App.use(this.modules.Morgan('dev'));
    this.App.use(this.modules.Helmet());
    this.App.use(this.modules.Cors());
    this.App.use(this.modules.BodyParser.urlencoded({ extended: true }));
    this.App.use(this.modules.BodyParser.json());
    //this.App.use(this.Express.json());

    // Routes
    this.App.use('/', this.routes.Main);
    this.App.use('/api/generate/', this.routes.Image);
    this.App.listen(this.Express.port);

    console.log(`App is running on port: ${this.Express.port}`);
  }
}

module.exports = App;