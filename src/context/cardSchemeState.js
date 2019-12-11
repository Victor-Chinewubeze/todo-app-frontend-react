import React, { useReducer } from "react";
import axios from 'axios';
import CardSchemeContext from "./cardSchemeContext";
import CardSchemeReducer from "./cardSchemeReducer";
import { GENERATE_STATISTICS, PERFORM_CARD_VERIFICATION, ERROR_ON_PERFORM_CARD_VERIFICATION, ERROR_ON_GENERATE_STATISTICS } from "./types";

export default function CardState(props) {
    const initialState = {
        cardVerification: {
            success: false,
            payload: {
                scheme: "null",
                type: "null",
                bank: "null"
            }
        },
        statistics: {
            success: false,
            start: 0,
            limit: 0,
            size: 0,
            payload: {"Enter the start and limit values": ""}
        }
    }

    const [state, dispatch] = useReducer(CardSchemeReducer, initialState);

    async function performCardVerification(cardNumber) {

        try {
            const apiResponse = await axios.get(`https://card-scheme-vela.herokuapp.com/api/v1/card-scheme/verify/${cardNumber}`);

            dispatch({
                type: PERFORM_CARD_VERIFICATION,
                payload: apiResponse.data
            })

        } catch (error) {
            dispatch({
                type: ERROR_ON_PERFORM_CARD_VERIFICATION,
                payload: initialState.cardVerification
            })
        }

    }


    async function generateStatistics(start, limit) {

        try {
            const apiResponse = await axios.get(`https://card-scheme-vela.herokuapp.com/api/v1/card-scheme/stats?start=${start}&limit=${limit}`);

            dispatch({
                type: GENERATE_STATISTICS,
                payload: apiResponse.data
            })

        } catch (error) {
            dispatch({
                type: ERROR_ON_GENERATE_STATISTICS,
                payload: initialState.statistics
            })
        }

    }

    return (
        <CardSchemeContext.Provider
            value={{
                cardVerification: state.cardVerification,
                statistics: state.statistics,
                performCardVerification, generateStatistics
            }}
        >
            {props.children}
        </CardSchemeContext.Provider>
    )
}
