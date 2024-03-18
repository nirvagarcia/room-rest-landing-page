import React from "react";
import "../styles/Lambders.css";

const Lambders = () => { 

    return (       
        <div id="lambders">            
            <div className="lambders-container">
               
                    <img 
                        src="assets/LambdersCuadrado.png" 
                        alt="Akira" 
                        style={{ height: '30rem', marginLeft: 16, padding: 10}} 
                    />
                    <div className="lambders-right">
                       <div style={{display: 'block', marginLeft: '2rem', justifyContent: 'center'}}>
                            <div className="lambders-title">Presentamos a Lambders</div>
                            <div className="lambders-text">Startup peruano de tecnología y e-commerce, que acerca al increible mundo asiático hasta tu hogar. </div>
                            <div className="lambders-statics" style={{display: 'flex', gap: '2.5rem', marginTop: '2rem', justifyContent:'center'}}>
                                <img src="assets/japan.png" alt="pay3D" style={{ height: '3rem'}}/>
                                <img src="assets/money3D.png" alt="money3D" style={{ height: '3rem'}}/>
                                <img src="assets/commerce3D.png" alt="commerce3D" style={{ height: '3rem'}}/>
                            </div>
                       </div>
                    </div>
            </div>
        </div>      
    );
};

export default Lambders;