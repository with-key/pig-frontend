import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// redux
import { __editSchedule } from "../../redux/modules/calendar";

// component
import Todos from "../../feature/board/Todos";
import InputToggle from "../../components/InputToggle";

// elem
import { Input } from "../../elem";

const CalendarModal = ({ content, setContent }) => {
  const { roomId } = useParams();

  const dispatch = useDispatch();

  const returnEditObj = (key, value) => {
    const editObj = { cardId: content.cardId };
    editObj[key] = value;
    return editObj;
  };

  const handleChange = (key, value) => {
    const editObj = returnEditObj(key, value);
    setContent({ ...content, [key]: value });
    dispatch(__editSchedule(roomId, editObj));
  };

  const editFunc = (key, value) => {
    const editObj = returnEditObj(key, value);
    dispatch(__editSchedule(roomId, editObj));
  };

  return (
    <>
      <InputToggle
        name="cardTitle"
        value={content.scheduleTitle}
        saveFunc={editFunc}
      />
      <Input
        type="date"
        _onChange={(e) => handleChange("startDate", e.target.value)}
        value={content.startDate}
      />
      <Input
        type="date"
        _onChange={(e) => handleChange("endDate", e.target.value)}
        value={content.endDate}
      />
      <InputToggle
        name="desc"
        shape="textarea"
        value={content.desc}
        saveFunc={editFunc}
      />
      <Todos todos={[]} />
    </>
  );
};

export default CalendarModal;