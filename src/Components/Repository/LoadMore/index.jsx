import { getMoreRepositories, paginationSetPage } from "../../../Context/RepositoryContext/actions";
import { useRepositoryContext } from "../../../Context/RepositoryContext/context";

export const LoadMore = ({ page, setPage }) => {

    const { state: { loading, more }, dispatch } = useRepositoryContext();

    const nextPage = () => {
        goToPage(page + 1);
    }

    const goToPage = (page_n) => {
        setPage(page_n)
        paginationSetPage(dispatch, page);
        getMoreRepositories(page_n, dispatch);
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {
                    more &&
                    <li className="page-item">
                        <a href="#/" className="page-link" onClick={() => nextPage()}>Load More ...</a>
                    </li>
                }
            </ul>
        </nav>
    )
}