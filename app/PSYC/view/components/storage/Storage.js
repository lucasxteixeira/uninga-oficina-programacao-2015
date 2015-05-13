/**
 * @class Storage
 * realizar armazenamento temporario no browser (cache)
 */

var Storage =  new function () {
    var valueDB = [];
    /**
     * @method <Public> setStorage
     * estabelece valores para stoage
     * @param <String> nameStorage
     * @param List<Object> values
     */
    this.setStorage = function (nameStorage, values) {
        /*
        try {
            var vArm = JSON.parse(localStorage.getItem(nameStorage));
            if (vArm == null) {
                // storage[nameStore] ainda nao existe
                localStorage.setItem(nameStorage, JSON.stringify(values));   
            } else {
                var arr = [];
                arr += vArm;
                // storage[nameStore] ja contem valores
                //vArm.push(values);
                //vArm.push(values);
                arr += values
                //localStorage.setItem(nameStorage, JSON.stringify(vArm));
                localStorage.setItem(nameStorage, JSON.stringify(arr));
            }
        } catch (e) {
            Message.error.log('Não foi possível obter dados armazenados na storage['+nameStorage+']. FAILL: ' + e);
            return false;
        }
        */
        valueDB.push(values);
        this.getStorage();
        return true;        
    };
    
    /**
     * @method <Public> getStorage
     * retorna valores armazenados na storage informada
     * @parm <string> nameStorage
     * @return <Object>
     */
    this.getStorage = function (nameStorage) {
        //return  JSON.parse(localStorage[nameStorage]);
        console.log(valueDB);
        //return valueDB;
    };
    
    /**
     * @method <Public> clear
     * limpa valores armazenados em todas as storeges
     */
    this.clear =  function () {
        sessionStorage.clear();
    };
    
};
