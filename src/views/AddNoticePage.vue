<!-- AddNoticePage.vue -->

<template>
<div>
    <h1>공지사항 추가하기</h1>
    <form @submit.prevent="submitNotice">
        <div class="form-group form">
            <label for="title">카테고리</label>
            <select type="text" id="category" v-model="category" class="form-control">
                <option value="NORMAL">일반</option>
                <option value="CHARGE">요금</option>
                <option value="EVENT">이벤트</option>
                <option value="SYSTEM">시스템</option>
                <option value="ETC">기타</option>
            </select>
        </div>
        <div class="form-group form">
            <label for="title">제목</label>
            <input type="text" id="title" v-model="title" class="form-control">
        </div>
        <div class="form-group form">
            <label for="content">내용</label>
            <textarea id="content" v-model="content" class="form-control"></textarea>
        </div>
        <div class="form-group form">
            <label for="photo">사진 업로드</label>
            <div>
                <input type="file" id="photo" ref="photo" accept="image/*" @change="handleFileUpload" class="form-control-file">
            </div>
            <img :src="previewImage" v-if="previewImage" alt="사진 미리보기" class="mt-2" style="max-width: 200px;">
        </div>
        <div class="form-group form">
            <label for="files">파일 업로드 (다중 선택 가능)</label>
            <div>
                <input type="file" id="files" accept="file" @change="handleMultipleFileUpload" class="form-control-file" multiple>
                <div v-if="selectedFiles.length > 0" class="mt-2">
                    <strong>선택한 파일:</strong>
                    <ul>
                        <li v-for="(file, index) in selectedFiles" :key="index">{{ file.name }}</li>
                    </ul>
                </div>
            </div>
        </div>
            <button type="submit" class="btn btn-primary">게시</button>
    </form>
</div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            category: '',
            title: '',
            content: '',
            selectedFile: null,
            selectedFiles: [], // 여러 파일을 저장하기 위한 배열
            previewImage: null
        };
    },
    methods: {
        handleFileUpload(event) {
            this.selectedFile = event.target.files[0];
            if (this.selectedFile) {
                const reader = new FileReader();
                reader.onload = () => {
                    this.previewImage = reader.result;
                };
                reader.readAsDataURL(this.selectedFile);
            }
        },
        handleMultipleFileUpload(event) {
            // 여러 파일을 배열에 저장
            this.selectedFiles = Array.from(event.target.files);
        },
        async submitNotice() {
            if (!this.title || !this.content) {
                // 필수 필드 중 하나라도 입력되지 않은 경우
                alert('제목, 내용은 필수값입니다.');
                return;
            }
            const formData = new FormData();
            formData.append('category', this.category);
            formData.append('title', this.title);
            formData.append('content', this.content);
            if(this.selectedFile)
                formData.append('photo', this.selectedFile);

            // 여러 파일을 추가
            this.selectedFiles.forEach((file, index) => {
                formData.append(`file_${index}`, file);
            });

            try {
                // 서버에 formData를 POST 요청으로 전송
                const response = await axios.post('http://localhost:8808/api/notice/test/add', formData); // 임시 포트 8808
                alert('파일 업로드 성공:', response.data);
                this.$router.push('/notice-board');
            } catch (error) {
                alert('파일 업로드 실패:', error);
            }
        }
    }
};
</script>

<style>
form {
    margin: 0 auto;
    width: 50%;
}

label {
    font-size: 20px;
}

form div {
    margin: 10px 0;
}
.form{
    margin: 30px 0;
}
</style>
