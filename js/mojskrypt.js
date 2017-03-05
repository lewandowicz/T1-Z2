//wszystkie elementy <div>, posiadające zarówno klasę “grid” oraz klasę “grid-12”
var elem1 = $(".grid, .grid-12");
// wszystkie elementy <a>, których atrybut “href" zaczyna się na “http”, znajdujące się w elemencie o klasie “nav”
var elem2 = $(".nav a[href^='http']");
// wszystkie elementy <input>, których typ to “radio” lub “checkbox” oraz dodatkowo nie są aktualnie zaznaczone (checked)
var elem3 = $("input:checkbox:not(:checked), input:radio:not(:checked)");
// wyłącznie pierwszy element <p>, który jest pusty (nie zawiera dzieci) oraz znajduje się w elemencie <div> z identyfikatorem “text”
var elem4 = $("div#text p:empty:first");
// wszystkie elementy z klasą “pagination-item”, które nie są elementem <span>
var elem5 = $(".pagination-item").not("span");
