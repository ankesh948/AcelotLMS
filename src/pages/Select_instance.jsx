import React, { useState } from 'react';
import { Button, Card, Container, Form, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Select_instance() {
    const [searchText, setSearchText] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const options = [
        'Instance A',
        'Instance B',
        'Instance C',
        'Instance D',
        'Instance E',
    ];

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchText(value);
        if (value.length > 0) {
            const filtered = options.filter((option) =>
                option.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredOptions(filtered);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    };

    const handleSelect = (value) => {
        setSearchText(value);
        setShowDropdown(false);
    };

    return (
        <>
        <style>
        {`
          .custom_nav {
            display: none;
          }
        .footer{
            display: none;
        }
        `}
      </style>
            <section className='from_login'>
                <Container className="d-flex  justify-content-center">
                    <Card className="main-form-bx p-4 shadow w-100" style={{ maxWidth: '500px' }}>
                        <Card.Body>
                            <h4 className="text-center blue mb-4">
                                Welcome back!
                            </h4>
                            <Form>
                                <Form.Group className="mb-3 position-relative">
                                    <Form.Label>
                                        Search Instance <span className="text-danger fw-600">*</span>
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search Instance..."
                                        value={searchText}
                                        onChange={handleSearch}
                                        autoComplete="off"
                                    />
                                    {showDropdown && filteredOptions.length > 0 && (
                                        <div
                                            className="position-absolute w-100 bg-white border mt-1 rounded shadow"
                                            style={{ zIndex: 10 }}
                                        >
                                            {filteredOptions.map((option, index) => (
                                                <div
                                                    key={index}
                                                    className="px-3 py-2 hover-bg-light cursor-pointer"
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => handleSelect(option)}
                                                >
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
            </section>
        </>
    )
}

export default Select_instance