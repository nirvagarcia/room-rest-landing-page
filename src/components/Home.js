import React from "react";
import "../styles/Home.css";

const Home = () => {
return (   	
	<div id="home">	
		<div className="home-container">
			
			<div style={{display:'flex', alignItems:'center'}} >

				<div className="home-avatar" style={{ marginTop: 35, marginBottom: 35, widht:'40%' }} >
					<img src="assets/AkiraPhonesBanner.png" alt="Avatar" />
				</div>		

				<div>

					<div style={{ marginTop: 25, marginBottom: 25,  widht:'50%' }} className="home-title">
						Disfruta de
						<img 
							src="assets/RedAkiraLetters.png" 
							alt="Akira" 
							style={{ height: '46px', marginLeft: 16, paddingTop: 6}} 
						/>
					</div>			
					
					<div className="home-desc">
						Transforma tu experiencia al comprar merch asiático desde PE
						<img style={{marginRight: 12}} src="/assets/peru.png" alt="Peru" className="peru-image"/>
						K-pop, animes y mangas cautivadores ¡Solo en Akira Mobile!
					</div>

					<div style={{display:'flex', height:'4.3rem', gap:'1rem', justifyContent:'center', marginTop:'2rem'}}>                     
						<img style={{cursor:'pointer'}} onClick={() => { window.open("https://play.google.com/store/apps/details?id=com.alaeat.customer.android.akira&hl=en&gl=US", "_blank"); }} src="/assets/googleplay.png" alt="WhatsApp" />
						<img style={{cursor:'pointer'}} onClick={() => { window.open("https://apps.apple.com/be/app/akira/id6458584519", "_blank"); }} src="/assets/appstore.png" alt="WhatsApp" />
					</div>
				</div>
			</div>
			
		</div>
	</div>
);
};

export default Home;