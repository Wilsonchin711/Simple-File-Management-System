//List all notes
<template>
  <div>
    <div v-for="note in notes" :key="note.id" class="note-card">
      <h3 class="note-title">{{ note.title }}</h3>
      <p class="note-content">{{ note.content }}</p>
      <div class="note-actions">
        <button @click="$emit('edit', note)" class="btn-edit">Edit</button>
        <button @click="$emit('delete', note.id)" class="btn-delete">Delete</button>
      </div>
    </div>
    <p v-if="!notes.length" class="empty-msg">No notes yet.</p>
  </div>
</template>

<script>
export default {
  props: ['notes'],
  emits: ['edit', 'delete']
};
</script>

<style scoped>
.note-card {
  background: #ffffff;
  padding: 14px;
  border-radius: 6px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
.note-title {
    color: #333;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 6px;
}
.note-content {
  font-size: 14px;
  color: #555;
}
.note-actions {
  margin-top: 10px;
}
.btn-edit,
.btn-delete {
  padding: 6px 12px;
  margin-right: 8px;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
}
.btn-edit {
  background-color: #2196f3;
  color: white;
}
.btn-delete {
  background-color: #f44336;
  color: white;
}
.empty-msg {
  text-align: center;
  color: #888;
  font-style: italic;
  margin-top: 20px;
}
</style>