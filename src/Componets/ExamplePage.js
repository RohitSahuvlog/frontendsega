import React, { useState } from 'react';
import { TextField, Radio, Button, CircularProgress } from '@material-ui/core';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { resetForm, fetchData } from '../sega/action.js'; // Redux actions

const ExamplePage = () => {
    const dispatch = useDispatch();
    const { loading, data } = useSelector((state) => state);

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [contact, setcontact] = useState('');
    const [radioField, setRadioField] = useState('');

    const handleReset = () => {
        setname('');
        setemail('');
        setcontact('');
        setRadioField("")
        dispatch(resetForm());
    };

    const handleQuery = () => {
        const values = {
            name: name,
            email: email,
            contact: contact,
            check: radioField === 1 ? "Yes" : "No",
        };
        dispatch(fetchData(values));
        setname('');
        setemail('');
        setcontact('');
        setRadioField("")
    };

    const columns = [
        {
            field: 'name',
            title: 'Name',
        },
        {
            field: 'email',
            title: 'Email',
        },
        {
            field: 'contact',
            title: 'Contact',
        },
        {
            field: 'check',
            title: 'check',
        },
    ];



    return (
        <div>
            <form>
                <div style={{ width: "50%", margin: "auto" }} >
                    <div style={{ width: "100%", display: "flex", justifyContent: "center", flexDirection: "column" }}  >
                        <TextField
                            label="Name"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            className="input-field"
                            style={{
                                margin: "15px"
                            }}
                        />
                        <TextField
                            label="Email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            className="input-field"
                            style={{
                                margin: "15px"
                            }}
                        />
                        <TextField
                            label="Contact"
                            value={contact}
                            onChange={(e) => setcontact(e.target.value)}
                            className="input-field"
                            style={{
                                margin: "15px"
                            }}
                        />
                        <div className="radio-group">
                            <div>you want any information </div>
                            <label>Yes</label>
                            <Radio
                                value={1}
                                checked={radioField === 1}
                                onChange={() => setRadioField(1)}
                            />
                            <label>No</label>
                            <Radio
                                value={2}
                                checked={radioField === 2}
                                onChange={() => setRadioField(2)}
                            />
                        </div>
                        <div>
                            <Button onClick={handleReset} style={{ backgroundColor: "red", fontWeight: "bold" }}>
                                Reset
                            </Button>
                            <Button onClick={handleQuery} style={{ backgroundColor: "green", fontWeight: "bold" }}>
                                Query
                            </Button>
                        </div>
                    </div>
                </div>
            </form>

            {loading ? (
                <CircularProgress className="loading-spinner" />
            ) : (
                <Table className="table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.field} style={{ fontSize: '30px', fontWeight: "bold" }}>{column.title}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((row) => (
                            <TableRow key={row.id}>
                                {columns.map((column) => (
                                    <TableCell key={column.field} style={{ fontSize: '30px' }}>
                                        {row[column.field]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </div>
    );
};

export default ExamplePage;
