import { IRepository } from "../../@types/context_repository"

type Props = {
    repository: IRepository
}

export const RepositoryCard: React.FC<Props> = ({ repository }) => {

    

    return (
        <>
            <tr>
                <td>{repository.id}</td>
                <td>{repository.name}</td>
                <td>{repository.description?.substring(0, 10)}...</td>
                <td>{!!repository.archived ? 'Sim' : 'Não'}</td>
                <td>{!!repository.disabled ? 'Sim' : 'Não'}</td>
                <td>{repository.created_at.toString()}</td>
            </tr>
        </>
    )
}