import React from "react";
import "../styles/DownloadAkira.css";


const DownloadAkira = () => {    
    return (       
        <div id="downloadAkira"> 

            <div className="downloadAkira-container">

                <div className="i" >

                    <p style={{fontWeight: '500'}}>Descarga la App <span style={{color:'#AA1D1D'}}>Akira</span> Mobile</p>

                    <div className="buttons-download">                     
                        <img onClick={() => { window.open("https://play.google.com/store/apps/details?id=com.alaeat.customer.android.akira&hl=en&gl=US", "_blank"); }} src="/assets/googleplay.png" alt="WhatsApp" />
                        <img onClick={() => { window.open("https://apps.apple.com/be/app/akira/id6458584519", "_blank"); }} src="/assets/appstore.png" alt="WhatsApp" />
                    </div>

                </div>

                <div className="download-img" >
                    <img  src="/assets/downloadAkira.png" alt="WhatsApp" />
                </div>   

                <div className="buttons-download2">                     
                    <img onClick={() => { window.open("https://play.google.com/store/apps/details?id=com.alaeat.customer.android.akira&hl=en&gl=US", "_blank"); }} src="/assets/googleplay.png" alt="WhatsApp" />
                    <img onClick={() => { window.open("https://apps.apple.com/be/app/akira/id6458584519", "_blank"); }} src="/assets/appstore.png" alt="WhatsApp" />
                </div>
               
                        
            </div>

        </div>      
    );
};

export default DownloadAkira;