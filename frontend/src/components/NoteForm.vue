<template>
  <form @submit.prevent="handleSubmit" class="form">
    <input
      v-model="localNote.title"
      placeholder="Title"
      class="input"
      required
    />
    <textarea
      v-model="localNote.content"
      placeholder="Content"
      class="textarea"
      required
    ></textarea>
    <button type="submit" class="btn">
      {{ localNote.id ? "Update" : "Add" }} Note
    </button>
  </form>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      default: () => ({ title: '', content: '', id: null })
    }
  },
  emits: ['save'],
  data() {
    return {
      localNote: {
        title: this.note?.title || '',
        content: this.note?.content || '',
        id: this.note?.id || null
      }
    };
  },
  watch: {
    note: {
      immediate: true,
      deep: true,
      handler(newNote) {
        this.localNote = {
          title: newNote?.title || '',
          content: newNote?.content || '',
          id: newNote?.id || null
        };
      }
    }
  },
  methods: {
    handleSubmit() {
      const title = this.localNote.title.trim();
      const content = this.localNote.content.trim();

      if (!title || !content) {
        alert("Please fill in both title and content.");
        return;
      }

      this.$emit("save", {
        id: this.localNote.id,
        title,
        content,
      });

      this.localNote = { title: '', content: '', id: null };
    },
  },
};
</script>

<style scoped>
.form {
  background: #fff;
  padding: 16px;
  border-radius: 6px;
  margin-bottom: 24px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.input,
.textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
}
.btn {
  background-color: #4caf50;
  color: white;
  padding: 8px 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
