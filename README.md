>div tag vs ul tag 

보통 header부분에는 ul tag를 통하여 elements를 나열함

>가운데 정렬

position 미사용 시 margin auto로만 inner 가운데 정렬 가능  
position: absolute 사용 시 가로 or 세로 높이 설정 후 margin: auto 사용

>position: absolute, fixed

사용 시 display값이 block으로 변환됨
position: relative를 fixed로 부모요소 설정 가능
position 값이 absolute, fixed, relative 중 하나라도 부모요소로 작용한다면 그 기준에 맞게 위치가 설정됨

>img 태그 - 크기가 안맞춰질 때

기본적으로 inline 요소이므로 block 처리해줘야 외부 크기에 맞춰짐

>a 태그

a 태그 사용 시 inline 요소이므로 padding 혹은 margin을 사용하기위해
block 적용해야함

>인라인 태그

width, height 설정 불가능

>display:flex

flex 시 inline element인 a태그는  block element로 변경됨 