import Image from "next/image"

const Services = () => {
    return (
        <section className="relative w-full h-screen zidx-4" id="services">
            
            <Image src="/svg/2rock.svg" alt="Waves background" layout="fill" objectFit="cover" className="absolute top-0 left-0 w-full h-full z-0" />

            <div className="relative z-10 w-full">
                {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quia, omnis exercitationem harum debitis itaque amet optio reiciendis numquam cupiditate rem autem sed, expedita pariatur aut dolor eligendi inventore. Dolorem! */}
            </div>            
        </section>
    )
}

export default Services
