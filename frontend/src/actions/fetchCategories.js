export function fetchCategories(){

    return (dispatch) =>
    fetch("http://localhost:3001/categories")
        .then(res => res.json())
        .then(categories => dispatch({
            type: "FETCH_CATEGORIES",
            payload: categories
        }))

}