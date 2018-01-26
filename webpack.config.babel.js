const {resolve} = require('path')

module.exports = () => {

    // return the configuration
    return {
        // kontekst dla naszego 'entry point' (wszystkie nasze moduły znajdują się w katalogu 'src' i to jest kontekst dla naszych plików źródłowych)
        // kontekt musi być ścieżką absolutną (używamy do tego: 'const resolve' (powyżej))
        context: resolve('src'),
        // i teraz, naszym 'entry pointem' (w kontekście katalogu 'src'), jest plik 'bootstrap.js'
        // musimy podać ścieżkę relatywną
        entry: './bootstrap.js',
        output: {
            filename: 'bundle.js'
        }
    }

}