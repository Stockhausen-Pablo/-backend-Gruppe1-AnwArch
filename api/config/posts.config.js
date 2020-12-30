module.exports = function(){
    switch(process.env.NODE_ENV){
        case 'development':
            return {
                HOST: "localhost",
                USER: "root",
                PASSWORD: "archanw",
                DB: "posts"
            };
        case 'production':
            return {
                HOST: "104.155.25.224",
                USER: "root",
                PASSWORD: "archanw",
                DB: "posts"
            };
        default:
            return "Error while choosing system environment [posts db connection]";
    };
};
