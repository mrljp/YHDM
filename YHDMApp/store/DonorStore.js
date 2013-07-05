Ext.define('YHDMApp.store.DonorStore', {
    extend      : 'Ext.data.Store',
    //requires  : ['YHDMApp.model.DonorModel'],
    model       : 'YHDMApp.model.DonorModel',
    autoLoad    : true,
    
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/donors.json',
            update: 'data/updateDonors.json'
        },
        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        }
    }
});
