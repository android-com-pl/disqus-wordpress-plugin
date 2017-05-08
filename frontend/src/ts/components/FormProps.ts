import * as React from 'react';
import AdminState from '../reducers/AdminState';

export interface IFormProps {
    data: AdminState;
    onToggleState(stateKey: string): void;
    onInputChange(stateKey: string, event: React.SyntheticEvent<HTMLInputElement>): void;
    onSubmit(event: React.SyntheticEvent<HTMLFormElement>): void;
}
