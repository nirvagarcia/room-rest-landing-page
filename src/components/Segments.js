import React, { useState } from "react";
import "../styles/Segments.css";
import { segmentsData } from "../auxiliars/MyConsts";

const Segments = () => {
    const [selectedOption, setSelectedOption] = useState("Otakus");
    const handleOptionClick = (option) => {setSelectedOption(option);};
    const isOptionSelected = (option) => option === selectedOption;

    const filteredSkills = selectedOption === "All"
    ? segmentsData
    : segmentsData.filter((skill) => skill.type === selectedOption);

    return (       
        <div id="skills">            
            <div className="skills-container">
                <div className="skills-title">Akira se enfoca en tres públicos</div>
                <div className="skills-options">                   
                   
                    <p
                        className={`skills-option ${isOptionSelected("Otakus") && "selected"}`}
                        onClick={() => handleOptionClick("Otakus")}
                    >
                        Otakus
                    </p>
                    <p
                        className={`skills-option ${isOptionSelected("Kpopers") && "selected"}`}
                        onClick={() => handleOptionClick("Kpopers")}
                    >
                        Kpopers
                    </p>
                    <p
                        className={`skills-option ${isOptionSelected("Sellers") && "selected"}`}
                        onClick={() => handleOptionClick("Sellers")}
                    >
                        Vendedores
                    </p>                        
                </div>
                <div className="skills-grid">
                    
                {filteredSkills.map((skill, index) => (
                    <div key={index} className={`skill-item ${isOptionSelected(skill.type) && "selected"}`}>
                        <img src={skill.image} alt={skill.description} className="skills-image" loop />   
                        <div className="skill-text"></div>
                        <img style={{height: "30px"}} src={skill.imagetype} alt={skill.description} className="skills-text" />               
                        <div className="skill-text">{skill.description}</div>
                    </div>
                ))}
                </div>
            </div>
        </div>      
    );
};

export default Segments;