Ext.define('YHDMApp.view.Viewport', {
    extend  : 'Ext.container.Viewport',
    requires : [
                'YHDMApp.view.DonorEditorWindow',
                'YHDMApp.view.DonorGridPanel',
                'YHDMApp.view.DonorFormPanel'
    ],

    initComponent : function() {
        console.log('Init Viewport');
        this.items = [
            {
                xtype   : 'donorEditorWindow',
                height  : 200,
                width   : 550,
                border  : true,
                layout  : {
                    type    : 'hbox',
                    align   : 'stretch'
                },

                items   : [
                    {
                        xtype   : 'donorGridPanel',
                        width   : 280,
                        itemId  : 'donorGrid',
                        flex    : 1,
                        listeners : {
                            scope       : this,
                            itemclick   : this.onGridItemClick
                        }
                    },
                    {
                        xtype  : 'donorFormPanel',
                        itemId : 'donorForm',
                        flex   : 1
                    }
                ], 
            }
        ];
        this.buttons = [
                {
                    text    : 'Save',
                    scope   : this,
                    handler : this.onSaveBtn
                },
                {
                    text    : 'New',
                    scope   : this,
                    handler : this.onNewBtn
                }
        ];
        this.callParent();
//        this.on('afterrender', this.onAfterRenderLoadForm, this);
    },
    onGridItemClick : function(view, record) {
        var formPanel = this.getComponent('donorForm');
        formPanel.loadRecord(record)
    },
    onSaveBtn : function() {
        var gridPanel  = this.getComponent('donorGrid'),
            gridStore  = gridPanel.getStore(),
            formPanel  = this.getComponent('donorForm'),
            basicForm  = formPanel.getForm(),
            currentRec = basicForm.getRecord(),
            formData   = basicForm.getValues(),
            storeIndex = gridStore.indexOf(currentRec),
            key;
        //loop through the record and set values
        currentRec.beginEdit();
        for (key in formData) {
            currentRec.set(key, formData[key]);
        }
        currentRec.endEdit();
        currentRec.commit();
        // Add and select
        if (storeIndex == -1) {
            gridStore.add(currentRec);
            gridPanel.getSelectionModel().select(currentRec)
        }
    },
    onNewBtn : function() {
        var gridPanel = this.getComponent('donorGrid'),
            formPanel = this.getComponent('donorForm'),
            newModel  = Ext.ModelManager.create({}, 
                              'YHDMApp.model.DonorModel');
        gridPanel.getSelectionModel().clearSelections();
        formPanel.getForm().loadRecord(newModel)
    },
    onAfterRenderLoadForm : function() {
        console.log('Form rendered');
        this.onNewBtn();
    }
});