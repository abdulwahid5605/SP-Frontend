import React, { useEffect, useState } from "react";
import "./Result.css"; // Assuming you have CSS for styling
import axios from "axios";

const slidesData = [
  {
    id: 1,
    title: "CAPTURED IMAGES",
    images: [
      {
        id: 1,
        src: "https://i.kinja-img.com/image/upload/c_fill,h_900,q_60,w_1600/0bf183cd60d66bddc13b48d84e6f353f.jpg",
        alt: "Captured Image",
      },
    ],
  },
  {
    id: 2,
    title: "Introducing Random Rotations and Lighting Variations",
    images: [
      {
        id: 1,
        src: "https://i.kinja-img.com/image/upload/c_fill,h_900,q_60,w_1600/0bf183cd60d66bddc13b48d84e6f353f.jpg",
        alt: "Image 1",
      },
      {
        id: 2,
        src: "https://cdn.venngage.com/template/thumbnail/full/aac82335-90eb-4116-829d-96b9d07b57ff.webp",
        alt: "Image 2",
      },
    ],
  },
  {
    id: 3,
    title: "Introducing Random Occlusions and Image Noise",
    images: [
      {
        id: 1,
        src: "https://i.kinja-img.com/image/upload/c_fill,h_900,q_60,w_1600/0bf183cd60d66bddc13b48d84e6f353f.jpg",
        alt: "Image 3",
      },
      {
        id: 2,
        src: "https://cdn.venngage.com/template/thumbnail/full/aac82335-90eb-4116-829d-96b9d07b57ff.webp",
        alt: "Image 4",
      },
    ],
  },
  {
    id: 4,
    title: "Training Images",
    images: [
      {
        id: 1,
        src: "https://i.kinja-img.com/image/upload/c_fill,h_900,q_60,w_1600/0bf183cd60d66bddc13b48d84e6f353f.jpg",
        alt: "Image 5",
      },
      {
        id: 2,
        src: "https://cdn.venngage.com/template/thumbnail/full/aac82335-90eb-4116-829d-96b9d07b57ff.webp",
        alt: "Image 6",
      },
    ],
  },
];
// rotation
// RLR
// RL_grid
// conclusion and noice
// ONR graph
// train valid image
// tvr

const Result = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [userData, setUserData] = useState([]);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  useEffect(() => {
    const data = localStorage.getItem("user");
    const parsedUser = JSON.parse(data);
    axios
      .get("http://127.0.0.1:8000/students/")
      .then((response) => {
        const user = response?.data?.find(
          (item) => item.roll === parsedUser.roll
        );
        const slideData = [
          {
            id: 1,
            title: "CAPTURED IMAGES",
            images: [
              {
                id: 1,
                src: user.captured_images,
                alt: "Captured Image",
              },
            ],
          },
          {
            id: 2,
            title: "Rotations & Lighting",
            images: [
              {
                id: 1,
                src: user.RL_grid,
                alt: "Image 1",
              },
              {
                id: 2,
                src: user.RLR,
                alt: "Image 2",
              },
            ],
          },
          {
            id: 3,
            title: "Occlusions & Noise",
            images: [
              {
                id: 1,
                src: user.ON_grid,
                alt: "Image 3",
              },
              {
                id: 2,
                src: user.ONR,
                alt: "Image 4",
              },
            ],
          },
          {
            id: 4,
            title: "Training Images",
            images: [
              {
                id: 1,
                src: user.testing_graph,
                alt: "Image 5",
              },
              {
                id: 2,
                src: user.training_graph,
                alt: "Image 6",
              },
              {
                id: 3,
                src: user.TVR,
                alt: "Image 6",
              },
            ],
          },
        ];
        setUserData(slideData);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <div className="navbar">
        {userData.map((slide, index) => (
          <a
            key={index}
            className={index === currentSlide ? "active" : ""}
            onClick={() => setCurrentSlide(index)}
          >
            {slide.title}
          </a>
        ))}
      </div>

      <div className="slider">
        {userData.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <h2>{slide.title}</h2>
            <div className="slide-content">
              {slide.images.map((image) => (
                <img key={image.id} src={image.src} alt={image.alt} />
              ))}
            </div>
            {index > 0 && (
              <button className="prev-btn" onClick={handlePrev}>
                &lt;&lt; Previous
              </button>
            )}
            {index < slidesData.length - 1 && (
              <button className="next-btn" onClick={handleNext}>
                Next &gt;&gt;
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Result;
