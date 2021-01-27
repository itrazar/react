/** @format */

import React, { useReducer } from 'react';
import {
	getAccountDetails,
	setAccountDetails,
	onSubmit,
} from './accountbackend';
import { accountReducer, initialState } from './accountreducer';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AccountForm = () => {
	const [state, dispatch] = useReducer(accountReducer, initialState);

	return (
		<div className='App'>
			<Card className='login-container'>
				<form className='form' onSubmit={onSubmit}>
					<Card.Title> Account details </Card.Title>{' '}
					<FormControl
						className='mb-3'
						type='text'
						placeholder='id'
						value={state.id}
						onChange={(e) =>
							dispatch({
								type: 'field',
								field: 'id',
								value: e.currentTarget.value,
							})
						}
					/>
					<FormControl
						className='mb-3'
						type='email'
						placeholder='john@doe.com'
						value={state.account_email_address}
						onChange={(e) =>
							dispatch({
								type: 'field',
								field: 'account_email_address',
								value: e.currentTarget.value,
							})
						}
					/>
					<FormControl
						className='mb-3'
						type='text'
						placeholder='account_name'
						value={state.account_name}
						onChange={(e) =>
							dispatch({
								type: 'field',
								field: 'account_name',
								value: e.currentTarget.value,
							})
						}
					/>
					<FormControl
						className='mb-3'
						type='text'
						placeholder='account_phone_number'
						value={state.account_phone_number}
						onChange={(e) =>
							dispatch({
								type: 'field',
								field: 'account_phone_number',
								value: e.currentTarget.value,
							})
						}
					/>
					<FormControl
						className='mb-3'
						type='text'
						placeholder='account_type'
						value={state.account_type}
						onChange={(e) =>
							dispatch({
								type: 'field',
								field: 'account_type',
								value: e.currentTarget.value,
							})
						}
					/>
					<FormControl
						className='mb-3'
						type='text'
						placeholder='account_website'
						value={state.account_website}
						onChange={(e) =>
							dispatch({
								type: 'field',
								field: 'account_website',
								value: e.currentTarget.value,
							})
						}
					/>
					<FormControl
						className='mb-3'
						type='text'
						placeholder='chamber_of_commerce_number'
						value={state.chamber_of_commerce_number}
						onChange={(e) =>
							dispatch({
								type: 'field',
								field: 'chamber_of_commerce_number',
								value: e.currentTarget.value,
							})
						}
					/>
					<FormControl
						className='mb-1'
						type='text'
						placeholder='industry'
						value={state.industry}
						onChange={(e) =>
							dispatch({
								type: 'field',
								field: 'industry',
								value: e.currentTarget.value,
							})
						}
					/>
					<Button
						className='mb-1'
						type='button'
						onClick={() => getAccountDetails(state, dispatch)}>
						Get account details (uses id field)
					</Button>
					<Button
						className='mb-2'
						type='button'
						onClick={() => setAccountDetails(state, dispatch)}>
						Set account details
					</Button>
					<Button className='submit mb-2' type='submit'>
						Submit
					</Button>
				</form>
			</Card>
		</div>
	);
};
