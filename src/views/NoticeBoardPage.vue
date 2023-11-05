<template>
<div>
    <h1>공지사항 게시판</h1>
    <hr/>
    <router-link to="/notice-board/add-notice" class="btn btn-primary">공지사항 추가하기</router-link>
</div>
</template>

<script>
export default {
    name: 'NoticeBoardPage',
}
</script>
<style>
    h1{
        text-align: center;
    }
</style>