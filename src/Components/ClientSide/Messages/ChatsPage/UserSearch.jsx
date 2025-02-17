import { AutoComplete, Input } from "antd";
import { useState, useEffect, useRef } from "react";
import { Avatar } from "react-chat-engine-advanced";
import axios from "axios";
// import { privateKey, projectId } from "../functions/constants";

const UserSearch = (props) => {
  const didMountRef = useRef(false);

  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [options, setOptions] = useState([]);

 const privateKey="3c5a5583-bb2f-4aba-b734-7775f715c5ae"; const projectId ="2a0d24d8-85c2-441c-b62d-3677624c18f4"


  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      const headers = { "Private-Key": privateKey };
      axios
        .get("https://api.chatengine.io/users/", { headers })
        .then((r) => setUsers(r.data))
        .catch();
    }
  }, []);

  const searchResult = (query) => {
    const foundUsers = users.filter(
      (user) =>
        JSON.stringify(user).toLowerCase().indexOf(query.toLowerCase()) !==
          -1 && user.username !== props.username
    );

    return foundUsers.map((user) => ({
      value: user.username,
      label: (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>
            <Avatar avatarUrl={user.avatar} username={user.username} />
          </span>
          <span>
            <div>
              {user.first_name} {user.last_name}
            </div>
            <div>{user.username}</div>
          </span>
        </div>
      ),
    }));
  };

  const handleSearch = (query) => {
    setOptions(query ? searchResult(query) : []);
  };

  const onSelect = (value) => {
    setLoading(true);

    const headers = {
      "Project-ID": projectId,
      "User-Name": props.username,
      "User-Secret": props.secret,
    };
    const data = {
      usernames: [props.username, value],
    };
    axios
      .put("https://api.chatengine.io/chats/", data, { headers })
      .then((r) => {
        props.onSelect(r.data.id);
        setLoading(false);
        setQuery("");
      })
      .catch(() => setLoading(false));
  };

  return (
    <div>
      <AutoComplete
        dropdownMatchSelectWidth={252}
        className="ce-chat-form-autocomplete"
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
        value={query}
      >
        <Input.Search
          size="large"
          placeholder="Search users..."
          enterButton
          loading={loading}
          onChange={(e) => setQuery(e.target.value)}
        />
      </AutoComplete>
    </div>
  );
};

export default UserSearch;




































// import { AutoComplete, Input } from "antd";
// import type { SelectProps } from "antd/es/select";
// import { useState, useEffect, useRef } from "react";

// import { PersonObject, Avatar } from "react-chat-engine-advanced";

// import axios from "axios";

// import { privateKey, projectId } from "../functions/constants";

// interface CustomChatFormProps {
//   username: string;
//   secret: string;
//   onSelect: (chatId: number) => void;
// }

// const UserSearch = (props: CustomChatFormProps) => {
//   const didMountRef = useRef(false);

//   const [loading, setLoading] = useState<boolean>(false);
//   const [query, setQuery] = useState<string>("");
//   const [users, setUsers] = useState<PersonObject[]>([]);
//   const [options, setOptions] = useState<SelectProps<object>["options"]>([]);

//   useEffect(() => {
//     if (!didMountRef.current) {
//       didMountRef.current = true;
//       const headers = { "Private-Key": privateKey };
//       axios
//         .get("https://api.chatengine.io/users/", { headers })
//         .then((r) => setUsers(r.data))
//         .catch();
//     }
//   });

//   const searchResult = (query: string) => {
//     const foundUsers = users.filter(
//       (user) =>
//         JSON.stringify(user).toLowerCase().indexOf(query.toLowerCase()) !==
//           -1 && user.username !== props.username
//     );

//     return foundUsers.map((user) => {
//       return {
//         value: user.username,
//         label: (
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//             }}
//           >
//             <span>
//               <Avatar avatarUrl={user.avatar} username={user.username} />
//             </span>
//             <span>
//               <div>
//                 {user.first_name} {user.last_name}
//               </div>
//               <div>{user.username}</div>
//             </span>
//           </div>
//         ),
//       };
//     });
//   };
//   const handleSearch = (query: string) => {
//     setOptions(query ? searchResult(query) : []);
//   };

//   const onSelect = (value: string) => {
//     setLoading(true);

//     const headers = {
//       "Project-ID": projectId,
//       "User-Name": props.username,
//       "User-Secret": props.secret,
//     };
//     const data = {
//       usernames: [props.username, value],
//     };
//     axios
//       .put("https://api.chatengine.io/chats/", data, { headers })
//       .then((r) => {
//         props.onSelect(r.data.id);
//         setLoading(false);
//         setQuery("");
//       })
//       .catch(() => setLoading(false));
//   };

//   return (
//     <div>
//       <AutoComplete
//         dropdownMatchSelectWidth={252}
//         className="ce-chat-form-autocomplete"
//         options={options}
//         onSelect={onSelect}
//         onSearch={handleSearch}
//         value={query}
//       >
//         <Input.Search
//           size="large"
//           placeholder="Chats"
//           enterButton
//           loading={loading}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//       </AutoComplete>
//     </div>
//   );
// };

// export default UserSearch;
