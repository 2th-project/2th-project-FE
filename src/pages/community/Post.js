import styles from "./Post.module.css";

function Post(props) {
  return (
    <div>
      <p className={styles.category}>자유게시판 &gt; 게시글</p>
      <div>
        <div>제목</div>
        <div>잠실역 환승구간 에어컨 추가 설치건</div>
        <div>
          <div>작성자</div>
          <span>|</span>
          <div>게시날짜</div>
          <span>|</span>
          <div>조회수</div>
        </div>
      </div>
      <div>
        <div>내용</div>
        <div>
          잠실역 8호선-2호선 환승통로 냉방 관리에 관심을 기울여 주길 요청.
        </div>
      </div>
      <button>수정하기</button>
      <button>삭제하기</button>
      <div>
        <label>댓글</label>
        <input placeholder="댓글을 입력하세요." />
        <button>작성하기</button>
      </div>
    </div>
  );
}

export default Post;
