import React, { useState, useEffect } from "react";
import upload from "./upload.gif";
function ImageUpload() {
  const [imageSrc, setImageSrc] = useState("");
  const [imagen, setimagen] = useState("");
  const [datai, setdatai] = useState(-1); // Use your default image path here
  const data = [
    {
      name: "Trigonella Foenum-graecum",
      common_name: "Fenugreek",
      image: "A1.jpeg",
      diseases_to_cure: ["Digestive problems", "Loss of appetite"],
    },
    {
      name: "Tabernaemontana Divaricata",
      common_name: "Crape Jasmine",
      image: "A2.jpg",
      diseases_to_cure: ["Swelling", "Diabetes"],
    },
    {
      name: "Syzygium Jambos",
      common_name: "Rose Apple",
      image: "A3.jpg",
      diseases_to_cure: ["Diarrhea", "Obesity"],
    },
    {
      name: "Syzygium Cumini",
      common_name: "Jamun",
      image: "A4.jpg",
      diseases_to_cure: ["Diabetes", "Gingivitis"],
    },
    {
      name: "Santalum Album",
      common_name: "Sandalwood",
      image: "A5.jpg",
      diseases_to_cure: ["plant-borne infectious disease", "Dandaruff"],
    },
    {
      name: "Punica Granatum",
      common_name: "Pomegranate",
      image: "A6.jpg",
      diseases_to_cure: ["Kidney Diseases", "Cardiovascular Diseases"],
    },
    {
      name: "Psidium Guajava",
      common_name: "Guava",
      image: "A7.jpg",
      diseases_to_cure: ["Reduces Cancer Risk", "Constipation"],
    },
    {
      name: "Pongamia Pinnata",
      common_name: "Indian Beech",
      image: "A8.jpg",
      diseases_to_cure: ["haemorrhoids", "Skin diseases"],
    },
    {
      name: "Plectranthus Amboinicus",
      common_name: "Mexican Mint",
      image: "A9.jpg",
      diseases_to_cure: ["Sore Throat", "Stuffy Nose"],
    },
    {
      name: "Piper Betle",
      common_name: "Betel",
      image: "A10.jpg",
      diseases_to_cure: ["Relieving headaches", "Gastic Ulcers"],
    },
    {
      name: "Ocimum Tenuiflorum",
      common_name: "Tulsi",
      image: "A11.jpg",
      diseases_to_cure: ["Fever", "Common Cold"],
    },
    {
      name: "Nyctanthes Arbor-tristis",
      common_name: "Parijata",
      image: "A12.jpg",
      diseases_to_cure: ["Arthritis", "Fevers"],
    },
    {
      name: "Nerium Oleander",
      common_name: "Oleander",
      image: "A13.jpg",
      diseases_to_cure: ["Epilepsy", "Indigestion"],
    },
    {
      name: "Murraya Koenigii",
      common_name: "Curry",
      image: "A14.jpg",
      diseases_to_cure: ["Bones problem", "Calcium deficiency"],
    },
    {
      name: "Muntingia Calabura",
      common_name: "Jamaica Cherry-Gasagase",
      image: "A15.jpg",
      diseases_to_cure: ["Reduces Blood Pressure", "Abdominal Cramps"],
    },
    {
      name: "Moringa Oleifera",
      common_name: "Drumstick",
      image: "A16.jpg",
      diseases_to_cure: ["Maintains Blood Sugar Levels", "Bone Density"],
    },
    {
      name: "Mentha",
      common_name: "Mint",
      image: "A17.jpg",
      diseases_to_cure: ["Improve Brain Function", "Bad Breath"],
    },
    {
      name: "Mangifera Indica",
      common_name: "Mango",
      image: "A18.jpg",
      diseases_to_cure: ["Heart health", "Eye health"],
    },
    {
      name: "Jasminum",
      common_name: "Jasmine",
      image: "A19.jpg",
      diseases_to_cure: ["Skin Diseases", "Wound healing"],
    },
    {
      name: "Hibiscus Rosa-sinensis",
      common_name: "China Rose",
      image: "A20.jpg",
      diseases_to_cure: ["Hair problems", "Stomach Ulcers"],
    },
    {
      name: "Ficus Religiosa",
      common_name: "Peepal Tree",
      image: "A21.jpg",
      diseases_to_cure: ["Poor Appetite", "Nasal Bleeding"],
    },
    {
      name: "Ficus Auriculata",
      common_name: "Roxburgh fig",
      image: "A22.jpg",
      diseases_to_cure: ["Jaundice", "Diabetes"],
    },
    {
      name: "Citrus Limon",
      common_name: "Lemon",
      image: "A23.jpg",
      diseases_to_cure: ["Indigestion", "Cancer Risk"],
    },
    {
      name: "Carissa Carandas",
      common_name: "Karanda",
      image: "A24.jpg",
      diseases_to_cure: ["Skin diseases", "Cancer Risk"],
    },
    {
      name: "Brassica Juncea",
      common_name: "Indian Mustard",
      image: "A25.jpg",
      diseases_to_cure: ["Immune diseases", "Bone diseases"],
    },
    {
      name: "Basella Alba",
      common_name: "Basale",
      image: "A26.jpg",
      diseases_to_cure: ["Digestive problems", "Skin related conditions"],
    },
    {
      name: "Azadirachta Indica",
      common_name: "Neem",
      image: "A27.jpg",
      diseases_to_cure: ["Septic sores", "Infected burns"],
    },
    {
      name: "Artocarpus Heterophyllus",
      common_name: "Jackfruit",
      image: "A28.jpg",
      diseases_to_cure: ["Vision problems", "CardioVascular problems"],
    },
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setImageSrc(event.target.result);
    };
    setimagen(e.target.files[0].name);
    reader.readAsDataURL(file);
  };
  useEffect(() => {
    const index = data.findIndex((item) => item.image === imagen);
    console.log(imagen);
    setdatai(index);
  }, [imagen]);

  return (
    <>
      <div className="body-container"> </div>
      <div className="flex-box login-container">
        <div className="flex flex-col justify-center items-center">
          <div className="login-box relative flex-box">
            <label htmlFor="imageUpload" className="bg-[#fcfcb3]">
              <img src={upload} className="mix-blend-multiply" />
              <div className="absolute hover-text flex bg-gray-300 justify-center w-full h-full rounded top-0 left-0 items-center">
                <h1 className="font-semibold text-2xl">
                  Click Here to Upload Image
                </h1>
              </div>{" "}
            </label>
            <input
              type="file"
              id="imageUpload"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          {datai != -1 ? (
            <>
              {" "}
              <img
                id="imagePreview"
                src={imageSrc}
                alt="Image Preview"
                className="rounded max-w-[10rem] max-h-40 mt-8 mix-blend-multiply"
              />
              <h1 className="text-xl font-medium mt-4">
                Name : {data[datai].name}
              </h1>
              <h1 className="text-xl font-medium mt-4">
                Common Name : {data[datai].common_name}
              </h1>
              <h1 className="text-xl font-medium mt-4">
                Diseases To Cure : {data[datai].diseases_to_cure[0]+" , "+data[datai].diseases_to_cure[1]}
              </h1>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default ImageUpload;
