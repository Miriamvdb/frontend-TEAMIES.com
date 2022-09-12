import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../store/category/selectors";
import { fetchAllCategories } from "../store/category/thunks";
import { createNewEvent } from "../store/event/thunks";
import {
  ButtonForm,
  Form,
  Input,
  InputXs,
  Label,
  Select,
  Text,
  TitleCenter,
  MainContainer,
} from "../styled";

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
        placeholder: "Home",
        onChange: () => setHome(!home),
        value: !!home,
        type: "checkbox",
        label: "Home",
      },
    ],
    // Party
    3: [
      {
        placeholder: "More info about this party.. ",
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

  console.log("extraFields", categoryId);

  return (
    <MainContainer>
      <TitleCenter>Create New Event</TitleCenter>
      <Form onSubmit={submitForm}>
        <Select
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
            <Text>"Loading.."</Text>
          )}
        </Select>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1.25rem",
          }}
        >
          <Label>Date </Label>
          <InputXs
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Label>Start </Label>
          <InputXs
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
          <Label>End </Label>
          <InputXs
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>

        {extraFields[categoryId]?.map((field, index) => (
          <>
            {field.label && <Label>{field.label}</Label>}
            <Input
              key={index}
              placeholder={field.placeholder}
              value={field.value}
              onChange={field.onChange}
              type={field.type}
            />
          </>
        ))}

        <br />
        <ButtonForm type="submit">Create new event</ButtonForm>
      </Form>
    </MainContainer>
  );
};
