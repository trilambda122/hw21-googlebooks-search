import {SEARCH_RESULTS, ADD_BOOK_FAVORITES,REMOVE_BOOK_FAVORITES} from './actions'

const bookReducer = (state,action) => {

  switch (action.type){
    case SEARCH_RESULTS:
    console.log('in the SEARCH')
      return {
        ...state,
        searchResults: action.payload.items
      }
      case ADD_BOOK_FAVORITES:
      return {
        ...state,
        savedBooks: [...state.savedBooks, action.payload]
      }
      case REMOVE_BOOK_FAVORITES:
        return {
          ...state,
          savedBooks: state.savedBooks.filter((book)=> book.id !== action.payload)
        }
      
      default:
        return state
  }
}

export default bookReducer;