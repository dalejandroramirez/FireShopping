// Toda la logica de base de datos para las task

// CRUD - Create, Read Update, Delete

import { db } from "./index"

import { addDoc, collection } from "firebase/firestore";

import { getDocs, setDoc, doc, deleteDoc } from "firebase/firestore";


export const addNewTask = async task => {
  try {
    const docRef = await addDoc(collection(db, "tasks"), task);

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// Read

export const getTasks = async () => {
  const querySnapshot = await getDocs(collection(db, "tasks"))
  // querySnapshot.forEach(doc => {
  //   console.log(doc.id, "=>", doc.data());
  // })
  const tasks = querySnapshot.docs.map(doc => {
    return { ...doc.data(), id: doc.id }
  })
  console.log(tasks);
  return tasks
}

// Update

export const updateTask = async (task) => {

  await setDoc(doc(db,"tasks",task.id),{
    title:task.title,
    description:task.description
  })
}

// Delete 

export const deleteTask = async (id) => {
  await deleteDoc(doc(db, "tasks", id));
}