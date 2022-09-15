import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../store/category/selectors";
import { fetchAllCategories } from "../store/category/thunks";
import { createNewEvent } from "../store/event/thunks";
import {
  ButtonForm,
  Form,
  Input,
  Label,
  Select,
  TitleH1,
  ModalContainer,
} from "../styled";
import { Roller } from "react-awesome-spinners";

export const NewEventForm = () => {
  const dispatch = useDispatch();
  const allCategories = useSelector(selectCategory);

  const [categoryId, setCategoryId] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [opponent, setOpponent] = useState("");
  const [home, setHome] = useState(null);
  const [descr, setDescr] = useState("");

  const extraFields = {
    // Training
    1: [],
    // Match
    2: [
      {
        placeholder: "Opponent",
        onChange: (e) => setOpponent(e.target.value),
        value: opponent,
        type: "text",
      },
      {
        style: {
          display: "flex",
          width: "1rem",
          marginTop: "0rem",
        },
        onChange: () => setHome(!home),
        value: !!home,
        type: "checkbox",
        label: "Home match?",
      },
    ],
    // Party
    3: [
      {
        placeholder: "Additional info",
        onChange: (e) => setDescr(e.target.value),
        value: descr,
        type: "text",
      },
    ],
  };

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(
      createNewEvent(
        categoryId,
        title,
        date,
        startTime,
        endTime,
        opponent,
        home,
        descr
      )
    );

    setCategoryId("");
    setTitle("");
    setDate("");
    setStartTime("");
    setEndTime("");
    setOpponent("");
    setHome("");
  };

  return (
    <ModalContainer>
      <TitleH1>Create New Event</TitleH1>
      <Form onSubmit={submitForm}>
        <Select
          style={{ marginBottom: "0.5rem" }}
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          required
        >
          <option value="">Select category</option>
          {allCategories ? (
            allCategories.map((cat, index) => {
              return (
                <option key={index} value={cat.id}>
                  {cat.name}
                </option>
              );
            })
          ) : (
            <Roller />
          )}
        </Select>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
              width: "8rem",
            }}
          >
            <Label>Start </Label>
            <Input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
              width: "8rem",
            }}
          >
            <Label>End </Label>
            <Input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        </div>

        {extraFields[categoryId]?.map((field, index) => (
          <div key={index}>
            {field.label && <Label>{field.label}</Label>}
            <Input
              key={index}
              placeholder={field.placeholder}
              value={field.value}
              onChange={field.onChange}
              type={field.type}
              style={field.style || {}}
            />
          </div>
        ))}

        <br />
        <ButtonForm type="submit">Create event</ButtonForm>
      </Form>
    </ModalContainer>
  );
};
