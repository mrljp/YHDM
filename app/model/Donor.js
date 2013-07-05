Ext.define('YHDM.model.Donor', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id'
        },
        {
            name: 'firstName'
        },
        {
            name: 'lastName'
        },
        {
            name: 'address'
        },
        {
            name: 'city'
        },
        {
            name: 'state'
        },
        {
            name: 'zip'
        },
        {
            name: 'salutation'
        },
        {
            name: 'secondName'
        }
    ]
});