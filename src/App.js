import React from "react";
import { Card } from "react-bootstrap";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

const firstName = "Chiamaka"; // change or leave empty string ""

const App = () => {
  return (
    <div className=" justify-content-center align-items-center vh-100 bg-custom m-2 w-full ">
      <Card style={{ width: "20rem", textAlign: "center", padding: "1rem" , marginLeft:"32rem", borderRadius:"2rem"}}>
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div className="mt-4 text-center w-100">
        <h3>
          {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
        </h3>
        {firstName && (
          <img
            src="https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=170667a&w=0&k=20&c=-1tor8503hrXieYanOw1FmAY01phUtobZ46pC-1_XD8="
            alt="user"
            className="rounded-pill mt-2"
          />
        )}
      </div>
    </div>
  );
};

export default App;
