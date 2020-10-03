import React from 'react';

const dummy_transactions = [{
    id: '1',
    amount: 100,
    type: 'receive',
    status: 'paid',
    createdAt: new Date()
},
{
    id: '2',
    amount: 50,
    type: 'send',
    status: 'cancelled',
    createdAt: new Date()
},
{
    id: '3',
    amount: 30.5,
    type: 'send',
    status: 'paid',
    createdAt: new Date()
},
{
    id: '4',
    amount: 150,
    type: 'receive',
    status: 'paid',
    createdAt: new Date()
},
{
    id: '5',
    amount: 10,
    type: 'send',
    status: 'paid',
    createdAt: new Date()
},
{
    id: '6',
    amount: 380,
    type: 'send',
    status: 'paid',
    createdAt: new Date()
},
{
    id: '7',
    amount: 550,
    type: 'send',
    status: 'paid',
    createdAt: new Date()
},
{
    id: '8',
    amount: 960,
    type: 'receive',
    status: 'cancelled',
    createdAt: new Date()
},
{
    id: '9',
    amount: 250,
    type: 'receive',
    status: 'cancelled',
    createdAt: new Date()
},
{
    id: '10',
    amount: 1000,
    type: 'send',
    status: 'paid',
    createdAt: new Date()
}]

export default dummy_transactions;