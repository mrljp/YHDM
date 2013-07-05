Ext.define('YHDM.store.DonorStore', {
    extend: 'Ext.data.Store',

    requires    : [
        'YHDM.model.Donor'
    ],

    sortRoot    : 'lastName',
    autoLoad    : true,
    model       : 'YHDM.model.Donor',
    storeId     : 'DonorJsonStore',
    proxy       : {
        type    : 'ajax',
        url     : 'data/donors.json',
        reader  : {
            type    : 'json',
            root    : 'donors'
        }
    },
    
    constructor : function() {
        var me = this;
        console.log('Construct DonorStore');
        me.callParent(arguments);
    }

    //constructor: function(cfg) {
    //    var me = this;
    //    console.log('Init DonorStore');
    //    cfg = cfg || {};
    //    me.callParent([Ext.apply({
    //        sortRoot: 'lastName',
    //        autoLoad: true,
    //        model: 'YHDM.model.Donor',
    //        storeId: 'MyJsonStore',
    //        proxy: {
    //            type: 'ajax',
    //            url: 'data/donors.json',
    //            reader: {
    //                type: 'json',
    //                root: 'donors'
    //            }
    //        }
    //    }, cfg)]);
    //}
});