import { GET_NOTES } from "./queries";

export const saveNote = (cache) => {
  const { notes } = cache.readQuery({ query: GET_NOTES });
  const jsonNotes = JSON.stringify(notes);
  try {
    localStorage.setItem("notes", jsonNotes);
  } catch (error) {
    
  }
}

export const restoreNotes = () => {
  const notes = localStorage.getItem("notes");
  return notes ? JSON.parse(notes) : [];
}
