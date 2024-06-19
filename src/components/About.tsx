import { Icon } from "@iconify/react/dist/iconify.js"
import Image from "next/image"

const About = () => {
    return (
        <div className="relative w-full h-min-[30vh] zidx-4">
            <Image src="/svg/haikei-waves-2.svg" alt="Waves background" layout="fill" objectFit="cover" className="absolute top-0 left-0 w-full h-full z-0" />
            <div className="relative z-10 w-full md:-mt-12">
                <div className="relative text-gray-700 mx-auto w-96 flex flex-col gap-8 bg-white p-8 text-center md:mt-[10%] md:pb-40 pb-32">
                    <h3 className="text-3xl font-bold mb-2">Sobre nós</h3>
                    <p>SolutivaTech é uma empresa focada em fornecer soluções inovadoras e abrangentes no campo da tecnologia da informação. </p>
                    <p>Com um compromisso com a excelência financeira e a entrega de resultados mensuráveis, SolutivaTech se destaca por oferecer serviços de desenvolvimento de software, automação, gerenciamento de servidores e consultoria em TI. </p>
                    <div className="absolute left-[50%] -translate-x-[50%] bottom-16 flex gap-x-5">
                        <div className="w-10 h-10 border-primary shadow-md border p-2 rounded-full cursor-pointer bg-gray-400 hover:bg-gray-700 hover:scale-110 transition-all flex items-center justify-center">
                            <Icon icon="mdi:instagram" width={24} className="text-white" />
                        </div>
                        <div className="w-10 h-10 border-primary shadow-md border p-2 rounded-full cursor-pointer bg-gray-400 hover:bg-gray-700 hover:scale-110 transition-all flex items-center justify-center">
                            <Icon icon="bi:linkedin" width={18} className="text-white" />
                        </div>
                        <div className="w-10 h-10 border-primary shadow-md border p-2 rounded-full cursor-pointer bg-gray-400 hover:bg-gray-700 hover:scale-110 transition-all flex items-center justify-center">
                            <Icon icon="mage:whatsapp" width={24} className="text-white" />
                        </div>
                        <div className="w-10 h-10 border-primary shadow-md border p-2 rounded-full cursor-pointer bg-gray-400 hover:bg-gray-700 hover:scale-110 transition-all flex items-center justify-center">
                            <Icon icon="mdi:email" width={20} className="text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About