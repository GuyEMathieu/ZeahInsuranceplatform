import {createContext, useReducer} from 'react';
import {v4 as uid} from 'uuid';
import { 
    GENDERS, STATES, MARITALSTATUS, 
    OWNERSHIP, SUFFIXES, OCCUPATIONS,
    RESIDENCE_YEARS
} from '../../data/defaults';
import * as ActionTypes from '../Actions'
import defaultReducer from './defaultReducer';

export const DefaultContext = createContext();

const DefaultState = props => {
    const initialState = {
        defaults: {
            states: STATES,
            genders: GENDERS,
            maritalStatuses : MARITALSTATUS,
            ownerships: OWNERSHIP,
            suffixes: SUFFIXES,
            occupations: OCCUPATIONS, 
            residenceYears: RESIDENCE_YEARS
        }
    }

    const [state, dispatch] = useReducer(defaultReducer, initialState);
    
    const getDefaults = async () => {
        dispatch({
            type: ActionTypes.GET_DEFAULTS,
            payload: {
                states: STATES,
                genders: GENDERS,
                maritalStatuses : MARITALSTATUS,
                ownerships: OWNERSHIP,
                suffixes: SUFFIXES,
                occupations: OCCUPATIONS,
                residenceYears: RESIDENCE_YEARS
            }
        })
    }

    return (
        <DefaultContext.Provider
            value={{
                defaults: state.defaults,

                getDefaults
            }}
        >
            {props.children}
        </DefaultContext.Provider>
    )
}

export default DefaultState;