Ext.define('YHDM.store.DonorStore', {
    extend: 'Ext.data.Store',

    requires    : [
        'YHDM.model.Donor'
    ],

    sortRoot    : 'lastName',
    autoLoad    : true,
    autoSync	: true,
    model       : 'YHDM.model.Donor',
    storeId     : 'DonorJsonStore',
    proxy       : {
        type    : 'rest',
        url     : 'php/app.php/donors',
        reader: {
            type: 'json',
            root: 'data'
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
            // Ext.example.msg(name, Ext.String.format("{0} user: {1}", verb, record.getId()));
            
        }
    },
    
    constructor : function() {
        var me = this;
        console.log('Construct DonorStore');
        me.callParent(arguments);
    }
});