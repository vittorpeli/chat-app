// import { Form } from "react-router-dom";
import FormInput from "../ui/form-input";
import { useFields } from "../auth/useFields";
import Button from "../ui/button";
import TextArea from "../ui/textarea";
import RoomService from "../../services/RoomService";
import { useNavigate } from "react-router-dom";

export default function CreateChat() {
  const navigate = useNavigate();

  const { fields, handleInputChange } = useFields({
    title: '',
    description: '',
  })

  const { title, description } = fields;

  function handleCreateRoom(e) {
    e.preventDefault();

    submitRoom({ title, description });
  }

  async function submitRoom(formData) {
    const room = {
      title: formData.title,
      description: formData.description,
    }

    const res = await RoomService.createRoom(room);
    console.log(res);

    // const roomId = res.data.id;
    navigate(`/chat/`)
  }

  return (
    <div className="wrapper | pt-size-1 min-h-screen">
      <div className="center">
        <form 
          className="flow w-full"
          onSubmit={handleCreateRoom}
        >
          <p>
            <FormInput 
              type="text"
              name="title" 
              label="Title"
              placeholder="Room Name"
              value={title}
              onChange={handleInputChange}
              styleClass="input"
            />
          </p>
          <p>
            <TextArea 
              onChange={handleInputChange}
              value={description}
            />
          </p>
          <p>
            <Button type="submit">
              Create Room
            </Button>
          </p>
        </form>
      </div>
    </div>
  )
}