import PaginationButton from "./PaginationButton"

function SearchResults({results}) {
    console.log(results)
    return (
        <div className='mx-auto w-full px-3 sm:pl-[5%] md:pl-[15%] lg:pl-52'>
            <p className='text-gray-600 text-md mb-5 mt-3'>About {results?.searchInformation?.formattedTotalResults} results ({results?.searchInformation?.formattedSearchTime} seconds)</p>

            {results?.items?.map(result => (
                <div key={result.link} className="max-w-xl mb-8">
                    <div className='group'>
                        <a className="text-sm" href={result.link}>
                            {result.link}
                        </a>
                        <a href={result.link}>
                            <h2 className="text-xl truncate text-blue-800 font-medium group-hover:underline">{result.title}</h2>
                        </a>
                    </div>
                    <p className="line-clamp-2">{result.snippet}</p>
                </div>
            ))}
            <PaginationButton />
        </div>
    )
}

export default SearchResults
