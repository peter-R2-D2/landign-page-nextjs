import Image from 'next/image'
import img from './img.png'

export default function UserImg() {
  return (
    <Image src={img} alt="user img" width={208} height={208} />
  )
}
