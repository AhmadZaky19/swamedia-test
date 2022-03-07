import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import axios from "../../utils/axios";
import { post } from "../../stores/actions/post";

const Post = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: "",
    gender: "",
    email: "",
    status: "",
  });
  // console.log(data);

  const handleChangeText = (text, name) => {
    setData({
      ...data,
      [name]: text,
    });
  };

  // let jsonString = JSON.stringify(JSON.decycle(data));
  // let restoredObject = JSON.retrocycle(JSON.parse(jsonString));

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post("/users", data);
      console.log(response);
      // setError(response.value.data.msg);
      toast.success("success post data");
      setData({
        name: "",
        gender: "",
        email: "",
        status: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("post data failed");
    }
  };

  const handleReset = () => {
    setData({
      name: "",
      gender: "",
      email: "",
      status: "",
    });
  };

  return (
    <>
      <Container>
        <ToastContainer />
        <Form
          className="form__user mx-5"
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          <input
            type="text"
            name="name"
            onChange={handleChangeText}
            placeholder="name..."
            className="my-3"
          />
          <input
            type="text"
            name="gender"
            onChange={handleChangeText}
            placeholder="gender..."
            className="my-3"
          />
          <input
            type="email"
            name="email"
            onChange={handleChangeText}
            placeholder="email..."
            className="my-3"
          />
          <input
            type="text"
            name="status"
            onChange={handleChangeText}
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
