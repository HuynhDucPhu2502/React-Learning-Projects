import { useCallback, useReducer } from "react";

const initialValue = {
  data: [],
  currentId: 0,
};

// {type: "ADD", payload: {phoneType: "xxx", phone: "123456"}}
// {type: "REMOVE", payload: {id: 1}}

const PhoneReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        data: [...state.data, { ...action.payload, id: state.currentId }],
        currentId: state.currentId + 1,
      };
    }
    case "REMOVE": {
      return {
        ...state,
        data: state.data.filter((x) => x.id !== action.payload.id),
      };
    }
    default:
      return { ...state };
  }
};

export const usePhoneHook = () => {
  const [state, dispatch] = useReducer(PhoneReducer, initialValue);

  const addPhone = useCallback((phone) => {
    dispatch({ type: "ADD", payload: phone });
  }, []);

  const removePhone = useCallback((phoneIdToRemove) => {
    dispatch({ type: "REMOVE", payload: { id: phoneIdToRemove } });
  }, []);

  return { state, addPhone, removePhone };
};

// [data, setData] = useState(0);

// KHÔNG NÊN
// [data, dispatch] = usePhoneHook()
// dispatch({type: "ADD", ....})
// dispatch({type: "REMOVE", ....})

// NEN
// [data, addPhone, removePhone] = usePhoneHook()

// {data, addPhone, removePhone} = usePhoneHook()

// Tham chiếu, tham trị

// a = 3
// b = 3
// a === b => true

// const a = {name: "Test"}
// const b = {name: "Test"}
// a === b => False

// const a = () => {console.log("Hello World")}
// const b = () => {console.log("Hello World")}
// a === b => False

// useState re-render là nó tạo làm mấy cái hàm, callback thì sẽ
// chặn nó tạo lại trừ khi dependency thay đổi
