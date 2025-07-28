<template>
  <div class="app-container">
    <h1 class="app-title">Note Manager</h1>
    <NoteForm :note="selectedNote" @save="saveNote" />
    <NoteList :notes="notes" @edit="selectNote" @delete="deleteNote" />
  </div>
</template>

<style scoped>
.app-container {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
}
.app-title {
  text-align: center;
  font-size: 28px;
  margin-bottom: 30px;
  color: #000000;
}
</style>



<script>
import NoteForm from './components/NoteForm.vue';
import NoteList from './components/NoteList.vue';
import api from './api.js';

export default {
  components: { NoteForm, NoteList },
  data() {
    return {
      notes: [],
      selectedNote: null,
    };
  },
  mounted() {
    this.loadNotes();
  },
  methods: {
    async loadNotes() {
      try {
        const res = await api.getNotes();
        this.notes = res.data;
      } catch (err) {
        alert('Failed to load notes.');
        console.error(err);
      }
    },
    async saveNote(note) {
      console.log("Received in App.vue:", note);

      try {
        if (note.id) {
          await api.updateNote(note);
        } else {
          const res = await api.createNote(note);
          note.id = res.data.id;
          this.notes.push(note);
        }
        this.selectedNote = null;
        this.loadNotes();
      } catch (err) {
        alert("Failed to save note.");
        console.error(err);
      }
    },
    selectNote(note) {
      this.selectedNote = { ...note };
    },
    async deleteNote(id) {
      try {
        await api.deleteNote(id);
        this.notes = this.notes.filter((n) => n.id !== id);
        if (this.selectedNote?.id === id) this.selectedNote = null;
      } catch (err) {
        alert('Failed to delete note.');
        console.error(err);
      }
    },
  },
};
</script>
