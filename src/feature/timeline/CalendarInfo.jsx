import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Text } from "../../elem";
import flex from "../../themes/flex";

import { __getTodoBySchedule } from "../../redux/modules/calendar.js";

const CalendarInfo = () => {
  const { roomId } = useParams();

  const dispatch = useDispatch();

  const { current } = useSelector((state) => state.date);
  const today = current && current.clone().format("M월 D일");

  const {
    currentList: currentSchedules,
    currentTodos,
    currentScheduleId: currentId,
  } = useSelector((state) => state.calendar);
  const { selectedDate } = useSelector((state) => state.date) || {
    selectedDate: today,
  };

  const [title, setTitle] = useState("");

  // currentId(상세 내용 보여줄 대상)가 바뀔 때마다 title바꿔주고 todo 불러옴
  useEffect(() => {
    if (currentSchedules.length === 0) {
      setTitle("");
    }
    if (currentSchedules.length !== 0) {
      dispatch(__getTodoBySchedule(roomId, currentId));
      setTitle(
        currentSchedules.find((item) => item.cardId === currentId).cardTitle
      );
    }
  }, [roomId, currentId]);

  const clickSchedule = (cardId, title) => {
    setTitle(title);
    dispatch(__getTodoBySchedule(roomId, cardId));
  };

  return (
    <Container>
      <Left>
        <TitleBox>
          <Text type="body_1" color="black">
            {selectedDate}
          </Text>
        </TitleBox>
        {currentSchedules &&
          currentSchedules.map((item, idx) => (
            <CurrentSchedule
              key={idx}
              color={item.color}
              onClick={() => clickSchedule(item.cardId, item.cardTitle)}
            >
              <ScheduleText type="sub_2">{item.cardTitle}</ScheduleText>
            </CurrentSchedule>
          ))}
      </Left>
      <Right>
        <TitleBox>
          <Text type="body_1">{title}</Text>
        </TitleBox>
        {currentTodos.length !== 0 &&
          currentTodos.map((todo) => (
            <div key={todo.todoId}>{todo.todoTitle}</div>
          ))}
      </Right>
    </Container>
  );
};

const Container = styled.section`
  ${flex()}
  height: 200px;
  background-color: var(--white);
`;

const Left = styled.div`
  width: calc(100% * (1 / 2.7));
  flex-shrink: 0;
  height: 100%;
`;

const Right = styled.div`
  width: calc(100% * (1.7 / 2.7));
  flex-shrink: 0;
  height: 100%;
  border-left: 1px solid var(--line);
`;

const TitleBox = styled.div`
  ${flex("start")}
  height: 65px;
  padding-left: 20px;
`;

const CurrentSchedule = styled.div`
  ${flex("start")};
  height: 42px;
  padding: 0 20px;
  cursor: pointer;

  &::before {
    content: "";
    width: 5px;
    height: 24px;
    margin-right: 20px;
    background-color: ${(props) => props.theme.colors[props.color]};
    border-radius: 5px;
  }

  &:hover {
    background-color: var(--line);
  }
`;

const ScheduleText = styled(Text)`
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

export default CalendarInfo;
