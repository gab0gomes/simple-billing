import React, { Component } from 'react';

import Grid from '../common/layout/grid';
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row'

export default ({ credit, debit }) => (
	<Grid cols='12'>
		<fieldset>
			<legend>Resumo</legend>
			<Row>
				<ValueBox cols='12 4' color='green' icon='bank'
					value={ `R$ ${ credit.toFixed(2) }` } text='Total de Créditos'/>
				<ValueBox cols='12 4' color='red' icon='credit-card'
					value={ `R$ ${ debit.toFixed(2) }` } text='Total de Débitos'/>
				<ValueBox cols='12 4' color='blue' icon='money'
					value={ `R$ ${ (credit - debit).toFixed(2) }` } text='Valor Consolidado'/>
			</Row>
		</fieldset>
	</Grid>
);
