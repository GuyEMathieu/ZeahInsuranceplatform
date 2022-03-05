import {createContext, useReducer} from 'react';
import {v4 as uid} from 'uuid';
import { GENDERS, STATES } from '../../data/defaults';
import * as ActionTypes from '../Actions'
import defaultReducer from './defaultReducer';

export const DefaultContext = createContext();

const DefaultState = props => {
    const initialState = {
        defaults: {
            states: STATES,
            genders: GENDERS
        }
    }

    const [state, dispatch] = useReducer(defaultReducer, initialState);
    
    const getDefaults = async () => {
        dispatch({
            type: ActionTypes.GET_DEFAULTS,
            payload: {
                states: STATES,
                genders: GENDERS
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