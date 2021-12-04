import RepositoryItem from './RepositoryItem'

const RepositoriesList = ({ 
    repositories
}) => {

    return (
        <>
        <ul>
            {
            repositories.map((repository, index) =>
            <RepositoryItem
                key={`repository_${index}`}
                repository={repository}
                />
            )
        }
        </ul>
        </>
    );
};

export default RepositoriesList;