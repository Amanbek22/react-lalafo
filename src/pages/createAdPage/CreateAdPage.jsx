import { useState } from "react";
import Input from "../../components/input/Input";
import Title from "../../components/title/Title";
import { base_url } from "../../constants";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const toastSettings = {
  position: "bottom-right",
  theme: "colored",
}

function CreateAdPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [isSending, setSending] = useState(false);

  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault();
    setSending(true);
    toast.info("Start", toastSettings);
    fetch(base_url + "houses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: name,
        imgUrl: imgUrl,
        price: price,
        description: description,
      }),
    }).then((res) => {
      if(res.status === 201) {
        toast.success("Success", toastSettings)
        navigate('/dashboard')
      } else {
        toast.error("Error", toastSettings)
        setSending(false)
      }
    })
  };

  const handleName = (e) => setName(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleImg = (e) => setImgUrl(e.target.value);

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
        <button disabled={isSending} className="btn-primary">
          +Создать
        </button>
      </form>
    </div>
  );
}

export default CreateAdPage;
