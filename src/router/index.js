import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NoticeBoardPage from '../views/NoticeBoardPage.vue'
import ReportListPage from '../views/ReportListPage.vue'
import ComplaintListPage from '../views/ComplaintListPage.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/notice-board', component: NoticeBoardPage },
    { path: '/report-list', component: ReportListPage },
    { path: '/complaint-list', component: ComplaintListPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router