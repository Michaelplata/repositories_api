import React, { useState, useEffect } from 'react';
import RepositoriesList from '../components/RepositoriesList';
import SearchBar from '../components/SearchBar';

// import SkillsForm from '../components/SkillsForm';

const RepositoriesContainer = () => {

    const [repositories, setRepositories] = useState([]);
    

    useEffect(() => {
        getRepositories();
    }, [])

    const getRepositories = () => {
        fetch("https://api.github.com/users/Michaelplata/repos")
            .then(response => response.json())
            .then(repositories => setRepositories(repositories))
    }

    // const addSkills = (submittedSkills) => {
    //     submittedSkills.id = Date.now();
    //     let nObj = {skills: submittedSkills};
    //     let arr = repositories.concat(nObj);
    //         setRepositories(arr);


            // if (error) {
            //     return <>{error.message}</>;
            // } else if (!isLoaded) {
            //     return <>loading...</>;
            // } else {
    return (
        
        <ul className="card-grid">
                <SearchBar />
                <RepositoriesList repositories={repositories} />
            </ul>
    );
};




export default RepositoriesContainer;

{/* <SkillsForm onSubmit={(skills) => addSkills(skills)}/> */}