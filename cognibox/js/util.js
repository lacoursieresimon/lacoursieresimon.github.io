Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}

var market = localStorage.getItem('market') || 'groceries';

var util = {
    logo: {
        MTR: 'metro.png',
        MAXI: 'maxi.png',
        SUPRC: 'superc.png',
        IGA: 'iga.png',
        LOBPQ: 'loblaws.png',
        PROV: 'provigo.png',
        BRNT: 'brunet.png',
        JCP: 'jeancoutu.png',
        UNIP: 'uniprix.png',
        PXM: 'proxim.png',
        PHX: 'pharmaprix.png',
        LAM: 'metm.png',
        SDM: 'pharmaprix.png'
    },
    name: {
        MTR: 'Metro',
        MAXI: 'Maxi',
        SUPRC: 'Super C',
        IGA: 'IGA',
        LOBPQ: 'Loblaws',
        PROV: 'Provigo',
        BRNT: 'Brunet',
        JCP: 'Jean Coutu',
        UNIP: 'Uniprix',
        PXM: 'Proxim',
        PHX: 'Pharmaprix',
        LAM: 'Aliments M & M',
        SDM: 'Shopper\'s Drug Mart'
    },
    bigBanner: {
        MTR: 'METRO',
        MAXI: 'MAXI',
        SUPRC: 'SUPERC',
        IGA: 'IGA',
        LOBPQ: 'LOBLAWS',
        PROV: 'PROVIGO',
        BRNT: 'BRUNET',
        JCP: 'JEAN_COUTU',
        UNIP: 'UNIPRIX',
        PXM: 'PROXIM',
        PHX: 'PHARMAPRIX',
        LAM: 'M_ET_M',
        SDM: 'SHOPPERS_DRUG_MART'
    },
    markets : {
        MTR: 'groceries',
        MAXI: 'groceries',
        SUPRC: 'groceries',
        IGA: 'groceries',
        LOBPQ: 'groceries',
        PROV: 'groceries',
        BRNT: 'drugstores',
        JCP: 'drugstores',
        UNIP: 'drugstores',
        PXM: 'drugstores',
        PHX: 'drugstores',
        LAM: 'groceries',
        SDM: 'drugstores'
    },
    getLogo: function(code){
        return 'img/logos/' + this.logo[code];
    },
    toUpper : function(str){
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    },
    getMarketFromBanner: function(banner_code){
        return this.markets[banner_code];
    },
    sumCart : function(){
        var p = localStorage.getObject('cartProducts') || [];
        var qty = 0;
        if (p) {
            p.forEach(function(product){
                qty += product.CartQuantity ? product.CartQuantity : 1;
            })
        }
        return qty;
    }
}