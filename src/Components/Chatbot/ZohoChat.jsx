import React, { useEffect } from 'react';

const ZohoChat = () => {
    useEffect(() => {
        const script1 = document.createElement('script');
        script1.text = `
          window.$zoho=window.$zoho || {};
          $zoho.salesiq=$zoho.salesiq||{ready:function(){}};
        `;
        document.body.appendChild(script1);

        const script2 = document.createElement('script');
        script2.id = 'zsiqscript';
        script2.src = 'https://salesiq.zohopublic.com/widget?wc=siqeff6863200f25102118809ef0c851c53a7d9964852ce41d8ec95ae8675bbdd68';
        script2.defer = true;
        document.body.appendChild(script2);

        return () => {
            document.body.removeChild(script1);
            document.body.removeChild(script2);
        };
    }, []);

    return null;
};

export default ZohoChat;
