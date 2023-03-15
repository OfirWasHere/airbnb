class AppConfig {

}

// Development Environment:
class DevelopmentConfig extends AppConfig {
    public isDevelopment = true;
    public isProduction = false;
    public host = "localhost";
    public user = "root";
    public password = "";
    public database = "clonebnb";
    public port = 4000;
    public clientUrl = "http://localhost:4000";
};

// Production Environment
class ProductionConfig extends AppConfig {
    public isDevelopment = false;
    public isProduction = true;
    public host = "localhost";
    public user = "root";
    public password = "";
    public database = "____" // dont forget to add database
    public port = 4000;
    public clientUrl = "";
};

// Currently development config
process.env.NODE_ENV = 'development';

const appConfig = (process.env.NODE_ENV === "production")
? new ProductionConfig() : new DevelopmentConfig();

export default appConfig;