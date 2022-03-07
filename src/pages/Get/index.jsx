import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import axios from "../../utils/axios";
import { get } from "../../stores/actions/get";

const Post = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  console.log(data);

  const key = `${process.env.API_KEY}`;

  const getUser = async () => {
    try {
      const response = await dispatch(get(key));
      setData(response.value.data);
    } catch (error) {
      Error(error.response);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Container>
        <Form className="form__user mx-5">
          <input
            type="text"
            name="name"
            placeholder="name..."
            className="my-3"
          />
          <input
            type="text"
            name="gender"
            placeholder="gender..."
            className="my-3"
          />
          <input
            type="email"
            name="email"
            placeholder="email..."
            className="my-3"
          />
          <input
            type="text"
            name="status"
            placeholder="status..."
            className="my-3"
          />
          <Button type="submit">Confirm</Button>
        </Form>
      </Container>
    </>
  );
};

export default Post;
