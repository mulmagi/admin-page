<template>
<div class="menu">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" class="navbar-brand">mulmagi admin</router-link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/notice-board" class="nav-link">공지사항 게시판</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/report-list" class="nav-link">고장신고 리스트</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/complaint-list" class="nav-link">고객문의 리스트</router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/payment-test" class="nav-link">결제 테스트</router-link>
                </li>
            </ul>
        </div>
    </nav>
</div>
</template>

<style>
a{
    padding:30px;
}
</style>

<script>
export default {
    // eslint-disable-next-line
    name: 'Menu',
}
</script>
