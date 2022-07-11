class SessionStorage{
    #getFullJSONStorage(){
        let data = sessionStorage.getItem("data");
        if (!data) {
            sessionStorage.setItem("data",JSON.stringify({}));
            data = JSON.stringify({});
        }
        return JSON.parse(data);
    }

    setStorage(name, value){
        console.log("Я тут воркаю")
        let data = this.#getFullJSONStorage();
        data[name] = value;
        sessionStorage.setItem("data",JSON.stringify(data));
    }

    getStorage(name){
        let data = this.#getFullJSONStorage();
        return data[name];
    }

    removeStorage(name){
        let data = this.#getFullJSONStorage();
        if (data[name]) delete data[name]
        sessionStorage.setItem("data",JSON.stringify(data));
    }

    removeAllStorage(){
        sessionStorage.clear();
    }

    isHaveItem(name){
        if (this.getStorage === undefined)
        return false;
        else
        return true;
    }
}

export default new SessionStorage();