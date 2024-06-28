import React from 'react';
import {
  ChatCard,
  // ChatCardProps,
  // ChatObject,
} from 'react-chat-engine-advanced';

import { getOtherUser } from '../functions/getOtherUser';

const CustomChatCard = (props) => {
  const { username, isActive, onChatCardClick, chat } = props;

  if (!chat) return <div />;

  const otherMember = getOtherUser(chat, username);
  const firstName = otherMember ? otherMember.first_name : '';
  const lastName = otherMember ? otherMember.last_name : '';
  const otherUsername = otherMember ? otherMember.username : '';
  const messageText = chat.last_message.text;
  const hasNotification = chat.last_message.sender_username !== username;

  return (
    <ChatCard
      title={`${firstName} ${lastName}`}
      description={
        !messageText || messageText.length === 0
          ? 'Say hello!'
          : messageText
      }
      hasNotification={hasNotification}
      avatarUrl={otherMember?.avatar}
      avatarUsername={otherUsername}
      avatarStyle={{
        boxShadow: otherMember?.is_online
          ? 'rgb(24 144 255 / 35%) 0px 2px 7px'
          : 'rgb(245 34 45 / 35%) 0px 2px 7px',
        border: otherMember?.is_online
          ? '1px solid rgb(24 144 255)'
          : '1px solid rgb(245 34 45)',
      }}
      isActive={isActive}
      onClick={() => onChatCardClick(chat.id)}
    />
  );
};

export default CustomChatCard;


















// import {
//   ChatCard,
//   ChatCardProps,
//   ChatObject,
// } from "react-chat-engine-advanced";

// import { getOtherUser } from "../functions/getOtherUser";

// interface CustomChatCardProps extends ChatCardProps {
//   username: string;
//   isActive: boolean;
//   onChatCardClick: (chatId: number) => void;
//   chat?: ChatObject;
// }

// const CustomChatCard = (props: CustomChatCardProps) => {
//   if (!props.chat) return <div />;

//   const otherMember = getOtherUser(props.chat, props.username);
//   const firstName = otherMember ? otherMember.first_name : "";
//   const lastName = otherMember ? otherMember.last_name : "";
//   const username = otherMember ? otherMember.username : "";
//   const messageText = props.chat.last_message.text;
//   const hasNotification =
//     props.chat.last_message.sender_username !== props.username;

//   return (
//     <ChatCard
//       title={`${firstName} ${lastName}`}
//       description={
//         messageText === null || messageText.length === 0
//           ? "Say hello!"
//           : messageText
//       }
//       hasNotification={hasNotification}
//       avatarUrl={otherMember?.avatar}
//       avatarUsername={username}
//       avatarStyle={{
//         boxShadow: otherMember?.is_online
//           ? "rgb(24 144 255 / 35%) 0px 2px 7px"
//           : "rgb(245 34 45 / 35%) 0px 2px 7px",
//         border: otherMember?.is_online
//           ? "1px solid rgb(24 144 255)"
//           : "1px solid rgb(245 34 45)",
//       }}
//       isActive={props.isActive}
//       onClick={() => props.chat && props.onChatCardClick(props.chat.id)}
//     />
//   );
// };

// export default CustomChatCard;
