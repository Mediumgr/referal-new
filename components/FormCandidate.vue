<template>
    <section></section>
        <!-- <button
          class="resume__btn"
          v-if="!loader"
          @mousemove="mousemove($event)"
          @touchmove="mousemove($event)"
        >
          <span>Отправить</span>
        </button> -->
</template>

<script setup></script>

<style lang="scss" scoped>
// const file = ref({});
// const candidateName = ref('');
// const candidateEmail = ref('');
// const candidatePhone = ref('');

// const loader = ref(false);
// let resumeTitle = ref('Добавить резюме');
// let resumePlaceholder = ref(
//   'В\u00A0формате DOC, PDF не\u00A0тяжелее 10\u00A0MB'
// );

// const regExp = ref({
//   name: /^[A-Za-zА-Яа-я]+(?: [A-Za-zА-Яа-я]+)?(?: [A-Za-zА-Яа-я]+)?$/,

//   phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
//   email: /^[\w._-]+@\w+\.[a-z]{2,4}$/i,
// });

// const attachResume = () => {
//   if (!inputNode.value.files[0]) {
//     inputNode.value.click();
//   }
// };

// const change = (event) => {
//   file.value = event.target.files[0];
//   handleFile();
// };

// const handleFile = () => {
//   const fileSizeInMB = file.value.size / 1024 / 1024;
//   const uploadedSize = Math.ceil(fileSizeInMB);
//   const allowedExtensions = ['pdf', 'doc', 'docx'];
//   const fileExtension = file.value.name.split('.').pop();
//   let allowedFormat = allowedExtensions.includes(fileExtension.toLowerCase());
//   if (uploadedSize > 10 || !allowedFormat) {
//     resumeTitle.value = 'Не\u00A0удалось загрузить резюме';
//     resumePlaceholder.value =
//       'Нужен файл в\u00A0формате DOC или PDF не\u00A0тяжелее 10\u00A0мб';
//     placeholderNode.value.classList.add('fileError');
//     titleNode.value.classList.add('fileError');
//     resumeNode.value.classList.add('borderError');
//     inputNode.value.value = '';
//     file.value = '';
//   } else {
//     resumeTitle.value = 'Файл добавлен';
//     resumePlaceholder.value = 'Удалить';
//     placeholderNode.value.classList.add('remove');
//     placeholderNode.value.classList.remove('fileError');
//     titleNode.value.classList.remove('fileError');
//     resumeNode.value.classList.remove('borderError');
//   }
// };

// const removeFile = (event) => {
//   resumeTitle.value = 'Добавить резюме';
//   resumePlaceholder.value =
//     'В\u00A0формате DOC, PDF не\u00A0тяжелее 10\u00A0MB';
//   inputNode.value.value = '';
//   file.value = '';
//   placeholderNode.value.classList.remove('fileError');
//   titleNode.value.classList.remove('fileError');
//   resumeNode.value.classList.remove('borderError');
//   if (event.target.classList.contains('remove')) {
//     placeholderNode.value.classList.remove('remove');
//     event.stopPropagation();
//   }
// };

// /* drag & drop file */
// const handleDragOver = (e) => {
//   e.preventDefault();
//   resumeNode.value.classList.add('active');
// };
// const handleDragLeave = () => {
//   resumeNode.value.classList.remove('active');
// };
// const handleDrop = (e) => {
//   e.preventDefault();
//   resumeNode.value.classList.remove('active');
//   file.value = e.dataTransfer.files[0];
//   handleFile();
// };

// watch(
//   () => errors.value.file,
//   (error) => {
//     if (error === 'error') {
//       placeholderNode.value.classList.add('fileError');
//       titleNode.value.classList.add('fileError');
//       resumeNode.value.classList.add('borderError');
//     }
//   }
// );

/* hover кнопки button */
// const mousemove = (e) => {
//   let btn = document.querySelector('.resume__btn');
//   let x = e.pageX - btn.offsetLeft;
//   let y = e.pageY - btn.offsetTop;
//   btn.style.setProperty('--x', x / 10 + 'rem');
//   btn.style.setProperty('--y', y / 1000 + 'rem');
// };

</style>
