Ext.define('YHDM.view.donor.DonorForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.donorform',
	xtype : 'contact-form',
	title : 'Donor Info',

	initComponent : function() {
		Ext.apply(this, {

			store : 'DonorStore',
			frame : true,
			width : 400,
			layout : 'anchor',
			border : false,
			bodyPadding : 10,
			fieldDefaults : {
				labelAlign : top,
				labelWidth : 100,
				labelStyle : 'font-weight:bold'
			},
			defaults : {
				anchor : '100%',
				margins : '0 0 10 0'
			},

			defaultType : 'textfield',
			items : [ {
				fieldLabel : 'Salutation',
				name : 'salutation',
			}, {
				fieldLabel : 'First Name',
				name : 'firstName',
				allowBlank : false
			}, {
				fieldLabel : 'Last Name',
				name : 'lastName',
				allowBlank : false
			}, {
				fieldLabel : 'Second Name',
				name : 'secondName'
			}, {
				fieldLabel : 'Address',
				name : 'address'
			}, {
				fieldLabel : 'City',
				name : 'city'
			}, {
				fieldLabel : 'State',
				name : 'state'
			}, {
				fieldLabel : 'ZIP',
				name : 'zip'
			} ],
			dockedItems : [ {
				xtype : 'toolbar',
				dock : 'bottom',
				items : [
						{
							text : 'Revert',
							itemId : 'revert',
							glyph : '88@HeydingsCommonIconsRegular',
							handler : this.onRevertButton,
							disabled : true
						},
						'-',
						{
							text : 'Save',
							itemId : 'save',
							glyph : '79@HeydingsCommonIconsRegular',
							handler : this.onSaveButton,
							disabled : true
						},
						' ',
						'-',
						' ',
						{
							text : 'Delete',
							itemId : 'delete',
							glyph : '45@HeydingsCommonIconsRegular',
							disabled : true,
							handler : function() {
								var grid = this.up('gridpanel');
								var selection = grid.getView()
										.getSelectionModel().getSelection()[0];
								if (selection) {
									grid.getStore().remove(selection);
								}
							}
						} ]
			} ],
			listeners : {
				dirtychange : this.onDirtyChange,
				focus : this.onFocus
			}
		});
		this.callParent(arguments);

	},

	/**
	 * Handlers
	 */
	// something on the form changed
	onDirtyChange : function(form, dirty, eOpts) {

	},

	// focus changed to this form
	onFocus : function(form, event, eOpts) {
		console.log('focus received');
		form.down('#save').setDisabled(false);
		form.down('#revert').setDisabled(false);
		// don't delete if this is a new donor
		form.down('#delete').setDisabled(form.getRecord() === null);
	},

	// revert changes requested
	onRevertButton : function() {
		// if adding a new donor, clear the form
		// else revert to previous values
		this.reset();
	},

	// save changes requested
	onSaveButton : function() {
		// if adding a new donor, submit new record
		// else update record
		this.submit();
	}
});