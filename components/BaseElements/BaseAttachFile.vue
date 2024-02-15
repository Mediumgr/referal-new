<template>
  <input
    type="file"
    ref="inputNode"
    accept=".pdf, .doc, .docx"
    @change="change($event)"
  />
  <div
    :class="['resume', { borderError: error === 'error' }]"
    ref="resumeNode"
    @click.stop="attachResume()"
    @dragover="handleDragOver($event)"
    @dragleave="handleDragLeave($event)"
    @drop="handleDrop($event)"
  >
    <p
      :class="['resume__title', { fileError: error === 'error' }]"
      ref="titleNode"
    >
      {{ resumeTitle }}
    </p>
    <p
      :class="['resume__placeholder', { fileError: error === 'error' }]"
      ref="placeholderNode"
      @click.stop="removeFile($event)"
    >
      {{ resumePlaceholder }}
    </p>
  </div>
</template>

<script setup>
const emit = defineEmits(["attachedFile"]);
const props = defineProps({
  error: {
    type: String,
    required: false,
  },
});

const inputNode = ref(null);
const placeholderNode = ref(null);
const titleNode = ref(null);
const resumeNode = ref(null);
const file = ref({});
let resumeTitle = ref("Добавить резюме");
let resumePlaceholder = ref(
  "В\u00A0формате DOC, PDF не\u00A0тяжелее 10\u00A0MB"
);

const change = (event) => {
  file.value = event.target.files[0];
  handleFile();
};

const handleFile = () => {
  const fileSizeInMB = file.value.size / 1024 / 1024;
  const uploadedSize = Math.ceil(fileSizeInMB);
  const allowedExtensions = ["pdf", "doc", "docx"];
  const fileExtension = file.value.name.split(".").pop();
  let allowedFormat = allowedExtensions.includes(fileExtension.toLowerCase());
  if (uploadedSize > 10 || !allowedFormat) {
    resumeTitle.value = "Не\u00A0удалось загрузить резюме";
    resumePlaceholder.value =
      "Нужен файл в\u00A0формате DOC или PDF не\u00A0тяжелее 10\u00A0мб";
    placeholderNode.value.classList.add("fileError");
    titleNode.value.classList.add("fileError");
    resumeNode.value.classList.add("borderError");
    inputNode.value.value = "";
    file.value = "";
  } else {
    resumeTitle.value = "Файл добавлен";
    resumePlaceholder.value = "Удалить";
    placeholderNode.value.classList.add("remove");
    placeholderNode.value.classList.remove("fileError");
    titleNode.value.classList.remove("fileError");
    resumeNode.value.classList.remove("borderError");
    emit("attachedFile", file.value);
  }
};

const removeFile = (event) => {
  resumeTitle.value = "Добавить резюме";
  resumePlaceholder.value =
    "В\u00A0формате DOC, PDF не\u00A0тяжелее 10\u00A0MB";
  inputNode.value.value = "";
  file.value = "";
  placeholderNode.value.classList.remove("fileError");
  titleNode.value.classList.remove("fileError");
  resumeNode.value.classList.remove("borderError");
  if (event.target.classList.contains("remove")) {
    placeholderNode.value.classList.remove("remove");
  }
};

const attachResume = () => {
  if (!inputNode.value.files[0]) {
    inputNode.value.click();
  }
};

/* drag & drop file */
const handleDragOver = (e) => {
  e.preventDefault();
  resumeNode.value.classList.add("active");
};
const handleDragLeave = () => {
  resumeNode.value.classList.remove("active");
};
const handleDrop = (e) => {
  e.preventDefault();
  resumeNode.value.classList.remove("active");
  file.value = e.dataTransfer.files[0];
  handleFile();
};
</script>

<style lang="scss" scoped>
input {
  position: absolute;
  top: -10rem;
  visibility: hidden;
  opacity: 0;
  height: 0;
  z-index: -100;
}

.resume {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
  padding: 2rem;
  margin-top: 1rem;
  gap: 1rem;
  border-radius: 2rem;
  border: 0.1rem dashed rgba(19, 20, 75, 0.2);
  cursor: pointer;

  @include mq(768) {
    height: 8.8rem;
  }
  @include mq(1440) {
    height: 9.4rem;
  }

  &.active {
    background-color: #f9f9f9;
    border: 0.1rem dashed rgba(232, 143, 87, 0.2);
  }

  &__title {
    color: #13144b;
    font-size: 1.4rem;
    line-height: 100%;
    letter-spacing: -0.026rem;

    @include mq(768) {
      font-size: 1.6rem;
      letter-spacing: -0.032rem;
    }

    @include mq(1440) {
      line-height: 140%;
      letter-spacing: -0.064rem;
    }
  }

  &__placeholder {
    margin: 0 auto;
    color: #13144b;
    opacity: 0.5;
    font-size: 1.4rem;
    letter-spacing: -0.026rem;
    text-align: center;
    line-height: 100%;

    @include mq(768) {
      font-size: 1.6rem;
      letter-spacing: -0.032rem;
    }

    @include mq(1440) {
      line-height: 140%;
      letter-spacing: -0.064rem;
    }
  }
}

.fileError {
  color: #f00;
}
.borderError {
  border: 0.1rem dashed #f00;
}
</style>
