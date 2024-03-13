import React, { useState } from "react";
import "../styles/Segments.css";
import { segmentsData } from "../auxiliars/MyConsts";

const Segments = () => {
    const [selectedOption, setSelectedOption] = useState("All");
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
                        className={`skills-option ${isOptionSelected("Kpopers") && "selected"}`}
                        onClick={() => handleOptionClick("Kpopers")}
                    >
                        Kpopers
                    </p>
                    <p
                        className={`skills-option ${isOptionSelected("Otakus") && "selected"}`}
                        onClick={() => handleOptionClick("Otakus")}
                    >
                        Otakus
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
                    <div
                    key={index}
                    className={`skill-item ${isOptionSelected(skill.type) && "selected"}`}
                    >
                    <img
                        src={skill.image}
                        alt={skill.name}
                        className="skills-image"
                    />
                    <div className="skill-text">{skill.name}</div>
                    </div>
                ))}
                </div>
            </div>
        </div>      
    );
};

export default Segments;