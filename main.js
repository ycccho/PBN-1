// Blog Data Management
const defaultPosts = [
    { id: 1, title: "인테리어 사기 안당하는 법 3가지: 실내건축면허 확인 필수", date: "2026.03.01", desc: "부산 인테리어 시장에서 사기 피해를 예방하기 위한 가장 확실한 방법은 KISCON 실내건축공사업 면허 보유 여부를 확인하는 것입니다.", content: "인테리어 공사를 계획 중이시라면 반드시 다음 세 가지를 확인하여 소중한 자산과 주거 환경을 보호하세요. 특히 부산 인테리어 시장에서는 무면허 업체의 활동이 빈번하므로 주의가 필요합니다.\n\n1. KISCON을 통한 실내건축공사업 면허 조회\n2. 하자이행보증보험 가입 가능 여부 확인\n3. 상세한 견적서와 공정표 요청 및 검토" },
    { id: 2, title: "부산 아파트 리모델링 시 주의사항 및 비용 절감 노하우", date: "2026.02.28", desc: "해운대, 수영구 등 부산 지역 노후 아파트 리모델링 시 반드시 체크해야 할 단열, 방수 공사 및 관리사무소 협의 절차를 상세히 안내합니다.", content: "부산 지역 아파트 리모델링은 해안가 특유의 습도와 염해, 그리고 노후 아파트의 비중이 높다는 점을 충분히 고려하여 설계해야 합니다.\n\n- 철저한 단열 및 결로 방지 공사\n- 배관 및 방수 상태 점검\n- 관리사무소 협의 및 주민 동의 확보" },
    { id: 27, title: "부산 카페 인테리어 트렌드: 감성과 실용성을 동시에", date: "2026.03.04", desc: "기장, 해운대 등 부산의 핫플레이스 카페들의 인테리어 특징과 상가 리모델링 시 주의점을 분석합니다.", content: "부산은 대한민국 커피의 도시라고 불릴 만큼 개성 넘치는 카페가 많습니다. 성공적인 부산 카페 인테리어를 위해서는 단순히 예쁜 디자인을 넘어 상업 공간의 특수성을 이해해야 합니다." },
    { id: 28, title: "부산 해안가 아파트 인테리어: 염해와 습기 잡는 법", date: "2026.03.03", desc: "LCT, 마린시티 등 부산 해안가 고층 아파트 리모델링 시 필수적인 특수 자재 시공 가이드를 제공합니다.", content: "바다를 조망하는 부산의 해안가 아파트는 환상적인 뷰를 자랑하지만, 강력한 해풍과 염분, 높은 습도라는 숙제를 안고 있습니다." },
    { id: 29, title: "부산 상가 인테리어 시 실내건축면허가 왜 더 중요한가?", date: "2026.03.02", desc: "식당, 학원, 사무실 등 부산의 상업 공간 인테리어 시 면허 보유 업체와 계약해야 하는 법적, 기술적 이유를 설명합니다.", content: "상업 공간은 주거 공간보다 소방 법규, 전기 안전 기준, 용도 변경 절차 등 확인해야 할 법적 사항이 훨씬 많습니다. 부산 상가 인테리어를 계획 중이라면 KISCON 조회를 통해 반드시 실내건축면허 업체를 선택해야 안전합니다." },
    { id: 37, title: "부산 1인가구 원룸/오피스텔 리모델링 효율 극대화", date: "2026.03.05", desc: "서면, 연산동 등 부산 주요 상권의 소형 주거 공간을 넓어 보이게 만드는 빌트인 가구 활용법을 제안합니다.", content: "좁은 원룸 인테리어는 수납이 생명입니다. 벽면을 활용한 맞춤형 빌트인 가구와 밝은 톤의 바닥재 시공으로 개방감을 확보하세요. 부산 인테리어 전문가들은 1.5룸 구조의 가벽 철거를 통해 공간을 통합하는 방식을 적극 권장합니다." },
    { id: 38, title: "인테리어 조명 컬러 가이드: 주광색 vs 주백색 vs 전구색", date: "2026.03.06", desc: "공간의 목적에 맞는 최적의 색온도 선택법! 거실, 주방, 침실별 조명 스타일링 팁을 알려드립니다.", content: "조명은 인테리어의 완성입니다. 공부방은 집중력을 높이는 주광색(6500K), 거실은 편안한 주백색(4000K), 침실은 아늑한 전구색(3000K)이 적합합니다. 부산 아파트 리모델링 시 스마트 조명을 도입하면 상황에 따라 색온도를 조절할 수 있어 매우 편리합니다." },
    { id: 39, title: "부산 노후 주택 리모델링 시 소방 및 가스 안전 점검", date: "2026.03.07", desc: "오래된 단독주택 공사 시 놓치기 쉬운 배관 교체와 화재 경보기 설치 등 법적 의무 사항을 정리했습니다.", content: "노후 주택은 화재 위험에 노출되기 쉽습니다. 실내건축면허 업체는 공사 시 가스 배관 누출 검사와 자동 확산 소화기 설치를 기본 공정에 포함합니다. 안전한 부산 리모델링을 위해 노후 전선 전면 교체도 잊지 마세요." },
    { id: 40, title: "친환경 인테리어: 부산에서도 주목받는 제로웨이스트 자재", date: "2026.03.08", desc: "건강과 환경을 모두 생각하는 에코 인테리어! 재생 자재와 천연 마감재를 활용한 시공 사례를 소개합니다.", content: "최근 부산 인테리어 시장에서도 규조토 벽지나 천연 아우로 페인트 등 친환경 자재 수요가 급증하고 있습니다. 아토피나 비염이 있는 가족이 있다면 휘발성 유기화합물(VOC) 배출이 적은 인증 자재를 반드시 확인하세요." },
    { id: 41, title: "부산 미용실/네일샵 상가 인테리어: 고객 동선의 마법", date: "2026.03.09", desc: "소형 상가에서도 쾌적한 서비스를 제공할 수 있는 경동선 설계와 고급스러운 마감재 매칭 노하우입니다.", content: "뷰티 샵 인테리어는 조명과 거울의 배치가 매출을 결정합니다. 부산 상가 리모델링 시 샴푸대와 시술 공간의 프라이빗한 분리, 그리고 세련된 포토존 구성으로 SNS 마케팅 효과까지 누려보세요." },
    { id: 42, title: "겨울철 베란다 곰팡이 방지: 결로 해결을 위한 단열 공사", date: "2026.03.10", desc: "부산 지역 아파트의 고질적인 문제인 베란다 결로를 원천 봉쇄하는 이보드 및 탄성코트 시공법 가이드입니다.", content: "결로는 실내외 온도 차이로 발생합니다. 단순한 페인트 덧칠보다는 고성능 단열재인 이보드 시공 후 친환경 탄성코트로 마감하는 것이 가장 확실합니다. 부산 인테리어 전문 업체와 상의하여 습기 관리를 해결하세요." },
    { id: 43, title: "부산 학원 인테리어: 방음과 소방 필증 완벽 대비", date: "2026.03.11", desc: "교육청 허가를 위한 강의실 칸막이 규정과 방음재 시공 기술력을 갖춘 업체 선정의 중요성을 강조합니다.", content: "학원 인테리어는 '허가'를 위한 법규 준수가 최우선입니다. 부산 교육청 규정에 맞는 강의실 면적과 1.2m 이상의 복도 너비 확보, 그리고 소방 완비 증명서 발급을 위한 불연 자재 사용은 필수입니다." },
    { id: 44, title: "반려동물을 위한 인테리어: 펫테리어(Penterior) 팁", date: "2026.03.12", desc: "강아지와 고양이가 함께 행복한 집! 미끄럼 방지 논슬립 타일과 벽지 훼손 방지 시공 아이디어를 공개합니다.", content: "반려동물의 관절 건강을 위해 미끄러운 마루 대신 논슬립 포세린 타일이나 전용 장판 시공을 추천합니다. 부산 아파트 리모델링 시 반려동물 전용 출입문(펫도어) 설치로 디테일을 더해 보세요." },
    { id: 45, title: "부산 식당 인테리어: 주방 방수와 덕트 소음 해결법", date: "2026.03.13", desc: "민원 없는 식당 운영을 위한 강력한 배기 시스템 구축과 주방 누수 사고 예방을 위한 전문 시공 안내입니다.", content: "식당 리모델링 시 덕트 소음은 이웃과의 분쟁 원인이 됩니다. 저소음 모터 사용과 흡음재 시공이 필수이며, 주방은 실내건축면허 업체의 3차 방수 시공을 통해 누수 위험을 0%로 줄여야 합니다." },
    { id: 46, title: "모던 미드센추리 스타일로 꾸미는 부산 리모델링", date: "2026.03.14", desc: "철제 소재와 비비드한 컬러 가구의 조화! 감각적인 인테리어를 위한 스타일링 포인트를 짚어드립니다.", date: "2026.03.14", content: "20세기 중반의 실용적이고 감각적인 디자인이 다시 유행하고 있습니다. 부산 인테리어 현장에서는 스테인리스 프레임과 컬러풀한 펜던트 조명을 활용해 거실 분위기를 반전시키는 사례가 많습니다." },
    { id: 47, title: "부산 아파트 현관 리모델링: 첫인상을 결정하는 중문 선택", date: "2026.03.15", desc: "슬림 베젤 스윙 도어부터 3연동 슬라이딩 중문까지! 공간 활용도와 단열 성능을 고려한 중문 가이드입니다.", content: "중문은 미세먼지 차단과 에너지 효율 향상에 탁월합니다. 최근 부산 인테리어 추세는 개방감이 좋은 원슬라이딩 자동 중문이나 클래식한 비대칭 스윙 도어가 대세입니다." },
    { id: 48, title: "작은 주방 넓게 쓰기: 대면형 주방 레이아웃 설계", date: "2026.03.16", desc: "답답한 상부장을 없애고 아일랜드 식탁을 활용한 효율적인 부산 주방 인테리어 노하우를 소개합니다.", content: "대면형 주방은 요리하면서 거실의 가족과 소통할 수 있는 매력적인 구조입니다. 부족한 수납은 하부 서랍장과 키큰장을 활용하고, 아일랜드 식탁 아래에 가전기기를 매립하여 깔끔하게 정돈하세요." },
    { id: 49, title: "부산 상업공간 조명 인테리어: 손님을 부르는 조도 설계", date: "2026.03.17", desc: "카페, 옷가게, 식당 등 업종별로 다른 최적의 조명 활용법과 전력 소모를 줄이는 LED 시공 안내입니다.", content: "조명은 공간의 분위기를 90% 결정합니다. 부산 상가 리모델링 시 메인 조명보다는 스포트라이트와 간접 조명을 적절히 배치하여 상품이나 음식을 돋보이게 하는 연출이 중요합니다." },
    { id: 50, title: "실내건축공사업 면허 확인으로 인테리어 분쟁 예방하기", date: "2026.03.18", desc: "공사 중단, 하자 보수 거부 등 인테리어 갈등을 피하기 위한 KISCON 조회 및 계약서 작성 필수 체크리스트.", content: "모든 인테리어 사고의 시작은 '무면허 업체'와의 계약에서 비롯됩니다. 반드시 KISCON(건설산업지식정보시스템)에서 업체의 실내건축공사업 면허 보유 여부를 확인하고, 하자이행보증보험 발행이 가능한지 문서로 명시하세요." },
    { id: 51, title: "부산 아파트 욕실 인테리어: 젠다이 시공과 호텔식 세면대", date: "2026.03.19", desc: "수납 편리성을 높이는 젠다이 공사와 조명 거울을 활용한 고급스러운 호텔 무드 욕실 만들기 노하우입니다.", content: "욕실은 더 이상 단순한 세면 공간이 아닌 휴식의 장소입니다. 부산 리모델링 시 대형 600각 타일과 졸리컷 마감, 무광 수전 등을 선택하여 고급스러운 호텔식 욕실을 완성해 보세요." }
];

// Auth Logic
function checkAuth() {
    const path = window.location.pathname;
    const isAdminPage = path.includes('dashboard.html') || path.includes('editor.html');
    
    if (!isAdminPage) return;
    
    if (sessionStorage.getItem('is_admin') === 'true') return;
    
    const pw = prompt('관리자 보안 인증: 비밀번호를 입력하세요.');
    if (pw === '1') {
        sessionStorage.setItem('is_admin', 'true');
    } else {
        alert('인증에 실패했습니다. 메인 페이지로 이동합니다.');
        window.location.href = 'index.html';
    }
}

// 즉시 실행하여 페이지 렌더링 전 차단 시도
checkAuth();

// Analytics Logic
function trackVisit() {
    try {
        const today = new Date().toLocaleDateString();
        const stats = JSON.parse(localStorage.getItem('pbn_stats') || '{"views": {}, "referrers": {}}');
        stats.views[today] = (stats.views[today] || 0) + 1;
        const ref = document.referrer || 'Direct';
        const domain = ref.split('/')[2] || ref;
        stats.referrers[domain] = (stats.referrers[domain] || 0) + 1;
        localStorage.setItem('pbn_stats', JSON.stringify(stats));
    } catch(e) { console.error("Stats Error", e); }
}

if (!window.location.pathname.includes('dashboard.html') && !window.location.pathname.includes('editor.html')) {
    trackVisit();
}

// Data Handling
function getPosts() {
    const stored = localStorage.getItem('pbn_posts');
    let posts = stored ? JSON.parse(stored) : [];
    
    let isChanged = false;
    defaultPosts.forEach(dp => {
        if (!posts.find(p => p.id === dp.id)) {
            posts.push(dp);
            isChanged = true;
        }
    });
    
    if (isChanged) savePosts(posts);
    return posts.sort((a, b) => (b.id - a.id));
}

function savePosts(posts) {
    localStorage.setItem('pbn_posts', JSON.stringify(posts));
}

function updatePost(id, updatedData) {
    const posts = getPosts();
    const idx = posts.findIndex(p => p.id == id);
    if (idx !== -1) {
        posts[idx] = { ...posts[idx], ...updatedData };
        savePosts(posts);
        return true;
    }
    return false;
}

// UI Logic
function openModal(id) { 
    const m = document.getElementById(id); 
    if(m) m.style.display = "block"; 
}
function closeModal(id) { 
    const m = document.getElementById(id); 
    if(m) m.style.display = "none"; 
}

function showPostDetail(id) {
    const posts = getPosts();
    const post = posts.find(p => p.id == id);
    if(!post) return;
    const cont = document.getElementById('post-detail-content');
    if(cont) {
        cont.innerHTML = `
            <article>
                <h2 style="color: var(--primary-color); margin-bottom: 10px;">${post.title}</h2>
                <p style="font-size: 0.8rem; color: #999; margin-bottom: 20px;">작성일: ${post.date}</p>
                <div class="article-body" style="line-height: 1.8; color: #444; white-space: pre-wrap;">${post.content || post.desc}</div>
            </article>
        `;
        openModal('post-modal');
    }
}

function renderFeed(targetId) {
    const feed = document.getElementById(targetId);
    if(!feed) return;
    feed.innerHTML = '';
    getPosts().forEach(post => {
        const art = document.createElement('article');
        art.className = 'blog-feed-item';
        art.style.cursor = 'pointer';
        art.onclick = () => showPostDetail(post.id);
        art.innerHTML = `
            <header><h4>${post.title}</h4></header>
            <p>${post.desc}</p>
            <footer><span>${post.date}</span></footer>
        `;
        feed.appendChild(art);
    });
}
