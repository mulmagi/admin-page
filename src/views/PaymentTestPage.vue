<template>
<div>
    <h1>결제 테스트 페이지</h1>
    <hr>
    <div>
        <button @click="requestPay" class="btn btn-primary">구매하기</button>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'PaymentTestPage',
    methods: {
        requestPay() {
            var IMP = window.IMP;
            IMP.init("imp55506506");
            IMP.request_pay({
                pg: "kakaopay.TC0ONETIME",
                pay_method: "kakaopay",
                name: "주문명:결제테스트",
                amount: 1000,
                buyer_email: "test@portone.io",
                buyer_name: "김가영",
                buyer_tel: "010-4393-9869",
                buyer_addr: "서울특별시 강남구 삼성동",
                buyer_postcode: "123-456",
                m_redirect_url: "http://localhost:8080/payment-test"
            }, function (rsp) { // callback
                console.log(rsp)
                if (rsp.success) { // 결제 성공 시: 결제 승인 또는 가상계좌 발급에 성공한 경우
                    
                    axios.post('http://localhost:8080/api/verifyIamport', { // 임시 포트번호 3000
                            imp_uid: rsp.imp_uid,
                            method: rsp.pg_provider, // 유저가 선택한 결제 방법
                            amount: rsp.paid_amount, // 유저가 충전할 포인트
                        }, {
                            headers: {
                                'Authorization': String,
                                'Content-Type': 'application/json'
                            }
                        })
                        .then(function (response) {
                            // 성공적으로 요청을 보내고 응답을 받았을 때 실행할 코드
                            alert('결제검증 완료. data: ' + response.data);
                        })
                        .catch(function (error) {
                            // 요청 중 오류가 발생했을 때 실행할 코드
                            alert('오류: ' + error.message);
                        });
                } else {
                    alert("결제에 실패하였습니다. 에러 내용: " + rsp.error_msg);
                }
            });

        }
    }
};
</script>
