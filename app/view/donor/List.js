Ext.define('YHDM.view.donor.List', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.donorlist',

	xtype : 'gridpanel',
	title : 'Donors',

	initComponent : function() {
		Ext.apply(this, {
			store : 'DonorStore',
			iconCls : 'icon-user',
			columns : [ {
				xtype : 'gridcolumn',
				dataIndex : 'lastName',
				header : 'Last Name',
				flex : 1,
				sortable : true
			}, {
				xtype : 'gridcolumn',
				dataIndex : 'firstName',
				header : 'First Name',
				flex : 1,
				sortable : false
			}, {
				xtype : 'gridcolumn',
				dataIndex : 'secondName',
				header : 'Second Name',
				flex : 1,
				sortable : false
			} ],
			dockedItems : [ {
				xtype : 'toolbar',
				items : [
						{
							text : 'Add',
							iconCls : 'icon-add',
							handler : this.addNewDonor,
						},
						'-',
						{
							itemId : 'delete',
							text : 'Delete',
							iconCls : 'icon-delete',
							disabled : true,
							handler : function() {
								var grid = this.up('gridpanel');
								var selection = grid.getView().getSelectionModel().getSelection()[0];
								if (selection) {
									grid.getStore().remove(selection);
								}
							}
						} ]
			} ],

			listeners : {
				itemclick : this.onClick,
				itemdblclick : this.editDonor,
				selectionchange : function(selModel, selections) {
					// manage delete button availability
					this.down('#delete').setDisabled(selections.length === 0);
				}
			}
		});
		this.callParent(arguments);

	},

	onClick : function(me, record, item, index, e, eOpts) {
		console.log('Donor selected: ' + record.get('salutation') + ' '
				+ record.get('firstName') + ' ' + record.get('lastName'));
		// Show list of donations made
	},

	editDonor : function(me, record, item, index, e, eOpts) {
		console.log('edit requested');
		console.log('Donor selected: ' + record.get('salutation') + ' '
				+ record.get('firstName') + ' ' + record.get('lastName'));
	},

	addNewDonor : function addNewDonor(button) {
		console.log('New donor requested');
		var addForm = Ext.create('widget.donorform');
		// get grid's store
		store = button.up('gridpanel').store;
		// Pop up new donor window
		win = Ext.widget('window', {
			title : 'Add a Donor',
			closeAction : 'hide',
			width : 400,
			height : 400,
			minWidth : 300,
			minHeight : 300,
			layout : 'fit',
			resizable : true,
			modal : true,
			items : addForm,
			defaultFocus : 'salutation'
		});
		win.show();
	}
});
