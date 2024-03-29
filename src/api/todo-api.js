import axios from "axios";

const baseURL = "http://localhost:5000/todos";

const instance = axios.create({
  baseURL: baseURL,
  headers: { "Content-Type": "application/json" },
});

// Axios 인스턴스 생성
// TODO - axios 라이브러리를 사용하여 Axios 인스턴스를 생성하세요.
// NOTE - 힌트:
// - baseURL을 설정하세요.
// - 요청 헤더에 "Content-Type"을 "application/json"으로 설정하세요.
export const todoClient = instance;

// 모든 TODO 목록 가져오기 (GET /todos)
export const getTodos = async () => {
  const response = await axios.get(baseURL);
  console.log(response.data);
  // TODO - axios를 사용하여 GET / 요청을 보내고 결과 데이터를 반환하는 코드를 작성하세요.
  // NOTE - 힌트:
  // - await 키워드를 사용하여 비동기 요청을 처리하세요.
  // - response 객체의 data 속성을 사용하여 결과 데이터를 추출하세요.
  // - 결과 데이터를 반환하세요.
};

// 특정 ID의 TODO 상세 정보 가져오기 (GET /todos/:id)
export const getSingleTodo = async (id) => {
  // TODO - axios를 사용하여 GET /:id 요청을 보내고 결과 데이터를 반환하는 코드를 작성하세요.
  // NOTE - 힌트:
  // - URL 파라미터에 id 값을 전달하세요.
  // - response 객체의 data 속성을 사용하여 결과 데이터를 추출하세요.
  // - 결과 데이터를 반환하세요.
};

// 새로운 TODO 추가하기 (POST /todos)
export const createTodo = async (todo) => {
  const newTodo = {
    id: "54d09327-f8fc-4536-9061-9b5e9ac8716d",
    title: "444",
    content: "45687",
    deadline: "2024-02-23",
    isDone: false,
  };
  const response = await axios.post(baseURL, newTodo);
  console.log(response.data);
  // TODO - axios를 사용하여 POST / 요청을 보내고 결과 데이터를 반환하는 코드를 작성하세요.
  // NOTE - 힌트:
  // - todo 객체를 요청 본문에 포함시키세요.
  // - response 객체의 data 속성을 사용하여 결과 데이터를 추출하세요.
  // - 결과 데이터를 반환하세요.
};

// 특정 ID의 TODO 삭제하기 (DELETE /todos/:id)
export const deleteTodo = async (id) => {
  const response = axios.delete(`baseURL/${id}`);
  // TODO - axios를 사용하여 DELETE /:id 요청을 보내고 삭제된 ID를 반환하는 코드를 작성하세요.
  // NOTE - 힌트:
  // - URL 파라미터에 id 값을 전달하세요.
  // - 삭제된 ID를 반환하세요.
};

// 특정 ID의 TODO 수정하기 (PATCH /todos/:id)
export const updateTodo = async (id, todo) => {
  // TODO - axios를 사용하여 PATCH /:id 요청을 보내고 수정된 ID를 반환하는 코드를 작성하세요.
  // NOTE - 힌트:
  // - URL 파라미터에 id 값을 전달하세요.
  // - todo 객체를 요청 body에 포함시키세요.
  // - 수정된 ID를 반환하세요.
};
