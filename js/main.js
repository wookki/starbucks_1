const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
  }
  else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
  }
}, 300));

const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1
  })
});

  new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  loop: true,
  autoplay: true
});
  new Swiper('.promotion .swiper', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: { // 자동 재생 여부
      delay: 5000 // 5초마다 슬라이드 바뀜
    },
    loop: true, // 반복 재생 여부
    slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    pagination: { // 페이지 번호 사용 여부
      el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
      clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
      nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
    }
  })

  const promotionEl = document.querySelector('.promotion');
  const promotionToggleBtn = document.querySelector('.toggle-promotion');
  let isHidePromotion = false;

  promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion;
    if (isHidePromotion) {
      promotionEl.classList.add('hide')
    } else {
      promotionEl.classList.remove('hide')
    } 
  })

  function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).tofixed(2))
  }

  function random(min, max) {
    // `.toFixed()`를 통해 반환된 '문자 데이터'를,
    // `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }
  // 부유하는(떠 다니는) 요소를 만드는 함수
  function floatingObject(selector, delay, size) {
    gsap.to(
      selector, // 선택자
      random(1.5, 2.5), // 애니메이션 동작 시간
      {
        delay: random(0, delay), // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
        y: size, // `transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 설정.
        repeat: -1, // 몇 번 반복하는지를 설정, `-1`은 무한 반복.
        yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
        ease: Power1.easeInOut // Easing 함수 적용.
      }
    )
  }
  floatingObject('.floating1', 1, 15)
  floatingObject('.floating2', .5, 15)
  floatingObject('.floating3', 1.5, 20)