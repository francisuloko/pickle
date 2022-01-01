import React, { useState, useEffect } from 'react';
import { PencilSquare } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import CreateButton from '../CreateButton/CreateButton';
import UserService from '../../services/user.service';
import './Cells.css';

const Cells = () => {
  const [cells, setCells] = useState('');

  useEffect(() => {
    UserService.getCells().then(
      (response) => {
        setCells(response.data);
      },
      (error) => {
        const noCells = (error.response && error.response.data)
          || error.message
          || error.toString();

        setCells(noCells);
      },
    );
  }, []);

  const navigate = useNavigate();

  const handleEdit = (cell) => {
    navigate('/edit', { state: cell });
  };

  const cellsCollection = cells.map((cell) => (
    <Carousel.Item key={cell.id} className="module mid">
      <Carousel.Caption className="py-0">
        <button
          type="button"
          onClick={() => handleEdit(cell)}
          className="d-flex align-items-center border border-0 bg-transparent text-white"
        >
          <span className="fs-1 py-3 m-0">{cell.title}</span>
          <PencilSquare className=" mx-3 fs-6" />
        </button>
        <p className="px-3 col col-lg-8">{cell.description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <>
      {cellsCollection.length > 0 ? (
        <Carousel interval={5000}>{cellsCollection}</Carousel>
      ) : (
        <Carousel>
          <Carousel.Item className="module mid">
            <Carousel.Caption className="col-6">
              <h2 className="d-flex align-items-center p-3 m-0">
                Add a new Cell.
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      )}
      <CreateButton />
    </>
  );
};

export default Cells;