import React from "react";
import styled from "styled-components";

import Icon from "../Icon";
import flex from "../../themes/flex";
import { body_3 } from "../../themes/textStyle";
import { IconBtn } from "../../elem";

const Chat = () => {
  return (
    <Container>
      <InputBox>
        <ChatInput type="text" placeholder="메세지를 입력하세요" />
        <IconBtn>
          <Icon icon="smile" size="20px" color="var(--grey)" />
        </IconBtn>
      </InputBox>
    </Container>
  );
};

const Container = styled.section`
  --header: 48px;
  --notice: 48px;
  --members: 48px;
  --minusHeight: calc(var(--header) + var(--notice) + var(--members));

  position: relative;
  width: 100%;
  height: calc(100vh - var(--minusHeight));
  overflow: hidden;
`;

const InputBox = styled.div`
  ${flex("between", "center")};
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 42px;
  padding: 0 4px;
  margin-left: -1px;
  border: 1px solid var(--line);
  border-bottom: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  overflow: hidden;
`;

const ChatInput = styled.input`
  ${body_3};
  flex-grow: 1;
  color: var(--black);
  padding: 0 10px;

  &::placeholder {
    ${body_3};
    color: var(--grey);
  }
`;

export default Chat;