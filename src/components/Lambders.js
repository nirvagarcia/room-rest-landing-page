import React, { useState } from 'react';
import "../styles/Lambders.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Lambders = () => {

    const images = [
        'assets/carrusel-1.jpeg',
        'assets/carrusel-0.jpeg',
        'assets/carrusel-7.jpeg',    
        'assets/carrusel-2.jpeg',     
        'assets/carrusel-5.jpeg',
        'assets/carrusel-4.jpeg',     
    ];
    const [open, setOpen] = useState(false);


    const handleOpenDialog = () => {
        setOpen(true);
    };

    const handleCloseDialog = () => {
        setOpen(false);
    };

    return (
        <div id="lambders">

            <div className="lambders-container">
                
               <div>
                    <img
                        src="assets/LambdersCuadrado.png"
                        alt="Akira"
                        style={{ height: '30rem', marginLeft: 16, padding: 10 }}
                    />
               </div>

                <div className="lambders-right">

                    <div style={{ display: 'block', marginLeft: '2rem', justifyContent: 'center' }}>
                        <div className="lambders-title">Presentamos a 
                        <span style={{fontWeight: 'bolder', color: '#AA1D1D'}}> Lambders</span>
                        </div>
                        <div className="lambders-text">Startup peruano de tecnología y e-commerce, que acerca al increíble mundo asiático hasta tu hogar.</div>

                        <div className="general-button"  onClick={handleOpenDialog}>
                            <p>Ver fotos del Startup</p>
                        </div>

                    </div>
                    
                </div>

            </div>

            <Dialog open={open} onClose={handleCloseDialog}>
            
            <DialogContent>
                <div style={{height:'5rem'}}>
                    <IconButton style={{ position: 'absolute', top: 5, right: 5 }} onClick={handleCloseDialog} color="default">
                        <CloseIcon />
                    </IconButton>
                    
                </div>
               
                <Carousel 
                    infiniteLoop                     
                    showArrows 
                    showStatus={false}   
                    showIndicators={false}                
                >
                    {images.map((imageUrl, index) => (
                        <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={imageUrl} alt={`Imagen ${index}`} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </div>
                    ))}
                </Carousel>
               
            </DialogContent>
        </Dialog>

        </div>
    );
};

export default Lambders;