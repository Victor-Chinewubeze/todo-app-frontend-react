import{ GENERATE_STATISTICS, PERFORM_CARD_VERIFICATION, ERROR_ON_PERFORM_CARD_VERIFICATION, ERROR_ON_GENERATE_STATISTICS} from "./types";

export default (state, action) => {
    switch(action.type){
        case PERFORM_CARD_VERIFICATION:
            return {
                ...state,
                cardVerification: action.payload
            }
        case GENERATE_STATISTICS:
            return {
                ...state,
                statistics: action.payload
            }
        case ERROR_ON_PERFORM_CARD_VERIFICATION:
            return {
                ...state,
                cardVerification: action.payload
            }
        case ERROR_ON_GENERATE_STATISTICS:
            return {
                ...state,
                statistics: action.payload
            }
        default:
            return state
    }
}