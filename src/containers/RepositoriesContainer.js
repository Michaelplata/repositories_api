import React, { useState, useEffect } from 'react'
import RepositoriesList from '../components/RepositoriesList'
const RepositoriesContainer = () => {

    const [repositories, setRepositories] = useState([]);

    useEffect (() => {
        getRepositories();
    }, [])

    const getRepositories = () => {
            fetch("https://api.github.com/users/Michaelplata/repos")
            .then(response => response.json())
            .then(repositories => setRepositories(repositories))
    }


    return (
        <div className="main-container">
            <RepositoriesList repositories={repositories}/>
            
        </div>
    )
}




export default RepositoriesContainer
