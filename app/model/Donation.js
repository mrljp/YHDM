Ext.define('YHDM.model.Donation', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'DonorID',
            type: 'int',
            useNull: true
        },
        {
            name: 'DonorYear'
        },
        {
            name: 'Amount'
        },
        {
            name: 'ThankYouSent'
        },
        {
            name: 'HonorOf'
        }
    ]
});