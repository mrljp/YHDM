Ext.define('YHDMApp.controller.DonorController', {
    extend: 'Ext.app.Controller',
    stores: ['DonorStore'],
    models: ['DonorModel'],
//    views: ['DonorEditorWindow', 'DonorFormPanel', 'DonorGridPanel'],
    views: ['donor.Edit', 'donor.List'],
    
    refs    : [
        {
            ref     : 'donorsPanel',
            selector: 'panel'
        }
    ],

    init: function() {
        console.log('Initialized Donor Controller! This happens before the Application launch function is called');
        this.control({
            'viewport > donorlist dataview': {
                itemdblclick: this.editDonor
            },
            'donoredit button[action=save]': {
                click: this.updateDonor
            }
        });
    },

    editDonor: function(grid, record) {
        var edit = Ext.create('YHDMApp.view.donor.Edit').show();

        edit.down('form').loadRecord(record);
    },

    updateDonor: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
        this.getDonorsStore().sync();
    }
});
