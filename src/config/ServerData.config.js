
class ServerData{
    constructor(){
        if (process.env.NODE_ENV == "production" || process.env.REACT_APP_TEST == "true"){
            this.host = 'http://45.133.218.11:5501' ;
        }else{
            this.host = 'http://45.133.218.11:5501' ;
        }
    }

    getHost(){
        return this.host;
    }
    
}

export default ServerData;