Ext.define('YHDM.view.donor.Detail', {
	extend		: 'Ext.form.Panel',
	alias		: 'widget.donordetail',
	
	title		: '',
	layout		: 'form',
	padding		: '5 5 0 5',
	defaultType	:	'textfield',
	items	: [
		{
			fieldLabel	: 'Salutation',
			name		: 'salutation',
		},
		{
			fieldLabel	: 'First Name',
			name		: 'firstName',
			allowBlank	: false
		},
		{
			fieldLabel	: 'Last Name',
			name		: 'lastName',
			allowBlank	: false
		},
		{
			fieldLabel	: 'Second Name',
			name		: 'secondName'
		},
		{
			fieldLabel	: 'Address',
			name		: 'address'
		},
		{
			fieldLabel	: 'City',
			name		: 'city'
		},
		{
			fieldLabel	: 'State',
			name		: 'state'
		},
		{
			fieldLabel	: 'ZIP',
			name		: 'zip'
		}
	],
	buttons: [
		{
			// Clear the for to allow for new donor info
			text		: 'New Donor',
			handler		: function() {
				console.log('New Donor pressed');
				this.up('form').getForm().reset();
				
			}
		},
		{
			// Save current contents of form
			text		: 'Save',
			handler		: function() {
				console.log('Save pressed');
				var		form = this.up('form'),
						record = form.getRecord(),
						values = form.getValues();
						
				record.set(values);
			}
		},
		{
			// Restore the contents to the initial record contents
			text		: 'Revert',
			handler		: function() {
				var		form = this.up('form'),
						record = form.getRecord();
				console.log('Revert pressed');
				form.loadRecord(record);
			}
		}
	]			
});