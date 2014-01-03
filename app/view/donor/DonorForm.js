Ext.define('YHDM.view.donor.DonorForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.donorform',
	xtype : 'contact-form',
	store : 'DonorStore',
	title : 'Donor Info',
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
	buttons : [ {
		// Save the new donor info
		itemId : 'savebutton',
		text : 'Add Donor',
		handler : function() {
			console.log('Add Donor pressed');
			if (this.up('form').getForm().isValid()) {
				this.up('form').getForm().submit();
				this.up('form').getForm().reset();
				this.up('window').hide();
			}
		}
	}, {
		// Cancel new donor
		text : 'Cancel',
		handler : function() {
			this.up('form').getForm().reset();
			this.up('window').hide();
			console.log('Cancel pressed');
		}
	} ]
});