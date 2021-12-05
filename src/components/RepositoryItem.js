// import SkillsForm from './SkillsForm'

const RepositoryItem = ({
    repository
}) => {


    return (
        
        <li className="item">
            <h3>title:{repository.name}</h3>
            <h3>language:{repository.language}</h3>
            {/* <h3>skills:{repository.skills}</h3> */}
        </li>
    )
}

export default RepositoryItem;