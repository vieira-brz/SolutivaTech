import Image from "next/image"

const About = () => {
    return (
        <div className="relative w-full h-min-[30vh]" id="zindex-4">
            <Image src="/svg/haikei-waves-2.svg" alt="Waves background" layout="fill" objectFit="cover" className="absolute top-0 left-0 w-full h-full z-0" />
            <div className="relative z-10 w-full -mt-16">
                <div className="text-gray-700 mx-auto w-96 flex flex-col gap-4 bg-white p-8 text-center mt-[10%] py-16">
                    <h3 className="text-3xl font-bold mb-3">Sobre nós</h3>
                    <p>SolutivaTech é uma empresa focada em fornecer soluções inovadoras e abrangentes no campo da tecnologia da informação. </p>
                    <p>Com um compromisso com a excelência financeira e a entrega de resultados mensuráveis, SolutivaTech se destaca por oferecer serviços de desenvolvimento de software, automação, gerenciamento de servidores e consultoria em TI. </p>
                </div>
            </div>
        </div>
    )
}

export default About