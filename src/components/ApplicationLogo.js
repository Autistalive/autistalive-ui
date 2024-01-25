import Image from "next/image"

const ApplicationLogo = props => (
    <Image src={"/logo.png"} width={500} height={500} {...props}/>
)

export default ApplicationLogo
