Ext.define('YHDMApp.view.donor.Edit', {
    extend: 'Ext.window.Window',
    alias : 'widget.donoredit',

    requires: ['Ext.form.Panel'],

    title : 'Edit Donor',
    layout: 'fit',
    autoShow: true,
    height: 120,
    width: 280,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                padding: '5 5 0 5',
                border: false,
                style: 'background-color: #fff;',

                items: [
                    {
                        xtype: 'textfield',
                        name : 'lastName',
                        fieldLabel: 'Last Name'
                    },
                    {
                        xtype: 'textfield',
                        name : 'firstName',
                        fieldLabel: 'First Name'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});
