import { observable, observe } from './observer.js';

// 클래스 기반의 컴포넌트
export class Component {
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.setup();
  }

  // 초기 상태값 정의
  initState() {
    return {};
  }

  // 컴포넌트 초기에 할 일 정의
  async setup() {
    // state를 Observable 하게 만든다
    this.state = observable(this.props?.state ?? (await this.initState()));

    // observe 내부 함수에 state변경 반복적으로 할일 정의
    // state가 변할때마다 1) 렌더, 2) 이벤트 바인딩 진행
    observe(() => {
      this.render();
      this.setDOMs();
      this.setEvent();
      this.mounted();
    });
  }

  // 렌더링 담당
  render() {
    if (this.$target) {
      this.$target.innerHTML = this.template();
    }
  }

  // 템플릿 담당
  template() {}

  // template 내 이벤트 연결할 자식 돔요소 등록
  setDOMs() {}

  // 이벤트 바인딩
  setEvent() {}

  // 렌더링 이후 할일 정의
  mounted() {}
}
