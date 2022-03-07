import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "../../utils/axios";

const Post = () => {
  const [data, setData] = useState({
    name: "",
    gender: "",
    email: "",
    status: "",
  });
  console.log(data);

  const handleChangeText = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post("/"(data));
      console.log(response);
      // setError(response.value.data.msg);
      // toast.success(`${response.value.data.msg}`);
    } catch (error) {
      // toast.error(`${error.response.data.msg}`);
    }
  };

  const handleReset = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Container>
        <Form
          className="form__user"
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          <input type="text" name="name" onChange={handleChangeText} />
          <input type="text" name="gender" onChange={handleChangeText} />
          <input type="email" name="email" onChange={handleChangeText} />
          <input type="text" name="status" onChange={handleChangeText} />
          <Button type="submit">Confirm</Button>
        </Form>
      </Container>
    </>
  );
};

export default Post;
