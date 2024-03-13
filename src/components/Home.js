import React from "react";
import "../styles/Home.css";

const Home = () => {
return (   	
	<div id="home">	
		<div className="home-container">
			
			<div style={{ marginTop: 25, marginBottom: 25 }} className="home-title">
				Disfruta de
				<img 
					src="assets/RedAkiraLetters.png" 
					alt="Akira" 
					style={{ height: '46px', marginLeft: 16, paddingTop: 6}} 
				/>
			</div>

			<div className="home-avatar" style={{ marginTop: 35, marginBottom: 35 }} >
				<img src="assets/AkiraPhonesBanner.png" alt="Avatar" />
			</div>							 
			
			<div className="home-desc">
				Transforma tu experiencia al comprar merch asiático desde PE
            	<img style={{marginRight: 12}} src="/assets/peru.png" alt="Peru" className="peru-image"/>
				Encontrarás productos de K-pop, animes y mangas cautivadores ¡Solo en Akira Mobile!
          	</div>
			
		</div>
	</div>
);
};

export default Home;