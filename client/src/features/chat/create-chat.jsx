// import { Form } from "react-router-dom";
import FormInput from "../ui/form-input";
import { useFields } from "../auth/useFields";
import Button from "../ui/button";
import TextArea from "../ui/textarea";

export default function CreateChat() {
  const { fields, handleInputChange } = useFields({
    title: '',
    description: '',
  })

  const { title, description } = fields;

  return (
    <div className="wrapper | pt-size-1 min-h-screen">
      <div className="center">
        <form className="flow w-full">
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