import { useEffect, useState } from "react"
import RepositoryItem from "./RepositoryItem";


export default function RepositoryList() {

    useEffect(() => {
        getRepositoryListFromApi();
    }, []);
    const [repositoryList, setRepositoryList] = useState([]);

    async function getRepositoryListFromApi() {
        const response = await fetch('https://api.github.com/orgs/rocketseat/repos');
        const data = await response.json();
        setRepositoryList(data);
    }

    return (
        <div>
            <ul>
                {
                    Array.from(repositoryList).map((x) => (
                        <li key={x.id}>
                            <RepositoryItem item={x} />
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}