Ext.define('YHDMApp.view.DonorFormPanel', {
    extend      : 'Ext.form.Panel',
    alias       : 'widget.donorFormPanel',
    bodyStyle   : 'padding: 10px; background-color: #DCE5F0;' 
            + ' border-left: none;',
    defaultType : 'textfield',
    defaults    : {
        anchor     : '-10',
        labelWidth : 70
    },
    initComponent : function() {
        console.log('Init Donor Form Panel');
        this.items = this.buildItems();
        this.callParent();
    },
    buildItems : function() {
        console.log('Build form items');
        return [
            {
                fieldLabel : 'Salutation',
                name       : 'salutation'
            },
            {
                fieldLabel : 'First Name',
                name       : 'firstName'
            },
            {
                fieldLabel : 'Last Name',
                name       : 'lastName'
            },
            {
                fieldLabel : 'Second Name',
                name       : 'secondName'
            },
            {
                fieldLabel : 'Address',
                name       : 'address'
            },
            {
                fieldLabel : 'City',
                name       : 'city'
            },
            {
                fieldLabel : 'State',
                name       : 'state'
            },
            {
                fieldLabel : 'ZIP Code',
                name       : 'zip'
            }
        ];
    }
});