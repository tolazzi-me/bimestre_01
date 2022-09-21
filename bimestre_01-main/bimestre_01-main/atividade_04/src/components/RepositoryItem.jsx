
export default function RepositoryItem({ item }) {

    const description = item.description ?? 'Sem Descrição';
    return (
        <div className="repo-item">
            <div className={`repository-card ${description.includes('[DEPRECATED]') ? "red" : "green"}`}>
                <h2>{item.name.toUpperCase()}</h2>
                <p>{description}</p>
                <a href={item.html_url} target='_blank' rel="noreferrer">Acessar Repositório</a>
            </div>
        </div>
    )
}