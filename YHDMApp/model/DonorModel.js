Ext.define('YHDMApp.model.DonorModel', {
    extend   : 'Ext.data.Model',
    fields   : [
        'id',
        'firstName',
        'lastName',
        'address',
        'city',
        'state',
        'zip',
        'salutation',
        'secondName'
    ]
});