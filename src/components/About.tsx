"use client"
import { Icon } from "@iconify/react/dist/iconify.js"
import Image from "next/image"

const About = () => {
    return (
        <section className="relative w-full h-min-[30vh] zidx-4" id="about">
            <Image src="/svg/haikei-waves-2.svg" alt="Waves background" layout="fill" objectFit="cover" className="absolute top-0 left-0 w-full h-full z-0" />
            <div className="relative z-10 w-full md:-mt-12">
                <div className="relative text-gray-700 w-96 flex flex-col gap-8 bg-white p-8 text-center mx-auto py-24">
                    <h3 className="text-3xl font-bold mb-4">Sobre nós</h3>
                    <p>SolutivaTech é uma empresa focada em fornecer soluções inovadoras e abrangentes no campo da tecnologia da informação. </p>
                    <p>Com um compromisso com a excelência financeira e a entrega de resultados mensuráveis, SolutivaTech se destaca por oferecer serviços de desenvolvimento de software, automação, gerenciamento de servidores e consultoria em TI. </p>
                    <div className="mx-auto flex gap-x-5 mt-5">
                        <div className="about-icons">
                            <Icon icon="mdi:instagram" width={24} className="text-white" />
                        </div>
                        <div className="about-icons">
                            <Icon icon="bi:linkedin" width={18} className="text-white" />
                        </div>
                        <div className="about-icons">
                            <Icon icon="mage:whatsapp" width={24} className="text-white" />
                        </div>
                        <div className="about-icons">
                            <Icon icon="mdi:email" width={20} className="text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About