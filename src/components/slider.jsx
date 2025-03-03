import React, { useState } from "react";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "https://i.pinimg.com/736x/de/53/e2/de53e2a73638cd5765affd42b2d55d4c.jpg",
    "https://i.pinimg.com/736x/00/ff/7c/00ff7c737ba8b39ae79c73af4e956355.jpg",
    "https://i.pinimg.com/736x/a9/0d/d1/a90dd168eb960e239ac300dfe35a1532.jpg",
    "https://i.pinimg.com/736x/cc/57/94/cc579415e22f25ffb2271d0d87328aec.jpg",
    "https://i.pinimg.com/736x/89/45/e4/8945e40068c59e4b5f0593d61025bb53.jpg",
    "https://i.pinimg.com/736x/d2/05/76/d20576972ad93b9ff6ee8fcb66af171d.jpg",
  ];

  const previous = () => {
    if (index <= 0) setIndex(0);
    else setIndex((index) => index - 1);
  };
  const next = () => {
    if (index < images.length - 1) setIndex((index) => index + 1);
    else setIndex(images.length - 1);
  };
  return (
    <>
      <div className="text-center my-5">
        <img
          className="card-img-top w-25"
          src={images[index]}
          alt="Card image cap"
        ></img>
        <div className="card-body">
          <button className="btn bg-danger-subtle m-5 px-3" onClick={previous}>
            &lt;
          </button>
          <button className="btn bg-danger-subtle m-5 px-3" onClick={next}>
            {" "}
            &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
