import React, { useState } from "react";
import { dbService } from "fbase";

const Home = () => {
  const [opinion, setOpinion] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("opinions").add({
      opinion,
      createdAt: Date.now(),
    });
    setOpinion("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setOpinion(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={opinion}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Opinion" />
      </form>
    </div>
  );
};
export default Home;
