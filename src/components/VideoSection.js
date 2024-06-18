import React from "react";
import "../styles/DownloadAkira.css";


const VideoSection = () => {    
    return (       
        <div id="downloadAkira"> 

            <div className="downloadAkira-container">

                <div className="i" >
                    <p style={{fontWeight: '500'}}>Video About The <span style={{color:'#AA1D1D'}}>Team</span></p>
                    <div style={{display:'flex', justifyContent:'center'}}>                     
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZV20Ac9rkfw?si=mDkb8IsOiAEFME8b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                    </div>
                </div>

                <div className="i" >
                    <p style={{fontWeight: '500'}}>Video About The <span style={{color:'#AA1D1D'}}>Product</span></p>
                    <div style={{display:'flex', justifyContent:'center'}}>                     
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/yAWoA10lGoo?si=aU4shYuuc1PZf9L4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
             
               
                        
            </div>

        </div>      
    );
};

export default VideoSection;