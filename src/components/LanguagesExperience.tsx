import { useLanguages } from '../hooks/useLanguages'
export function LanguageExperience () {
    const { languages, loading, error } = useLanguages()
    return (
        <>
        <article style={{ color: 'yellow'}}>
            <h2>Idiomas</h2>
            {
                loading && 'Cargando...'
            }
            {
                error
            }
            <ol>
            {
                languages.length && languages.map(({id, name}) => {
                    return <li key={id}>{name}</li>
                })
            }
            </ol>
        </article>
        </>
    )
}