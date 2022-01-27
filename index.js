const { Server } = require("@hapi/hapi");
const { constant: { Environment: {
  PORT,HOST
} } } = require("./config");
const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const HapiSwagger = require("hapi-swagger");

const { environment } = require("./config");

const routes = require("./routes");

const server = new Server({
  port: PORT,
  host: HOST,
})

const App = async () => {

  const swaggerOptions = {
    info: {
      title: 'Ecommerce Scraper API Documentation',
      version: '1.0.0.0',
    },
  };

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions
    }
  ]);


  await server.register(routes);

  console.log(`Server on port ${PORT}`);
  await server.start();

};

App();
