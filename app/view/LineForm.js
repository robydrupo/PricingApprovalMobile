Ext.define('PricingApprovalMobile.view.LineForm', {
	extend: 'Ext.form.Panel',
    
        title: 'Line Details',
        iconCls: 'user',
        xtype: 'formpanel',
        url: 'contact.php',
        layout: 'vbox',
        flex: 2,
        items: [{
            xtype: 'fieldset',
            title: 'Line Details',
            instructions: '(email address is optional)',
            items: [{
                xtype: 'textfield',
                label: 'Name'
            }, {
                xtype: 'emailfield',
                label: 'Email'
            }, {
                xtype: 'textareafield',
                label: 'Message'
            }]
        }, {
            xtype: 'button',
            text: 'Send',
            ui: 'confirm',
            handler: function () {
                this.up('formpanel').submit();
            }
        }]
    
});