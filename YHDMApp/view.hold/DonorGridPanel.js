Ext.define('YHDMApp.view.DonorGridPanel', {
    extend   : 'Ext.grid.Panel',
    alias    : 'widget.donorGridPanel',
    //requires : ['YHDMApp.store.DonorStore'],
    //store       : 'DonorStore',
    
    columns: [
        {header: 'Last Name',       dataIndex: 'lastName',      flex: 3},
        {header: 'First Name',      dataIndex: 'firstName',     flex: 2}
    ],

    initComponent : function() {
        console.log('Init Donor Grid Panel');
        //this.store   = YHDMApp.store.DonorStore;
        //this.columns = this.buildColumns();
        //this.callParent();
    }
});