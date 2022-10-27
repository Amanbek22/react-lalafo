import { useState } from "react";
import Input from "../../components/input/Input";
import Title from "../../components/title/Title";
import { base_url } from "../../constants";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Api from "../../api/Api";

const toastSettings = {
  position: "bottom-right",
  theme: "colored",
};

function CreateAdPage() {
  const [type, setType] = useState("houses");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [isSending, setSending] = useState(false);

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    setSending(true);
    toast.info("Start", toastSettings);
    const data = {
      title: name,
      imgUrl: imgUrl,
      price: price,
      description: description,
    };
    const response = (res) => {
      if (res.status === 201) {
        toast.success("Success", toastSettings);
        navigate("/dashboard");
      } else {
        toast.error("Error", toastSettings);
        setSending(false);
      }
    }
    if (type === "houses") {
      Api.postHouse(data).then(response);
    } else {
      Api.postCars(data).then(response);
    }
  };

  const handleName = (e) => setName(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImg = (e) => setImgUrl(e.target.value);
  const handleType = (e) => setType(e.target.value);

  return (
    <div className="page">
      <Title position="center">Создать объявления</Title>
      <form onSubmit={submit}>
        <Input
          value={name}
          onChange={handleName}
          title="Название"
          placeholder="Название"
          type="text"
          required
        />
        <Input
          value={price}
          onChange={handlePrice}
          title="Цена"
          type="number"
          placeholder="Цена в долларах"
          required
        />
        <Input
          value={description}
          onChange={handleDescription}
          title="Описание"
          type="text"
          placeholder="Описание"
          required
        />
        <Input
          value={imgUrl}
          onChange={handleImg}
          title="Фото"
          type="text"
          placeholder="Фото"
          required
        />
        <div>
          <label>
            <input
              onChange={handleType}
              checked={type === "houses"}
              type="radio"
              name="type"
              value="houses"
            />
            Houses
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <input
              onChange={handleType}
              checked={type === "cars"}
              type="radio"
              name="type"
              value="cars"
            />
            Cars
          </label>
        </div>
        <br />
        <button disabled={isSending} className="btn-primary">
          +Создать
        </button>
      </form>
    </div>
  );
}

export default CreateAdPage;
