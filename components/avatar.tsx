type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div>
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="text-base font-bold">{name}</div>
      <div>~~한 개발자입니다.</div>
    </div>
  )
}

export default Avatar
