// src/api/todos.js
import axios from 'axios';
const baseUrl = 'http://localhost:3004';

export async function getTodos() {
  try {
    const res = await axios.get(`${baseUrl}/todos`);
    return res.data;
  } catch (error) {
    console.error('[Get Todos failed]: ', error);
  }
}

export async function createTodo(payload) {
  try {
    const { title, isDone } = payload;
    const res = await axios.post(`${baseUrl}/todos`, {
      title,
      isDone,
    });
    return res.data;
  } catch (error) {
    console.error('[Get Todos failed]: ', error);
  }
}

export async function patchTodo(payload) {
  const { id, title, isDone } = payload;
  try {
    const res = await axios.patch(`${baseUrl}/todos/${id}`, {
      title,
      isDone,
    });
    return res.data;
  } catch (error) {
    console.error('[Patch Todo failed]', error);
  }
}

export async function deleteTodo(id) {
  try {
    const res = await axios.delete(`${baseUrl}/todos/${id}`);
    return res.data;
  } catch (error) {
    console.error('[Delete Todo failed]', error);
  }
}
