export default function confess() {
  const h1Style = {
    fontSize: '30px', // make h1 text larger
    fontWeight: 'bold', // make h1 text bold
  }
  const linkStyle = {
    display: 'inline-block',
    background: 'Linear-gradient(245.59deg, #aa99f5 0%, #987dfa 28.53%, #384ef1 75.52%);',
    padding: '12px 30px',
    lineHeight: '1.4',
    fontSize: '14px',
    fontWeight: '500',
    borderRadius: '20px',
    textTransform: 'uppercase',
    transition: 'all .55s ease',
    marginTop: '25px',
  }
  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '20px',
    height: '300px',
    textAlign: 'justify',
    textJustify: 'inter-word',
  }
  return (
    <>
      <div style={divStyle}>
        <div>
          <h1 style={h1Style}>Confession </h1>
          <p>
            Gửi confession để chia sẻ câu chuyện của bạn với mọi người tại đây. Chúng mình tiếp nhận
            các câu chuyện liên quan đế hành trình tìm thấy chính bản thân mình, come-out, tỏ
            tình-thú tội, tìm “đồng đội”, hoặc đơn giản là cảm giác cần được lắng nghe
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSczR-pDxjMN-pWGNH2Z6exktRujbt7bSPJbEEQqgm5znjyETw/viewform"
            style={linkStyle}
          >
            Gửi confession
          </a>
        </div>

        <div>
          <h1 style={h1Style}>Giải đáp thắc mắc cùng chuyên gia </h1>
          <p>
            Đây là nơi bạn có thể đặt những câu hỏi mà bạn thắc mắc liên quan đến giới tính, xu
            hướng tính dục, bản dạng giới, thể hiện giới, tất cả những chủ đề liên quan đến giới
            tính, giáo dục giới tính và cộng đồng LGBTQIA+ Chúng mình sẽ gỡ rối những thắc mắc đấy
            giúp bạn
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeKkBU31zV62t0WPXYa_YhExoF3acNpYlxIc0iEWxe2BXayRw/viewform"
            style={linkStyle}
          >
            Gửi câu hỏi
          </a>
        </div>
      </div>
    </>
  )
}
