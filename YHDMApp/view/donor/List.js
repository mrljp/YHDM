Ext.define('YHDMApp.view.donor.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.donorlist',

    title : 'All Donors',
    store: 'DonorStore',

    columns: [
        {header: 'Last Name',  dataIndex: 'lastName',  flex: 1},
        {header: 'First Name', dataIndex: 'firstName', flex: 1}
    ]
});
