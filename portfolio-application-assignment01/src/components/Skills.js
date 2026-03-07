import React from "react";

function Skills ({skillList}){
    return(
        <div className="skills">
            {skillList.map((skill,index) =>(
                <span key={index} className="badge">{skill}</span>
            ))}
        </div>
    )
}

export default Skills;