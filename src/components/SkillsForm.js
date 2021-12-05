// import { useState } from 'react';

// const SkillsForm = ({onSubmit}) => {
    
//     const [skills, setSkills] = useState([]);

//     const handleSkillsChange = (e) => {
//         setSkills(e.target.value);
//     }

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         const skillsToSubmit = skills.trim();
//         onSubmit({
//             skills: skillsToSubmit
//         })
//         setSkills("");
//     }
    

//     return (
//         <div className = "SkillsForm">
//             <form className="skills-form" onSubmit={handleFormSubmit}>
//                 <input type="text" 
//                 value={skills}
//                 onChange={handleSkillsChange} 
//                 />
                
//                 <input type="submit" value="Post" />
//             </form>
//         </div>
//     )
// }

// export default SkillsForm;