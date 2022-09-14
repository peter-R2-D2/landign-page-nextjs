import UserImg from "../assets/user/UserImg"

export default function User() {
  return (
    <div className='mt-5 d-flex flex-column align-items-center justify-content-center' style={{height: '733px'}}>
      <UserImg />
      <div>
        <h1 className="text-center">Betsymar Sandoval</h1>
        <p className="text-yellow text-center fs-4">Ilustrator - Bird Enthusiast</p>
        <p className="text-center px-5 pt-3 lh-lg text-font-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat ante odio, ac posuere justo elementum id. Quisque porta neque sit amet sem tempus sodales. Maecenas at placerat arcu, in pulvinar sem. Pellentesque eget rhoncus elit. Cras aliquam velit vitae mi iaculis, convallis fermentum nunc facilisis. Pellentesque sit amet libero eu dolor vestibulum imperdiet eu eu nunc. Etiam convallis nulla vel pharetra dapibus.
        </p>
      </div>
    </div>
  )
}
