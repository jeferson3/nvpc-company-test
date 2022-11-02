import { RepositorySearchBuilderI } from './../@types/context_repository.d';

class RepositorySearchBuilder implements RepositorySearchBuilderI{

    private search: string = '';
    private disabled: boolean|string = 'Todos';
    private archived: boolean|string = 'Todos';

    // __construct(){

    // }

    /**
     * setSearch
     */
    public setSearch(search: string) {
        this.search = search;
    }
    /**
     * setDisabled
     */
    public setDisabled(disabled: string) {
        
        if (disabled === 'sim') {
            this.disabled = true;
        }
        else if (disabled === 'nao') {
            this.disabled = false;
        }
        else {
            this.disabled = 'Todos';
        }
    }
    /**
     * setArquived
     */
    public setArquived(archived: string) {

        if (archived === 'sim') {
            this.archived = true;
        }
        else if (archived === 'nao') {
            this.archived = false;
        }
        else {
            this.archived = 'Todos';
        }
    }

    public isArchived() {
        return this.archived;
    }

    public isDisabled() {
        return this.disabled;
    }

    public hasSearch() {
        return this.search !== undefined && this.search !== null && this.search !== "";
    }

    public getSearch() {
        return this.search;
    }
}


export default new RepositorySearchBuilder();