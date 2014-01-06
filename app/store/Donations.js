Ext.define('YHDM.store.Donations', {
    extend: 'Ext.data.Store',

    requires    : [
        'YHDM.model.Donation'
    ],

    sortRoot    : 'DonorID',
    autoLoad    : true,
    autoSync	: true,
    model       : 'YHDM.model.Donation',
    storeId     : 'DonationJsonStore',
    proxy       : {
        type    : 'rest',
        url     : 'php/app.php/donations',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json'
        }
    },
    listeners: {
        write: function(store, operation){
            var record = operation.getRecords()[0],
                name = Ext.String.capitalize(operation.action),
                verb;
                
            if (name == 'Destroy') {
                record = operation.records[0];
                verb = 'Destroyed';
            } else {
                verb = name + 'd';
            }
            Ext.example.msg(name, Ext.String.format("{0} user: {1}", verb, record.getId()));
        }
    },
    
    constructor : function() {
        var me = this;
        console.log('Construct DonationStore');
        me.callParent(arguments);
    }
});